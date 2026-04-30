using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Tomas.Domain.Entities;

namespace Tomas.Infrastructure.Data;

public static class DbSeeder
{
    public static async Task SeedAsync(AppDbContext db, UserManager<AppUser> userManager)
    {
        await db.Database.MigrateAsync();

        if (!await userManager.Users.AnyAsync())
        {
            var admin = new AppUser
            {
                UserName = "admin@tomas.com.tr",
                Email = "admin@tomas.com.tr",
                FullName = "Tomas Admin",
                EmailConfirmed = true
            };
            await userManager.CreateAsync(admin, "TomasAdmin123!");
        }

        if (!await db.SiteSettings.AnyAsync())
        {
            var settings = new List<SiteSetting>
            {
                new() { Key = "SiteName", Value = "Tomas Dış Ticaret", Group = "General" },
                new() { Key = "SiteDescription", Value = "Global ticaret, tedarik ve kurumsal hizmetlerde güvenilir iş ortağınız.", Group = "General" },
                new() { Key = "DefaultLanguage", Value = "tr", Group = "General" },
                new() { Key = "Phone", Value = "0 (212) 302 59 35", Group = "Contact" },
                new() { Key = "GSM", Value = "+90 (532) 420 12 99", Group = "Contact" },
                new() { Key = "Email", Value = "info@tomas.com.tr", Group = "Contact" },
                new() { Key = "Address", Value = "Libadiye Cad. No:82E Emaar Heights Blok K:23 D:2307 34700 Üsküdar / İstanbul", Group = "Contact" },
                new() { Key = "WhatsApp", Value = "+905324201299", Group = "Contact" },
                new() { Key = "LinkedIn", Value = "", Group = "Social" },
                new() { Key = "Twitter", Value = "", Group = "Social" },
                new() { Key = "MetaTitle", Value = "Tomas Dış Ticaret | Global Ticaret Çözümleri", Group = "SEO" },
                new() { Key = "MetaDescription", Value = "Tomas Dış Ticaret, ihracat, ithalat, ambalaj, polimer, tarım ve mühendislik alanlarında kurumsal çözümler sunar.", Group = "SEO" },
                new() { Key = "GoogleAnalyticsId", Value = "", Group = "Analytics" },
            };
            db.SiteSettings.AddRange(settings);
        }

        if (!await db.Services.AnyAsync())
        {
            var services = new[]
            {
                new { Title = "Ambalaj Ürünleri ve Endüstriyel Malzemeler", Slug = "ambalaj-urunleri-endustriyel-malzemeler", Desc = "Endüstriyel ambalaj çözümleri ve hammadde tedariki.", Icon = "📦", Sort = 1 },
                new { Title = "Uluslararası Ticaret (İhracat & İthalat)", Slug = "uluslararasi-ticaret-ihracat-ithalat", Desc = "Global piyasalarda ihracat ve ithalat danışmanlığı.", Icon = "🌍", Sort = 2 },
                new { Title = "Polimer ve Plastik Hammadde Ticareti", Slug = "polimer-plastik-hammadde-ticareti", Desc = "Polimer ve plastik sektörüne özel hammadde tedariki.", Icon = "🧪", Sort = 3 },
                new { Title = "Tarım, Narenciye ve Gıda Ürünleri", Slug = "tarim-narenciye-gida-urunleri", Desc = "Tarım ürünleri ve narenciye ihracat/ithalat hizmetleri.", Icon = "🍊", Sort = 4 },
                new { Title = "Makine ve Endüstriyel Ürünler", Slug = "makine-endustriyel-urunler", Desc = "Endüstriyel makine ve ekipman tedariki.", Icon = "⚙️", Sort = 5 },
                new { Title = "Mühendislik ve Araştırma Hizmetleri", Slug = "muhendislik-arastirma-hizmetleri", Desc = "Teknik danışmanlık ve mühendislik çözümleri.", Icon = "🔬", Sort = 6 },
                new { Title = "Yazılım ve Dijital Çözümler", Slug = "yazilim-dijital-cozumler", Desc = "Kurumsal yazılım geliştirme ve dijital dönüşüm.", Icon = "💻", Sort = 7 },
                new { Title = "Reklam ve Kurumsal Kimlik Tasarımı", Slug = "reklam-kurumsal-kimlik-tasarimi", Desc = "Marka kimliği ve kurumsal iletişim tasarımı.", Icon = "🎨", Sort = 8 },
                new { Title = "E-Ticaret", Slug = "e-ticaret", Desc = "E-ticaret platformları ve dijital satış kanalları.", Icon = "🛒", Sort = 9 },
            };

            foreach (var s in services)
            {
                db.Services.Add(new Service
                {
                    Title = s.Title,
                    Slug = s.Slug,
                    ShortDescription = s.Desc,
                    Icon = s.Icon,
                    SortOrder = s.Sort,
                    LanguageCode = "tr",
                    IsActive = true,
                    MetaTitle = s.Title + " | Tomas Dış Ticaret",
                    MetaDescription = s.Desc
                });
            }

            var enServices = new[]
            {
                new { Title = "Packaging Products & Industrial Materials", Slug = "packaging-products-industrial-materials", Desc = "Industrial packaging solutions and raw material supply.", Sort = 1 },
                new { Title = "International Trade (Export & Import)", Slug = "international-trade-export-import", Desc = "Export and import consulting in global markets.", Sort = 2 },
                new { Title = "Polymer & Plastic Raw Material Trade", Slug = "polymer-plastic-raw-material-trade", Desc = "Raw material supply for the polymer and plastics sector.", Sort = 3 },
                new { Title = "Agriculture, Citrus & Food Products", Slug = "agriculture-citrus-food-products", Desc = "Agricultural produce and citrus export/import services.", Sort = 4 },
                new { Title = "Machinery & Industrial Products", Slug = "machinery-industrial-products", Desc = "Industrial machinery and equipment procurement.", Sort = 5 },
                new { Title = "Engineering & Research Services", Slug = "engineering-research-services", Desc = "Technical consulting and engineering solutions.", Sort = 6 },
                new { Title = "Software & Digital Solutions", Slug = "software-digital-solutions", Desc = "Corporate software development and digital transformation.", Sort = 7 },
                new { Title = "Advertising & Corporate Identity Design", Slug = "advertising-corporate-identity-design", Desc = "Brand identity and corporate communications design.", Sort = 8 },
                new { Title = "E-Commerce", Slug = "e-commerce", Desc = "E-commerce platforms and digital sales channels.", Sort = 9 },
            };

            foreach (var s in enServices)
            {
                db.Services.Add(new Service
                {
                    Title = s.Title,
                    Slug = s.Slug,
                    ShortDescription = s.Desc,
                    SortOrder = s.Sort,
                    LanguageCode = "en",
                    IsActive = true,
                    MetaTitle = s.Title + " | Tomas Foreign Trade",
                    MetaDescription = s.Desc
                });
            }
        }

        if (!await db.HeroSlides.AnyAsync())
        {
            db.HeroSlides.AddRange(
                new HeroSlide
                {
                    Title = "Küresel Ticarette Güvenilir İş Ortağınız",
                    Subtitle = "Tomas Dış Ticaret",
                    Description = "İhracat, ithalat, ambalaj, polimer ve çok daha fazlasında 20 yılı aşkın deneyimle yanınızdayız.",
                    PrimaryButtonText = "Teklif Al",
                    PrimaryButtonUrl = "/iletisim",
                    SecondaryButtonText = "Hizmetlerimizi İncele",
                    SecondaryButtonUrl = "/hizmetler",
                    LanguageCode = "tr",
                    IsActive = true,
                    SortOrder = 1
                },
                new HeroSlide
                {
                    Title = "Your Reliable Partner in Global Trade",
                    Subtitle = "Tomas Foreign Trade",
                    Description = "Over 20 years of expertise in export, import, packaging, polymers and much more.",
                    PrimaryButtonText = "Get a Quote",
                    PrimaryButtonUrl = "/en/contact",
                    SecondaryButtonText = "Explore Our Services",
                    SecondaryButtonUrl = "/en/services",
                    LanguageCode = "en",
                    IsActive = true,
                    SortOrder = 1
                }
            );
        }

        if (!await db.Faqs.AnyAsync())
        {
            db.Faqs.AddRange(
                new Faq { Question = "Hangi ülkelerle ticaret yapıyorsunuz?", Answer = "Avrupa, Orta Doğu, Asya ve Afrika başta olmak üzere 50'den fazla ülkeyle aktif ticaret ilişkilerimiz mevcuttur.", LanguageCode = "tr", SortOrder = 1 },
                new Faq { Question = "Minimum sipariş miktarı nedir?", Answer = "Ürün kategorisine göre değişmekle birlikte, müşteri odaklı yaklaşımımızla küçük ve büyük hacimli siparişlere hizmet vermekteyiz.", LanguageCode = "tr", SortOrder = 2 },
                new Faq { Question = "Teslimat süreleri ne kadardır?", Answer = "Ürün ve destinasyona bağlı olarak 7-30 iş günü arasında değişmektedir. Detaylı bilgi için iletişime geçiniz.", LanguageCode = "tr", SortOrder = 3 },
                new Faq { Question = "Ödeme koşulları nelerdir?", Answer = "Akreditif, havale, CAD ve müzakereye açık diğer ödeme seçenekleri sunulmaktadır.", LanguageCode = "tr", SortOrder = 4 },
                new Faq { Question = "Which countries do you trade with?", Answer = "We have active trade relations with over 50 countries, primarily in Europe, the Middle East, Asia and Africa.", LanguageCode = "en", SortOrder = 1 },
                new Faq { Question = "What is the minimum order quantity?", Answer = "It varies by product category; our customer-focused approach allows us to serve both small and large volume orders.", LanguageCode = "en", SortOrder = 2 }
            );
        }

        if (!await db.Testimonials.AnyAsync())
        {
            db.Testimonials.AddRange(
                new Testimonial { AuthorName = "Ahmet Yılmaz", AuthorTitle = "Satın Alma Direktörü", Company = "Tekno Plastik A.Ş.", Content = "Tomas ile çalışmak gerçek bir profesyonellik deneyimi. Polimer tedarikinde hem fiyat hem kalite açısından mükemmel hizmet alıyoruz.", Rating = 5, LanguageCode = "tr", SortOrder = 1 },
                new Testimonial { AuthorName = "Fatma Kaya", AuthorTitle = "İhracat Müdürü", Company = "Anadolu Gıda", Content = "Narenciye ihracatında Tomas'ın desteği çok değerli. Lojistik ve belgelendirme konularında hiçbir sorun yaşamadık.", Rating = 5, LanguageCode = "tr", SortOrder = 2 },
                new Testimonial { AuthorName = "Marco Rossi", AuthorTitle = "CEO", Company = "Rossi Industries", Content = "Tomas has been an exceptional partner for our packaging material imports. Reliable, efficient and professional.", Rating = 5, LanguageCode = "en", SortOrder = 1 }
            );
        }

        if (!await db.Pages.AnyAsync())
        {
            db.Pages.AddRange(
                new Page { Title = "Hakkımızda", Slug = "hakkimizda", LanguageCode = "tr", IsActive = true, Content = "<p>Tomas Dış Ticaret, 2000 yılında İstanbul'da kurulmuş, uluslararası ticaret alanında uzmanlaşmış bir kurumsal hizmet şirketidir. Ambalaj, polimer, tarım, makine, yazılım ve daha pek çok sektörde küresel çapta hizmet vermekteyiz.</p><p>Müşteri odaklı yaklaşımımız ve güçlü tedarik ağımızla, işletmelerin global pazarlara açılmasında güvenilir bir köprü oluşturuyoruz.</p>", MetaTitle = "Hakkımızda | Tomas Dış Ticaret", MetaDescription = "Tomas Dış Ticaret hakkında bilgi edinin. 20+ yıllık deneyim, global ağ ve müşteri odaklı yaklaşım." },
                new Page { Title = "KVKK Aydınlatma Metni", Slug = "kvkk", LanguageCode = "tr", IsActive = true, Content = "<p>6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında aydınlatma metni.</p>", MetaTitle = "KVKK | Tomas Dış Ticaret" },
                new Page { Title = "Gizlilik Politikası", Slug = "gizlilik-politikasi", LanguageCode = "tr", IsActive = true, Content = "<p>Web sitemizi kullanırken kişisel verileriniz bu politika kapsamında işlenmektedir.</p>", MetaTitle = "Gizlilik Politikası | Tomas Dış Ticaret" },
                new Page { Title = "About Us", Slug = "about-us", LanguageCode = "en", IsActive = true, Content = "<p>Tomas Foreign Trade, founded in 2000 in Istanbul, is a corporate services company specializing in international trade. We serve globally in packaging, polymers, agriculture, machinery, software and many other sectors.</p>", MetaTitle = "About Us | Tomas Foreign Trade" }
            );
        }

        await db.SaveChangesAsync();
    }
}
