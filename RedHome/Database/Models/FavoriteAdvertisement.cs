using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations.Schema;

namespace RedHome.Database.Models
{
    public class FavoriteAdvertisement
    {
        public int AdvertisementId { get; set; }

        [ForeignKey("AdvertisementId")]
        public Advertisement Advertisement { get; set; }

        public string UserId { get; set; }

        [ForeignKey("UserId")]
        public IdentityUser User { get; set; }
    }
}
