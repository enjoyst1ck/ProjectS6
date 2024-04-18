using RedHome.Dtos;

namespace RedHome.Services.IServices
{
    public interface IAdvertisementService
    {
        public IEnumerable<AdvertisementDto> GetAll();
        public AdvertisementDto GetById(int id);
        public AdvertisementDto Insert(AdvertisementDto advertisementDto);
        public AdvertisementDto Edit(AdvertisementDto advertisementDto);
        public IEnumerable<AdvertisementDto> Delete(int id);
    }
}
