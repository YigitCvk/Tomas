using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Tomas.Application.DTOs;
using Tomas.Infrastructure.Services;

namespace Tomas.Admin.Controllers;

[Authorize]
public class PagesController : Controller
{
    private readonly AdminContentService _admin;
    private readonly MediaService _media;
    private readonly IWebHostEnvironment _env;

    public PagesController(AdminContentService admin, MediaService media, IWebHostEnvironment env)
    {
        _admin = admin;
        _media = media;
        _env = env;
    }

    public async Task<IActionResult> Index(string? search, int page = 1)
    {
        const int pageSize = 15;
        var (items, total) = await _admin.GetPagesPagedAsync(search, page, pageSize);
        ViewBag.Search = search;
        ViewBag.Page = page;
        ViewBag.PageSize = pageSize;
        ViewBag.Total = total;
        return View(items);
    }

    public IActionResult Create() => View(new PageFormDto());

    [HttpPost, ValidateAntiForgeryToken]
    public async Task<IActionResult> Create(PageFormDto dto, IFormFile? imageFile)
    {
        if (!ModelState.IsValid) return View(dto);

        if (imageFile != null)
        {
            var (ok, path, err) = await _media.UploadAsync(imageFile, _env.WebRootPath);
            if (!ok) { ModelState.AddModelError("", err!); return View(dto); }
            dto.ImagePath = path;
        }

        await _admin.CreatePageAsync(dto);
        TempData["Success"] = "Sayfa oluşturuldu.";
        return RedirectToAction(nameof(Index));
    }

    public async Task<IActionResult> Edit(int id)
    {
        var entity = await _admin.GetPageAsync(id);
        if (entity == null) return NotFound();
        return View(new PageFormDto
        {
            Id = entity.Id,
            Title = entity.Title,
            Slug = entity.Slug,
            ShortDescription = entity.ShortDescription,
            Content = entity.Content,
            ImagePath = entity.ImagePath,
            LanguageCode = entity.LanguageCode,
            MetaTitle = entity.MetaTitle,
            MetaDescription = entity.MetaDescription,
            CanonicalUrl = entity.CanonicalUrl,
            OgImagePath = entity.OgImagePath,
            IsActive = entity.IsActive,
            SortOrder = entity.SortOrder
        });
    }

    [HttpPost, ValidateAntiForgeryToken]
    public async Task<IActionResult> Edit(PageFormDto dto, IFormFile? imageFile)
    {
        if (!ModelState.IsValid) return View(dto);

        if (imageFile != null)
        {
            var (ok, path, err) = await _media.UploadAsync(imageFile, _env.WebRootPath);
            if (!ok) { ModelState.AddModelError("", err!); return View(dto); }
            dto.ImagePath = path;
        }

        await _admin.UpdatePageAsync(dto);
        TempData["Success"] = "Sayfa güncellendi.";
        return RedirectToAction(nameof(Index));
    }

    [HttpPost, ValidateAntiForgeryToken]
    public async Task<IActionResult> Delete(int id)
    {
        await _admin.SoftDeletePageAsync(id);
        TempData["Success"] = "Sayfa silindi.";
        return RedirectToAction(nameof(Index));
    }

    [HttpGet]
    public IActionResult GenerateSlug(string title) => Json(SlugService.Generate(title));
}
