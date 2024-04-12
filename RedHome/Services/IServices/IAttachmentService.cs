using RedHome.Dtos;

namespace RedHome.Services.IServices
{
    public interface IAttachmentService
    {
        public IEnumerable<AttachmentDto> GetByAdvertisement(int advertisementId);
    }
}
