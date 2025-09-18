import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const monaSans = Mona_Sans({
  variable: "--font-mona",
  subsets: ["latin"],
  weight: ["700", "900"],
  display: "swap",
});

const interMedium = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "lunch | instantly create memecoins for free ✦",
  description:
    "Instantly launch memecoins together with your friends & like-minded X users, all with one click, for free. Built on Solana.",
  icons: {
    icon: "/MultiLight.png",
    shortcut: "/MultiLight.png",
    apple: "/MultiLight.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="apple-mobile-web-app-title" content="Lunch" />
        <meta name="theme-color" content="#FFF" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="white"
        />
      </Head>
      <body
        className={`${monaSans.variable} ${interMedium.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
