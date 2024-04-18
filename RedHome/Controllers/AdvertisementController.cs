using Microsoft.AspNetCore.Mvc;
using RedHome.Dtos;
using RedHome.Services.IServices;

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
        public IEnumerable<AdvertisementDto> GetAll()
        {
            return _advertisementService.GetAll();
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
    }
}
