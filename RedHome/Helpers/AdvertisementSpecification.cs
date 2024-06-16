using RedHome.Database.Models;

namespace RedHome.Helpers
{
    public class AdvertisementSpecification : BaseSpecification<Advertisement>
    {
        public AdvertisementSpecification(AdvertisementParameters parameters)
        : base(b =>
            (string.IsNullOrEmpty(parameters.TitleSearch) ||
            b.Title.ToLower().Contains(parameters.TitleSearch)) &&
            (string.IsNullOrEmpty(parameters.DevelopmentTypeSearch) ||
            b.DevelopmentType.ToLower().Contains(parameters.DevelopmentTypeSearch)) &&
            (string.IsNullOrEmpty(parameters.CitySearch) ||
            b.City.ToLower().Contains(parameters.CitySearch)) &&
            (string.IsNullOrEmpty(parameters.AddressSearch) ||
            b.Address.ToLower().Contains(parameters.AddressSearch)) &&
            (!parameters.MinPrice.HasValue || b.Price >= parameters.MinPrice.Value) &&
            (!parameters.MaxPrice.HasValue || b.Price <= parameters.MaxPrice.Value) &&
            (!parameters.MinArea.HasValue || b.Area >= parameters.MinArea.Value) &&
            (!parameters.MaxArea.HasValue || b.Area <= parameters.MaxArea.Value) &&
            (!parameters.FloorQuantity.HasValue || b.FloorQuantity == parameters.FloorQuantity.Value) &&
            (!parameters.Floor.HasValue || b.Floor == parameters.Floor.Value) &&
            (!parameters.IsForSell.HasValue || b.IsForSell == parameters.IsForSell) &&
            (parameters.RoomQuantity == null || parameters.RoomQuantity.Count == 0 || parameters.RoomQuantity.Contains(b.RoomQuantity) || 
            (parameters.RoomQuantity.Contains(6) && b.RoomQuantity >= 6)))
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
