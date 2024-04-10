using RedHome.Dtos;
using RedHome.Repositories.IRepositories;
using RedHome.Services.IServices;

namespace RedHome.Services
{
    public class ReviewService : IReviewService
    {
        private readonly IReviewRepository _reviewRepository;

        public ReviewService(IReviewRepository reviewRepository)
        {
            _reviewRepository = reviewRepository;
        }

        public IEnumerable<ReviewDto> GetUserReview(string userId)
        {
            if (userId is null)
            {
                throw new Exception("UserId not found");
            }

            var reviews = _reviewRepository.GetReviewsSendToUser(userId);

            return reviews.Select(r => new ReviewDto
            {
                Id = r.Id,
                UserIdBy = r.UserIdBy,
                UserIdTo = r.UserIdTo,
                UserEmailBy = r.UserBy.Email ?? string.Empty,
                UserEmailTo = r.UserTo.Email ?? string.Empty,
                Rate = r.Rate,
                Comment = r.Comment
            }).ToList();
        }
    }
}
