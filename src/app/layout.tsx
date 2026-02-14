import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingCallButton } from "@/components/ui/FloatingContactButton";
import { FloatingWhatsAppButton } from "@/components/ui/FloatingWhatsAppButton";
import { constructMetadata } from "@/lib/seo";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = constructMetadata({
  title: "Expert Hospital Consultant in India | NABH, NABL & Hospital Planning",
  description: "Prime Insurance Services provides expert healthcare consultancy in Rajgurunagar, Pune. Leading consultants for NABH, NABL accreditation, TPA empanelment, and hospital operations.",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <CookieConsent />
        <div className="fixed bottom-8 right-8 z-50 flex flex-row items-center space-x-2">
          <FloatingWhatsAppButton />
          <FloatingCallButton />
        </div>
      </body>
    </html>
  );
}
