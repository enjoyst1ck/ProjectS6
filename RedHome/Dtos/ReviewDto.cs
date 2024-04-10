namespace RedHome.Dtos
{
    public class ReviewDto
    {
        public int Id { get; set; }
        public string UserIdBy { get; set; } = string.Empty;
        public string UserEmailBy { get; set; } = string.Empty;
        public string UserIdTo { get; set; } = string.Empty;
        public string UserEmailTo { get; set; } = string.Empty;
        public int Rate { get; set; }
        public string Comment { get; set; } = string.Empty;
    }
}
