using Microsoft.AspNetCore.Identity;

namespace Tomas.Infrastructure.Data;

public class AppUser : IdentityUser
{
    public string? FullName { get; set; }
}
