import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/api";
import { FALLBACK_BLOG_POSTS } from "@/lib/fallback-data";
import { Calendar, User, ChevronRight, ArrowLeft, Share2 } from "lucide-react";
import { DottedPattern } from "@/components/ui/Decorations";
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
      <div className="relative overflow-hidden bg-navy-900 py-20 lg:py-24">
        <DottedPattern className="absolute inset-0 text-white opacity-[0.04]" />
        {post.imagePath && (
          <div className="absolute inset-0">
            <Image src={post.imagePath} alt={post.title} fill className="object-cover opacity-[0.08]" priority />
          </div>
        )}
        <div className="container relative z-10">
          <div className="flex items-center gap-1.5 text-sm text-white/50 mb-6">
            <Link href="/haberler" className="hover:text-gold-400 transition-colors">Haberler</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/75 truncate max-w-[240px]">{post.title}</span>
          </div>

          <h1
            className="font-jakarta font-bold text-white mb-5 leading-tight max-w-3xl"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", letterSpacing: "-0.02em" }}
          >
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-5 text-sm text-white/50">
            {formattedDate && (
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {formattedDate}
              </span>
            )}
            {post.author && (
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5" />
                {post.author}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="bg-slate-50 py-16 lg:py-20">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-10 items-start">

            <main className="lg:col-span-2">
              {post.imagePath && (
                <div className="relative w-full aspect-[16/7] rounded-3xl overflow-hidden mb-8 border border-slate-100">
                  <Image src={post.imagePath} alt={post.title} fill className="object-cover" priority />
                </div>
              )}

              <div className="bg-white rounded-3xl border border-slate-100 p-8 lg:p-10">
                {post.content ? (
                  <div
                    className="prose prose-slate max-w-none prose-headings:font-jakarta prose-headings:text-navy-900 prose-a:text-gold-600 prose-li:text-slate-500 prose-p:text-slate-500"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                ) : post.summary ? (
                  <p className="text-slate-500 text-[17px] leading-relaxed">{post.summary}</p>
                ) : null}
              </div>

              {/* Share + back */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <Link
                  href="/haberler"
                  className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-navy-900 font-semibold transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Tüm Haberler
                </Link>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${SITE}/haberler/${slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-navy-900 font-semibold transition-colors"
                  aria-label="LinkedIn'de Paylaş"
                >
                  <Share2 className="w-4 h-4" />
                  LinkedIn&apos;de Paylaş
                </a>
              </div>
            </main>

            {/* Sidebar — related posts */}
            {related.length > 0 && (
              <aside>
                <div className="bg-white rounded-3xl border border-slate-100 p-6 sticky top-[88px]">
                  <h3 className="font-jakarta font-semibold text-navy-900 text-xs uppercase tracking-widest mb-5">
                    Diğer Haberler
                  </h3>
                  <div className="flex flex-col gap-4">
                    {related.map((p) => (
                      <Link key={p.id} href={`/haberler/${p.slug}`} className="group block">
                        {p.imagePath && (
                          <div className="relative w-full aspect-[16/7] rounded-xl overflow-hidden mb-2 bg-slate-100">
                            <Image src={p.imagePath} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                          </div>
                        )}
                        <div className="text-sm font-jakarta font-semibold text-navy-900 group-hover:text-gold-600 transition-colors leading-snug line-clamp-2">
                          {p.title}
                        </div>
                        {p.publishedAt && (
                          <div className="text-xs text-slate-400 mt-1">
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
