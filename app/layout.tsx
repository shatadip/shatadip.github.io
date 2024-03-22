import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'
// components
import Navbar from "./components/Navbar";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shatadip Majumder | Coder + Teacher",
  description: "I am Shatadip Majumder, an experienced Full Stack Developer and Online Instructor. Launched 6 online courses on Udemy and Skillshare, covering Tech and Productivity topics. Delivered over 250 mid to large-scale projects, including 100+ web apps. I am also the former founder of Borofy, a popular e-commerce platform.",
  generator: 'Next.js',
  applicationName: 'Shatadip Majumder',
  referrer: 'origin-when-cross-origin',
  keywords: ["Shatadip Majumder", "Full Stack Developer", "Online Instructor", "Tech", "Productivity", "MERN", "LAMP", "Django Stack", " Git", " GitHub", " React Native", "Chrome Manifest V3", "BASH", "AWS", "GCP", "Azure", "OCI", "Vercel", "Instructional Design", "Adaptability", "Analytical Thinking"],
  authors: [{ name: 'Shatadip Majumder', url: 'https://shatadip.com' }],
  creator: 'Shatadip Majumder',
  publisher: 'Shatadip Majumder',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://shatadip.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    images: 'images/ogimage.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Navbar />
        {children}
        </body>
        <GoogleAnalytics gaId="G-TX0ZM7323L" />
    </html>
  );
}
