using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using RedHome.Database;
using RedHome.Dtos;
using RedHome.Helpers;
using RedHome.Services.IServices;

namespace RedHome.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ReviewController : ControllerBase
    {
        private readonly IReviewService _reviewService;
        private readonly UserManager<IdentityUser> _userManager;

        public ReviewController(IReviewService reviewService, UserManager<IdentityUser> userManager)
        {
            _reviewService = reviewService;
            _userManager = userManager;
        }

        [HttpGet]
        public ActionResult<IEnumerable<ReviewDto>> GetUserReview(string userId)
        {
            try
            {
                return Ok(_reviewService.GetUserReview(userId));
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [Authorize]
        [HttpPost("add")]
        public async Task<ActionResult<IEnumerable<ReviewDto>>> InsertReview(ReviewDto reviewDto)
        {
            try
            {
                var loggedUser = await _userManager.FindByEmailFromPrincipal(HttpContext.User);

                if (loggedUser == null)
                {
                    return NotFound(new ApiResponse(404));
                }

                reviewDto.UserIdBy = loggedUser.Id;
                return Ok(_reviewService.InsertReview(reviewDto));
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [Authorize]
        [HttpPut]
        public async Task<ActionResult<IEnumerable<ReviewDto>>> EditReview(ReviewDto reviewDto)
        {
            try
            {
                var loggedUser = await _userManager.FindByEmailFromPrincipal(HttpContext.User);

                if (reviewDto.UserIdBy != loggedUser.Id)
                {
                    return Unauthorized(new ApiResponse(401));
                }

                return Ok(_reviewService.EditReview(reviewDto));
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [Authorize]
        [HttpDelete]
        public ActionResult<IEnumerable<ReviewDto>> DeleteReview(int id)
        {
            try
            {
                return Ok(_reviewService.DeleteReview(id));
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}