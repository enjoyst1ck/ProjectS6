using RedHome.Database.Models;

namespace RedHome.Repositories.IRepositories
{
    public interface IAdvertisementRepository
    {
        public IEnumerable<Advertisement> GetAll();
        public Advertisement GetById(int advertisementId);
        public void Insert(Advertisement advertisement);
        public void Edit(Advertisement advertisement);
        public void Delete(int advertisementId);
    }
}
