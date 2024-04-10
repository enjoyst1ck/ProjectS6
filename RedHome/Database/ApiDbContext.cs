using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using RedHome.Database.Models;

namespace RedHome.Database
{
    public class ApiDbContext(DbContextOptions<ApiDbContext> options) : IdentityDbContext(options)
    {
        public DbSet<Review> Reviews;
        public DbSet<Attachment> Attachments;
        public DbSet<Advertisement> Advertisements;
        
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Review>().HasKey(r => r.Id);
            modelBuilder.Entity<Attachment>().HasKey(a => a.Id);
            modelBuilder.Entity<Advertisement>().HasKey(a => a.Id);


            base.OnModelCreating(modelBuilder);
        }
    }
}
