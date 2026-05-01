# Tomas Dış Ticaret — Kurumsal Web Sitesi

Premium B2B kurumsal web sitesi. .NET 9 backend (API + Admin MVC) + Next.js 16 frontend.

## Mimari

```
TomasCorporateWeb/
├── backend/
│   ├── Tomas.Domain         # Entity'ler
│   ├── Tomas.Application    # DTO'lar
│   ├── Tomas.Infrastructure # EF Core, Identity, Servisler
│   ├── Tomas.Api            # REST API (port: 5000)
│   └── Tomas.Admin          # MVC Admin Panel (port: 5001)
└── frontend/
    └── tomas-public         # Next.js App Router (port: 3000)
```

## Hızlı Başlangıç

### 1. Backend (API)

```bash
cd backend

# Migration ve DB oluştur
dotnet ef database update \
  --project Tomas.Infrastructure \
  --startup-project Tomas.Api

# API'yi çalıştır
cd Tomas.Api
dotnet run
# → http://localhost:5000
# → Swagger: http://localhost:5000/swagger
```

### 2. Admin Panel

```bash
cd backend/Tomas.Admin
dotnet run
# → http://localhost:5001
```

**Admin Girişi:**
- URL: `http://localhost:5001/Account/Login`
- E-posta: `admin@tomas.com.tr`
- Şifre: `TomasAdmin123!`

> ⚠️ **Production'da varsayılan şifreyi mutlaka değiştirin!**

### 3. Frontend

```bash
cd frontend/tomas-public
npm install
cp .env.local.example .env.local  # veya mevcut .env.local'i düzenle
npm run dev
# → http://localhost:3000
```

## Environment Variables

### Frontend (.env.local)

| Değişken | Açıklama | Varsayılan |
|----------|----------|------------|
| `NEXT_PUBLIC_API_URL` | Backend API URL | `http://localhost:5000` |
| `NEXT_PUBLIC_SITE_URL` | Public site URL | `http://localhost:3000` |

### Backend (appsettings.json)

| Key | Açıklama |
|-----|----------|
| `ConnectionStrings:DefaultConnection` | SQLite (dev) veya PostgreSQL (prod) |

**PostgreSQL için:** `Host=localhost;Database=tomas;Username=...;Password=...`

## Admin Panel Özellikleri

- `/Account/Login` — Giriş
- `/Dashboard` — Metrikler (hizmet, blog, mesaj, slide sayıları)
- `/Services` — Hizmet CRUD + slug üretimi + SEO
- `/BlogPosts` — Blog CRUD
- `/ContactMessages` — Mesaj listesi + detay + CSV export

## API Endpointleri

| Method | Endpoint | Açıklama |
|--------|----------|----------|
| GET | `/api/public/site-settings` | Site ayarları |
| GET | `/api/public/services?lang=tr` | Hizmet listesi |
| GET | `/api/public/services/{slug}` | Hizmet detay |
| GET | `/api/public/blog-posts?lang=tr` | Blog listesi |
| GET | `/api/public/blog-posts/{slug}` | Blog detay |
| GET | `/api/public/faqs?lang=tr` | SSS |
| GET | `/api/public/hero-slides?lang=tr` | Hero slider |
| GET | `/api/public/testimonials?lang=tr` | Yorumlar |
| GET | `/api/public/pages/{slug}` | Sayfa içeriği |
| POST | `/api/public/contact` | İletişim formu |

## Frontend Sayfaları

| Sayfa | Rendering |
|-------|-----------|
| `/` | ISR (5 dk) |
| `/hizmetler` | ISR (5 dk) |
| `/hizmetler/[slug]` | SSG |
| `/haberler` | ISR (2 dk) |
| `/haberler/[slug]` | SSG |
| `/hakkimizda` | ISR (5 dk) |
| `/sss` | Static (Client Component) |
| `/iletisim` | ISR + Client Form |
| `/kvkk` | Static |
| `/gizlilik-politikasi` | Static |
| `/sitemap.xml` | Dynamic |
| `/robots.txt` | Static |

## Bundle Analizi

```bash
cd frontend/tomas-public
npm run analyze
```

## Lighthouse Hedefleri

| Metrik | Hedef |
|--------|-------|
| Performance | 95+ |
| SEO | 95+ |
| Accessibility | 90+ |
| Best Practices | 90+ |

## Production Yapılacaklar

- [ ] Admin şifresi değiştirilmeli
- [ ] PostgreSQL connection string güncellenmeli
- [ ] `NEXT_PUBLIC_SITE_URL` production URL ile güncellenmeli
- [ ] Google Analytics ID eklenecekse Admin'den site ayarlarına girilmeli
- [ ] SSL sertifikası
- [ ] Reverse proxy (nginx / Caddy)
- [ ] Email gönderimi için SMTP ayarları eklenebilir
- [ ] Rate limiting production'da Redis ile güçlendirilebilir

## Çoklu Dil

İçerikler `LanguageCode` alanı ile `tr` / `en` olarak yönetilmektedir.
Admin panelde içerik oluştururken Dil alanından seçim yapılır.

## Geliştirme Notları

- Backend tek bir SQLite dosyası kullanır (`tomas.db` — backend klasörü üstünde)
- API ve Admin aynı DB'yi paylaşır
- Seed data uygulama ilk açılışında otomatik yüklenir
- Soft delete kullanılır — kayıtlar gerçek anlamda silinmez
- Upload izin verilen formatlar: JPG, JPEG, PNG, WEBP (maks 5MB)
