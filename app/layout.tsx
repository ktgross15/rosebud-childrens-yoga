import type { Metadata } from "next";
import { Baloo_2, Nunito } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StructuredData } from "@/components/structured-data";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["500", "700", "800"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const DESCRIPTION =
  "Gentle outdoor yoga for ages 2–5 at Pacific Park in Brooklyn. Saturday morning classes, first-timers welcome, taught by a certified Special Education Teacher and Registered Yoga Teacher.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} · Toddler & Preschool Yoga in Brooklyn`,
    template: `%s · ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
    url: SITE_URL,
    title: `${SITE_NAME} · Toddler & Preschool Yoga in Brooklyn`,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} · Toddler & Preschool Yoga in Brooklyn`,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${baloo.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="page-shell min-h-full font-sans">
        <StructuredData />
        <div className="mx-auto flex min-h-full w-full min-w-0 max-w-3xl flex-col px-5 py-6 sm:px-8 sm:py-8">
          <SiteHeader />
          <main className="flex flex-1 flex-col">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
