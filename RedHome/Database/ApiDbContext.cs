using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using RedHome.Database.Models;

namespace RedHome.Database
{
    public class ApiDbContext(DbContextOptions<ApiDbContext> options) : IdentityDbContext(options)
    {
        public DbSet<Review> Reviews { get; set; }
        public DbSet<Attachment> Attachments { get; set; }
        public DbSet<Advertisement> Advertisements { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Review>().HasKey(r => r.Id);
            modelBuilder.Entity<Attachment>().HasKey(a => a.Id);
            modelBuilder.Entity<Advertisement>().HasKey(a => a.Id);

            modelBuilder.Entity<Advertisement>()
               .Property(p => p.Price)
               .HasPrecision(18, 2);

            modelBuilder.Entity<Advertisement>()
                .Property(p => p.Deposite)
                .HasPrecision(18, 2);

            modelBuilder.Entity<Advertisement>()
                .Property(p => p.Area)
                .HasPrecision(18, 2);

            base.OnModelCreating(modelBuilder);
        }
    }
}
