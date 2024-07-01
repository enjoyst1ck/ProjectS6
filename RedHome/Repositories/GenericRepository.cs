using Microsoft.EntityFrameworkCore;
using RedHome.Database;
using RedHome.Database.Models;
using RedHome.Helpers;
using RedHome.Repositories.IRepositories;

namespace RedHome.Repositories
{
    public class GenericRepository<M> : IGenericRepository<M> where M : BaseEntity
    {
        private readonly ApiDbContext _context;

        public GenericRepository(ApiDbContext context)
        {
            _context = context;
        }
        public virtual IEnumerable<M> GetAll()
        {
            return _context.Set<M>().ToList();
        }

        public M GetById(int id)
        {
            var obj = _context.Set<M>().Find(id);

            if (obj is null)
            {
                throw new Exception("");
            }

            return obj;
        }

        public void Insert(M obj)
        {
            _context.Set<M>().Add(obj);
            _context.SaveChanges();
        }

        public void Edit(M obj)
        {
            _context.Set<M>().Entry(obj).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public void Delete(int objId)
        {
            var obj = _context.Set<M>().Find(objId);
            
            if (obj == null)
            {
                throw new Exception("Object not found");
            }

            _context.Set<M>().Remove(obj);

            _context.SaveChanges();
        }

        public int Count(IBaseSpecification<M> specification)
        {
            return ApplySpecification(specification).Count();
        }
        public IEnumerable<M> List(IBaseSpecification<M> specification)
        {
            return ApplySpecification(specification).ToList();
        }

        private IQueryable<M> ApplySpecification(IBaseSpecification<M> specification)
        {
            return SpecificationEvaluator<M>.GetQuery(_context.Set<M>().AsQueryable(), specification);
        }
    }
}
