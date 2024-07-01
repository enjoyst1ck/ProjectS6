using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using RedHome.Database.Models;
using RedHome.Dtos;
using RedHome.Repositories.IRepositories;
using RedHome.Services.IServices;

namespace RedHome.Services
{
    public class ReviewService : IReviewService
    {
        private readonly IReviewRepository _reviewRepository;
        private readonly UserManager<IdentityUser> _userManager;

        public ReviewService(IReviewRepository reviewRepository, UserManager<IdentityUser> userManager)
        {
            _reviewRepository = reviewRepository;
            _userManager = userManager;
        }

        public async Task<ReviewsUserDto> GetUserReview(string userId)
        {
            if (userId is null)
            {
                throw new Exception("UserId is null");
            }

            var reviews = _reviewRepository.GetReviewsSendToUser(userId);
            var reviewsDto = reviews.Select(r => new ReviewDto
            {
                Id = r.Id,
                UserIdBy = r.UserIdBy,
                UserIdTo = r.UserIdTo,
                UserEmailBy = r.UserBy.Email ?? string.Empty,
                UserEmailTo = r.UserTo.Email ?? string.Empty,
                Rate = r.Rate,
                Comment = r.Comment
            }).ToList();

            var user = await _userManager.FindByIdAsync(userId);

            var userDto = new UserDto
            {
                UserId = user.Id,
                Username = user.UserName,
                Email = user.Email,
                PhoneNumber = user.PhoneNumber
            };

            return new ReviewsUserDto
            {
                UserDto = userDto,
                Reviews = reviewsDto
            };
        }

        [Authorize]
        [HttpPost("add")]
        public Task<ReviewsUserDto> InsertReview(ReviewDto reviewDto)
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

        public Task<ReviewsUserDto> EditReview(ReviewDto reviewDto)
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

        public Task<ReviewsUserDto> DeleteReview(int id)
        {
            _reviewRepository.Delete(id);

            var reviews = GetUserReview("");
            //tutaj pobrac id usera!

            return reviews;
        }
    }
}
