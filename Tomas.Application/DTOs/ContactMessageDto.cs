using System.ComponentModel.DataAnnotations;

namespace Tomas.Application.DTOs;

public class ContactMessageDto
{
    public int Id { get; set; }
    public string FullName { get; set; } = string.Empty;
    public string? CompanyName { get; set; }
    public string Email { get; set; } = string.Empty;
    public string? Phone { get; set; }
    public string? Country { get; set; }
    public int? InterestedServiceId { get; set; }
    public string? InterestedServiceTitle { get; set; }
    public string Message { get; set; } = string.Empty;
    public bool ConsentAccepted { get; set; }
    public string? IpAddress { get; set; }
    public bool IsRead { get; set; }
    public bool IsReplied { get; set; }
    public string? AdminNote { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime? ReadAt { get; set; }
    public DateTime? RepliedAt { get; set; }
}

public class ContactFormDto
{
    [Required(ErrorMessage = "Ad Soyad zorunludur.")]
    [MaxLength(150)]
    public string FullName { get; set; } = string.Empty;

    [MaxLength(200)]
    public string? CompanyName { get; set; }

    [Required(ErrorMessage = "E-posta adresi zorunludur.")]
    [EmailAddress(ErrorMessage = "Geçerli bir e-posta adresi giriniz.")]
    [MaxLength(200)]
    public string Email { get; set; } = string.Empty;

    [MaxLength(30)]
    public string? Phone { get; set; }

    [MaxLength(100)]
    public string? Country { get; set; }

    public int? InterestedServiceId { get; set; }

    [Required(ErrorMessage = "Mesaj zorunludur.")]
    [MaxLength(2000)]
    public string Message { get; set; } = string.Empty;

    [Range(typeof(bool), "true", "true", ErrorMessage = "KVKK onayı zorunludur.")]
    public bool ConsentAccepted { get; set; }

    public string? Honeypot { get; set; }
}
