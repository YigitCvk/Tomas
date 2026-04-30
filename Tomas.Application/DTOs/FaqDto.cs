using System.ComponentModel.DataAnnotations;

namespace Tomas.Application.DTOs;

public class FaqDto
{
    public int Id { get; set; }
    public string Question { get; set; } = string.Empty;
    public string Answer { get; set; } = string.Empty;
    public string LanguageCode { get; set; } = "tr";
    public bool IsActive { get; set; }
    public int SortOrder { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}

public class FaqFormDto
{
    public int Id { get; set; }

    [Required(ErrorMessage = "Soru zorunludur.")]
    [MaxLength(500, ErrorMessage = "Soru en fazla 500 karakter olabilir.")]
    public string Question { get; set; } = string.Empty;

    [Required(ErrorMessage = "Cevap zorunludur.")]
    public string Answer { get; set; } = string.Empty;

    public string LanguageCode { get; set; } = "tr";
    public bool IsActive { get; set; } = true;

    [Range(0, int.MaxValue, ErrorMessage = "Sıralama negatif olamaz.")]
    public int SortOrder { get; set; } = 0;
}
