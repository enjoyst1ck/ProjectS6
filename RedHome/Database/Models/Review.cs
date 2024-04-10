using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RedHome.Database.Models
{
    public class Review : BaseEntity
    {
        public required string UserIdBy { get; set; }

        [ForeignKey("UserIdBy")]
        public required IdentityUser UserBy { get; set; }

        public required string UserIdTo { get; set; }

        [ForeignKey("UserIdTo")]
        public required IdentityUser UserTo { get; set; }

        [Required]
        public int Rate { get; set; }
        public string Comment { get; set; } = string.Empty;
    }
}
