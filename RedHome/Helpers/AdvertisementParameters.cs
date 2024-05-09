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

        /*
         miejsce na developmentTypeId itp...
         */

        public string? Sort { get; set; }
        private string? _search;

        public string? Search
        {
            get => _search;
            set => _search = value?.ToLower();
        }
    }
}
