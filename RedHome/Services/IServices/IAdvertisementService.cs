using RedHome.Database.Models;
using RedHome.Dtos;
using RedHome.Helpers;

namespace RedHome.Services.IServices
{
    public interface IAdvertisementService
    {
        public IEnumerable<AdvertisementDto> GetAll();
        public AdvertisementDto GetById(int id);
        public AdvertisementDto Insert(AdvertisementDto advertisementDto);
        public AdvertisementDto Edit(AdvertisementDto advertisementDto);
        public IEnumerable<AdvertisementDto> Delete(int id);
        public int Count(AdvertisementCountSpecification specification);
        public IEnumerable<AdvertisementDto> List(AdvertisementSpecification specification);
        public IEnumerable<string> GetUniqueCities();
        public IEnumerable<string> GetUniqueDevelopmentType();
    }
}
