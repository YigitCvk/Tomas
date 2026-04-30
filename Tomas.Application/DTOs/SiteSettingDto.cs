namespace Tomas.Application.DTOs;

public class SiteSettingDto
{
    public int Id { get; set; }
    public string Key { get; set; } = string.Empty;
    public string? Value { get; set; }
    public string? LanguageCode { get; set; }
    public string? Group { get; set; }
    public string? Description { get; set; }
}

public class SiteSettingsViewModel
{
    public string SiteName { get; set; } = "Tomas Dış Ticaret";
    public string SiteDescription { get; set; } = string.Empty;
    public string DefaultLanguage { get; set; } = "tr";
    public string Phone { get; set; } = string.Empty;
    public string GSM { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string Address { get; set; } = string.Empty;
    public string WhatsApp { get; set; } = string.Empty;
    public string LinkedIn { get; set; } = string.Empty;
    public string Twitter { get; set; } = string.Empty;
    public string MetaTitle { get; set; } = string.Empty;
    public string MetaDescription { get; set; } = string.Empty;
    public string GoogleAnalyticsId { get; set; } = string.Empty;
}
