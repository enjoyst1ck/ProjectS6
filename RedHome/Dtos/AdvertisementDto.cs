namespace RedHome.Dtos
{
    public class AdvertisementDto
    {
        public int Id { get; set; }
        public string UserId { get; set; } = string.Empty;
        public string UserEmail { get; set; } = string.Empty;
        public decimal Price { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string City { get; set; } = string.Empty;
        public string Address { get; set; } = string.Empty;
        public decimal Area { get; set; }
        public int RoomQuantity { get; set; }
        public int FloorQuantity { get; set; }
        public int Floor { get; set; }
        public string DevelopmentType { get; set; } = string.Empty;
        public decimal Deposite { get; set; }
        public bool IsForSell { get; set; }
        public bool IsLiked { get; set; }
        public List<AttachmentDto> Attachments { get; set; }
    }
}
