namespace Tomas.Domain.Entities;

public class SiteSetting : BaseEntity
{
    public string Key { get; set; } = string.Empty;
    public string? Value { get; set; }
    public string? LanguageCode { get; set; }
    public string? Group { get; set; }
    public string? Description { get; set; }
}
