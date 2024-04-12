using RedHome.Dtos;

namespace RedHome.Services.IServices
{
    public interface IAdvertisementService
    {
        public IEnumerable<AdvertisementDto> GetAll();
    }
}
