import { ClientLayout } from "./client-layout";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { constructMetadata } from "@/lib/generateMetadata";
import { siteConfig } from "@/data/metadata";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontDisplay = localFont({
  src: [
    {
      path: "../public/fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-display",
});

export const metadata = constructMetadata();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontDisplay.variable
        )}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: siteConfig.name,
              url: siteConfig.url,
              jobTitle: siteConfig.jobTitle,
              address: {
                "@type": "PostalAddress",
                addressLocality: siteConfig.city,
                addressCountry: siteConfig.country,
              },
              sameAs: [siteConfig.githubUrl, siteConfig.linkedinUrl],
              knowsAbout: siteConfig.keywords,
            }),
          }}
        />

        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
