import type { MetadataRoute } from "next";
import { getServices, getBlogPosts } from "@/lib/api";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tomas.com.tr";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [services, posts] = await Promise.all([getServices("tr"), getBlogPosts("tr")]);

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: new Date(), priority: 1.0, changeFrequency: "weekly" },
    { url: `${BASE}/hizmetler`, lastModified: new Date(), priority: 0.9, changeFrequency: "weekly" },
    { url: `${BASE}/hakkimizda`, lastModified: new Date(), priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE}/haberler`, lastModified: new Date(), priority: 0.8, changeFrequency: "weekly" },
    { url: `${BASE}/sss`, lastModified: new Date(), priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE}/iletisim`, lastModified: new Date(), priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE}/kvkk`, lastModified: new Date(), priority: 0.3, changeFrequency: "yearly" },
    { url: `${BASE}/gizlilik-politikasi`, lastModified: new Date(), priority: 0.3, changeFrequency: "yearly" },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${BASE}/hizmetler/${s.slug}`,
    lastModified: new Date(s.updatedAt),
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  const postRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${BASE}/haberler/${p.slug}`,
    lastModified: new Date(p.createdAt),
    priority: 0.6,
    changeFrequency: "yearly" as const,
  }));

  return [...staticRoutes, ...serviceRoutes, ...postRoutes];
}
