using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Tomas.Infrastructure.Data;
using Tomas.Infrastructure.Services;

namespace Tomas.Infrastructure;

public static class DependencyInjection
{
    public static IServiceCollection AddInfrastructure(this IServiceCollection services, IConfiguration config)
    {
        var connectionString = config.GetConnectionString("DefaultConnection")
            ?? "Data Source=tomas.db";

        services.AddDbContext<AppDbContext>(options =>
        {
            if (connectionString.StartsWith("Host=") || connectionString.StartsWith("Server="))
                options.UseNpgsql(connectionString);
            else
                options.UseSqlite(connectionString);
        });

        services.AddIdentity<AppUser, IdentityRole>(options =>
        {
            options.Password.RequiredLength = 8;
            options.Password.RequireDigit = true;
            options.Password.RequireUppercase = true;
            options.Password.RequireLowercase = true;
            options.Password.RequireNonAlphanumeric = true;
            options.User.RequireUniqueEmail = true;
            options.SignIn.RequireConfirmedAccount = false;
        })
        .AddEntityFrameworkStores<AppDbContext>()
        .AddDefaultTokenProviders();

        services.AddHttpClient();
        services.AddScoped<RevalidationService>();
        services.AddScoped<MediaService>();
        services.AddScoped<PublicContentService>();
        services.AddScoped<ContactService>();
        services.AddScoped<AdminContentService>();

        return services;
    }
}
