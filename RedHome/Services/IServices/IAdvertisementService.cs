using RedHome.Dtos;
using RedHome.Helpers;

namespace RedHome.Services.IServices
{
    public interface IAdvertisementService
    {
        public IEnumerable<AdvertisementDto> GetAll();
        public AdvertisementDto GetById(int id, string? loggedUser);
        public AdvertisementDto Insert(AdvertisementDto advertisementDto);
        public AdvertisementDto Edit(AdvertisementDto advertisementDto, string? loggedUser);
        public IEnumerable<AdvertisementDto> Delete(int id);
        public int Count(AdvertisementCountSpecification specification);
        public IEnumerable<AdvertisementDto> List(AdvertisementSpecification specification, string? loggedUser);
        public IEnumerable<string> GetUniqueCities();
        public IEnumerable<string> GetUniqueDevelopmentType();
        public IEnumerable<FavoriteAdvertisementDto> GetAllFavoriteAdvertisements(string userId);
        public bool AddToFavorite(int advertisementId, string userId);
    }
}