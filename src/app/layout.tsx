import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingCallButton } from "@/components/ui/FloatingContactButton";
import { FloatingWhatsAppButton } from "@/components/ui/FloatingWhatsAppButton";
import { constructMetadata } from "@/lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = constructMetadata({
  title: "Securing Your Future | Life, Health & Vehicle Insurance",
  description: "Prime Insurance Services offers comprehensive insurance solutions in Rajgurunagar, Pune. Trusted advisors for Life, Health, Vehicle, and Property insurance.",
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
        <div className="fixed bottom-8 right-8 z-50 flex flex-row items-center space-x-2">
          <FloatingWhatsAppButton />
          <FloatingCallButton />
        </div>
      </body>
    </html>
  );
}
