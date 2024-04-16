using Microsoft.AspNetCore.Identity;
using RedHome.Database.Models;
using RedHome.Dtos;
using System.Text.Json;

namespace RedHome.Database
{
    public class DbContextSeed
    {
        private readonly ApiDbContext _context;
        private readonly UserManager<IdentityUser> _userManager;

        public DbContextSeed(ApiDbContext context, UserManager<IdentityUser> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        public async Task SeedAsync()
        {
            if (!_context.Users.Any())
            {
                var usersData = File.ReadAllText("../Redhome/Database/SeedData/Users.json");
                var users = JsonSerializer.Deserialize<List<RegisterDto>>(usersData);
                foreach (var user in users)
                {
                    var identityUser = new IdentityUser
                    {
                        Email = user.Email,
                        UserName = user.Email
                    };

                    await _userManager.CreateAsync(identityUser, user.Password);
                }
            }

            if (_context.Reviews != null && !_context.Reviews.Any())
            {
                var reviewsData = File.ReadAllText("../Redhome/Database/SeedData/Reviews.json");
                var reviews = JsonSerializer.Deserialize<List<Review>>(reviewsData);

                var users = _context.Users.ToList();
                var userAmount = users.Count();

                if (userAmount > 1)
                {
                    Random random = new Random();

                    foreach (var review in reviews)
                    {
                        int randomIndex = random.Next(users.Count() - 1);
                        var userBy = users[randomIndex];
                        int randomIndex2 = -2;
                        do
                        {
                            randomIndex2 = random.Next(users.Count() - 1);
                        } while (randomIndex2 == randomIndex);
                        var userTo = users[randomIndex2];


                        review.UserBy = userBy;
                        review.UserTo = userTo;
                    }

                    _context.AddRange(reviews);
                }
            }

            if (!_context.Advertisements.Any())
            {
                var adverisementsData = File.ReadAllText("../Redhome/Database/SeedData/Advertisements.json");
                var adverisements = JsonSerializer.Deserialize<List<Advertisement>>(adverisementsData);

                var users = _context.Users.ToList();
                var userAmount = users.Count();

                if (userAmount > 1)
                {
                    Random random = new Random();

                    foreach (var adverisement in adverisements)
                    {
                        int randomIndex = random.Next(users.Count() - 1);
                        var user = users[randomIndex];

                        adverisement.User = user;
                    }

                    _context.AddRange(adverisements);
                }
            }

            if (!_context.Attachments.Any())
            {
                var attachmentsData = File.ReadAllText("../Redhome/Database/SeedData/Attachments.json");
                var attachments = JsonSerializer.Deserialize<List<Attachment>>(attachmentsData);

                foreach (var attachment in attachments)
                {
                    Random random = new Random();
                    int randomIndex = random.Next(1, 4);
                    byte[] imageBytes = File.ReadAllBytes("../Redhome/Database/SeedData/PhotoAttachments/" + "photo" + randomIndex.ToString() + ".jpg");
                    attachment.Image = imageBytes;
                }

                _context.AddRange(attachments);
            }

            if (_context.ChangeTracker.HasChanges())
            {
                await _context.SaveChangesAsync();
            }
        }
    }
}
