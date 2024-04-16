using Microsoft.EntityFrameworkCore;
using RedHome.Database;
using RedHome.Database.Models;
using RedHome.Repositories.IRepositories;

namespace RedHome.Repositories
{
    public class AdvertisementRepository : IAdvertisementRepository
    {
        private readonly ApiDbContext _context;

        public AdvertisementRepository(ApiDbContext context)
        {
            _context = context;
        }
        public IEnumerable<Advertisement> GetAll()
        {
            return _context.Advertisements.Include(i => i.User).Include(i => i.Attachments).ToList();
        }

        public Advertisement GetById(int advertisementId)
        {
            Advertisement? advertisement = _context.Advertisements.Find(advertisementId);
            if (advertisement != null)
            {
                return advertisement;
            }

            throw new Exception("Advertisement not found.");
        }

        public void Insert(Advertisement advertisement)
        {
            _context.Advertisements.Add(advertisement);
        }

        public void Edit(Advertisement advertisement)
        {
            _context.Entry(advertisement).State = EntityState.Modified;
        }

        public void Delete(int advertisementId)
        {
            Advertisement? advertisement = _context.Advertisements.Find(advertisementId);
            if (advertisement != null)
            {
                _context.Remove(advertisement);
            }
        }
    }
}
