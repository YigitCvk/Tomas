namespace Tomas.Domain.Entities;

public class ContactMessage : BaseEntity
{
    public string FullName { get; set; } = string.Empty;
    public string? CompanyName { get; set; }
    public string Email { get; set; } = string.Empty;
    public string? Phone { get; set; }
    public string? Country { get; set; }
    public int? InterestedServiceId { get; set; }
    public Service? InterestedService { get; set; }
    public string Message { get; set; } = string.Empty;
    public bool ConsentAccepted { get; set; }
    public string? IpAddress { get; set; }
    public string? UserAgent { get; set; }
    public bool IsRead { get; set; } = false;
    public bool IsReplied { get; set; } = false;
    public string? AdminNote { get; set; }
    public DateTime? ReadAt { get; set; }
    public DateTime? RepliedAt { get; set; }
}
