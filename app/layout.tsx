// Import necessary modules and types
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/NavBar";

// Initialize font variables
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Define metadata for the application
export const metadata: Metadata = {
  title: "Tapakila App",
  description: "Made by pegaSUS team",
};

// Root layout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
          {/* Navbar */}
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
