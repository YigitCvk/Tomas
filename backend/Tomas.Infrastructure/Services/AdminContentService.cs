using Microsoft.EntityFrameworkCore;
using Tomas.Application.DTOs;
using Tomas.Domain.Entities;
using Tomas.Infrastructure.Data;

namespace Tomas.Infrastructure.Services;

public class AdminContentService
{
    private readonly AppDbContext _db;
    private readonly RevalidationService _revalidation;

    public AdminContentService(AppDbContext db, RevalidationService revalidation)
    {
        _db = db;
        _revalidation = revalidation;
    }

    // ── Services ──────────────────────────────────────────────────────────────

    public async Task<(List<Service> Items, int Total)> GetServicesPagedAsync(string? search, int page, int pageSize)
    {
        var q = _db.Services.IgnoreQueryFilters().Where(x => !x.IsDeleted).AsQueryable();
        if (!string.IsNullOrWhiteSpace(search))
            q = q.Where(x => x.Title.Contains(search) || x.Slug.Contains(search));
        var total = await q.CountAsync();
        var items = await q.OrderBy(x => x.SortOrder).ThenByDescending(x => x.CreatedAt)
            .Skip((page - 1) * pageSize).Take(pageSize).ToListAsync();
        return (items, total);
    }

    public async Task<Service?> GetServiceAsync(int id) =>
        await _db.Services.IgnoreQueryFilters().FirstOrDefaultAsync(x => x.Id == id && !x.IsDeleted);

    public async Task<Service> CreateServiceAsync(ServiceFormDto dto)
    {
        var entity = new Service
        {
            Title = dto.Title,
            Slug = EnsureUniqueSlug(string.IsNullOrWhiteSpace(dto.Slug) ? SlugService.Generate(dto.Title) : dto.Slug, 0, "service"),
            ShortDescription = dto.ShortDescription,
            Content = dto.Content,
            Icon = dto.Icon,
            ImagePath = dto.ImagePath,
            LanguageCode = dto.LanguageCode,
            MetaTitle = dto.MetaTitle,
            MetaDescription = dto.MetaDescription,
            CanonicalUrl = dto.CanonicalUrl,
            OgImagePath = dto.OgImagePath,
            IsActive = dto.IsActive,
            SortOrder = dto.SortOrder
        };
        _db.Services.Add(entity);
        await _db.SaveChangesAsync();
        _revalidation.TriggerAsync();
        return entity;
    }

    public async Task UpdateServiceAsync(ServiceFormDto dto)
    {
        var entity = await GetServiceAsync(dto.Id) ?? throw new KeyNotFoundException();
        entity.Title = dto.Title;
        entity.Slug = EnsureUniqueSlug(string.IsNullOrWhiteSpace(dto.Slug) ? SlugService.Generate(dto.Title) : dto.Slug, dto.Id, "service");
        entity.ShortDescription = dto.ShortDescription;
        entity.Content = dto.Content;
        entity.Icon = dto.Icon;
        entity.ImagePath = dto.ImagePath;
        entity.LanguageCode = dto.LanguageCode;
        entity.MetaTitle = dto.MetaTitle;
        entity.MetaDescription = dto.MetaDescription;
        entity.CanonicalUrl = dto.CanonicalUrl;
        entity.OgImagePath = dto.OgImagePath;
        entity.IsActive = dto.IsActive;
        entity.SortOrder = dto.SortOrder;
        entity.UpdatedAt = DateTime.UtcNow;
        await _db.SaveChangesAsync();
        _revalidation.TriggerAsync();
    }

    public async Task SoftDeleteServiceAsync(int id)
    {
        var entity = await GetServiceAsync(id);
        if (entity == null) return;
        entity.IsDeleted = true;
        entity.DeletedAt = DateTime.UtcNow;
        await _db.SaveChangesAsync();
        _revalidation.TriggerAsync();
    }

    // ── Blog Posts ─────────────────────────────────────────────────────────────

    public async Task<(List<BlogPost> Items, int Total)> GetBlogPostsPagedAsync(string? search, int page, int pageSize)
    {
        var q = _db.BlogPosts.IgnoreQueryFilters().Where(x => !x.IsDeleted).AsQueryable();
        if (!string.IsNullOrWhiteSpace(search))
            q = q.Where(x => x.Title.Contains(search) || x.Slug.Contains(search));
        var total = await q.CountAsync();
        var items = await q.OrderByDescending(x => x.CreatedAt)
            .Skip((page - 1) * pageSize).Take(pageSize).ToListAsync();
        return (items, total);
    }

