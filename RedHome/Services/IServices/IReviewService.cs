using RedHome.Database.Models;
using RedHome.Dtos;

namespace RedHome.Services.IServices
{
    public interface IReviewService
    {
        public IEnumerable<ReviewDto> GetUserReview(string userId);
    }
}
