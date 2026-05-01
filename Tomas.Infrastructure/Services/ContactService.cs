using Microsoft.EntityFrameworkCore;
using Tomas.Application.DTOs;
using Tomas.Domain.Entities;
using Tomas.Infrastructure.Data;

namespace Tomas.Infrastructure.Services;

public class ContactService
{
    private readonly AppDbContext _db;

    public ContactService(AppDbContext db)
    {
        _db = db;
    }

    public async Task<bool> SubmitAsync(ContactFormDto form, string? ipAddress, string? userAgent)
    {
        if (!string.IsNullOrWhiteSpace(form.Honeypot))
            return true;

        var message = new ContactMessage
        {
            FullName = form.FullName,
            CompanyName = form.CompanyName,
            Email = form.Email,
            Phone = form.Phone,
            Country = form.Country,
            InterestedServiceId = form.InterestedServiceId,
            Message = form.Message,
            ConsentAccepted = form.ConsentAccepted,
            IpAddress = ipAddress,
            UserAgent = userAgent,
        };

        _db.ContactMessages.Add(message);
        await _db.SaveChangesAsync();
        return true;
    }

    public async Task<(List<ContactMessageDto> Items, int Total)> GetPagedAsync(int page, int pageSize, bool? unreadOnly = null)
    {
        var query = _db.ContactMessages
            .Include(m => m.InterestedService)
            .AsQueryable();

        if (unreadOnly == true)
            query = query.Where(m => !m.IsRead);

        var total = await query.CountAsync();
        var items = await query
            .OrderByDescending(m => m.CreatedAt)
            .Skip((page - 1) * pageSize)
            .Take(pageSize)
            .Select(m => MapToDto(m))
            .ToListAsync();

        return (items, total);
    }

    public async Task<ContactMessageDto?> GetByIdAsync(int id)
    {
        var m = await _db.ContactMessages
            .Include(x => x.InterestedService)
            .FirstOrDefaultAsync(x => x.Id == id);
        if (m == null) return null;

        if (!m.IsRead)
        {
            m.IsRead = true;
            m.ReadAt = DateTime.UtcNow;
            await _db.SaveChangesAsync();
        }

        return MapToDto(m);
    }

    public async Task MarkRepliedAsync(int id, string? adminNote)
    {
        var m = await _db.ContactMessages.FindAsync(id);
        if (m == null) return;
        m.IsReplied = true;
        m.RepliedAt = DateTime.UtcNow;
        m.AdminNote = adminNote;
        await _db.SaveChangesAsync();
    }

    public async Task<int> GetUnreadCountAsync()
    {
        return await _db.ContactMessages.CountAsync(m => !m.IsRead);
    }

    public async Task<List<ContactMessageDto>> GetAllForExportAsync()
    {
        return await _db.ContactMessages
            .Include(m => m.InterestedService)
            .OrderByDescending(m => m.CreatedAt)
            .Select(m => MapToDto(m))
            .ToListAsync();
    }

    private static ContactMessageDto MapToDto(ContactMessage m) => new()
    {
        Id = m.Id,
        FullName = m.FullName,
        CompanyName = m.CompanyName,
        Email = m.Email,
        Phone = m.Phone,
        Country = m.Country,
        InterestedServiceId = m.InterestedServiceId,
        InterestedServiceTitle = m.InterestedService?.Title,
        Message = m.Message,
        ConsentAccepted = m.ConsentAccepted,
        IpAddress = m.IpAddress,
        IsRead = m.IsRead,
        IsReplied = m.IsReplied,
        AdminNote = m.AdminNote,
        CreatedAt = m.CreatedAt,
        ReadAt = m.ReadAt,
        RepliedAt = m.RepliedAt
    };
}
