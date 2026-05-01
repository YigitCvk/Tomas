import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getBlogPosts } from "@/lib/api";
import { ArrowRight, Calendar, User } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { BreadcrumbListJsonLd } from "@/components/JsonLd";

export const revalidate = 120;
export const metadata: Metadata = {
  title: "Haberler | Tomas Dış Ticaret",
  description: "Dış ticaret, tedarik ve B2B süreçleri hakkında güncel bilgiler, sektör haberleri ve şirket duyuruları.",
  openGraph: {
    title: "Haberler | Tomas Dış Ticaret",
    description: "Dış ticaret ve tedarik süreçlerine dair güncel bilgiler ve içerikler.",
    type: "website",
  },
};

export default async function BlogPage() {
  const posts = await getBlogPosts("tr");

  return (
    <>
      <BreadcrumbListJsonLd items={[
        { name: "Ana Sayfa", url: "/" },
        { name: "Haberler", url: "/haberler" },
      ]} />

      <PageHero
        eyebrow="Güncel"
        title="Haberler"
        subtitle="Dış ticaret ve tedarik süreçlerine dair güncel bilgiler ve içerikler"
      />

      <section className="bg-slate-50 py-24 lg:py-32">
        <div className="container">
          {posts.length === 0 ? (
            <div className="text-center py-24">
              <div className="w-16 h-16 rounded-2xl bg-slate-200 flex items-center justify-center mx-auto mb-4 text-3xl">
                📰
              </div>
              <p className="text-slate-400 text-base">Henüz haber bulunmamaktadır.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link key={post.id} href={`/haberler/${post.slug}`} className="group block h-full">
                  <article className="bg-white rounded-3xl overflow-hidden border border-slate-100 h-full flex flex-col transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
                    {/* Image / placeholder */}
                    {post.imagePath ? (
                      <div className="relative h-48 overflow-hidden">
                        <Image src={post.imagePath} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                      </div>
                    ) : (
                      <div className="h-48 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 flex items-center justify-center relative overflow-hidden">
                        <div
                          className="absolute inset-0 opacity-[0.06]"
                          style={{
                            backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
                            backgroundSize: "28px 28px",
                          }}
                        />
                        <div className="w-14 h-14 rounded-2xl bg-gold-400/15 border border-gold-400/25 flex items-center justify-center relative z-10">
                          <Calendar className="w-7 h-7 text-gold-400" />
                        </div>
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                        {post.publishedAt && (
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {new Date(post.publishedAt).toLocaleDateString("tr-TR", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </span>
                        )}
                        {post.author && (
                          <span className="flex items-center gap-1">
                            <User className="w-3.5 h-3.5" />
                            {post.author}
                          </span>
                        )}
                      </div>
                      <h2 className="font-jakarta font-semibold text-navy-900 text-base leading-snug mb-3">
                        {post.title}
                      </h2>
                      {post.summary && (
                        <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">
                          {post.summary.length > 120 ? post.summary.slice(0, 120) + "…" : post.summary}
                        </p>
                      )}
                      <div className="flex items-center gap-1.5 text-sm font-semibold text-gold-600 group-hover:text-gold-700 transition-colors mt-auto">
                        Devamını Oku
                        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
