using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;

namespace RedHome.Database
{
    public static class UserManagerExtensions
    {
        public static async Task<IdentityUser> FindUserByClaimsPrincipleWithAddressAsync(this UserManager<IdentityUser> userManager, ClaimsPrincipal user)
        {
            var email = user.FindFirstValue(ClaimTypes.Email);

            return await userManager.Users.SingleOrDefaultAsync(x => x.Email == email);
        }

        public static async Task<IdentityUser> FindByEmailFromPrincipal(this UserManager<IdentityUser> userManager, ClaimsPrincipal user)
        {
            return await userManager.Users.SingleOrDefaultAsync(x => x.Email == user.FindFirstValue(ClaimTypes.Email));
        }


    }
}
