import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { OrganizationJsonLd } from "@/components/JsonLd";
import { getSiteSettings } from "@/lib/api";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
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
    <html lang="tr" className={`${inter.variable} ${jakarta.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans antialiased">
        <OrganizationJsonLd />
        <Header settings={settings} />
        <main className="flex-1">{children}</main>
        <Footer settings={settings} />
      </body>
    </html>
  );
}
