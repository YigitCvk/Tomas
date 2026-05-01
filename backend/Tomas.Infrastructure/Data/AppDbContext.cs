using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Tomas.Domain.Entities;

namespace Tomas.Infrastructure.Data;

public class AppDbContext : IdentityDbContext<AppUser>
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<Service> Services => Set<Service>();
    public DbSet<BlogPost> BlogPosts => Set<BlogPost>();
    public DbSet<Page> Pages => Set<Page>();
    public DbSet<Faq> Faqs => Set<Faq>();
    public DbSet<Testimonial> Testimonials => Set<Testimonial>();
    public DbSet<HeroSlide> HeroSlides => Set<HeroSlide>();
    public DbSet<SiteSetting> SiteSettings => Set<SiteSetting>();
    public DbSet<ContactMessage> ContactMessages => Set<ContactMessage>();
    public DbSet<MediaAsset> MediaAssets => Set<MediaAsset>();

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.Entity<Service>().HasQueryFilter(x => !x.IsDeleted);
        builder.Entity<BlogPost>().HasQueryFilter(x => !x.IsDeleted);
        builder.Entity<Page>().HasQueryFilter(x => !x.IsDeleted);
        builder.Entity<Faq>().HasQueryFilter(x => !x.IsDeleted);
        builder.Entity<Testimonial>().HasQueryFilter(x => !x.IsDeleted);
        builder.Entity<HeroSlide>().HasQueryFilter(x => !x.IsDeleted);
        builder.Entity<SiteSetting>().HasQueryFilter(x => !x.IsDeleted);
        builder.Entity<ContactMessage>().HasQueryFilter(x => !x.IsDeleted);
        builder.Entity<MediaAsset>().HasQueryFilter(x => !x.IsDeleted);

        builder.Entity<Service>().HasIndex(x => x.Slug);
        builder.Entity<BlogPost>().HasIndex(x => x.Slug);
        builder.Entity<Page>().HasIndex(x => x.Slug);
        builder.Entity<SiteSetting>().HasIndex(x => new { x.Key, x.LanguageCode }).IsUnique();

        builder.Entity<ContactMessage>()
            .HasOne(x => x.InterestedService)
            .WithMany()
            .HasForeignKey(x => x.InterestedServiceId)
            .IsRequired(false);
    }
}
