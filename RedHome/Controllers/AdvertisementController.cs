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
        public async Task<Pagination<AdvertisementDto>> GetAll([FromQuery] AdvertisementParameters parameters)
        {

            var specification = new AdvertisementSpecification(parameters);

            var specificationForCount = new AdvertisementCountSpecification(parameters);

            var totalItems = _advertisementService.Count(specificationForCount);

            var loggedUser = await _userManager.FindByEmailFromPrincipal(HttpContext.User);

            var advertisementDto = _advertisementService.List(specification, loggedUser.Id);

            return new Pagination<AdvertisementDto>(parameters.PageIndex, parameters.PageSize, totalItems, advertisementDto);
        }

        [HttpGet("{id}")]
        public async Task<AdvertisementDto> GetById(int id)
        {
            var loggedUser = await _userManager.FindByEmailFromPrincipal(HttpContext.User);

            return _advertisementService.GetById(id, loggedUser.Id);
        }

        [Authorize]
        [HttpPost("insert")]
        public async Task<AdvertisementDto> Insert(AdvertisementDto advertisementDto)
        {
            var loggedUser = await _userManager.FindByEmailFromPrincipal(HttpContext.User);
            advertisementDto.UserId = loggedUser.Id;

            return _advertisementService.Insert(advertisementDto);
        }

        [Authorize]
        [HttpPut("edit")]
        public async Task<AdvertisementDto> Edit(AdvertisementDto advertisementDto)
        {
            var loggedUser = await _userManager.FindByEmailFromPrincipal(HttpContext.User);

            return _advertisementService.Edit(advertisementDto, loggedUser.Id);
        }

        [HttpDelete]
        public IEnumerable<AdvertisementDto> Delete(int id)
        {
            return _advertisementService.Delete(id);
        }

        [HttpGet("city")]
        public IEnumerable<string> GetUniqueCities()
        {
            return _advertisementService.GetUniqueCities();
        }

        [HttpGet("developmentType")]
        public IEnumerable<string> GetUniqueDevelopmentType()
        {
            return _advertisementService.GetUniqueDevelopmentType();
        }

        [Authorize]
        [HttpPost("AddToFavorite")]
        public async Task<bool> AddToFavorite(int advertisementId)
        {
            var loggedUser = await _userManager.FindByEmailFromPrincipal(HttpContext.User);

            return _advertisementService.AddToFavorite(advertisementId, loggedUser.Id);
        }

        [Authorize]
        [HttpGet("GetAllFavoriteAdvertisements")]
        public async Task<IEnumerable<FavoriteAdvertisementDto>> GetAllFavoriteAdvertisements()
        {
            var loggedUser = await _userManager.FindByEmailFromPrincipal(HttpContext.User);

            return _advertisementService.GetAllFavoriteAdvertisements(loggedUser.Id);
        }
    }
}