    public async Task<BlogPost?> GetBlogPostAsync(int id) =>
        await _db.BlogPosts.IgnoreQueryFilters().FirstOrDefaultAsync(x => x.Id == id && !x.IsDeleted);

    public async Task<BlogPost> CreateBlogPostAsync(BlogPostFormDto dto)
    {
        var entity = new BlogPost
        {
            Title = dto.Title,
            Slug = EnsureUniqueSlug(string.IsNullOrWhiteSpace(dto.Slug) ? SlugService.Generate(dto.Title) : dto.Slug, 0, "blog"),
            Summary = dto.Summary,
            Content = dto.Content,
            ImagePath = dto.ImagePath,
            Author = dto.Author,
            LanguageCode = dto.LanguageCode,
            PublishedAt = dto.PublishedAt,
            MetaTitle = dto.MetaTitle,
            MetaDescription = dto.MetaDescription,
            CanonicalUrl = dto.CanonicalUrl,
            OgImagePath = dto.OgImagePath,
            IsActive = dto.IsActive,
            SortOrder = dto.SortOrder
        };
        _db.BlogPosts.Add(entity);
        await _db.SaveChangesAsync();
        _revalidation.TriggerAsync();
        return entity;
    }

    public async Task UpdateBlogPostAsync(BlogPostFormDto dto)
    {
        var entity = await GetBlogPostAsync(dto.Id) ?? throw new KeyNotFoundException();
        entity.Title = dto.Title;
        entity.Slug = EnsureUniqueSlug(string.IsNullOrWhiteSpace(dto.Slug) ? SlugService.Generate(dto.Title) : dto.Slug, dto.Id, "blog");
        entity.Summary = dto.Summary;
        entity.Content = dto.Content;
        entity.ImagePath = dto.ImagePath;
        entity.Author = dto.Author;
        entity.LanguageCode = dto.LanguageCode;
        entity.PublishedAt = dto.PublishedAt;
        entity.MetaTitle = dto.MetaTitle;
        entity.MetaDescription = dto.MetaDescription;
        entity.CanonicalUrl = dto.CanonicalUrl;
        entity.OgImagePath = dto.OgImagePath;
        entity.IsActive = dto.IsActive;
        entity.SortOrder = dto.SortOrder;
        entity.UpdatedAt = DateTime.UtcNow;
        await _db.SaveChangesAsync();
        _revalidation.TriggerAsync();
    }

    public async Task SoftDeleteBlogPostAsync(int id)
    {
        var entity = await GetBlogPostAsync(id);
        if (entity == null) return;
        entity.IsDeleted = true;
        entity.DeletedAt = DateTime.UtcNow;
        await _db.SaveChangesAsync();
        _revalidation.TriggerAsync();
    }

    // ── Pages ──────────────────────────────────────────────────────────────────

    public async Task<(List<Page> Items, int Total)> GetPagesPagedAsync(string? search, int page, int pageSize)
    {
        var q = _db.Pages.IgnoreQueryFilters().Where(x => !x.IsDeleted).AsQueryable();
        if (!string.IsNullOrWhiteSpace(search))
            q = q.Where(x => x.Title.Contains(search) || x.Slug.Contains(search));
        var total = await q.CountAsync();
        var items = await q.OrderBy(x => x.SortOrder).ThenByDescending(x => x.CreatedAt)
            .Skip((page - 1) * pageSize).Take(pageSize).ToListAsync();
        return (items, total);
    }

    public async Task<Page?> GetPageAsync(int id) =>
        await _db.Pages.IgnoreQueryFilters().FirstOrDefaultAsync(x => x.Id == id && !x.IsDeleted);

