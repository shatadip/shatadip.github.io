import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'
// components
import Navbar from "./components/Navbar";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shatadip Majumder | Coder + Teacher",
  description: "Hi, I am Shatadip, I code and I teach. I am open to new opportunities.",
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
