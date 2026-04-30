using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Tomas.Application.DTOs;
using Tomas.Infrastructure.Services;

namespace Tomas.Admin.Controllers;

[Authorize]
public class ServicesController : Controller
{
    private readonly AdminContentService _admin;
    private readonly MediaService _media;
    private readonly IWebHostEnvironment _env;

    public ServicesController(AdminContentService admin, MediaService media, IWebHostEnvironment env)
    {
        _admin = admin;
        _media = media;
        _env = env;
    }

    public async Task<IActionResult> Index(string? search, int page = 1)
    {
        const int pageSize = 15;
        var (items, total) = await _admin.GetServicesPagedAsync(search, page, pageSize);
        ViewBag.Search = search;
        ViewBag.Page = page;
        ViewBag.PageSize = pageSize;
        ViewBag.Total = total;
        return View(items);
    }

    public IActionResult Create() => View(new ServiceFormDto());

    [HttpPost, ValidateAntiForgeryToken]
    public async Task<IActionResult> Create(ServiceFormDto dto, IFormFile? imageFile)
    {
        if (!ModelState.IsValid) return View(dto);

        if (imageFile != null)
        {
            var (ok, path, err) = await _media.UploadAsync(imageFile, _env.WebRootPath);
            if (!ok) { ModelState.AddModelError("", err!); return View(dto); }
            dto.ImagePath = path;
        }

        await _admin.CreateServiceAsync(dto);
        TempData["Success"] = "Hizmet oluşturuldu.";
        return RedirectToAction(nameof(Index));
    }

    public async Task<IActionResult> Edit(int id)
    {
        var entity = await _admin.GetServiceAsync(id);
        if (entity == null) return NotFound();
        return View(new ServiceFormDto
        {
            Id = entity.Id, Title = entity.Title, Slug = entity.Slug,
            ShortDescription = entity.ShortDescription, Content = entity.Content,
            Icon = entity.Icon, ImagePath = entity.ImagePath,
            LanguageCode = entity.LanguageCode, MetaTitle = entity.MetaTitle,
            MetaDescription = entity.MetaDescription, CanonicalUrl = entity.CanonicalUrl,
            OgImagePath = entity.OgImagePath, IsActive = entity.IsActive, SortOrder = entity.SortOrder
        });
    }

    [HttpPost, ValidateAntiForgeryToken]
    public async Task<IActionResult> Edit(ServiceFormDto dto, IFormFile? imageFile)
    {
        if (!ModelState.IsValid) return View(dto);

        if (imageFile != null)
        {
            var (ok, path, err) = await _media.UploadAsync(imageFile, _env.WebRootPath);
            if (!ok) { ModelState.AddModelError("", err!); return View(dto); }
            dto.ImagePath = path;
        }

        await _admin.UpdateServiceAsync(dto);
        TempData["Success"] = "Hizmet güncellendi.";
        return RedirectToAction(nameof(Index));
    }

    [HttpPost, ValidateAntiForgeryToken]
    public async Task<IActionResult> Delete(int id)
    {
        await _admin.SoftDeleteServiceAsync(id);
        TempData["Success"] = "Hizmet silindi.";
        return RedirectToAction(nameof(Index));
    }

    [HttpGet]
    public IActionResult GenerateSlug(string title) =>
        Json(SlugService.Generate(title));
}
