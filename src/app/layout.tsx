import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "YouTube Thumbnail Designer | Professional Thumbnail Design Services",
  description: "High-converting YouTube thumbnails that get more clicks. I design attention-grabbing thumbnails to help creators stand out, improve CTR, and grow faster.",
  keywords: [
    "YouTube Thumbnail Designer",
    "Thumbnail Design Services",
    "Professional Thumbnail Designer",
    "YouTube Thumbnail Expert",
    "Increase YouTube CTR",
    "Thumbnail Portfolio",
    "YouTube Growth Services"
  ],
  authors: [{ name: "Naga Sai", url: "https://nagasaidesigns.com" }],
  creator: "Naga Sai",
  openGraph: {
    title: "YouTube Thumbnail Designer | High-Converting Thumbnail Services",
    description: "I design attention-grabbing thumbnails that help creators stand out, improve CTR, and grow faster. View my portfolio of 100+ designed thumbnails.",
    url: "https://nagasaidesigns.com",
    siteName: "Naga Sai Thumbnail Portfolio",
    images: [
      {
        url: "/images/thumbnail_gaming.png",
        width: 1200,
        height: 630,
        alt: "Professional YouTube Thumbnail Showcase"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YouTube Thumbnail Designer | High-Converting Thumbnail Services",
    description: "Get more clicks and attract more viewers through custom, high-converting thumbnails. View my case studies and book today!",
    images: ["/images/thumbnail_gaming.png"],
    creator: "@nagasaidesigns",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Naga Sai - YouTube Thumbnail Designer",
    "image": "https://nagasaidesigns.com/images/thumbnail_gaming.png",
    "@id": "https://nagasaidesigns.com",
    "url": "https://nagasaidesigns.com",
    "telephone": "+1-800-CTR-GROW",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Creative Suite 404",
      "addressLocality": "Austin",
      "addressRegion": "TX",
      "postalCode": "78701",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 30.267153,
      "longitude": -97.74306
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://twitter.com/nagasaidesigns",
      "https://instagram.com/nagasaidesigns",
      "https://linkedin.com/in/nagasai-designs"
    ],
    "priceRange": "$$"
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-brand-bg text-brand-text">
        {children}
      </body>
    </html>
  );
}
