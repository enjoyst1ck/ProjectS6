using System.ComponentModel.DataAnnotations.Schema;
using System.Reflection.Metadata;

namespace RedHome.Database.Models
{
    public class Attachment : BaseEntity
    {
        public string? Title { get; set; }
    
        public int AdvertisementId { get; set; }

        [ForeignKey("AdvertisementId")]
        public Advertisement Advertisement { get; set; }

        public byte[] Image { get; set; }
    }
}
