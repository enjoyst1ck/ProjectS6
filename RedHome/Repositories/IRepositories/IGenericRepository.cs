using RedHome.Database.Models;

namespace RedHome.Repositories.IRepositories
{
    public interface IGenericRepository<M> where M : BaseEntity
    {
        public IEnumerable<M> GetAll();
        public M GetById(int id);
        public void Insert(M obj);
        public void Edit(M obj);
        public void Delete(int objId);
    }
}
