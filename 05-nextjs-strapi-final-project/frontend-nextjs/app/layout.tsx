"use client"; // <--- INI KUNCI UTAMANYA

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Catatan: Metadata tidak bisa dipakai kalau pakai "use client". 
// Jadi kita hapus sementara metadata-nya agar tidak error.

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900 min-h-screen flex flex-col`}>
        {/* Navbar / Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-600">My Blog</h1>
            <nav className="text-sm font-medium text-gray-600">
              <a href="/" className="hover:text-blue-600">Home</a>
            </nav>
          </div>
        </header>

        {/* Konten Utama */}
        <main className="max-w-6xl mx-auto px-4 py-8 [flex-grow] w-full">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-white border-t py-6 text-center text-gray-500 text-sm mt-10">
          {/* Sekarang new Date() aman dipakai karena ini Client Component */}
          &copy; {new Date().getFullYear()} Dibuat dengan Next.js & Strapi.
        </footer>
      </body>
    </html>
  );
}