using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;

namespace Tomas.Infrastructure.Services;

public class MediaService
{
    private static readonly string[] AllowedExtensions = [".jpg", ".jpeg", ".png", ".webp"];
    private const long MaxFileSizeBytes = 5 * 1024 * 1024;
    private readonly ILogger<MediaService> _logger;

    public MediaService(ILogger<MediaService> logger)
    {
        _logger = logger;
    }

    public async Task<(bool Success, string? RelativePath, string? Error)> UploadAsync(
        IFormFile file,
        string webRootPath,
        string subFolder = "uploads")
    {
        if (file == null || file.Length == 0)
            return (false, null, "Dosya seçilmedi.");

        if (file.Length > MaxFileSizeBytes)
            return (false, null, "Dosya boyutu 5MB sınırını aşıyor.");

        var ext = Path.GetExtension(file.FileName).ToLowerInvariant();
        if (!AllowedExtensions.Contains(ext))
            return (false, null, "Sadece JPG, JPEG, PNG ve WEBP formatları desteklenmektedir.");

        var folder = Path.Combine(webRootPath, subFolder);
        Directory.CreateDirectory(folder);

        var safeFileName = $"{Guid.NewGuid():N}{ext}";
        var fullPath = Path.Combine(folder, safeFileName);

        try
        {
            await using var stream = new FileStream(fullPath, FileMode.Create);
            await file.CopyToAsync(stream);
            var relativePath = $"/{subFolder}/{safeFileName}";
            return (true, relativePath, null);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Dosya yüklenirken hata oluştu.");
            return (false, null, "Dosya yüklenirken bir hata oluştu.");
        }
    }

    public void Delete(string webRootPath, string relativePath)
    {
        if (string.IsNullOrWhiteSpace(relativePath)) return;
        var fullPath = Path.Combine(webRootPath, relativePath.TrimStart('/').Replace('/', Path.DirectorySeparatorChar));
        if (File.Exists(fullPath))
            File.Delete(fullPath);
    }
}
