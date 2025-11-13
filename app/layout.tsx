import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LATAI Summit 2025 | El Evento Premier de IA en Perú",
  description: "Únete a 500+ líderes LATAM en el evento de Inteligencia Artificial más importante de Perú. 2 días de estrategias accionables, speakers de clase mundial y networking de alto impacto. Lima, Mayo 7-8, 2025.",
  keywords: "IA Perú, Inteligencia Artificial, AI Summit, LATAI, evento tecnología, machine learning, fintech IA, transformación digital Perú",
  authors: [{ name: "LATAI Summit" }],
  openGraph: {
    title: "LATAI Summit 2025 | El Evento Premier de IA en Perú",
    description: "Únete a 500+ líderes LATAM construyendo el futuro de la IA en Perú. Mayo 7-8, 2025 en Lima.",
    url: "https://lataisummit.com",
    siteName: "LATAI Summit",
    locale: "es_PE",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LATAI Summit 2025",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LATAI Summit 2025 | El Evento Premier de IA en Perú",
    description: "2 días de estrategias de IA, speakers de clase mundial y networking de alto impacto. Lima, Mayo 7-8, 2025.",
    images: ["/og-image.jpg"],
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
    <html lang="es">
      <head>
        {/* Google Analytics - Replace with your GA4 ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>

        {/* Meta Pixel - Replace with your Pixel ID */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'YOUR_PIXEL_ID');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
