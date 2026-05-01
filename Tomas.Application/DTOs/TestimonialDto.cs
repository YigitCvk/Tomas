using System.ComponentModel.DataAnnotations;

namespace Tomas.Application.DTOs;

public class TestimonialDto
{
    public int Id { get; set; }
    public string AuthorName { get; set; } = string.Empty;
    public string? AuthorTitle { get; set; }
    public string? Company { get; set; }
    public string Content { get; set; } = string.Empty;
    public int Rating { get; set; }
    public string? AvatarPath { get; set; }
    public string LanguageCode { get; set; } = "tr";
    public bool IsActive { get; set; }
    public int SortOrder { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}

public class TestimonialFormDto
{
    public int Id { get; set; }

    [Required(ErrorMessage = "İsim zorunludur.")]
    [MaxLength(150, ErrorMessage = "İsim en fazla 150 karakter olabilir.")]
    public string AuthorName { get; set; } = string.Empty;

    [MaxLength(150)]
    public string? AuthorTitle { get; set; }

    [MaxLength(150)]
    public string? Company { get; set; }

    [Required(ErrorMessage = "Yorum zorunludur.")]
    public string Content { get; set; } = string.Empty;

    [Range(1, 5, ErrorMessage = "Puan 1 ile 5 arasında olmalıdır.")]
    public int Rating { get; set; } = 5;

    public string? AvatarPath { get; set; }
    public string LanguageCode { get; set; } = "tr";
    public bool IsActive { get; set; } = true;

    [Range(0, int.MaxValue, ErrorMessage = "Sıralama negatif olamaz.")]
    public int SortOrder { get; set; } = 0;
}
