import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import { ReactNode } from "react";
import "./globals.css";
import Providers from "./components/Providers";

const inter = localFont({
  src: [
    { path: "./fonts/inter-regular.woff2", weight: "400" },
    { path: "./fonts/inter-medium.woff2", weight: "500" },
    { path: "./fonts/inter-semibold.woff2", weight: "600" },
  ],
});

const newsreader = localFont({
  src: "./fonts/newsreader.woff2",
  variable: "--font-serif",
  weight: "400",
  style: "italic",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 2,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#121212" },
    { media: "(prefers-color-scheme: dark)", color: "#E5E5E5" },
  ],
};

export const metadata: Metadata = {
  title: "Harsh's UI",
  creator: "Harsh Singh",
  publisher: "Harsh Singh",
  description: "Experimental design laboratory.",
  keywords: ["Harsh Singh", "harshhhdev", "haaarshsingh"],
  authors: [{ name: "Harsh Singh", url: "https://harshsingh.xyz" }],
  openGraph: {
    title: "Harsh's UI",
    description: "Experimental design laboratory.",
    url: "https://ui.harshsingh.xyz",
    siteName: "Harsh's UI",
    images: [
      {
        url: "https://ui.harshsingh.xyz/og.png",
        width: 1200,
        height: 630,
        alt: "",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: { icon: "/favicon.ico" },
  twitter: {
    card: "summary_large_image",
    title: "Harsh's UI",
    description: "Experimental design laboratory.",
    siteId: "haaarshsingh",
    creator: "@haaarshsingh",
    creatorId: "haaarshsingh",
    images: {
      url: "https://ui.harshsingh.xyz/og.png",
      alt: "",
    },
  },
  verification: {
    google: "VWhTtgTikPqvWIY4n2rlUj6Fe9YgkfFMEET3TM7Rce0",
    yandex: "cfc27cbb03eb0a9c",
    yahoo: "yahoo",
    other: { me: ["hi.harsh@pm.me"] },
  },
  alternates: {
    canonical: "https://ui.harshsingh.xyz",
    types: { "application/rss": "https://ui.harshsingh.xyz/rss" },
  },
  category: "technology",
};

export default ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${newsreader.variable} ${inter.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};
