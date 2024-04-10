using RedHome.Database.Models;

namespace RedHome.Repositories.IRepositories
{
    public interface IReviewRepository
    {
        public IEnumerable<Review> GetReviewsSendToUser(string userId);
        public IEnumerable<Review> GetReviewsSendByUser(string userId);
        public void Insert(Review review);
        public void Edit(Review review);
        public void Delete(int reviewId);
    }
}
