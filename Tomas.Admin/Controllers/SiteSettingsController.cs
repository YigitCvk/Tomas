using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Tomas.Infrastructure.Services;

namespace Tomas.Admin.Controllers;

[Authorize]
public class SiteSettingsController : Controller
{
    private readonly AdminContentService _admin;
    private readonly MediaService _media;
    private readonly IWebHostEnvironment _env;

    private static readonly string[] SettingKeys =
    [
        "SiteName", "SiteDescription", "DefaultLanguage",
        "Phone", "GSM", "Email", "Address", "WhatsApp",
        "Facebook", "Instagram", "LinkedIn", "Twitter",
        "MetaTitle", "MetaDescription", "GoogleAnalyticsId", "GoogleTagManagerId",
        "LogoPath", "FooterLogoPath", "DefaultOgImagePath"
    ];

    public SiteSettingsController(AdminContentService admin, MediaService media, IWebHostEnvironment env)
    {
        _admin = admin;
        _media = media;
        _env = env;
    }

    public async Task<IActionResult> Index()
    {
        var settings = await _admin.GetAllSettingsAsync();
        var dict = settings.ToDictionary(s => s.Key, s => s.Value ?? string.Empty);

        // ensure all keys are present
        foreach (var key in SettingKeys)
            dict.TryAdd(key, string.Empty);

        ViewData["Title"] = "Site Ayarları";
        return View(dict);
    }

    [HttpPost, ValidateAntiForgeryToken]
    public async Task<IActionResult> Index(Dictionary<string, string?> settings, IFormFile? logoFile, IFormFile? footerLogoFile, IFormFile? ogImageFile)
    {
        if (logoFile != null)
        {
            var (ok, path, _) = await _media.UploadAsync(logoFile, _env.WebRootPath);
            if (ok) settings["LogoPath"] = path;
        }
        if (footerLogoFile != null)
        {
            var (ok, path, _) = await _media.UploadAsync(footerLogoFile, _env.WebRootPath);
            if (ok) settings["FooterLogoPath"] = path;
        }
        if (ogImageFile != null)
        {
            var (ok, path, _) = await _media.UploadAsync(ogImageFile, _env.WebRootPath);
            if (ok) settings["DefaultOgImagePath"] = path;
        }

        await _admin.UpsertSettingsAsync(settings);
        TempData["Success"] = "Site ayarları kaydedildi.";
        return RedirectToAction(nameof(Index));
    }
}
