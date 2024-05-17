using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using RedHome.Database;
using RedHome.Dtos;
using RedHome.Services.IServices;

namespace RedHome.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly SignInManager<IdentityUser> _signInManager;
        private readonly ITokenService _tokenService;

        public AccountController(UserManager<IdentityUser> userManager, 
                                SignInManager<IdentityUser> signInManager,
                                ITokenService tokenService)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _tokenService = tokenService;
        }

        [Authorize]
        [HttpGet("getuser")]
        public async Task<ActionResult<UserDto>> GetCurrentUser()
        {
            //ta metoda nie działa!
            var user = await _userManager.FindByEmailFromPrincipal(HttpContext.User);

            if (user == null)
            {
                return null;
            }

            return new UserDto
            {
                Email = user.Email,
                Token = _tokenService.CreateToken(user),
                //DisplayName = user.DisplayName
            };
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
        {
            var user = await _userManager.FindByEmailAsync(loginDto.Email);

            if (user == null)
            {
                return Unauthorized();
            }

            var result = await _signInManager.CheckPasswordSignInAsync(user, loginDto.Password, true);

            if (!result.Succeeded)
            {
                return Unauthorized();
            }

            return new UserDto
            {
                Email = user.Email,
                Token = _tokenService.CreateToken(user),
            };
        }

        [HttpPost("register")]
        public async Task<ActionResult<UserDto>> Register(RegisterDto registerDto)
        {
            if (CheckEmailExistsAsync(registerDto.Email).Result.Value)
            {
                return new BadRequestObjectResult("Email has been already used");
            }


            var user = new IdentityUser
            {
                Email = registerDto.Email,
                UserName = registerDto.Email
                //pozostale pola usera
            };

            var result = await _userManager.CreateAsync(user, registerDto.Password);

            if (!result.Succeeded)
            {
                return BadRequest(400);
            }

            return new UserDto
            {
                Email = user.Email,
                Token = _tokenService.CreateToken(user),
            };
        }

        [HttpGet("emailexists")]
        public async Task<ActionResult<bool>> CheckEmailExistsAsync([FromQuery] string email)
        {
            return await _userManager.FindByEmailAsync(email) != null;
        }
    }
}
