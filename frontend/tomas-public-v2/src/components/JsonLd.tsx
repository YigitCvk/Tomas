const SITE = "https://tomas.com.tr";

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: "Tomas Dış Ticaret",
    url: SITE,
    logo: `${SITE}/logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+90-212-302-59-35",
      contactType: "customer service",
      areaServed: "Worldwide",
      availableLanguage: ["Turkish", "English"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Libadiye Cad. No:82E Emaar Heights Blok K:23 D:2307",
      addressLocality: "Üsküdar",
      addressRegion: "İstanbul",
      postalCode: "34700",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "41.023",
      longitude: "29.018",
    },
    sameAs: [],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

interface BreadcrumbItem { name: string; url: string }
export function BreadcrumbListJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE}${item.url}`,
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

interface BlogPostingJsonLdProps {
  title: string;
  description?: string;
  author?: string;
  datePublished?: string;
  dateModified?: string;
  imageUrl?: string;
  url: string;
}
export function BlogPostingJsonLd({ title, description, author, datePublished, dateModified, imageUrl, url }: BlogPostingJsonLdProps) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url: url.startsWith("http") ? url : `${SITE}${url}`,
    datePublished,
    dateModified: dateModified ?? datePublished,
    publisher: {
      "@type": "Organization",
      name: "Tomas Dış Ticaret",
      logo: { "@type": "ImageObject", url: `${SITE}/logo.png` },
    },
  };
  if (author) schema.author = { "@type": "Person", name: author };
  if (imageUrl) schema.image = imageUrl.startsWith("http") ? imageUrl : `${SITE}${imageUrl}`;
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

interface ServiceJsonLdProps { name: string; description?: string; url: string }
export function ServiceJsonLd({ name, description, url }: ServiceJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: url.startsWith("http") ? url : `${SITE}${url}`,
    provider: {
      "@type": "Organization",
      name: "Tomas Dış Ticaret",
      url: SITE,
    },
    areaServed: "Worldwide",
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

interface FaqItem { question: string; answer: string }
export function FAQPageJsonLd({ faqs }: { faqs: FaqItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
