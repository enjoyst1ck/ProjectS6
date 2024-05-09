using RedHome.Database.Models;
using System.Linq.Expressions;

namespace RedHome.Helpers
{
    public class AdvertisementSpecification : BaseSpecification<Advertisement>
    {
        public AdvertisementSpecification(AdvertisementParameters parameters) 
        : base(b => 
            (string.IsNullOrEmpty(parameters.Search) || 
            b.Title.ToLower().Contains(parameters.Search)))
        {
            AddInclude(i => i.User);
            AddInclude(i => i.Attachments);
            AddOrderBy(i => i.Id);
            ApplyPaging(parameters.PageSize * (parameters.PageIndex - 1), parameters.PageSize);
        
            if(!string.IsNullOrEmpty(parameters.Sort))
            {
                switch(parameters.Sort)
                {
                    case "areaAsc":
                        AddOrderBy(a => a.Area);
                        break;
                    case "areaDesc":
                        AddOrderByDescending(a => a.Area);
                        break;
                    case "developmentTypeAsc":
                        AddOrderBy(d => d.DevelopmentType);
                        break;
                    case "developmentTypeDesc":
                        AddOrderByDescending(a => a.DevelopmentType);
                        break;
                    case "priceAsc":
                        AddOrderBy(a => a.Price);
                        break;
                    case "priceDesc":
                        AddOrderByDescending(a => a.Price);
                        break;
                    case "cityAsc":
                        AddOrderBy(a => a.City);
                        break;
                    case "cityDesc":
                        AddOrderByDescending(a => a.City);
                        break;
                    case "depositeAsc":
                        AddOrderBy(a => a.Deposite);
                        break;
                    case "depositeDesc":
                        AddOrderByDescending(a => a.Deposite);
                        break;
                    default:
                        AddOrderBy(i => i.Id);
                        break;
                }
            }
        }

        public AdvertisementSpecification(int id) : base(i => i.Id == id)
        {
            AddInclude(i => i.User);
            AddInclude(i => i.Attachments);
        }
    }
}
