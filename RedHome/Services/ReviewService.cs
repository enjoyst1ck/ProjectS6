using RedHome.Database.Models;
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
                throw new Exception("UserId is null");
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

        public IEnumerable<ReviewDto> InsertReview(ReviewDto reviewDto)
        {
            var review = new Review
            {
                Id = reviewDto.Id,
                UserIdBy = reviewDto.UserIdBy,
                UserIdTo = reviewDto.UserIdTo,
                Rate = reviewDto.Rate,
                Comment = reviewDto.Comment
            };

            _reviewRepository.Insert(review);

            var reviews = GetUserReview(reviewDto.UserIdTo);

            return reviews;
        }

        public IEnumerable<ReviewDto> EditReview(ReviewDto reviewDto)
        {
            var review = new Review
            {
                Id = reviewDto.Id,
                UserIdBy = reviewDto.UserIdBy,
                UserIdTo = reviewDto.UserIdTo,
                Rate = reviewDto.Rate,
                Comment = reviewDto.Comment
            };

            _reviewRepository.Edit(review);

            var reviews = GetUserReview(reviewDto.UserIdTo);

            return reviews;
        }

        public IEnumerable<ReviewDto> DeleteReview(int id)
        {
            _reviewRepository.Delete(id);

            var reviews = GetUserReview("");
            //tutaj pobrac id usera!

            return reviews;
        }
    }
}
