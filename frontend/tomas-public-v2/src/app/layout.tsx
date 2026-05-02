import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { OrganizationJsonLd } from "@/components/JsonLd";
import { getSiteSettings } from "@/lib/api";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  return {
    title: {
      default: settings.metaTitle || "Tomas Dış Ticaret | Global Ticaret Çözümleri",
      template: "%s | Tomas Dış Ticaret",
    },
    description: settings.metaDescription || "Global ticarette güvenilir iş ortağınız.",
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://tomas.com.tr"),
    openGraph: {
      siteName: settings.siteName,
      locale: "tr_TR",
      type: "website",
    },
    robots: { index: true, follow: true },
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const settings = await getSiteSettings();
  return (
    <html lang="tr" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <OrganizationJsonLd />
        <Header settings={settings} />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer settings={settings} />
      </body>
    </html>
  );
}
