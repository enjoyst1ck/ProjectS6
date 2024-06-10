using RedHome.Database.Models;
using RedHome.Helpers;

namespace RedHome.Repositories.IRepositories
{
    public interface IAdvertisementRepository
    {
        public IEnumerable<Advertisement> GetAll();
        public Advertisement GetById(int advertisementId);
        public void Insert(Advertisement advertisement);
        public void Edit(Advertisement advertisement);
        public void Delete(int advertisementId);
        public int Count(IBaseSpecification<Advertisement> specification);
        public IEnumerable<Advertisement> List(IBaseSpecification<Advertisement> specification);
        public IEnumerable<string> GetUniqueCities();
        public IEnumerable<string> GetUniqueDevelopmentType();
        public IEnumerable<FavoriteAdvertisement> GetAllFavoriteAdvertisements(string userId);
        public bool CheckLiked(int advertisementId, string? userId);
        public bool AddToFavorite(FavoriteAdvertisement favoriteAdvertisement);
        public bool DeleteFromFavorite(FavoriteAdvertisement favoriteAdvertisement);
    }
}