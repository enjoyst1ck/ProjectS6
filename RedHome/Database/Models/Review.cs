using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RedHome.Database.Models
{
    public class Review : BaseEntity
    {
        public string UserIdBy { get; set; }

        [ForeignKey("UserIdBy")]
        public IdentityUser UserBy { get; set; }

        public string UserIdTo { get; set; }

        [ForeignKey("UserIdTo")]
        public IdentityUser UserTo { get; set; }

        [Required]
        public int Rate { get; set; }
        public string Comment { get; set; } = string.Empty;
    }
}
