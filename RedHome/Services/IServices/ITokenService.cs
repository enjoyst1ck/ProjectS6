using Microsoft.AspNetCore.Identity;

namespace RedHome.Services.IServices
{
    public interface ITokenService
    {
        string CreateToken(IdentityUser user);
    }
}
