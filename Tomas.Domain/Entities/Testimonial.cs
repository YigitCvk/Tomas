namespace Tomas.Domain.Entities;

public class Testimonial : BaseEntity
{
    public string AuthorName { get; set; } = string.Empty;
    public string? AuthorTitle { get; set; }
    public string? Company { get; set; }
    public string Content { get; set; } = string.Empty;
    public int Rating { get; set; } = 5;
    public string? AvatarPath { get; set; }
    public string LanguageCode { get; set; } = "tr";
    public bool IsActive { get; set; } = true;
    public int SortOrder { get; set; } = 0;
}
