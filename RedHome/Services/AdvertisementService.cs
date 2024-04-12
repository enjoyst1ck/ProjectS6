using RedHome.Dtos;
using RedHome.Repositories.IRepositories;
using RedHome.Services.IServices;

namespace RedHome.Services
{
    public class AdvertisementService : IAdvertisementService
    {
        private readonly IAdvertisementRepository _advertisementRepository;

        public AdvertisementService(IAdvertisementRepository advertisementRepository)
        {
            _advertisementRepository = advertisementRepository;
        }
        public IEnumerable<AdvertisementDto> GetAll()
        {
            var advertisements = _advertisementRepository.GetAll();

            if (advertisements == null)
            {
                return new List<AdvertisementDto>();
            }

            return advertisements.Select(s => new AdvertisementDto
            {
                Id = s.Id,
                UserId = s.UserId,
                UserEmail = s.User.Email ?? string.Empty,
                Price = s.Price,
                Title = s.Title,
                Description = s.Description,
                City = s.City,
                Address = s.Address,
                Area = s.Area,
                RoomQuantity = s.RoomQuantity,
                FloorQuantity = s.FloorQuantity,
                Floor = s.Floor,
                DevelopmentType = s.DevelopmentType,
                Deposite = s.Deposite,
                IsForSell = s.IsForSell
            }).ToList();
        }
    }
}
