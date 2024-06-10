using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using RedHome.Database;
using RedHome.Dtos;
using RedHome.Helpers;
using RedHome.Services.IServices;

namespace RedHome.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class AdvertisementController : ControllerBase
    {
        private readonly IAdvertisementService _advertisementService;
        private readonly UserManager<IdentityUser> _userManager;

        public AdvertisementController(IAdvertisementService advertisementService, UserManager<IdentityUser> userManager)
        {
            _advertisementService = advertisementService;
            _userManager = userManager;
        }

        [HttpGet]
        public async Task<ActionResult<Pagination<AdvertisementDto>>> GetAll([FromQuery] AdvertisementParameters parameters)
        {
            try
            {
                var specification = new AdvertisementSpecification(parameters);

                var specificationForCount = new AdvertisementCountSpecification(parameters);

                var totalItems = _advertisementService.Count(specificationForCount);

                var loggedUser = await _userManager.FindByEmailFromPrincipal(HttpContext.User);

                if (loggedUser == null)
                {
                    var advertisementDto = _advertisementService.List(specification, null);
                    return new Pagination<AdvertisementDto>(parameters.PageIndex, parameters.PageSize, totalItems, advertisementDto);
                }
                else
                {
                    var advertisementDto = _advertisementService.List(specification, loggedUser.Id);
                    return new Pagination<AdvertisementDto>(parameters.PageIndex, parameters.PageSize, totalItems, advertisementDto);
                }

            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet("getByUser/{userId}")]
        public IEnumerable<AdvertisementDto> GetByUserId(string userId)
        {
            return _advertisementService.GetByUserId(userId);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<AdvertisementDto>> GetById(int id)
        {
            try
            {
                var loggedUser = await _userManager.FindByEmailFromPrincipal(HttpContext.User);

                if (loggedUser == null)
                {
                    return _advertisementService.GetById(id, null);
                }
                else
                {
                    return _advertisementService.GetById(id, loggedUser.Id);
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [Authorize]
        [HttpPost("insert")]
        public async Task<ActionResult<AdvertisementDto>> Insert(AdvertisementDto advertisementDto)
        {
            try
            {
                var loggedUser = await _userManager.FindByEmailFromPrincipal(HttpContext.User);

                if (loggedUser == null)
                {
                    return NotFound(new ApiResponse(404));
                }

                advertisementDto.UserId = loggedUser.Id;
                return _advertisementService.Insert(advertisementDto);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [Authorize]
        [HttpPut("edit")]
        public async Task<ActionResult<AdvertisementDto>> Edit(AdvertisementDto advertisementDto)
        {
            try
            {
                var loggedUser = await _userManager.FindByEmailFromPrincipal(HttpContext.User);

                if (loggedUser == null)
                {
                    return NotFound(new ApiResponse(404));
                }

                return _advertisementService.Edit(advertisementDto, loggedUser.Id);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [Authorize]
        [HttpDelete]
        public async Task<ActionResult<IEnumerable<AdvertisementDto>>> Delete(int id)
        {
            try
            {
                var loggedUser = await _userManager.FindByEmailFromPrincipal(HttpContext.User);

                if (loggedUser == null)
                {
                    return NotFound(new ApiResponse(404));
                }

                return Ok(_advertisementService.Delete(id));
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet("city")]
        public ActionResult<IEnumerable<string>> GetUniqueCities()
        {
            try
            {
                return Ok(_advertisementService.GetUniqueCities());
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet("developmentType")]
        public ActionResult<IEnumerable<string>> GetUniqueDevelopmentType()
        {
            try
            {
                return Ok(_advertisementService.GetUniqueDevelopmentType());
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [Authorize]
        [HttpPost("addToFavorite")]
        public async Task<ActionResult<bool>> AddToFavorite(int advertisementId)
        {
            try
            {
                var loggedUser = await _userManager.FindByEmailFromPrincipal(HttpContext.User);

                if (loggedUser == null)
                {
                    return NotFound(new ApiResponse(404));
                }

                return _advertisementService.AddToFavorite(advertisementId, loggedUser.Id);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [Authorize]
        [HttpGet("getAllFavoriteAdvertisements")]
        public async Task<ActionResult<IEnumerable<FavoriteAdvertisementDto>>> GetAllFavoriteAdvertisements()
        {
            try
            {
                var loggedUser = await _userManager.FindByEmailFromPrincipal(HttpContext.User);

                if (loggedUser == null)
                {
                    return NotFound(new ApiResponse(404));
                }

                return Ok(_advertisementService.GetAllFavoriteAdvertisements(loggedUser.Id));
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}