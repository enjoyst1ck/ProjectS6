using RedHome.Dtos;
using RedHome.Repositories.IRepositories;
using RedHome.Services.IServices;

namespace RedHome.Services
{
    public class AttachmentService : IAttachmentService
    {
        private readonly IAttachmentRepository _attachmentRepository;

        public AttachmentService(IAttachmentRepository attachmentRepository)
        {
            _attachmentRepository = attachmentRepository;
        }

        public IEnumerable<AttachmentDto> GetByAdvertisement(int advertisementId)
        {
            var attachments = _attachmentRepository.GetByAdvertisement(advertisementId);

            return attachments.Select(s => new AttachmentDto
            { 
                Id = s.Id,
                Title = s.Title,
                AdvertisementId = s.AdvertisementId
            }).ToList();
        }
    }
}
