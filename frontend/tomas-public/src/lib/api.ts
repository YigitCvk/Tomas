import { FALLBACK_SERVICES, FALLBACK_BLOG_POSTS, FALLBACK_FAQS } from "./fallback-data";

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000";

async function apiFetch<T>(path: string, revalidate = 300): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    next: { revalidate },
  });
  if (!res.ok) throw new Error(`API error ${res.status}: ${path}`);
  return res.json() as Promise<T>;
}

export interface SiteSettings {
  siteName: string;
  siteDescription: string;
  defaultLanguage: string;
  phone: string;
  gsm: string;
  email: string;
  address: string;
  whatsApp: string;
  linkedIn: string;
  twitter: string;
  metaTitle: string;
  metaDescription: string;
  googleAnalyticsId: string;
}

export interface ServiceDto {
  id: number;
  title: string;
  slug: string;
  shortDescription?: string;
  content?: string;
  icon?: string;
  imagePath?: string;
  languageCode: string;
  metaTitle?: string;
  metaDescription?: string;
  canonicalUrl?: string;
  ogImagePath?: string;
  isActive: boolean;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
}

export interface BlogPostDto {
  id: number;
  title: string;
  slug: string;
  summary?: string;
  content?: string;
  imagePath?: string;
  author?: string;
  languageCode: string;
  publishedAt?: string;
  metaTitle?: string;
  metaDescription?: string;
  canonicalUrl?: string;
  ogImagePath?: string;
  isActive: boolean;
  createdAt: string;
}

export interface FaqDto {
  id: number;
  question: string;
  answer: string;
  languageCode: string;
  sortOrder: number;
}

export interface TestimonialDto {
  id: number;
  authorName: string;
  authorTitle?: string;
  company?: string;
  content: string;
  rating: number;
  avatarPath?: string;
}

export interface HeroSlideDto {
  id: number;
  title: string;
  subtitle?: string;
  description?: string;
  imagePath?: string;
  primaryButtonText?: string;
  primaryButtonUrl?: string;
  secondaryButtonText?: string;
  secondaryButtonUrl?: string;
}

export interface PageDto {
  id: number;
  title: string;
  slug: string;
  content?: string;
  shortDescription?: string;
  metaTitle?: string;
  metaDescription?: string;
}

export async function getSiteSettings(): Promise<SiteSettings> {
  try {
    return await apiFetch<SiteSettings>("/api/public/site-settings", 600);
  } catch {
    if (process.env.NODE_ENV !== "production") {
      console.warn("[Tomas] API unavailable — using fallback site settings");
    }
    return {
      siteName: "Tomas Dış Ticaret",
      siteDescription: "Global tedarik ve dış ticaret çözümlerinde güvenilir B2B iş ortağınız.",
      defaultLanguage: "tr",
      phone: "0 (212) 302 59 35",
      gsm: "+90 (532) 420 12 99",
      email: "info@tomas.com.tr",
      address: "Libadiye Cad. No:82E Emaar Heights Blok K:23 D:2307 34700 Üsküdar / İstanbul",
      whatsApp: "+905324201299",
      linkedIn: "",
      twitter: "",
      metaTitle: "Tomas Dış Ticaret | Global Tedarik ve Dış Ticaret Çözümleri",
      metaDescription: "Tomas Dış Ticaret; ithalat, ihracat, global tedarik, endüstriyel ürünler ve dijital çözümler alanında B2B süreç desteği sunar.",
      googleAnalyticsId: "",
    };
  }
}

export async function getServices(lang = "tr"): Promise<ServiceDto[]> {
  try {
    const data = await apiFetch<ServiceDto[]>(`/api/public/services?lang=${lang}`, 300);
    return data.length > 0 ? data : FALLBACK_SERVICES;
  } catch {
    if (process.env.NODE_ENV !== "production") {
      console.warn("[Tomas] API unavailable — using fallback services");
    }
    return FALLBACK_SERVICES;
  }
}

export async function getServiceBySlug(slug: string, lang = "tr"): Promise<ServiceDto | null> {
  try {
    return await apiFetch<ServiceDto>(`/api/public/services/${slug}?lang=${lang}`, 300);
  } catch {
    if (process.env.NODE_ENV !== "production") {
      console.warn(`[Tomas] API unavailable — using fallback for service: ${slug}`);
    }
    return FALLBACK_SERVICES.find((s) => s.slug === slug) ?? null;
  }
}

export async function getBlogPosts(lang = "tr", page = 1): Promise<BlogPostDto[]> {
  try {
    const data = await apiFetch<BlogPostDto[]>(`/api/public/blog-posts?lang=${lang}&page=${page}`, 120);
    return data.length > 0 ? data : FALLBACK_BLOG_POSTS;
  } catch {
    if (process.env.NODE_ENV !== "production") {
      console.warn("[Tomas] API unavailable — using fallback blog posts");
    }
    return FALLBACK_BLOG_POSTS;
  }
}

export async function getBlogPostBySlug(slug: string, lang = "tr"): Promise<BlogPostDto | null> {
  try {
    return await apiFetch<BlogPostDto>(`/api/public/blog-posts/${slug}?lang=${lang}`, 120);
  } catch {
    if (process.env.NODE_ENV !== "production") {
      console.warn(`[Tomas] API unavailable — using fallback for post: ${slug}`);
    }
    return FALLBACK_BLOG_POSTS.find((p) => p.slug === slug) ?? null;
  }
}

export async function getFaqs(lang = "tr"): Promise<FaqDto[]> {
  try {
    const data = await apiFetch<FaqDto[]>(`/api/public/faqs?lang=${lang}`, 600);
    return data.length > 0 ? data : FALLBACK_FAQS;
  } catch {
    if (process.env.NODE_ENV !== "production") {
      console.warn("[Tomas] API unavailable — using fallback FAQs");
    }
    return FALLBACK_FAQS;
  }
}

export async function getTestimonials(lang = "tr"): Promise<TestimonialDto[]> {
  try {
    return await apiFetch<TestimonialDto[]>(`/api/public/testimonials?lang=${lang}`, 600);
  } catch {
    return [];
  }
}

export async function getHeroSlides(lang = "tr"): Promise<HeroSlideDto[]> {
  try {
    return await apiFetch<HeroSlideDto[]>(`/api/public/hero-slides?lang=${lang}`, 300);
  } catch {
    return [];
  }
}

export async function getPageBySlug(slug: string, lang = "tr"): Promise<PageDto | null> {
  try {
    return await apiFetch<PageDto>(`/api/public/pages/${slug}?lang=${lang}`, 300);
  } catch {
    return null;
  }
}

export async function submitContact(data: Record<string, unknown>): Promise<{ success: boolean; message: string }> {
  const res = await fetch(`${API_BASE}/api/public/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}
