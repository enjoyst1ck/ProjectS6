
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
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            ConfigureServices(builder.Services, builder.Configuration);

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }

        public static void ConfigureServices(IServiceCollection services, IConfiguration configuration)
        {
            var serverVersion = new MySqlServerVersion(new Version(8, 0, 36));

            services.AddDbContext<ApiDbContext>(options => 
                options.UseMySql(configuration.GetConnectionString("DefaultConnection"), serverVersion)
            );

            services.AddScoped<IReviewRepository, ReviewRepository>();
            services.AddScoped<IReviewService, ReviewService>();

            services.AddScoped<IAdvertisementRepository, AdvertisementRepository>();
            services.AddScoped<IAdvertisementService, AdvertisementService>();

            services.AddScoped<IAttachmentRepository, AttachmentRepository>();
            services.AddScoped<IAttachmentService, AttachmentService>();        
        }
    }
}
