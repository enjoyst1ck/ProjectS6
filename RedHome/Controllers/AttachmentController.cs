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
        public ActionResult<IEnumerable<AttachmentDto>> GetByAdvertisement(int id)
        {
            try
            {
                return Ok(_attachmentService.GetByAdvertisement(id));
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost]
        public ActionResult<IEnumerable<AttachmentDto>> Insert(AttachmentDto attachmentDto)
        {
            try
            {
                _attachmentService.Insert(attachmentDto);

                return Ok(_attachmentService.GetByAdvertisement(attachmentDto.AdvertisementId));
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpDelete]
        public ActionResult Delete(int id)
        {
            try
            {
                _attachmentService.Delete(id);

                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}