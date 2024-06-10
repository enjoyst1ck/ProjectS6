using Microsoft.EntityFrameworkCore;
using RedHome.Database;
using RedHome.Database.Models;
using RedHome.Repositories.IRepositories;

namespace RedHome.Repositories
{
    public class AttachmentRepository : GenericRepository<Attachment>, IAttachmentRepository
    {
        private readonly ApiDbContext _context;

        public AttachmentRepository(ApiDbContext context) : base(context)
        {
            _context = context;
        }

        public IEnumerable<Attachment> GetByAdvertisement(int advertisementId)
        {
            var attachments = _context.Attachments?.Where(w => w.AdvertisementId == advertisementId).ToList();
            
            if (attachments == null)
            {
                return new List<Attachment>();
            }

            return attachments;
        }
    }
}
