using System.ComponentModel.DataAnnotations;

namespace Tomas.Application.DTOs;

public class HeroSlideDto
{
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string? Subtitle { get; set; }
    public string? Description { get; set; }
    public string? ImagePath { get; set; }
    public string? PrimaryButtonText { get; set; }
    public string? PrimaryButtonUrl { get; set; }
    public string? SecondaryButtonText { get; set; }
    public string? SecondaryButtonUrl { get; set; }
    public string LanguageCode { get; set; } = "tr";
    public bool IsActive { get; set; }
    public int SortOrder { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}

public class HeroSlideFormDto
{
    public int Id { get; set; }

    [Required(ErrorMessage = "Başlık zorunludur.")]
    [MaxLength(200, ErrorMessage = "Başlık en fazla 200 karakter olabilir.")]
    public string Title { get; set; } = string.Empty;

    [MaxLength(200)]
    public string? Subtitle { get; set; }

    public string? Description { get; set; }
    public string? ImagePath { get; set; }

    [MaxLength(100)]
    public string? PrimaryButtonText { get; set; }

    [MaxLength(500)]
    public string? PrimaryButtonUrl { get; set; }

    [MaxLength(100)]
    public string? SecondaryButtonText { get; set; }

    [MaxLength(500)]
    public string? SecondaryButtonUrl { get; set; }

    public string LanguageCode { get; set; } = "tr";
    public bool IsActive { get; set; } = true;

    [Range(0, int.MaxValue, ErrorMessage = "Sıralama negatif olamaz.")]
    public int SortOrder { get; set; } = 0;
}
