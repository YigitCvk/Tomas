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
        breadcrumbs={[{ label: "Ana Sayfa", href: "/" }, { label: "Haberler" }]}
      />

      <section style={{ backgroundColor: "#fff", padding: "80px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          {posts.length === 0 ? (
            <div style={{ textAlign: "center", padding: "80px 0" }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>📰</div>
              <p style={{ color: "#6B7280", fontSize: 15 }}>Henüz haber bulunmamaktadır.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 20 }}>
              {posts.map((post) => (
                <Link key={post.id} href={`/haberler/${post.slug}`} style={{ textDecoration: "none", display: "block" }}>
                  <article
                    style={{ backgroundColor: "#fff", borderRadius: 16, height: "100%", display: "flex", flexDirection: "column", border: "1px solid #E4E7EF", overflow: "hidden", boxShadow: "0 1px 4px rgba(0,0,0,0.04)", transition: "box-shadow 0.2s, transform 0.2s" }}
                  >
                    {post.imagePath ? (
                      <div style={{ position: "relative", height: 200, overflow: "hidden" }}>
                        <Image src={post.imagePath} alt={post.title} fill style={{ objectFit: "cover" }} />
                      </div>
                    ) : (
                      <div style={{ height: 120, background: "linear-gradient(135deg, #EBF1FF 0%, #F0F5FF 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Calendar size={32} color="#0B5CFF" />
                      </div>
                    )}

                    <div style={{ padding: "24px", display: "flex", flexDirection: "column", flex: 1, gap: 12 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
                        {post.publishedAt && (
                          <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#6B7280", fontWeight: 500 }}>
                            <Calendar size={11} />
                            {new Date(post.publishedAt).toLocaleDateString("tr-TR", { year: "numeric", month: "long", day: "numeric" })}
                          </span>
                        )}
                        {post.author && (
                          <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#6B7280", fontWeight: 500 }}>
                            <User size={11} /> {post.author}
                          </span>
                        )}
                      </div>
                      <h2 style={{ fontWeight: 700, fontSize: 16, color: "#1A1F36", lineHeight: 1.35, margin: 0 }}>
                        {post.title}
                      </h2>
                      {post.summary && (
                        <p style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.7, margin: 0, flex: 1 }}>
                          {post.summary.length > 130 ? post.summary.slice(0, 130) + "…" : post.summary}
                        </p>
                      )}
                      <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, color: "#0B5CFF", marginTop: 4 }}>
                        Devamını Oku <ArrowRight size={13} />
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
