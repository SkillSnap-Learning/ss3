import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Poppins } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: {
    default: "SkillSnap Learning | Online Classes for Class 6-10 | Academics + Coding",
    template: "%s | SkillSnap Learning"
  },
  description: "India's leading online learning platform for Class 6-10 students. Combine school academics with future tech skills like coding. Live classes, AI-powered learning, and expert mentors. Start your free trial today!",
  keywords: [
    "online classes for class 6",
    "online tuition class 7",
    "online coaching class 8",
    "online classes class 9",
    "online tuition class 10",
    "coding classes for kids",
    "CBSE online classes",
    "ICSE online tuition",
    "math online classes",
    "science online tuition",
    "programming for students",
    "ed-tech India"
  ],
  authors: [{ name: "SkillSnap Learning Pvt Ltd" }],
  creator: "SkillSnap Learning",
  publisher: "SkillSnap Learning Pvt Ltd",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.skillsnaplearning.com',
    siteName: 'SkillSnap Learning',
    title: 'SkillSnap Learning | Online Classes for Class 6-10',
    description: 'Combine school academics with future tech skills. Live classes, AI-powered learning for Class 6-10 students.',
    images: [
      {
        url: 'https://www.skillsnaplearning.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SkillSnap Learning - Online Education Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SkillSnap Learning | Online Classes for Class 6-10',
    description: 'Combine school academics with future tech skills. Live classes for Class 6-10.',
    images: ['https://www.skillsnaplearning.com/og-image.png'],
    creator: '@skillsnaplearn',
  },
  alternates: {
    canonical: 'https://www.skillsnaplearning.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to Google services */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
      </head>
      <body className={poppins.className}>
        {children}
      </body>
      <GoogleAnalytics gaId="G-3Z5Y46Z7GJ" />
    </html>
  );
}