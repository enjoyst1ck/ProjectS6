using RedHome.Database.Models;
using RedHome.Dtos;
using RedHome.Helpers;
using RedHome.Repositories.IRepositories;
using RedHome.Services.IServices;

namespace RedHome.Services
{
    public class AdvertisementService : IAdvertisementService
    {
        private readonly IAdvertisementRepository _advertisementRepository;
        
        public AdvertisementService(IAdvertisementRepository advertisementRepository, IAttachmentRepository attachmentRepository)
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
                IsForSell = s.IsForSell,
                Attachments = s.Attachments.Select(a => new AttachmentDto
                {
                    Id = a.Id,
                    Title = a.Title,
                    Image = a.Image,
                }).ToList()
            }).ToList();
        }

        public AdvertisementDto GetById(int id)
        {
            var advertisement = _advertisementRepository.GetById(id);

            return new AdvertisementDto
            {
                Id = advertisement.Id,
                UserId = advertisement.UserId,
                UserEmail = advertisement.User.Email ?? string.Empty,
                Price = advertisement.Price,
                Title = advertisement.Title,
                Description = advertisement.Description,
                City = advertisement.City,
                Address = advertisement.Address,
                Area = advertisement.Area,
                RoomQuantity = advertisement.RoomQuantity,
                FloorQuantity = advertisement.FloorQuantity,
                Floor = advertisement.Floor,
                DevelopmentType = advertisement.DevelopmentType,
                Deposite = advertisement.Deposite,
                IsForSell = advertisement.IsForSell,
                Attachments = advertisement.Attachments.Select(a => new AttachmentDto
                {
                    Id = a.Id,
                    Title = a.Title,
                    Image = a.Image,
                }).ToList()
            };
        }

        public AdvertisementDto Insert(AdvertisementDto advertisementDto)
        {
            var advertisement = new Advertisement
            {
                Id = advertisementDto.Id,
                UserId = advertisementDto.UserId,
                Price = advertisementDto.Price,
                Title = advertisementDto.Title,
                Description = advertisementDto.Description,
                City = advertisementDto.City,
                Address = advertisementDto.Address,
                Area = advertisementDto.Area,
                RoomQuantity = advertisementDto.RoomQuantity,
                FloorQuantity = advertisementDto.FloorQuantity,
                Floor = advertisementDto.Floor,
                DevelopmentType = advertisementDto.DevelopmentType,
                Deposite = advertisementDto.Deposite,
                IsForSell = advertisementDto.IsForSell,
                Attachments = advertisementDto.Attachments.Select(a => new RedHome.Database.Models.Attachment
                {
                    Id = a.Id,
                    Title = a.Title,
                    AdvertisementId = advertisementDto.Id,
                    Image = a.Image,
                }).ToList()
            };

            _advertisementRepository.Insert(advertisement);

            //tutaj wyciagnac z bazy danych advertisement!!!!!!!

            return GetById(advertisement.Id);
        }

        public AdvertisementDto Edit(AdvertisementDto advertisementDto)
        {
            var advertisement = new Advertisement
            {
                Id = advertisementDto.Id,
                UserId = advertisementDto.UserId,
                Price = advertisementDto.Price,
                Title = advertisementDto.Title,
                Description = advertisementDto.Description,
                City = advertisementDto.City,
                Address = advertisementDto.Address,
                Area = advertisementDto.Area,
                RoomQuantity = advertisementDto.RoomQuantity,
                FloorQuantity = advertisementDto.FloorQuantity,
                Floor = advertisementDto.Floor,
                DevelopmentType = advertisementDto.DevelopmentType,
                Deposite = advertisementDto.Deposite,
                IsForSell = advertisementDto.IsForSell,
            };

            _advertisementRepository.Edit(advertisement);

            //tutaj wyciagnac z bazy danych advertisement!!!!!!!
            return GetById(advertisement.Id);
        }

        public IEnumerable<AdvertisementDto> Delete(int id)
        {
            _advertisementRepository.Delete(id);

            return GetAll();
        }

        public int Count(AdvertisementCountSpecification specification)
        {
            return _advertisementRepository.Count(specification);
        }

        public IEnumerable<AdvertisementDto> List(AdvertisementSpecification specification)
        {
            var advertisements = _advertisementRepository.List(specification);
            
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
                IsForSell = s.IsForSell,
                Attachments = s.Attachments.Select(a => new AttachmentDto
                {
                    Id = a.Id,
                    Title = a.Title,
                    Image = a.Image,
                }).ToList()
            }).ToList();
        }
    }
}