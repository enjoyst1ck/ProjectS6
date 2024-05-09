using RedHome.Database.Models;

namespace RedHome.Helpers
{
    public class AdvertisementCountSpecification : BaseSpecification<Advertisement>
    {
        public AdvertisementCountSpecification(AdvertisementParameters parameters)
        : base(b =>
            (string.IsNullOrEmpty(parameters.Search) ||
            b.Title.ToLower().Contains(parameters.Search)))
        { 
        }
    }
}
