using System.ComponentModel.DataAnnotations;

namespace Tomas.Application.DTOs;

public class ServiceDto
{
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Slug { get; set; } = string.Empty;
    public string? ShortDescription { get; set; }
    public string? Content { get; set; }
    public string? Icon { get; set; }
    public string? ImagePath { get; set; }
    public string LanguageCode { get; set; } = "tr";
    public string? MetaTitle { get; set; }
    public string? MetaDescription { get; set; }
    public string? CanonicalUrl { get; set; }
    public string? OgImagePath { get; set; }
    public bool IsActive { get; set; }
    public int SortOrder { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}

public class ServiceFormDto
{
    public int Id { get; set; }

    [Required(ErrorMessage = "Başlık zorunludur.")]
    [MaxLength(200, ErrorMessage = "Başlık en fazla 200 karakter olabilir.")]
    public string Title { get; set; } = string.Empty;

    [MaxLength(200, ErrorMessage = "Slug en fazla 200 karakter olabilir.")]
    public string? Slug { get; set; }

    public string? ShortDescription { get; set; }
    public string? Content { get; set; }

    [MaxLength(50)]
    public string? Icon { get; set; }

    public string? ImagePath { get; set; }
    public string LanguageCode { get; set; } = "tr";

    [MaxLength(70, ErrorMessage = "Meta başlık en fazla 70 karakter olabilir.")]
    public string? MetaTitle { get; set; }

    [MaxLength(160, ErrorMessage = "Meta açıklama en fazla 160 karakter olabilir.")]
    public string? MetaDescription { get; set; }

    public string? CanonicalUrl { get; set; }
    public string? OgImagePath { get; set; }
    public bool IsActive { get; set; } = true;

    [Range(0, int.MaxValue, ErrorMessage = "Sıralama negatif olamaz.")]
    public int SortOrder { get; set; } = 0;
}
