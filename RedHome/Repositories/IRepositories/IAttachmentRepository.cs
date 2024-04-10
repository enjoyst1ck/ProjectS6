using RedHome.Database.Models;

namespace RedHome.Repositories.IRepositories
{
    public interface IAttachmentRepository
    {
        public IEnumerable<Attachment> GetByAdvertisement(int advertisementId);
        public void Insert(Attachment attachment);
        public void Edit(Attachment attachment);
        public void Delete(int attachmentId);
    }
}
