import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Process from "@/components/home/Process";
import WhyTomas from "@/components/home/WhyTomas";
import Sectors from "@/components/home/Sectors";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";
import { getSiteSettings } from "@/lib/api";
import { OrganizationJsonLd } from "@/components/JsonLd";

export const revalidate = 300;

export async function generateMetadata(): Promise<Metadata> {
  const s = await getSiteSettings();
  return {
    title: s.metaTitle || "Tomas Dış Ticaret | Global Tedarik ve Dış Ticaret Çözümleri",
    description: s.metaDescription || "Tomas Dış Ticaret; ithalat, ihracat, global tedarik, endüstriyel ürünler ve dijital çözümler alanında B2B süreç desteği sunar.",
    openGraph: {
      title: s.metaTitle || "Tomas Dış Ticaret | Global Tedarik ve Dış Ticaret Çözümleri",
      description: s.metaDescription,
      type: "website",
      url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tomas.com.tr",
    },
    alternates: {
      canonical: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tomas.com.tr",
    },
  };
}

export default function HomePage() {
  return (
    <>
      <OrganizationJsonLd />
      <Hero />
      <About />
      <Services />
      <Process />
      <WhyTomas />
      <Sectors />
      <Stats />
      <Testimonials />
      <CTASection />
    </>
  );
}
