using Microsoft.AspNetCore.Mvc;
using RedHome.Dtos;
using RedHome.Helpers;
using RedHome.Services.IServices;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace RedHome.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class AdvertisementController : ControllerBase
    {
        private readonly IAdvertisementService _advertisementService;

        public AdvertisementController(IAdvertisementService advertisementService)
        {
            _advertisementService = advertisementService;
        }

        [HttpGet]
        public Pagination<AdvertisementDto> GetAll([FromQuery]AdvertisementParameters parameters)
        {

            var specification = new AdvertisementSpecification(parameters);

            var specificationForCount = new AdvertisementCountSpecification(parameters);

            var totalItems = _advertisementService.Count(specificationForCount);

            var advertisementDto = _advertisementService.List(specification);

            return new Pagination<AdvertisementDto>(parameters.PageIndex, parameters.PageSize, totalItems, advertisementDto);
        }

        [HttpGet("{id}")]
        public AdvertisementDto GetById(int id)
        {
            return _advertisementService.GetById(id);
        }

        [HttpPost]
        public AdvertisementDto Insert(AdvertisementDto advertisementDto)
        {
            return _advertisementService.Insert(advertisementDto);
        }

        [HttpPut]
        public AdvertisementDto Edit(AdvertisementDto advertisementDto)
        {
            return _advertisementService.Edit(advertisementDto);
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
    }
}
