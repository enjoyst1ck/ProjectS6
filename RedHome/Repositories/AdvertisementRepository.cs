using Microsoft.EntityFrameworkCore;
using RedHome.Database;
using RedHome.Database.Models;
using RedHome.Repositories.IRepositories;

namespace RedHome.Repositories
{
    public class AdvertisementRepository : GenericRepository<Advertisement>, IAdvertisementRepository
    {
        private readonly ApiDbContext _context;

        public AdvertisementRepository(ApiDbContext context) : base(context)
        {
            _context = context;
        }
        override
        public IEnumerable<Advertisement> GetAll()
        {
            return _context.Advertisements.Include(i => i.User).Include(i => i.Attachments).ToList();
        }

        public Advertisement GetById(int advertisementId)
        {
            Advertisement? advertisement = _context.Advertisements.Include(i => i.User).Include(i => i.Attachments).Where(w => w.Id == advertisementId).First();
            if (advertisement != null)
            {
                return advertisement;
            }

            throw new Exception("Advertisement not found.");
        }

        public IEnumerable<string> GetUniqueCities()
        {
            return _context.Advertisements
                    .Select(c => c.City)
                    .Distinct()
                    .ToList();
        }

        public IEnumerable<string> GetUniqueDevelopmentType()
        {
            return _context.Advertisements
                    .Select(c => c.DevelopmentType)
                    .Distinct()
                    .ToList();
        }
        public IEnumerable<FavoriteAdvertisement> GetAllFavoriteAdvertisements(string userId)
        {
            return _context.FavoriteAdvertisements.Include(i => i.Advertisement.User).Include(i => i.Advertisement.Attachments).Where(w => w.UserId == userId).ToList();
        }

        public bool CheckLiked(int advertisementId, string? userId)
        {
            if (string.IsNullOrEmpty(userId))
            {
                return false;
            }
            else
            {
                return _context.FavoriteAdvertisements.Any(w => w.AdvertisementId == advertisementId && w.UserId == userId);
            }
        }

        public bool AddToFavorite(FavoriteAdvertisement favoriteAdvertisement)
        {
            var advertisement = _context.FavoriteAdvertisements.Find(favoriteAdvertisement.AdvertisementId, favoriteAdvertisement.UserId);

            if (advertisement == null)
            {
                var result = _context.FavoriteAdvertisements.Add(favoriteAdvertisement);
                var status = result.State == EntityState.Added;

                if (status)
                {
                    _context.SaveChanges();
                }

                return status;
            }
            else
            {
                DeleteFromFavorite(favoriteAdvertisement);
            }

            return false;
        }

        public bool DeleteFromFavorite(FavoriteAdvertisement favoriteAdvertisement)
        {
            var advertisement = _context.FavoriteAdvertisements.Find(favoriteAdvertisement.AdvertisementId, favoriteAdvertisement.UserId);

            if (advertisement != null)
            {

                var result = _context.FavoriteAdvertisements.Remove(advertisement);
                var status = result.State == EntityState.Deleted;

                if (status)
                {
                    _context.SaveChanges();
                }

                return status;
            }

            return false;
        }
    }
}