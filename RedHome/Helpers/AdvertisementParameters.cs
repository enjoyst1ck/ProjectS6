namespace RedHome.Helpers
{
    public class AdvertisementParameters
    {
        private const int MaxPageSize = 32;
        public int PageIndex { get; set; } = 1;

        private int _pageSize = 8;
        public int PageSize
        {
            get => _pageSize;
            set => _pageSize = (value > MaxPageSize) ? MaxPageSize : value;
        }

        public string? Sort { get; set; }
        private string? _titleSearch;
        private string? _developmentTypeSearch { get; set; }
        private string? _citySearch { get; set; }
        private string? _addressSearch { get; set; }
        public decimal? MinPrice { get; set; }
        public decimal? MaxPrice { get; set; }
        public decimal? MinArea { get; set; }
        public decimal? MaxArea { get; set; }
        public List<int>? RoomQuantity { get; set; } = new List<int>();
        public decimal? FloorQuantity { get; set; }
        public decimal? Floor { get; set; }
        public bool? IsForSell { get; set; }

        public string? TitleSearch
        {
            get => _titleSearch;
            set => _titleSearch = value?.ToLower();
        }

        public string? DevelopmentTypeSearch
        {
            get => _developmentTypeSearch;
            set => _developmentTypeSearch = value?.ToLower();
        }

        public string? CitySearch
        {
            get => _citySearch;
            set => _citySearch = value?.ToLower();
        }

        public string? AddressSearch
        {
            get => _addressSearch;
            set => _addressSearch = value?.ToLower();
        }
    }
}
