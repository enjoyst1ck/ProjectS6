using RedHome.Database.Models;
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
                AdvertisementId = s.AdvertisementId,
                Image = s.Image
            }).ToList();
        }

        public void Insert(AttachmentDto attachmentDto)
        {
            var attachment = new Attachment
            {
                Id = attachmentDto.Id,
                Title = attachmentDto.Title,
                AdvertisementId = attachmentDto.AdvertisementId,
                Image = attachmentDto.Image
            };

            _attachmentRepository.Insert(attachment);
        }

        public void Delete(int id)
        {
            _attachmentRepository.Delete(id);
        }
    }
}