    public async Task<Page> CreatePageAsync(PageFormDto dto)
    {
        var entity = new Page
        {
            Title = dto.Title,
            Slug = EnsureUniqueSlug(string.IsNullOrWhiteSpace(dto.Slug) ? SlugService.Generate(dto.Title) : dto.Slug, 0, "page"),
            ShortDescription = dto.ShortDescription,
            Content = dto.Content,
            ImagePath = dto.ImagePath,
            LanguageCode = dto.LanguageCode,
            MetaTitle = dto.MetaTitle,
            MetaDescription = dto.MetaDescription,
            CanonicalUrl = dto.CanonicalUrl,
            OgImagePath = dto.OgImagePath,
            IsActive = dto.IsActive,
            SortOrder = dto.SortOrder
        };
        _db.Pages.Add(entity);
        await _db.SaveChangesAsync();
        _revalidation.TriggerAsync();
        return entity;
    }

    public async Task UpdatePageAsync(PageFormDto dto)
    {
        var entity = await GetPageAsync(dto.Id) ?? throw new KeyNotFoundException();
        entity.Title = dto.Title;
        entity.Slug = EnsureUniqueSlug(string.IsNullOrWhiteSpace(dto.Slug) ? SlugService.Generate(dto.Title) : dto.Slug, dto.Id, "page");
        entity.ShortDescription = dto.ShortDescription;
        entity.Content = dto.Content;
        entity.ImagePath = dto.ImagePath;
        entity.LanguageCode = dto.LanguageCode;
        entity.MetaTitle = dto.MetaTitle;
        entity.MetaDescription = dto.MetaDescription;
        entity.CanonicalUrl = dto.CanonicalUrl;
        entity.OgImagePath = dto.OgImagePath;
        entity.IsActive = dto.IsActive;
        entity.SortOrder = dto.SortOrder;
        entity.UpdatedAt = DateTime.UtcNow;
        await _db.SaveChangesAsync();
        _revalidation.TriggerAsync();
    }

    public async Task SoftDeletePageAsync(int id)
    {
        var entity = await GetPageAsync(id);
        if (entity == null) return;
        entity.IsDeleted = true;
        entity.DeletedAt = DateTime.UtcNow;
        await _db.SaveChangesAsync();
        _revalidation.TriggerAsync();
    }

    // ── FAQs ───────────────────────────────────────────────────────────────────

    public async Task<(List<Faq> Items, int Total)> GetFaqsPagedAsync(string? search, int page, int pageSize)
    {
        var q = _db.Faqs.IgnoreQueryFilters().Where(x => !x.IsDeleted).AsQueryable();
        if (!string.IsNullOrWhiteSpace(search))
            q = q.Where(x => x.Question.Contains(search));
        var total = await q.CountAsync();
        var items = await q.OrderBy(x => x.SortOrder).ThenByDescending(x => x.CreatedAt)
            .Skip((page - 1) * pageSize).Take(pageSize).ToListAsync();
        return (items, total);
    }

    public async Task<Faq?> GetFaqAsync(int id) =>
        await _db.Faqs.IgnoreQueryFilters().FirstOrDefaultAsync(x => x.Id == id && !x.IsDeleted);

    public async Task<Faq> CreateFaqAsync(FaqFormDto dto)
    {
        var entity = new Faq
        {
            Question = dto.Question,
            Answer = dto.Answer,
            LanguageCode = dto.LanguageCode,
            IsActive = dto.IsActive,
            SortOrder = dto.SortOrder
        };
        _db.Faqs.Add(entity);
        await _db.SaveChangesAsync();
        _revalidation.TriggerAsync();
        return entity;
    }

    public async Task UpdateFaqAsync(FaqFormDto dto)
    {
        var entity = await GetFaqAsync(dto.Id) ?? throw new KeyNotFoundException();
        entity.Question = dto.Question;
        entity.Answer = dto.Answer;
        entity.LanguageCode = dto.LanguageCode;
        entity.IsActive = dto.IsActive;
        entity.SortOrder = dto.SortOrder;
        entity.UpdatedAt = DateTime.UtcNow;
        await _db.SaveChangesAsync();
        _revalidation.TriggerAsync();
    }

    public async Task SoftDeleteFaqAsync(int id)
    {
        var entity = await GetFaqAsync(id);
        if (entity == null) return;
        entity.IsDeleted = true;
        entity.DeletedAt = DateTime.UtcNow;
        await _db.SaveChangesAsync();
        _revalidation.TriggerAsync();
    }

    // ── Hero Slides ────────────────────────────────────────────────────────────

