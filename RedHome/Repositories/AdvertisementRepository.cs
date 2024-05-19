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
    }
}
