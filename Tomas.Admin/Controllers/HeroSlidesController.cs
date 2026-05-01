using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Tomas.Application.DTOs;
using Tomas.Infrastructure.Services;

namespace Tomas.Admin.Controllers;

[Authorize]
public class HeroSlidesController : Controller
{
    private readonly AdminContentService _admin;
    private readonly MediaService _media;
    private readonly IWebHostEnvironment _env;

    public HeroSlidesController(AdminContentService admin, MediaService media, IWebHostEnvironment env)
    {
        _admin = admin;
        _media = media;
        _env = env;
    }

    public async Task<IActionResult> Index(string? search, int page = 1)
    {
        const int pageSize = 15;
        var (items, total) = await _admin.GetHeroSlidesPagedAsync(search, page, pageSize);
        ViewBag.Search = search;
        ViewBag.Page = page;
        ViewBag.PageSize = pageSize;
        ViewBag.Total = total;
        return View(items);
    }

    public IActionResult Create() => View(new HeroSlideFormDto());

    [HttpPost, ValidateAntiForgeryToken]
    public async Task<IActionResult> Create(HeroSlideFormDto dto, IFormFile? imageFile)
    {
        if (!ModelState.IsValid) return View(dto);

        if (imageFile != null)
        {
            var (ok, path, err) = await _media.UploadAsync(imageFile, _env.WebRootPath);
            if (!ok) { ModelState.AddModelError("", err!); return View(dto); }
            dto.ImagePath = path;
        }

        await _admin.CreateHeroSlideAsync(dto);
        TempData["Success"] = "Hero slide oluşturuldu.";
        return RedirectToAction(nameof(Index));
    }

    public async Task<IActionResult> Edit(int id)
    {
        var entity = await _admin.GetHeroSlideAsync(id);
        if (entity == null) return NotFound();
        return View(new HeroSlideFormDto
        {
            Id = entity.Id,
            Title = entity.Title,
            Subtitle = entity.Subtitle,
            Description = entity.Description,
            ImagePath = entity.ImagePath,
            PrimaryButtonText = entity.PrimaryButtonText,
            PrimaryButtonUrl = entity.PrimaryButtonUrl,
            SecondaryButtonText = entity.SecondaryButtonText,
            SecondaryButtonUrl = entity.SecondaryButtonUrl,
            LanguageCode = entity.LanguageCode,
            IsActive = entity.IsActive,
            SortOrder = entity.SortOrder
        });
    }

    [HttpPost, ValidateAntiForgeryToken]
    public async Task<IActionResult> Edit(HeroSlideFormDto dto, IFormFile? imageFile)
    {
        if (!ModelState.IsValid) return View(dto);

        if (imageFile != null)
        {
            var (ok, path, err) = await _media.UploadAsync(imageFile, _env.WebRootPath);
            if (!ok) { ModelState.AddModelError("", err!); return View(dto); }
            dto.ImagePath = path;
        }

        await _admin.UpdateHeroSlideAsync(dto);
        TempData["Success"] = "Hero slide güncellendi.";
        return RedirectToAction(nameof(Index));
    }

    [HttpPost, ValidateAntiForgeryToken]
    public async Task<IActionResult> Delete(int id)
    {
        await _admin.SoftDeleteHeroSlideAsync(id);
        TempData["Success"] = "Hero slide silindi.";
        return RedirectToAction(nameof(Index));
    }
}
