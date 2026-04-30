using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Tomas.Application.DTOs;
using Tomas.Infrastructure.Services;

namespace Tomas.Admin.Controllers;

[Authorize]
public class TestimonialsController : Controller
{
    private readonly AdminContentService _admin;
    private readonly MediaService _media;
    private readonly IWebHostEnvironment _env;

    public TestimonialsController(AdminContentService admin, MediaService media, IWebHostEnvironment env)
    {
        _admin = admin;
        _media = media;
        _env = env;
    }

    public async Task<IActionResult> Index(string? search, int page = 1)
    {
        const int pageSize = 15;
        var (items, total) = await _admin.GetTestimonialsPagedAsync(search, page, pageSize);
        ViewBag.Search = search;
        ViewBag.Page = page;
        ViewBag.PageSize = pageSize;
        ViewBag.Total = total;
        return View(items);
    }

    public IActionResult Create() => View(new TestimonialFormDto());

    [HttpPost, ValidateAntiForgeryToken]
    public async Task<IActionResult> Create(TestimonialFormDto dto, IFormFile? avatarFile)
    {
        if (!ModelState.IsValid) return View(dto);

        if (avatarFile != null)
        {
            var (ok, path, err) = await _media.UploadAsync(avatarFile, _env.WebRootPath);
            if (!ok) { ModelState.AddModelError("", err!); return View(dto); }
            dto.AvatarPath = path;
        }

        await _admin.CreateTestimonialAsync(dto);
        TempData["Success"] = "Müşteri yorumu oluşturuldu.";
        return RedirectToAction(nameof(Index));
    }

    public async Task<IActionResult> Edit(int id)
    {
        var entity = await _admin.GetTestimonialAsync(id);
        if (entity == null) return NotFound();
        return View(new TestimonialFormDto
        {
            Id = entity.Id,
            AuthorName = entity.AuthorName,
            AuthorTitle = entity.AuthorTitle,
            Company = entity.Company,
            Content = entity.Content,
            Rating = entity.Rating,
            AvatarPath = entity.AvatarPath,
            LanguageCode = entity.LanguageCode,
            IsActive = entity.IsActive,
            SortOrder = entity.SortOrder
        });
    }

    [HttpPost, ValidateAntiForgeryToken]
    public async Task<IActionResult> Edit(TestimonialFormDto dto, IFormFile? avatarFile)
    {
        if (!ModelState.IsValid) return View(dto);

        if (avatarFile != null)
        {
            var (ok, path, err) = await _media.UploadAsync(avatarFile, _env.WebRootPath);
            if (!ok) { ModelState.AddModelError("", err!); return View(dto); }
            dto.AvatarPath = path;
        }

        await _admin.UpdateTestimonialAsync(dto);
        TempData["Success"] = "Müşteri yorumu güncellendi.";
        return RedirectToAction(nameof(Index));
    }

    [HttpPost, ValidateAntiForgeryToken]
    public async Task<IActionResult> Delete(int id)
    {
        await _admin.SoftDeleteTestimonialAsync(id);
        TempData["Success"] = "Müşteri yorumu silindi.";
        return RedirectToAction(nameof(Index));
    }
}
