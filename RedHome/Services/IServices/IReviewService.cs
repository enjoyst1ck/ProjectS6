using RedHome.Database.Models;
using RedHome.Dtos;

namespace RedHome.Services.IServices
{
    public interface IReviewService
    {
        public Task<ReviewsUserDto> GetUserReview(string userId);
        public Task<ReviewsUserDto> InsertReview(ReviewDto reviewDto);
        public Task<ReviewsUserDto> EditReview(ReviewDto reviewDto);
        public Task<ReviewsUserDto> DeleteReview(int id);
    }
}
