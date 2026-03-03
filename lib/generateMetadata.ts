import { siteConfig } from "@/data/metadata";
import type { Metadata } from "next";

export function constructMetadata({
  title,
  description,
  image,
  noIndex = false,
  canonical,
}: {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
  canonical?: string;
} = {}): Metadata {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;

  const metaDescription = description ?? siteConfig.description;
  const metaImage = image ?? siteConfig.ogImage;
  const url = canonical ?? siteConfig.url;

  return {
    metadataBase: new URL(siteConfig.url),

    title: fullTitle,
    description: metaDescription,
    keywords: siteConfig.keywords,

    alternates: {
      canonical: url,
    },

    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      title: fullTitle,
      description: metaDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: metaImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: metaDescription,
      images: [metaImage],
      creator: siteConfig.twitterHandle,
    },

    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
  };
}
