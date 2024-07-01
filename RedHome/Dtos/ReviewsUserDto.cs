namespace RedHome.Dtos
{
    public class ReviewsUserDto
    {
        public UserDto UserDto { get; set; }
        public IEnumerable<ReviewDto> Reviews { get; set; }
    }
}
