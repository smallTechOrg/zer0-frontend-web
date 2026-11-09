import type { Metadata } from "next";
import { Montserrat, Outfit } from "next/font/google";
import "./globals.css";
import NetworkStatusBanner from "./components/common/networkStatus";
import Script from "next/script";
import { GA_MEASUREMENT_ID } from "./lib/analytics";
import { AnalyticsProvider } from "./lib/analyticsProvider";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

// Brand font for the Zer0 umbrella homepage (smallTech brand: Montserrat only).
// Only exposes a CSS variable; pages opt in via the .zer0-brand wrapper.
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// SEO metadata applied to every page as defaults.
// Individual route pages (e.g. /pricing/page.tsx) can override any of these
export const metadata: Metadata = {
  // Required base URL so Next.js can resolve relative canonical/OG URLs correctly.
  // Without this, alternates.canonical "/" would render as a bare "/" instead of
  // the full "https://zer0.smalltech.in/" in the <head>.
  metadataBase: new URL("https://zer0.smalltech.in"),

  title: {
    // Fallback title used when a page doesn't export its own metadata.title
    default: "Zer0 — The Multi-Agent OS for Small Businesses",
    // Template applied to all child page titles: e.g. "Pricing" → "Pricing | Zer0"
    template: "%s | Zer0",
  },

  description:
    "Zer0 is the multi-agent OS for small businesses. Agents run your sales, workshops, data and cloud end to end. You approve what matters. Everything is audited.",

  // Keywords hint for crawlers (low ranking signal but still used by some engines)
  keywords: [
    "agentic AI for small business",
    "agentic workflows",
    "AI agents for small business",
    "business workflow automation",
    "human-in-the-loop AI",
    "AI sales agent",
    "AI inbox agent",
    "AI data analyst",
    "AI security audit",
    "Zer0",
    "smallTech",
  ],

  // Explicitly tell crawlers to index and follow links on all pages.
  // Individual pages (e.g. /signup) can set { index: false } to override.
  robots: { index: true, follow: true },

  // Canonical URL for the homepage — prevents duplicate-content penalties
  // if the site is ever accessible via multiple URLs (www vs non-www, etc.)
  alternates: { canonical: "/" },

  // Favicon — SVG favicon (app/icon.svg is also picked up automatically by Next.js)
  icons: {
    icon: { url: "/logo.svg", type: "image/svg+xml" },
  },

  // Open Graph tags — used by Facebook, LinkedIn, Slack, etc. for link previews
  openGraph: {
    title: "Zer0 — The Multi-Agent OS for Small Businesses",
    description:
      "Zer0 is the multi-agent OS for small businesses. Agents run your sales, workshops, data and cloud end to end. You approve what matters. Everything is audited.",
    url: "https://zer0.smalltech.in",
    siteName: "Zer0",
    locale: "en_US",
    type: "website",
    // opengraph-image.tsx in app/ generates this PNG automatically at build time
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Zer0 — The Multi-Agent OS for Small Businesses" }],
  },

  // Twitter card — controls how links appear when shared on X/Twitter
  // "summary_large_image" shows a large banner; image comes from opengraph-image.tsx
  twitter: {
    card: "summary_large_image",
    title: "Zer0 — The Multi-Agent OS for Small Businesses",
    description:
      "The multi-agent OS for small businesses. Agents do the busywork. You make the calls.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* JSON-LD structured data — helps Google understand what Zer0 is.
    SoftwareApplication schema is the correct type for a SaaS product.
    Validated at: https://search.google.com/test/rich-results */}
        <script
          type="application/ld+json" // Tells the browser/crawler this script contains JSON-LD data
          dangerouslySetInnerHTML={{
            // React specific attribute to inject raw strings as HTML (required for script tags)
            __html: JSON.stringify({
              "@context": "https://schema.org", // Defines the vocabulary (dictionary) being used
              "@type": "SoftwareApplication",   // Tells Google this page represents a software/SaaS product
              name: "Zer0",                     // The official name of the software
              applicationCategory: "BusinessApplication", // Categorizes it for app stores/search rankings
              description:
                "The multi-agent OS for small businesses: agents that run workflows end to end, with human approval gates and an audit trail.", // High-level product summary
              operatingSystem: "Web Browser",   // Specifies this is a SaaS/Web app, not a Windows/Mac exe
              url: "https://zer0.smalltech.in", // The primary link to the software
              author: {
                "@type": "Organization",        // Links the software to a legal company/entity
                name: "smallTech",              // Name of the parent company
                url: "https://smalltech.in",     // Website of the parent company
                logo: "https://zer0.smalltech.in/logo.svg", // Brand identity for the Knowledge Graph card
                contactPoint: {
                  "@type": "ContactPoint",      // Defines how customers can reach the company
                  email: "contact@smalltech.in",   // Support email address
                  contactType: "customer support", // Labels the purpose of this email
                },
              },
            }),
          }}
        />
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', {
                  send_page_view: false,
                  cookie_flags: 'SameSite=None;Secure',
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body
        className={`${outfit.variable} ${montserrat.variable} antialiased min-h-screen flex flex-col`}
      >
        <AnalyticsProvider />
        <NetworkStatusBanner />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
