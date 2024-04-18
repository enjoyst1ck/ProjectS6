using RedHome.Dtos;

namespace RedHome.Services.IServices
{
    public interface IAttachmentService
    {
        public IEnumerable<AttachmentDto> GetByAdvertisement(int advertisementId);
        public void Insert(AttachmentDto attachmentDto);
        public void Delete(int id);
    }
}