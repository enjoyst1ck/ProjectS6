using RedHome.Helpers;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using RedHome.Database;
using RedHome.Repositories;
using RedHome.Repositories.IRepositories;
using RedHome.Services;
using RedHome.Services.IServices;

namespace RedHome
{
    public class Program
    {
        public static async Task Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            ConfigureServices(builder.Services, builder.Configuration);

            builder.Services.AddIdentityServices(builder.Configuration);

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseCors("CorsPolicy");
            
            app.UseAuthentication();
            app.UseAuthorization();

            app.MapControllers();

            using var scope = app.Services.CreateScope();
            var services = scope.ServiceProvider;
            var context = services.GetRequiredService<ApiDbContext>();
            var userManager = services.GetRequiredService<UserManager<IdentityUser>>();
            var logger = services.GetRequiredService<ILogger<Program>>();
            try
            {
                //await context.Database.MigrateAsync();

                //var dbContextSeed = new DbContextSeed(context, userManager);
                //await dbContextSeed.SeedAsync();
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "Migration error");
            }

            app.Run();
        }

        public static void ConfigureServices(IServiceCollection services, IConfiguration configuration)
        {
            var serverVersion = new MySqlServerVersion(new Version(8, 0, 36));

            services.AddDbContext<ApiDbContext>(options => 
                options.UseMySql(configuration.GetConnectionString("DefaultConnection"), serverVersion)
            );
            
            services.AddScoped(typeof(IGenericRepository<>), typeof(GenericRepository<>));

            services.AddScoped<IReviewRepository, ReviewRepository>();
            services.AddScoped<IReviewService, ReviewService>();

            services.AddScoped<IAdvertisementRepository, AdvertisementRepository>();
            services.AddScoped<IAdvertisementService, AdvertisementService>();

            services.AddScoped<IAttachmentRepository, AttachmentRepository>();
            services.AddScoped<IAttachmentService, AttachmentService>();

            services.AddScoped<ITokenService, TokenService>();

            services.AddCors(o =>
            {
                o.AddPolicy("CorsPolicy", p =>
                {
                    p.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:5173");
                });
            });
        }
    }
}
