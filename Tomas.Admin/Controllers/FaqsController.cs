using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Tomas.Application.DTOs;
using Tomas.Infrastructure.Services;

namespace Tomas.Admin.Controllers;

[Authorize]
public class FaqsController : Controller
{
    private readonly AdminContentService _admin;

    public FaqsController(AdminContentService admin) => _admin = admin;

    public async Task<IActionResult> Index(string? search, int page = 1)
    {
        const int pageSize = 20;
        var (items, total) = await _admin.GetFaqsPagedAsync(search, page, pageSize);
        ViewBag.Search = search;
        ViewBag.Page = page;
        ViewBag.PageSize = pageSize;
        ViewBag.Total = total;
        return View(items);
    }

    public IActionResult Create() => View(new FaqFormDto());

    [HttpPost, ValidateAntiForgeryToken]
    public async Task<IActionResult> Create(FaqFormDto dto)
    {
        if (!ModelState.IsValid) return View(dto);
        await _admin.CreateFaqAsync(dto);
        TempData["Success"] = "SSS sorusu oluşturuldu.";
        return RedirectToAction(nameof(Index));
    }

    public async Task<IActionResult> Edit(int id)
    {
        var entity = await _admin.GetFaqAsync(id);
        if (entity == null) return NotFound();
        return View(new FaqFormDto
        {
            Id = entity.Id,
            Question = entity.Question,
            Answer = entity.Answer,
            LanguageCode = entity.LanguageCode,
            IsActive = entity.IsActive,
            SortOrder = entity.SortOrder
        });
    }

    [HttpPost, ValidateAntiForgeryToken]
    public async Task<IActionResult> Edit(FaqFormDto dto)
    {
        if (!ModelState.IsValid) return View(dto);
        await _admin.UpdateFaqAsync(dto);
        TempData["Success"] = "SSS sorusu güncellendi.";
        return RedirectToAction(nameof(Index));
    }

    [HttpPost, ValidateAntiForgeryToken]
    public async Task<IActionResult> Delete(int id)
    {
        await _admin.SoftDeleteFaqAsync(id);
        TempData["Success"] = "SSS sorusu silindi.";
        return RedirectToAction(nameof(Index));
    }
}
