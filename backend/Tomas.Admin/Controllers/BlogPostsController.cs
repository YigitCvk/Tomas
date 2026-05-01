using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Tomas.Application.DTOs;
using Tomas.Infrastructure.Services;

namespace Tomas.Admin.Controllers;

[Authorize]
public class BlogPostsController : Controller
{
    private readonly AdminContentService _admin;
    private readonly MediaService _media;
    private readonly IWebHostEnvironment _env;

    public BlogPostsController(AdminContentService admin, MediaService media, IWebHostEnvironment env)
    {
        _admin = admin;
        _media = media;
        _env = env;
    }

    public async Task<IActionResult> Index(string? search, int page = 1)
    {
        const int pageSize = 15;
        var (items, total) = await _admin.GetBlogPostsPagedAsync(search, page, pageSize);
        ViewBag.Search = search;
        ViewBag.Page = page;
        ViewBag.PageSize = pageSize;
        ViewBag.Total = total;
        return View(items);
    }

    public IActionResult Create() => View(new BlogPostFormDto { PublishedAt = DateTime.Now });

    [HttpPost, ValidateAntiForgeryToken]
    public async Task<IActionResult> Create(BlogPostFormDto dto, IFormFile? imageFile)
    {
        if (!ModelState.IsValid) return View(dto);

        if (imageFile != null)
        {
            var (ok, path, err) = await _media.UploadAsync(imageFile, _env.WebRootPath);
            if (!ok) { ModelState.AddModelError("", err!); return View(dto); }
            dto.ImagePath = path;
        }

        await _admin.CreateBlogPostAsync(dto);
        TempData["Success"] = "Blog yazısı oluşturuldu.";
        return RedirectToAction(nameof(Index));
    }

    public async Task<IActionResult> Edit(int id)
    {
        var entity = await _admin.GetBlogPostAsync(id);
        if (entity == null) return NotFound();
        return View(new BlogPostFormDto
        {
            Id = entity.Id, Title = entity.Title, Slug = entity.Slug,
            Summary = entity.Summary, Content = entity.Content,
            ImagePath = entity.ImagePath, Author = entity.Author,
            LanguageCode = entity.LanguageCode, PublishedAt = entity.PublishedAt,
            MetaTitle = entity.MetaTitle, MetaDescription = entity.MetaDescription,
            CanonicalUrl = entity.CanonicalUrl, OgImagePath = entity.OgImagePath,
            IsActive = entity.IsActive, SortOrder = entity.SortOrder
        });
    }

    [HttpPost, ValidateAntiForgeryToken]
    public async Task<IActionResult> Edit(BlogPostFormDto dto, IFormFile? imageFile)
    {
        if (!ModelState.IsValid) return View(dto);

        if (imageFile != null)
        {
            var (ok, path, err) = await _media.UploadAsync(imageFile, _env.WebRootPath);
            if (!ok) { ModelState.AddModelError("", err!); return View(dto); }
            dto.ImagePath = path;
        }

        await _admin.UpdateBlogPostAsync(dto);
        TempData["Success"] = "Blog yazısı güncellendi.";
        return RedirectToAction(nameof(Index));
    }

    [HttpPost, ValidateAntiForgeryToken]
    public async Task<IActionResult> Delete(int id)
    {
        await _admin.SoftDeleteBlogPostAsync(id);
        TempData["Success"] = "Blog yazısı silindi.";
        return RedirectToAction(nameof(Index));
    }
}
