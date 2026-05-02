import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/api";
import { FALLBACK_BLOG_POSTS } from "@/lib/fallback-data";
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";
import { BlogPostingJsonLd, BreadcrumbListJsonLd } from "@/components/JsonLd";

export const revalidate = 120;

export async function generateStaticParams() {
  return FALLBACK_BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug, "tr");
  if (!post) return {};
  const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tomas.com.tr";
  return {
    title: post.metaTitle || `${post.title} | Tomas Dış Ticaret`,
    description: post.metaDescription || post.summary,
    openGraph: {
      type: "article",
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.summary,
      publishedTime: post.publishedAt,
      authors: post.author ? [post.author] : undefined,
      images: post.ogImagePath ? [post.ogImagePath] : undefined,
    },
    alternates: { canonical: `${SITE}/haberler/${slug}` },
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [post, allPosts] = await Promise.all([
    getBlogPostBySlug(slug, "tr"),
    getBlogPosts("tr"),
  ]);

  if (!post) notFound();

  const related = allPosts.filter((p) => p.slug !== slug).slice(0, 3);
  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("tr-TR", { year: "numeric", month: "long", day: "numeric" })
    : null;
  const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tomas.com.tr";

  return (
    <>
      <BlogPostingJsonLd
        title={post.title}
        description={post.summary}
        author={post.author}
        datePublished={post.publishedAt}
        imageUrl={post.imagePath}
        url={`/haberler/${slug}`}
      />
      <BreadcrumbListJsonLd items={[
        { name: "Ana Sayfa", url: "/" },
        { name: "Haberler", url: "/haberler" },
        { name: post.title, url: `/haberler/${slug}` },
      ]} />

      {/* Hero */}
      <div style={{ backgroundColor: "#F9FAFB", borderBottom: "1px solid #E4E7EF", padding: "56px 0 48px", position: "relative", overflow: "hidden" }}>
        {post.imagePath && (
          <div style={{ position: "absolute", inset: 0 }}>
            <Image src={post.imagePath} alt={post.title} fill style={{ objectFit: "cover", opacity: 0.04 }} priority />
          </div>
        )}
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
            <Link href="/" style={{ fontSize: 13, color: "#6B7280", textDecoration: "none" }}>Ana Sayfa</Link>
            <span style={{ color: "#D1D5DB", fontSize: 13 }}>/</span>
            <Link href="/haberler" style={{ fontSize: 13, color: "#6B7280", textDecoration: "none" }}>Haberler</Link>
            <span style={{ color: "#D1D5DB", fontSize: 13 }}>/</span>
            <span style={{ fontSize: 13, color: "#1A1F36", fontWeight: 500, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: 280 }}>{post.title}</span>
          </div>
          <h1 style={{ fontWeight: 800, color: "#1A1F36", fontSize: "clamp(1.8rem,4vw,3rem)", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 16, maxWidth: 800 }}>
            {post.title}
          </h1>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 20 }}>
            {formattedDate && (
              <span style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#6B7280", fontWeight: 500 }}>
                <Calendar size={13} /> {formattedDate}
              </span>
            )}
            {post.author && (
              <span style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#6B7280", fontWeight: 500 }}>
                <User size={13} /> {post.author}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ backgroundColor: "#fff", padding: "64px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div className="grid grid-cols-1 lg:grid-cols-3" style={{ gap: 24, alignItems: "start" }}>

            <main style={{ gridColumn: "span 2" }}>
              {post.imagePath && (
                <div style={{ position: "relative", width: "100%", aspectRatio: "16/7", overflow: "hidden", borderRadius: 16, marginBottom: 20 }}>
                  <Image src={post.imagePath} alt={post.title} fill style={{ objectFit: "cover" }} priority />
                </div>
              )}

              <div style={{ backgroundColor: "#fff", borderRadius: 16, padding: "40px", border: "1px solid #E4E7EF", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
                {post.content ? (
                  <div className="prose" dangerouslySetInnerHTML={{ __html: post.content }} />
                ) : post.summary ? (
                  <p style={{ fontSize: 16, color: "#6B7280", lineHeight: 1.8 }}>{post.summary}</p>
                ) : null}
              </div>

              <div style={{ marginTop: 20, display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                <Link
                  href="/haberler"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, color: "#6B7280", fontWeight: 600, textDecoration: "none" }}
                >
                  <ArrowLeft size={13} /> Tüm Haberler
                </Link>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${SITE}/haberler/${slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, color: "#6B7280", fontWeight: 600, textDecoration: "none" }}
                >
                  <Share2 size={13} /> LinkedIn&apos;de Paylaş
                </a>
              </div>
            </main>

            {related.length > 0 && (
              <aside>
                <div style={{ backgroundColor: "#fff", borderRadius: 16, padding: "24px", border: "1px solid #E4E7EF", position: "sticky", top: 80 }}>
                  <h3 style={{ fontWeight: 600, fontSize: 11, letterSpacing: "0.1em", color: "#6B7280", marginBottom: 16, textTransform: "uppercase" as const }}>
                    Diğer Haberler
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                    {related.map((p) => (
                      <Link key={p.id} href={`/haberler/${p.slug}`} style={{ textDecoration: "none", display: "block" }}>
                        {p.imagePath && (
                          <div style={{ position: "relative", width: "100%", aspectRatio: "16/7", overflow: "hidden", borderRadius: 10, marginBottom: 10 }}>
                            <Image src={p.imagePath} alt={p.title} fill style={{ objectFit: "cover" }} />
                          </div>
                        )}
                        <div style={{ fontWeight: 600, fontSize: 14, color: "#1A1F36", lineHeight: 1.35 }}>
                          {p.title}
                        </div>
                        {p.publishedAt && (
                          <div style={{ fontSize: 12, color: "#6B7280", marginTop: 4 }}>
                            {new Date(p.publishedAt).toLocaleDateString("tr-TR", { year: "numeric", month: "short", day: "numeric" })}
                          </div>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              </aside>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
