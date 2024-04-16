namespace RedHome.Dtos
{
    public class AttachmentDto
    {
        public int Id { get; set; }
        public string? Title { get; set; }
        public int AdvertisementId { get; set; }
        public byte[] Image { get; set; }
    }
}
