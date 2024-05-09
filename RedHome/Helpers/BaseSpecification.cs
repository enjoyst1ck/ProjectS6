using System.Linq.Expressions;

namespace RedHome.Helpers
{
    public class BaseSpecification<M> : IBaseSpecification<M>
    {
        public BaseSpecification()
        {
        }

        public BaseSpecification(Expression<Func<M, bool>> criteria)
        {
            Criteria = criteria;
        }

        public Expression<Func<M, bool>> Criteria { get; }

        public List<Expression<Func<M, object>>> Includes { get; } =
            new List<Expression<Func<M, object>>>();

        public Expression<Func<M, object>> OrderBy { get; private set; }

        public Expression<Func<M, object>> OrderByDescending { get; private set; }

        public int Take { get; private set; }

        public int Skip { get; private set; }

        public bool IsPagingEnabled { get; private set; }

        protected void AddInclude(Expression<Func<M, object>> includeExpression)
        {
            Includes.Add(includeExpression);
        }

        protected void AddOrderBy(Expression<Func<M, object>> orderByExpression)
        {
            OrderBy = orderByExpression;
        }

        protected void AddOrderByDescending(Expression<Func<M, object>> orderByDescExpression)
        {
            OrderByDescending = orderByDescExpression;
        }

        protected void ApplyPaging(int skip, int take)
        {
            Skip = skip;
            Take = take;
            IsPagingEnabled = true;
        }
    }
}