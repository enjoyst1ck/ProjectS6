using Microsoft.EntityFrameworkCore;
using RedHome.Database;
using RedHome.Database.Models;
using RedHome.Repositories.IRepositories;

namespace RedHome.Repositories
{
    public class AttachmentRepository : IAttachmentRepository
    {
        private readonly ApiDbContext _context;

        public AttachmentRepository(ApiDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Attachment> GetByAdvertisement(int advertisementId)
        {
            return _context.Attachments.Where(w => w.AdvertisementId == advertisementId).ToList();
        }

        public void Insert(Attachment attachment)
        {
            _context.Attachments.Add(attachment);
        }

        public void Edit(Attachment attachment)
        {
            _context.Entry(attachment).State = EntityState.Modified;
        }

        public void Delete(int attachmentId)
        {
            Attachment? attachment = _context.Attachments.Find(attachmentId);
            if (attachment != null)
            {
                _context.Remove(attachment);
            }
        }
        
    }
}
