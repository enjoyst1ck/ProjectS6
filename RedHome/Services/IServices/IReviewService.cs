using RedHome.Database.Models;
using RedHome.Dtos;

namespace RedHome.Services.IServices
{
    public interface IReviewService
    {
        public IEnumerable<ReviewDto> GetUserReview(string userId);
        public IEnumerable<ReviewDto> InsertReview(ReviewDto reviewDto);
        public IEnumerable<ReviewDto> EditReview(ReviewDto reviewDto);
        public IEnumerable<ReviewDto> DeleteReview(int id);
    }
}
