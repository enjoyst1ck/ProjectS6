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
        private readonly IAttachmentRepository _attachmentRepository;

        public AdvertisementService(IAdvertisementRepository advertisementRepository,
                                    IAttachmentRepository attachmentRepository)
        {
            _advertisementRepository = advertisementRepository;
            _attachmentRepository = attachmentRepository;
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
                UserName = s.User.UserName ?? string.Empty,
                PhoneNumber = s.User.PhoneNumber ?? string.Empty,
                Price = s.Price,
                Title = s.Title,
                CreatedDate = s.CreatedDate,
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

        public AdvertisementDto GetById(int id, string? loggedUser)
        {
            var advertisement = _advertisementRepository.GetById(id);

            return new AdvertisementDto
            {
                Id = advertisement.Id,
                UserId = advertisement.UserId,
                UserEmail = advertisement.User.Email ?? string.Empty,
                UserName = advertisement.User.UserName ?? string.Empty,
                PhoneNumber = advertisement.User.PhoneNumber ?? string.Empty,
                Price = advertisement.Price,
                Title = advertisement.Title,
                CreatedDate = advertisement.CreatedDate,
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
                IsLiked = _advertisementRepository.CheckLiked(advertisement.Id, loggedUser),
                Attachments = advertisement.Attachments.Select(a => new AttachmentDto
                {
                    Id = a.Id,
                    Title = a.Title,
                    Image = a.Image,
                }).ToList()
            };
        }

        public IEnumerable<AdvertisementDto> GetByUserId(string userId)
        {
            var advertisements = _advertisementRepository.GetByUserId(userId);

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

        public AdvertisementDto Insert(AdvertisementDto advertisementDto)
        {
            advertisementDto.Attachments = advertisementDto.Attachments.Where(w => w != null).ToList();

            var advertisement = new Advertisement
            {
                Id = advertisementDto.Id,
                UserId = advertisementDto.UserId,
                Price = advertisementDto.Price,
                Title = advertisementDto.Title,
                CreatedDate = DateTime.Now,
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

            return GetById(advertisement.Id, null);
        }

        public AdvertisementDto Edit(AdvertisementDto advertisementDto, string? loggedUser)
        {
            if (string.IsNullOrEmpty(loggedUser) || advertisementDto.UserId != loggedUser)
            {
                return null;
            }

            var adFromDb = _advertisementRepository.GetById(advertisementDto.Id);

            var advertisement = new Advertisement
            {
                Id = advertisementDto.Id,
                UserId = advertisementDto.UserId,
                Price = advertisementDto.Price,
                Title = advertisementDto.Title,
                CreatedDate = adFromDb.CreatedDate,
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

            var attachmentsDtoWithoutId = advertisementDto.Attachments.Where(w => w.Id == 0).ToList();
            if (attachmentsDtoWithoutId.Any())
            {
                var attachments = attachmentsDtoWithoutId.Select(a => new RedHome.Database.Models.Attachment
                {
                    AdvertisementId = advertisementDto.Id,
                    Image = a.Image,
                }).ToList();

                foreach (var attachment in attachments)
                {
                    _attachmentRepository.Insert(attachment);
                }
            }

            return GetById(advertisement.Id, loggedUser);
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

        public IEnumerable<AdvertisementDto> List(AdvertisementSpecification specification, string? loggedUser)
        {
            var advertisements = _advertisementRepository.List(specification);

            return advertisements.Select(s => new AdvertisementDto
            {
                Id = s.Id,
                UserId = s.UserId,
                UserEmail = s.User.Email ?? string.Empty,
                UserName = s.User.UserName ?? string.Empty,
                PhoneNumber = s.User.PhoneNumber ?? string.Empty,
                Price = s.Price,
                Title = s.Title,
                CreatedDate = s.CreatedDate,
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
                IsLiked = _advertisementRepository.CheckLiked(s.Id, loggedUser),
                Attachments = s.Attachments.Select(a => new AttachmentDto
                {
                    Id = a.Id,
                    Title = a.Title,
                    Image = a.Image,
                }).ToList()
            }).ToList();
        }

        public IEnumerable<string> GetUniqueCities()
        {
            return _advertisementRepository.GetUniqueCities();
        }

        public IEnumerable<string> GetUniqueDevelopmentType()
        {
            return _advertisementRepository.GetUniqueDevelopmentType();
        }

        public IEnumerable<FavoriteAdvertisementDto> GetAllFavoriteAdvertisements(string userId)
        {
            var favoriteAdvertisement = _advertisementRepository.GetAllFavoriteAdvertisements(userId);

            return favoriteAdvertisement.Select(s => new FavoriteAdvertisementDto
            {
                Advertisement = new AdvertisementDto
                {
                    Id = s.Advertisement.Id,
                    UserId = s.Advertisement.UserId,
                    UserEmail = s.Advertisement.User.Email ?? string.Empty,
                    UserName = s.Advertisement.User.UserName ?? string.Empty,
                    PhoneNumber = s.Advertisement.User.PhoneNumber ?? string.Empty,
                    Price = s.Advertisement.Price,
                    Title = s.Advertisement.Title,
                    CreatedDate = s.Advertisement.CreatedDate,
                    Description = s.Advertisement.Description,
                    City = s.Advertisement.City,
                    Address = s.Advertisement.Address,
                    Area = s.Advertisement.Area,
                    RoomQuantity = s.Advertisement.RoomQuantity,
                    FloorQuantity = s.Advertisement.FloorQuantity,
                    Floor = s.Advertisement.Floor,
                    DevelopmentType = s.Advertisement.DevelopmentType,
                    Deposite = s.Advertisement.Deposite,
                    IsForSell = s.Advertisement.IsForSell,
                    IsLiked = _advertisementRepository.CheckLiked(s.Advertisement.Id, userId),
                    Attachments = s.Advertisement.Attachments.Select(a => new AttachmentDto
                    {
                        Id = a.Id,
                        Title = a.Title,
                        Image = a.Image,
                    }).ToList()
                }
            }).ToList();
        }

        public bool AddToFavorite(int advertisementId, string userId)
        {
            FavoriteAdvertisement favoriteAdvertisement = new FavoriteAdvertisement
            {
                AdvertisementId = advertisementId,
                UserId = userId
            };

            return _advertisementRepository.AddToFavorite(favoriteAdvertisement);
        }
    }
}