    public async Task<(List<HeroSlide> Items, int Total)> GetHeroSlidesPagedAsync(string? search, int page, int pageSize)
    {
        var q = _db.HeroSlides.IgnoreQueryFilters().Where(x => !x.IsDeleted).AsQueryable();
        if (!string.IsNullOrWhiteSpace(search))
            q = q.Where(x => x.Title.Contains(search));
        var total = await q.CountAsync();
        var items = await q.OrderBy(x => x.SortOrder).ThenByDescending(x => x.CreatedAt)
            .Skip((page - 1) * pageSize).Take(pageSize).ToListAsync();
        return (items, total);
    }

    public async Task<HeroSlide?> GetHeroSlideAsync(int id) =>
        await _db.HeroSlides.IgnoreQueryFilters().FirstOrDefaultAsync(x => x.Id == id && !x.IsDeleted);

    public async Task<HeroSlide> CreateHeroSlideAsync(HeroSlideFormDto dto)
    {
        var entity = new HeroSlide
        {
            Title = dto.Title,
            Subtitle = dto.Subtitle,
            Description = dto.Description,
            ImagePath = dto.ImagePath,
            PrimaryButtonText = dto.PrimaryButtonText,
            PrimaryButtonUrl = dto.PrimaryButtonUrl,
            SecondaryButtonText = dto.SecondaryButtonText,
            SecondaryButtonUrl = dto.SecondaryButtonUrl,
            LanguageCode = dto.LanguageCode,
            IsActive = dto.IsActive,
            SortOrder = dto.SortOrder
        };
        _db.HeroSlides.Add(entity);
        await _db.SaveChangesAsync();
        return entity;
    }

    public async Task UpdateHeroSlideAsync(HeroSlideFormDto dto)
    {
        var entity = await GetHeroSlideAsync(dto.Id) ?? throw new KeyNotFoundException();
        entity.Title = dto.Title;
        entity.Subtitle = dto.Subtitle;
        entity.Description = dto.Description;
        entity.ImagePath = dto.ImagePath;
        entity.PrimaryButtonText = dto.PrimaryButtonText;
        entity.PrimaryButtonUrl = dto.PrimaryButtonUrl;
        entity.SecondaryButtonText = dto.SecondaryButtonText;
        entity.SecondaryButtonUrl = dto.SecondaryButtonUrl;
        entity.LanguageCode = dto.LanguageCode;
        entity.IsActive = dto.IsActive;
        entity.SortOrder = dto.SortOrder;
        entity.UpdatedAt = DateTime.UtcNow;
        await _db.SaveChangesAsync();
    }

    public async Task SoftDeleteHeroSlideAsync(int id)
    {
        var entity = await GetHeroSlideAsync(id);
        if (entity == null) return;
        entity.IsDeleted = true;
        entity.DeletedAt = DateTime.UtcNow;
        await _db.SaveChangesAsync();
    }

    // ── Testimonials ───────────────────────────────────────────────────────────

    public async Task<(List<Testimonial> Items, int Total)> GetTestimonialsPagedAsync(string? search, int page, int pageSize)
    {
        var q = _db.Testimonials.IgnoreQueryFilters().Where(x => !x.IsDeleted).AsQueryable();
        if (!string.IsNullOrWhiteSpace(search))
            q = q.Where(x => x.AuthorName.Contains(search) || (x.Company != null && x.Company.Contains(search)));
        var total = await q.CountAsync();
        var items = await q.OrderBy(x => x.SortOrder).ThenByDescending(x => x.CreatedAt)
            .Skip((page - 1) * pageSize).Take(pageSize).ToListAsync();
        return (items, total);
    }

    public async Task<Testimonial?> GetTestimonialAsync(int id) =>
        await _db.Testimonials.IgnoreQueryFilters().FirstOrDefaultAsync(x => x.Id == id && !x.IsDeleted);

    public async Task<Testimonial> CreateTestimonialAsync(TestimonialFormDto dto)
    {
        var entity = new Testimonial
        {
            AuthorName = dto.AuthorName,
            AuthorTitle = dto.AuthorTitle,
            Company = dto.Company,
            Content = dto.Content,
            Rating = dto.Rating,
            AvatarPath = dto.AvatarPath,
            LanguageCode = dto.LanguageCode,
            IsActive = dto.IsActive,
            SortOrder = dto.SortOrder
        };
        _db.Testimonials.Add(entity);
        await _db.SaveChangesAsync();
        return entity;
    }

