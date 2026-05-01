namespace Tomas.Domain.Entities;

public class Faq : BaseEntity
{
    public string Question { get; set; } = string.Empty;
    public string Answer { get; set; } = string.Empty;
    public string LanguageCode { get; set; } = "tr";
    public bool IsActive { get; set; } = true;
    public int SortOrder { get; set; } = 0;
}
