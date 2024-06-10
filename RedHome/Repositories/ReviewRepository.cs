using Microsoft.EntityFrameworkCore;
using RedHome.Database;
using RedHome.Database.Models;
using RedHome.Repositories.IRepositories;

namespace RedHome.Repositories
{
    public class ReviewRepository : GenericRepository<Review>, IReviewRepository
    {
        private readonly ApiDbContext _context;

        public ReviewRepository(ApiDbContext context) : base(context)
        {
            _context = context;
        }

        public IEnumerable<Review> GetReviewsSendToUser(string userId)
        {
            bool isUserExists = _context.Users.Any(u => u.Id == userId);
            
            if (!isUserExists)
            {
                return new List<Review>();
            }

            var reviews = _context.Reviews
                .Include(b => b.UserBy)
                .Include(t => t.UserTo)
                .Where(w => w.UserIdTo == userId)
                .ToList();

            return reviews;
        }

        public IEnumerable<Review> GetReviewsSendByUser(string userId)
        {
            return _context.Reviews
                .Include(b => b.UserBy)
                .Include(t => t.UserTo)
                .Where(w => w.UserIdBy == userId)
                .ToList();
        }
    }
}