    public async Task UpdateTestimonialAsync(TestimonialFormDto dto)
    {
        var entity = await GetTestimonialAsync(dto.Id) ?? throw new KeyNotFoundException();
        entity.AuthorName = dto.AuthorName;
        entity.AuthorTitle = dto.AuthorTitle;
        entity.Company = dto.Company;
        entity.Content = dto.Content;
        entity.Rating = dto.Rating;
        entity.AvatarPath = dto.AvatarPath;
        entity.LanguageCode = dto.LanguageCode;
        entity.IsActive = dto.IsActive;
        entity.SortOrder = dto.SortOrder;
        entity.UpdatedAt = DateTime.UtcNow;
        await _db.SaveChangesAsync();
    }

    public async Task SoftDeleteTestimonialAsync(int id)
    {
        var entity = await GetTestimonialAsync(id);
        if (entity == null) return;
        entity.IsDeleted = true;
        entity.DeletedAt = DateTime.UtcNow;
        await _db.SaveChangesAsync();
    }

    // ── Site Settings ──────────────────────────────────────────────────────────

    public async Task<List<SiteSetting>> GetAllSettingsAsync() =>
        await _db.SiteSettings.OrderBy(s => s.Group).ThenBy(s => s.Key).ToListAsync();

    public async Task UpsertSettingAsync(string key, string? value)
    {
        var setting = await _db.SiteSettings.FirstOrDefaultAsync(s => s.Key == key);
        if (setting == null)
        {
            _db.SiteSettings.Add(new SiteSetting { Key = key, Value = value });
        }
        else
        {
            setting.Value = value;
            setting.UpdatedAt = DateTime.UtcNow;
        }
        await _db.SaveChangesAsync();
    }

    public async Task UpsertSettingsAsync(Dictionary<string, string?> settings)
    {
        var existing = await _db.SiteSettings.ToListAsync();
        foreach (var (key, value) in settings)
        {
            var s = existing.FirstOrDefault(x => x.Key == key);
            if (s == null)
                _db.SiteSettings.Add(new SiteSetting { Key = key, Value = value });
            else
            {
                s.Value = value;
                s.UpdatedAt = DateTime.UtcNow;
            }
        }
        await _db.SaveChangesAsync();
        _revalidation.TriggerAsync();
    }

    // ── Media Assets ───────────────────────────────────────────────────────────

    public async Task<(List<MediaAsset> Items, int Total)> GetMediaAssetsPagedAsync(string? search, int page, int pageSize)
    {
        var q = _db.MediaAssets.IgnoreQueryFilters().Where(x => !x.IsDeleted).AsQueryable();
        if (!string.IsNullOrWhiteSpace(search))
            q = q.Where(x => x.OriginalFileName.Contains(search) || (x.AltText != null && x.AltText.Contains(search)));
        var total = await q.CountAsync();
        var items = await q.OrderByDescending(x => x.CreatedAt)
            .Skip((page - 1) * pageSize).Take(pageSize).ToListAsync();
        return (items, total);
    }

    public async Task<MediaAsset?> GetMediaAssetAsync(int id) =>
        await _db.MediaAssets.IgnoreQueryFilters().FirstOrDefaultAsync(x => x.Id == id && !x.IsDeleted);

    public async Task<MediaAsset> SaveMediaAssetAsync(string fileName, string originalFileName, string filePath, string contentType, long fileSize, string? uploadedBy)
    {
        var entity = new MediaAsset
        {
            FileName = fileName,
            OriginalFileName = originalFileName,
            FilePath = filePath,
            ContentType = contentType,
            FileSize = fileSize,
            UploadedBy = uploadedBy
        };
        _db.MediaAssets.Add(entity);
        await _db.SaveChangesAsync();
        return entity;
    }

    public async Task UpdateMediaAssetAltTextAsync(int id, string? altText)
    {
        var entity = await GetMediaAssetAsync(id);
        if (entity == null) return;
        entity.AltText = altText;
        entity.UpdatedAt = DateTime.UtcNow;
        await _db.SaveChangesAsync();
    }

    public async Task SoftDeleteMediaAssetAsync(int id)
    {
        var entity = await GetMediaAssetAsync(id);
        if (entity == null) return;
        entity.IsDeleted = true;
        entity.DeletedAt = DateTime.UtcNow;
        await _db.SaveChangesAsync();
    }

