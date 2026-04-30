using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Tomas.Infrastructure.Services;

namespace Tomas.Admin.Controllers;

[Authorize]
public class MediaAssetsController : Controller
{
    private readonly AdminContentService _admin;
    private readonly MediaService _media;
    private readonly IWebHostEnvironment _env;

    public MediaAssetsController(AdminContentService admin, MediaService media, IWebHostEnvironment env)
    {
        _admin = admin;
        _media = media;
        _env = env;
    }

    public async Task<IActionResult> Index(string? search, int page = 1)
    {
        const int pageSize = 24;
        var (items, total) = await _admin.GetMediaAssetsPagedAsync(search, page, pageSize);
        ViewBag.Search = search;
        ViewBag.Page = page;
        ViewBag.PageSize = pageSize;
        ViewBag.Total = total;
        return View(items);
    }

    [HttpPost, ValidateAntiForgeryToken]
    public async Task<IActionResult> Upload(IFormFile file)
    {
        if (file == null || file.Length == 0)
        {
            TempData["Error"] = "Dosya seçilmedi.";
            return RedirectToAction(nameof(Index));
        }

        var (ok, path, err) = await _media.UploadAsync(file, _env.WebRootPath);
        if (!ok)
        {
            TempData["Error"] = err;
            return RedirectToAction(nameof(Index));
        }

        var fileName = System.IO.Path.GetFileName(path!);
        await _admin.SaveMediaAssetAsync(
            fileName,
            file.FileName,
            path!,
            file.ContentType,
            file.Length,
            User.Identity?.Name);

        TempData["Success"] = $"'{file.FileName}' başarıyla yüklendi.";
        return RedirectToAction(nameof(Index));
    }

    [HttpPost, ValidateAntiForgeryToken]
    public async Task<IActionResult> UpdateAltText(int id, string? altText)
    {
        await _admin.UpdateMediaAssetAltTextAsync(id, altText);
        return Json(new { success = true });
    }

    [HttpPost, ValidateAntiForgeryToken]
    public async Task<IActionResult> Delete(int id)
    {
        var asset = await _admin.GetMediaAssetAsync(id);
        if (asset != null)
        {
            _media.Delete(_env.WebRootPath, asset.FilePath);
            await _admin.SoftDeleteMediaAssetAsync(id);
        }
        TempData["Success"] = "Medya dosyası silindi.";
        return RedirectToAction(nameof(Index));
    }
}
