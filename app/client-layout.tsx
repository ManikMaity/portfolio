"use client";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { FloatingSocials } from "@/components/shared/floating-socials";
import { ScrollProgress } from "@/components/shared/scroll-progress";
import { ScrollToTop } from "@/components/shared/scroll-to-top";
import { SmoothScrollProvider } from "@/components/shared/smooth-scroll-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <SmoothScrollProvider>
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
        </div>
        <FloatingSocials />
        <ScrollToTop />
        <ScrollProgress />
        <SpeedInsights />
        <Analytics />
      </SmoothScrollProvider>
    </ThemeProvider>
  );
}
