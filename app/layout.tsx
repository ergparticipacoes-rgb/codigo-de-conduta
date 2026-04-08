import type { Metadata } from "next";
import Script from "next/script";
import { Cormorant, Outfit } from "next/font/google";
import { PRODUCT_NAME, SITE_META } from "@/lib/constants";
import "./globals.css";

const siteName = PRODUCT_NAME;
const description = SITE_META.description;

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const rawMetaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim();
/** IDs do Meta Pixel são numéricos — evita injeção no snippet inline. */
const metaPixelId =
  rawMetaPixelId && /^\d{5,20}$/.test(rawMetaPixelId)
    ? rawMetaPixelId
    : undefined;

const viewContentPayload = JSON.stringify({
  content_name: PRODUCT_NAME,
  content_type: "product",
});

export const metadata: Metadata = {
  title: {
    default: `${siteName} — ${SITE_META.titleSuffix}`,
    template: `%s · ${siteName}`,
  },
  description,
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName,
    title: `${siteName} — ${SITE_META.titleSuffix}`,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} — ${SITE_META.titleSuffix}`,
    description,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${outfit.variable} ${cormorant.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-canvas font-sans text-ink">
        {metaPixelId ? (
          <>
            <Script
              id="meta-pixel-base"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${metaPixelId}');
fbq('track', 'PageView');
fbq('track', 'ViewContent', ${viewContentPayload});
`,
              }}
            />
            <noscript>
              {/* Meta noscript: pixel 1×1 padrão */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                height={1}
                width={1}
                style={{ display: "none" }}
                alt=""
                src={`https://www.facebook.com/tr?id=${encodeURIComponent(metaPixelId)}&ev=PageView&noscript=1`}
              />
            </noscript>
          </>
        ) : null}
        {children}
      </body>
    </html>
  );
}
