using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations.Schema;

namespace RedHome.Database.Models
{
    public class Advertisement : BaseEntity
    {
        public required string UserId { get; set; }

        [ForeignKey("UserId")]
        public required IdentityUser User { get; set; }

        public decimal Price { get; set; }

        public string Title { get; set; } = string.Empty;

        public string Description { get; set; } = string.Empty;
        public string City { get; set; } = string.Empty;
        public string Address { get; set; } = string.Empty;
        public string Area { get; set; } = string.Empty;
        public int RoomQuantity { get; set; }
        public int FloorQuantity { get; set; }
        public int Floor { get; set; }
        public string DevelopmentType { get; set; } = string.Empty;
        public decimal Deposite { get; set; }
        public bool IsForSell { get; set; }
        public virtual List<Attachment> Attachments { get; set; } = new List<Attachment>();
    }
}
