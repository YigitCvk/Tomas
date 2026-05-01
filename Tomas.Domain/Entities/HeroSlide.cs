namespace Tomas.Domain.Entities;

public class HeroSlide : BaseEntity
{
    public string Title { get; set; } = string.Empty;
    public string? Subtitle { get; set; }
    public string? Description { get; set; }
    public string? ImagePath { get; set; }
    public string? PrimaryButtonText { get; set; }
    public string? PrimaryButtonUrl { get; set; }
    public string? SecondaryButtonText { get; set; }
    public string? SecondaryButtonUrl { get; set; }
    public string LanguageCode { get; set; } = "tr";
    public bool IsActive { get; set; } = true;
    public int SortOrder { get; set; } = 0;
}
