using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Text;
using Tomas.Infrastructure.Services;

namespace Tomas.Admin.Controllers;

[Authorize]
public class ContactMessagesController : Controller
{
    private readonly ContactService _contact;

    public ContactMessagesController(ContactService contact)
    {
        _contact = contact;
    }

    public async Task<IActionResult> Index(int page = 1, bool? unreadOnly = null)
    {
        const int pageSize = 20;
        var (items, total) = await _contact.GetPagedAsync(page, pageSize, unreadOnly);
        ViewBag.Page = page;
        ViewBag.PageSize = pageSize;
        ViewBag.Total = total;
        ViewBag.UnreadOnly = unreadOnly;
        return View(items);
    }

    public async Task<IActionResult> Details(int id)
    {
        var msg = await _contact.GetByIdAsync(id);
        if (msg == null) return NotFound();
        return View(msg);
    }

    [HttpPost, ValidateAntiForgeryToken]
    public async Task<IActionResult> MarkReplied(int id, string? adminNote)
    {
        await _contact.MarkRepliedAsync(id, adminNote);
        TempData["Success"] = "Yanıtlandı olarak işaretlendi.";
        return RedirectToAction(nameof(Details), new { id });
    }

    public async Task<IActionResult> ExportCsv()
    {
        var messages = await _contact.GetAllForExportAsync();
        var sb = new StringBuilder();
        sb.AppendLine("Id,Ad Soyad,Şirket,E-posta,Telefon,Ülke,Hizmet,Mesaj,Tarih,Okundu,Yanıtlandı");
        foreach (var m in messages)
        {
            sb.AppendLine($"{m.Id}," +
                $"\"{m.FullName}\"," +
                $"\"{m.CompanyName}\"," +
                $"\"{m.Email}\"," +
                $"\"{m.Phone}\"," +
                $"\"{m.Country}\"," +
                $"\"{m.InterestedServiceTitle}\"," +
                $"\"{m.Message?.Replace("\"", "\"\"")}\"," +
                $"{m.CreatedAt:yyyy-MM-dd HH:mm}," +
                $"{m.IsRead}," +
                $"{m.IsReplied}");
        }

        var bytes = Encoding.UTF8.GetPreamble().Concat(Encoding.UTF8.GetBytes(sb.ToString())).ToArray();
        return File(bytes, "text/csv", $"mesajlar_{DateTime.Now:yyyyMMdd}.csv");
    }
}
