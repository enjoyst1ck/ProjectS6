using Microsoft.AspNetCore.Mvc;
using RedHome.Dtos;
using RedHome.Services.IServices;

namespace RedHome.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class AttachmentController : ControllerBase
    {
        private readonly IAttachmentService _attachmentService;

        public AttachmentController(IAttachmentService attachmentService)
        {
            _attachmentService = attachmentService;
        }

        [HttpGet]
        public IEnumerable<AttachmentDto> GetByAdvertisement(int id)
        {
            return _attachmentService.GetByAdvertisement(id);
        }

        [HttpPost]
        public IEnumerable<AttachmentDto> Insert(AttachmentDto attachmentDto)
        {
            _attachmentService.Insert(attachmentDto);

            return _attachmentService.GetByAdvertisement(attachmentDto.AdvertisementId);
        }

        [HttpDelete]
        public ActionResult Delete(int id)
        {
            _attachmentService.Delete(id);

            return Ok();
        }
    }
}
