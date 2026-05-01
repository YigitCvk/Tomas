using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Tomas.Infrastructure.Services;

namespace Tomas.Admin.Controllers;

[Authorize]
public class DashboardController : Controller
{
    private readonly AdminContentService _admin;

    public DashboardController(AdminContentService admin)
    {
        _admin = admin;
    }

    public async Task<IActionResult> Index()
    {
        var stats = await _admin.GetDashboardStatsAsync();
        return View(stats);
    }
}
