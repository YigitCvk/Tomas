using System.Globalization;
using System.Text;
using System.Text.RegularExpressions;

namespace Tomas.Infrastructure.Services;

public static class SlugService
{
    public static string Generate(string input)
    {
        if (string.IsNullOrWhiteSpace(input)) return string.Empty;

        var normalized = input.Normalize(NormalizationForm.FormD);
        var sb = new StringBuilder();
        foreach (var c in normalized)
        {
            var cat = CharUnicodeInfo.GetUnicodeCategory(c);
            if (cat != UnicodeCategory.NonSpacingMark)
                sb.Append(c);
        }

        var str = sb.ToString().Normalize(NormalizationForm.FormC).ToLowerInvariant();
        str = str
            .Replace("ş", "s").Replace("ğ", "g").Replace("ü", "u")
            .Replace("ö", "o").Replace("ı", "i").Replace("ç", "c")
            .Replace("İ", "i").Replace("Ş", "s").Replace("Ğ", "g");

        str = Regex.Replace(str, @"[^a-z0-9\s-]", "");
        str = Regex.Replace(str, @"\s+", "-");
        str = Regex.Replace(str, @"-+", "-");
        return str.Trim('-');
    }
}
