# Tomas Dış Ticaret — Backend

ASP.NET Core 9 tabanlı çok katmanlı backend. Admin paneli (MVC) + Public REST API'den oluşur.

---

## Proje Yapısı

```
backend/
├── Tomas.Admin/          MVC Admin Paneli (port 5001)
├── Tomas.Api/            Public REST API (port 5000)
├── Tomas.Application/    DTOs, uygulama servisleri
├── Tomas.Infrastructure/ EF Core, Identity, iş servisleri
└── Tomas.Domain/         Entity sınıfları
```

## Gereksinimler

- .NET 9.0 SDK
- SQLite (varsayılan) veya PostgreSQL

---

## Çalıştırma

### API

```bash
cd Tomas.Api
dotnet run
# → http://localhost:5000
# → Swagger: http://localhost:5000/swagger
```

### Admin Panel

```bash
cd Tomas.Admin
dotnet run
# → http://localhost:5001
```

---

## Admin Panel

### Giriş

- **URL:** `http://localhost:5001/admin/login`
- **E-posta:** `admin@tomas.com.tr`
- **Şifre:** `TomasAdmin123!`

> ⚠️ **ÜRETİM ORTAMINDA** default şifreyi mutlaka değiştirin. Bkz. Güvenlik Notları.

### Yönetim Ekranları

| Ekran | URL | Açıklama |
|---|---|---|
| Dashboard | `/` | İstatistikler, son mesajlar, hızlı aksiyonlar |
| Sayfalar | `/Pages` | Statik sayfa CRUD |
| Hizmetler | `/Services` | Hizmet CRUD + SEO |
| Haberler | `/BlogPosts` | Blog yazısı CRUD + SEO |
| SSS | `/Faqs` | Sıkça Sorulan Sorular |
| Hero Slider | `/HeroSlides` | Ana sayfa slider yönetimi |
| Müşteri Yorumları | `/Testimonials` | Referans/yorum yönetimi |
| Medya Kütüphanesi | `/MediaAssets` | Görsel yükleme ve yönetim |
| İletişim Mesajları | `/ContactMessages` | Form gönderileri |
| Site Ayarları | `/SiteSettings` | Genel ayarlar, SEO, sosyal medya |

### Görsel Upload Kuralları

- İzin verilen formatlar: **JPG, JPEG, PNG, WEBP**
- Maksimum dosya boyutu: **5 MB**
- Yükleme yolu: `wwwroot/uploads/`
- Dosya adları GUID ile güvenli hale getirilir (path traversal koruması)

### Contact Messages CSV Export

```
GET /ContactMessages/ExportCsv
```

CSV dosyası **UTF-8 BOM** ile oluşturulur — Excel'de Türkçe karakterler doğru görünür.

İçerdiği alanlar: Id, FullName, CompanyName, Email, Phone, Country, Message, IsRead, IsReplied, CreatedAt, IpAddress

---

## Public API

Base URL: `http://localhost:5000/api/public`

| Endpoint | Cache | Açıklama |
|---|---|---|
| `GET /site-settings` | 5 dk | Site ayarları |
| `GET /services?lang=tr` | 5 dk | Aktif hizmetler |
| `GET /services/{slug}?lang=tr` | 5 dk | Hizmet detayı |
| `GET /blog-posts?lang=tr` | 2 dk | Blog yazıları |
| `GET /blog-posts/{slug}?lang=tr` | 2 dk | Blog yazısı detayı |
| `GET /faqs?lang=tr` | 10 dk | SSS listesi |
| `GET /testimonials?lang=tr` | 10 dk | Müşteri yorumları |
| `GET /hero-slides?lang=tr` | 5 dk | Hero slide listesi |
| `GET /pages/{slug}?lang=tr` | 5 dk | Sayfa içeriği |
| `POST /contact` | — | İletişim formu |

---

## Veritabanı

- Varsayılan: **SQLite** (`tomas.db` — her iki proje dizini)
- PostgreSQL: `ConnectionStrings:DefaultConnection` içinde `Host=` geçerse otomatik kullanılır
- Migrations otomatik uygulanır (`dotnet run` sırasında)
- Seed data: İlk çalıştırmada örnek hizmetler, hero slide, SSS ve admin kullanıcısı oluşturulur

---

## Güvenlik Notları

- Tüm admin route'ları `[Authorize]` ile korunur; login sayfası hariç
- CSRF token tüm POST formlarında aktif (`@Html.AntiForgeryToken()`)
- Logout yalnızca POST ile gerçekleşir
- Upload: yalnızca izin verilen MIME/uzantılar, GUID tabanlı dosya adı
- Login hata mesajları kullanıcı var/yok bilgisi sızdırmaz
- **Üretimde yapılması gerekenler:**
  1. Default admin şifresini değiştir: Admin Panel → hesap menüsü veya Identity UserManager
  2. `appsettings.json` içindeki `ConnectionStrings` ve `DataProtection` ayarlarını güçlendir
  3. HTTPS zorunlu hale getir (`UseHttpsRedirection`)
  4. CORS politikasını production domain ile sınırla

---

## Teknik Stack

| Katman | Teknoloji |
|---|---|
| Framework | ASP.NET Core 9.0 |
| ORM | Entity Framework Core 9 |
| Veritabanı | SQLite (dev) / PostgreSQL (prod) |
| Auth | ASP.NET Core Identity |
| Logging | Serilog |
| API Docs | Swagger / Swashbuckle |

---

## Cache / ISR Notu

Admin içerik değişikliklerinden sonra Next.js frontend ISR cache nedeniyle eski içeriği gösterebilir.

- Frontend `revalidate` süresi `page.tsx` dosyalarında ayarlıdır (genellikle 300s)
- **TODO:** Gelecekte admin save/delete sonrası Next.js `revalidate` endpoint'i çağrılacak:
  `POST https://frontend/api/revalidate?secret=TOKEN&path=/hizmetler`

---

## Production Checklist

- [ ] Default admin şifresi değiştirildi
- [ ] PostgreSQL bağlantısı yapılandırıldı
- [ ] HTTPS etkin
- [ ] CORS production domain ile sınırlandırıldı
- [ ] Serilog dosya yolu yazılabilir
- [ ] `wwwroot/uploads/` klasörü yazılabilir ve yedekleme planı mevcut
- [ ] Google Analytics / GTM ID'leri Site Ayarları'ndan girildi
