import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mini-blog",
  description: "Exercício Next.js - dados e rotas dinâmicas",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt">
      <body className="p-8 max-w-2xl mx-auto">
        <nav className="flex gap-4 mb-8 border-b pb-4">
          <Link href="/">Início</Link>
          <Link href="/posts">Posts</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