    // ── Dashboard ──────────────────────────────────────────────────────────────

    public async Task<DashboardStatsDto> GetDashboardStatsAsync()
    {
        var totalServices = await _db.Services.CountAsync();
        var activeServices = await _db.Services.CountAsync(s => s.IsActive);
        var totalBlogPosts = await _db.BlogPosts.CountAsync();
        var activeBlogPosts = await _db.BlogPosts.CountAsync(b => b.IsActive);
        var unreadMessages = await _db.ContactMessages.CountAsync(m => !m.IsRead);
        var unrepliedMessages = await _db.ContactMessages.CountAsync(m => !m.IsReplied);
        var activeHeroSlides = await _db.HeroSlides.CountAsync(h => h.IsActive);
        var totalFaqs = await _db.Faqs.CountAsync();
        var totalTestimonials = await _db.Testimonials.CountAsync();
        var totalPages = await _db.Pages.CountAsync();
        var totalMedia = await _db.MediaAssets.CountAsync();

        var recentMessages = await _db.ContactMessages
            .OrderByDescending(m => m.CreatedAt).Take(5)
            .Select(m => new RecentMessageDto { Id = m.Id, FullName = m.FullName, Email = m.Email, IsRead = m.IsRead, CreatedAt = m.CreatedAt })
            .ToListAsync();

        var recentPosts = await _db.BlogPosts
            .OrderByDescending(b => b.CreatedAt).Take(5)
            .Select(b => new RecentPostDto { Id = b.Id, Title = b.Title, IsActive = b.IsActive, CreatedAt = b.CreatedAt })
            .ToListAsync();

        return new DashboardStatsDto
        {
            TotalServices = totalServices,
            ActiveServices = activeServices,
            TotalBlogPosts = totalBlogPosts,
            ActiveBlogPosts = activeBlogPosts,
            UnreadMessages = unreadMessages,
            UnrepliedMessages = unrepliedMessages,
            ActiveHeroSlides = activeHeroSlides,
            TotalFaqs = totalFaqs,
            TotalTestimonials = totalTestimonials,
            TotalPages = totalPages,
            TotalMedia = totalMedia,
            RecentMessages = recentMessages,
            RecentPosts = recentPosts
        };
    }

    // ── Slug uniqueness helper ─────────────────────────────────────────────────

    private string EnsureUniqueSlug(string baseSlug, int excludeId, string entityType)
    {
        var slug = baseSlug;
        var counter = 2;

        while (SlugExists(slug, excludeId, entityType))
        {
            slug = $"{baseSlug}-{counter}";
            counter++;
        }
        return slug;
    }

    private bool SlugExists(string slug, int excludeId, string entityType)
    {
        return entityType switch
        {
            "service" => _db.Services.IgnoreQueryFilters().Any(s => s.Slug == slug && s.Id != excludeId && !s.IsDeleted),
            "blog" => _db.BlogPosts.IgnoreQueryFilters().Any(b => b.Slug == slug && b.Id != excludeId && !b.IsDeleted),
            "page" => _db.Pages.IgnoreQueryFilters().Any(p => p.Slug == slug && p.Id != excludeId && !p.IsDeleted),
            _ => false
        };
    }
}

public class DashboardStatsDto
{
    public int TotalServices { get; set; }
    public int ActiveServices { get; set; }
    public int TotalBlogPosts { get; set; }
    public int ActiveBlogPosts { get; set; }
    public int UnreadMessages { get; set; }
    public int UnrepliedMessages { get; set; }
    public int ActiveHeroSlides { get; set; }
    public int TotalFaqs { get; set; }
    public int TotalTestimonials { get; set; }
    public int TotalPages { get; set; }
    public int TotalMedia { get; set; }
    public List<RecentMessageDto> RecentMessages { get; set; } = [];
    public List<RecentPostDto> RecentPosts { get; set; } = [];
}

public class RecentMessageDto
{
    public int Id { get; set; }
    public string FullName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public bool IsRead { get; set; }
    public DateTime CreatedAt { get; set; }
}

public class RecentPostDto
{
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public bool IsActive { get; set; }
    public DateTime CreatedAt { get; set; }
}
