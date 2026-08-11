import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { getSiteData, getNavItems, getServicesData } from "@/lib/content-data";

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSiteData();
  const siteUrl = `https://${site.domain}`;

  return {
    metadataBase: new URL(siteUrl),
    title: `${site.name} — Premium Editorial Links & PR for Web2 + Web3`,
    description: site.description,
    icons: {
      icon: "/images/logo.png",
      apple: "/images/logo.png",
    },
    keywords: [
      "guest post placements",
      "crypto PR",
      "Web3 PR agency",
      "link building",
      "KOL campaigns",
      "GEO-targeted PR",
      "editorial links",
    ],
    openGraph: {
      title: `${site.name} — Premium Editorial Links & PR`,
      description: site.description,
      url: siteUrl,
      siteName: site.name,
      type: "website",
    },
    alternates: {
      canonical: siteUrl,
    },
  };
}

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [site, nav, services] = await Promise.all([
    getSiteData(),
    getNavItems(),
    getServicesData(),
  ]);

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SiteHeader nav={nav} />
        <main className="flex-1">{children}</main>
        <SiteFooter site={site} nav={nav} services={services} />
      </body>
    </html>
  );
}
