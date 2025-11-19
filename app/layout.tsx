import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import PwaRegister from "./components/PwaRegister";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const brandFont = localFont({
  src: "../public/font/fa-brands-400.woff",
  variable: "--font-brand",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Camous — Campus Marketplace",
  description: "Buy and sell with your campus community.",
  themeColor: "#2196f3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Camous-icon.png" type="image/png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#2196f3" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Camous" />
        <link rel="apple-touch-icon" href="/Camous-icon.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${brandFont.variable} antialiased`}>
        <PwaRegister />
        {children}
      </body>
    </html>
  );
}
