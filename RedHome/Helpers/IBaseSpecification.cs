using System.Linq.Expressions;

namespace RedHome.Helpers
{
    public interface IBaseSpecification<M>
    {
        Expression<Func<M, bool>> Criteria { get; }
        List<Expression<Func<M, object>>> Includes { get; }

        Expression<Func<M, object>> OrderBy { get; }
        Expression<Func<M, object>> OrderByDescending { get; }
        int Take { get; }
        int Skip { get; }
        bool IsPagingEnabled { get; }

    }
}