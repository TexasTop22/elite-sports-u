import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import ClientWrapper from "../components/ClientWrapper";

// ---- FONTS ----
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ---- PAGE METADATA ----
export const metadata: Metadata = {
  title: "Elite Sports U",
  description: "Train Like the Elite. Become the Elite.",
};

// ---- ROOT LAYOUT ----
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans bg-white text-gray-900`}
      >
        <ClientWrapper>
          {/* Sticky Header */}
          <Header />

          {/* Push content below fixed header */}
          <main className="pt-[80px]">{children}</main>
        </ClientWrapper>
      </body>
    </html>
  );
}
