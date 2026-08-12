import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Fraunces, Inter } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/shared/lib/providers/query-provider";
import { Toaster } from "sonner";
import { AuthListener } from "@/features/auth/components/AuthListener";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | ZolTalk",
    default: "ZolTalk",
  },
  description: "A VOICE-FIRST SOCIAL PLATFORM WITH NO UI.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://zoltalk-website.vercel.app",
  ),
  openGraph: {
    title: "ZolTalk",
    description: "A VOICE-FIRST SOCIAL PLATFORM WITH NO UI.",
    url: "https://zoltalk-website.vercel.app",
    siteName: "ZolTalk",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZolTalk",
    description: "A VOICE-FIRST SOCIAL PLATFORM WITH NO UI.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${geistSans.variable} ${geistMono.variable} ${fraunces.variable} ${inter.variable} font-sans antialiased bg-background-primary text-text-primary`}
      >
        <QueryProvider>
          {children}
          <Toaster position="top-right" theme="system" richColors />
          <AuthListener />
        </QueryProvider>
      </body>
    </html>
  );
}
