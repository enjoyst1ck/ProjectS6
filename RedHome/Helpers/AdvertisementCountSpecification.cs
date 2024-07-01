using RedHome.Database.Models;

namespace RedHome.Helpers
{
    public class AdvertisementCountSpecification : BaseSpecification<Advertisement>
    {
        public AdvertisementCountSpecification(AdvertisementParameters parameters)
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
        { }
    }
}
