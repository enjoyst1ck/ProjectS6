using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using RedHome.Database;
using RedHome.Dtos;
using RedHome.Helpers;
using RedHome.Services.IServices;

namespace RedHome.Controllers
{
    [Route("[controller]")]
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
            try
            {
                var user = await _userManager.FindByEmailFromPrincipal(HttpContext.User);
                
                if (user == null)
                {
                    return NotFound(new ApiResponse(404));
                }

                return new UserDto
                {
                    UserId = user.Id,
                    Username = user.UserName,
                    Email = user.Email,
                    PhoneNumber = user.PhoneNumber,
                    Token = _tokenService.CreateToken(user)
                };
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
        {
            try
            {
                var user = await _userManager.FindByEmailAsync(loginDto.Email);

                if (user == null)
                {
                    return NotFound(new ApiResponse(404));
                }

                var result = await _signInManager.CheckPasswordSignInAsync(user, loginDto.Password, true);

                if (!result.Succeeded)
                {
                    return Unauthorized(new ApiResponse(401));
                }

                return new UserDto
                {
                    UserId = user.Id,
                    Username = user.UserName,
                    Email = user.Email,
                    PhoneNumber = user.PhoneNumber,
                    Token = _tokenService.CreateToken(user)
                };
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost("register")]
        public async Task<ActionResult<UserDto>> Register(RegisterDto registerDto)
        {
            try
            {
                if (CheckEmailExistsAsync(registerDto.Email).Result.Value)
                {
                    return BadRequest("Email has been already used");
                }

                var user = new IdentityUser
                {
                    Email = registerDto.Email,
                    UserName = registerDto.Username,
                    PhoneNumber = registerDto.PhoneNumber
                };

                var result = await _userManager.CreateAsync(user, registerDto.Password);

                if (!result.Succeeded)
                {
                    return BadRequest(new ApiResponse(400, "Invalid insert data"));
                }

                return new UserDto
                {
                    UserId = user.Id,
                    Username = user.UserName,
                    Email = user.Email,
                    PhoneNumber = user.PhoneNumber,
                    Token = _tokenService.CreateToken(user)
                };
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet("emailexists")]
        public async Task<ActionResult<bool>> CheckEmailExistsAsync([FromQuery] string email)
        {
            try
            {
                return await _userManager.FindByEmailAsync(email) != null;
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPut("changePassword")]
        public async Task<ActionResult<UserDto>> ChangePassword([FromBody] UserDto userDto, string currentPassword, string newPassword)
        {
            try
            {
                IdentityUser user = await _userManager.FindByEmailAsync(userDto.Email);
            
                if (user == null)
                {
                    return NotFound(new ApiResponse(404));
                }

                var result = await _userManager.ChangePasswordAsync(user, currentPassword, newPassword);

                if (!result.Succeeded)
                {
                    return BadRequest(new ApiResponse(400, "Invalid insert data"));
                }

                return new UserDto
                {
                    UserId = user.Id,
                    Username = user.UserName,
                    Email = user.Email,
                    PhoneNumber = user.PhoneNumber,
                    Token = _tokenService.CreateToken(user)
                };
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}