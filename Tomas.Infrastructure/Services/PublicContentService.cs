using Microsoft.EntityFrameworkCore;
using Tomas.Application.DTOs;
using Tomas.Domain.Entities;
using Tomas.Infrastructure.Data;

namespace Tomas.Infrastructure.Services;

public class PublicContentService
{
    private readonly AppDbContext _db;

    public PublicContentService(AppDbContext db)
    {
        _db = db;
    }

    public async Task<SiteSettingsViewModel> GetSiteSettingsAsync()
    {
        var settings = await _db.SiteSettings.ToListAsync();
        string Get(string key) => settings.FirstOrDefault(s => s.Key == key)?.Value ?? string.Empty;

        return new SiteSettingsViewModel
        {
            SiteName = Get("SiteName"),
            SiteDescription = Get("SiteDescription"),
            DefaultLanguage = Get("DefaultLanguage"),
            Phone = Get("Phone"),
            GSM = Get("GSM"),
            Email = Get("Email"),
            Address = Get("Address"),
            WhatsApp = Get("WhatsApp"),
            LinkedIn = Get("LinkedIn"),
            Twitter = Get("Twitter"),
            MetaTitle = Get("MetaTitle"),
            MetaDescription = Get("MetaDescription"),
            GoogleAnalyticsId = Get("GoogleAnalyticsId"),
        };
    }

    public async Task<List<ServiceDto>> GetServicesAsync(string lang = "tr")
    {
        return await _db.Services
            .Where(s => s.IsActive && s.LanguageCode == lang)
            .OrderBy(s => s.SortOrder)
            .Select(s => new ServiceDto
            {
                Id = s.Id, Title = s.Title, Slug = s.Slug,
                ShortDescription = s.ShortDescription, Content = s.Content,
                Icon = s.Icon, ImagePath = s.ImagePath, LanguageCode = s.LanguageCode,
                MetaTitle = s.MetaTitle, MetaDescription = s.MetaDescription,
                CanonicalUrl = s.CanonicalUrl, OgImagePath = s.OgImagePath,
                IsActive = s.IsActive, SortOrder = s.SortOrder,
                CreatedAt = s.CreatedAt, UpdatedAt = s.UpdatedAt
            }).ToListAsync();
    }

    public async Task<ServiceDto?> GetServiceBySlugAsync(string slug, string lang = "tr")
    {
        return await _db.Services
            .Where(s => s.IsActive && s.Slug == slug && s.LanguageCode == lang)
            .Select(s => new ServiceDto
            {
                Id = s.Id, Title = s.Title, Slug = s.Slug,
                ShortDescription = s.ShortDescription, Content = s.Content,
                Icon = s.Icon, ImagePath = s.ImagePath, LanguageCode = s.LanguageCode,
                MetaTitle = s.MetaTitle, MetaDescription = s.MetaDescription,
                CanonicalUrl = s.CanonicalUrl, OgImagePath = s.OgImagePath,
                IsActive = s.IsActive, SortOrder = s.SortOrder,
                CreatedAt = s.CreatedAt, UpdatedAt = s.UpdatedAt
            }).FirstOrDefaultAsync();
    }

    public async Task<List<BlogPostDto>> GetBlogPostsAsync(string lang = "tr", int page = 1, int pageSize = 9)
    {
        return await _db.BlogPosts
            .Where(b => b.IsActive && b.LanguageCode == lang)
            .OrderByDescending(b => b.PublishedAt ?? b.CreatedAt)
            .Skip((page - 1) * pageSize)
            .Take(pageSize)
            .Select(b => new BlogPostDto
            {
                Id = b.Id, Title = b.Title, Slug = b.Slug,
                Summary = b.Summary, ImagePath = b.ImagePath,
                Author = b.Author, LanguageCode = b.LanguageCode,
                PublishedAt = b.PublishedAt, MetaTitle = b.MetaTitle,
                MetaDescription = b.MetaDescription, IsActive = b.IsActive,
                CreatedAt = b.CreatedAt, UpdatedAt = b.UpdatedAt
            }).ToListAsync();
    }

    public async Task<BlogPostDto?> GetBlogPostBySlugAsync(string slug, string lang = "tr")
    {
        return await _db.BlogPosts
            .Where(b => b.IsActive && b.Slug == slug && b.LanguageCode == lang)
            .Select(b => new BlogPostDto
            {
                Id = b.Id, Title = b.Title, Slug = b.Slug,
                Summary = b.Summary, Content = b.Content, ImagePath = b.ImagePath,
                Author = b.Author, LanguageCode = b.LanguageCode,
                PublishedAt = b.PublishedAt, MetaTitle = b.MetaTitle,
                MetaDescription = b.MetaDescription, CanonicalUrl = b.CanonicalUrl,
                OgImagePath = b.OgImagePath, IsActive = b.IsActive,
                CreatedAt = b.CreatedAt, UpdatedAt = b.UpdatedAt
            }).FirstOrDefaultAsync();
    }

    public async Task<List<Faq>> GetFaqsAsync(string lang = "tr")
    {
        return await _db.Faqs
            .Where(f => f.IsActive && f.LanguageCode == lang)
            .OrderBy(f => f.SortOrder)
            .ToListAsync();
    }

    public async Task<List<Testimonial>> GetTestimonialsAsync(string lang = "tr")
    {
        return await _db.Testimonials
            .Where(t => t.IsActive && t.LanguageCode == lang)
            .OrderBy(t => t.SortOrder)
            .ToListAsync();
    }

    public async Task<List<HeroSlide>> GetHeroSlidesAsync(string lang = "tr")
    {
        return await _db.HeroSlides
            .Where(h => h.IsActive && h.LanguageCode == lang)
            .OrderBy(h => h.SortOrder)
            .ToListAsync();
    }

    public async Task<Page?> GetPageBySlugAsync(string slug, string lang = "tr")
    {
        return await _db.Pages
            .FirstOrDefaultAsync(p => p.IsActive && p.Slug == slug && p.LanguageCode == lang);
    }
}
