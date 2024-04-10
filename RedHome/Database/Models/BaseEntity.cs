using System.ComponentModel.DataAnnotations;

namespace RedHome.Database.Models
{
    public abstract class BaseEntity
    {
        [Key]
        public int Id { get; set; }
    }
}
