using RedHome.Dtos;
using RedHome.Repositories;

namespace RedHome.Services
{
    public class ReviewService
    {
        private readonly ReviewRepository _reviewRepository;

        public ReviewService(ReviewRepository reviewRepository)
        {
            _reviewRepository = reviewRepository;
        }

        public IEnumerable<ReviewDto> GetReviewUser(string userId)
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
