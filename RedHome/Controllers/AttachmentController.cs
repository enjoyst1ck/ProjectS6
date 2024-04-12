using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RedHome.Dtos;
using RedHome.Services;
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
    }
}
