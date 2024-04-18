using Microsoft.AspNetCore.Mvc;
using RedHome.Dtos;
using RedHome.Services.IServices;

namespace RedHome.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ReviewController : ControllerBase
    {
        private readonly IReviewService _reviewService;

        public ReviewController(IReviewService reviewService)
        {
            _reviewService = reviewService;
        }

        [HttpGet]
        public IEnumerable<ReviewDto> GetUserReview(string userId)
        {
            return _reviewService.GetUserReview(userId);
        }

        [HttpPost]
        public IEnumerable<ReviewDto> InsertReview(ReviewDto reviewDto)
        {
            return _reviewService.InsertReview(reviewDto);
        }

        [HttpPut]
        public IEnumerable<ReviewDto> EditReview(ReviewDto reviewDto)
        {
            return _reviewService.EditReview(reviewDto);
        }

        [HttpDelete]
        public IEnumerable<ReviewDto> DeleteReview(int id)
        {
            return _reviewService.DeleteReview(id);
        }
    }
}
