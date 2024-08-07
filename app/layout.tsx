import type { Metadata } from "next";
import { Teko } from "next/font/google";
import "./globals.css";

const teko = Teko({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ТК Кентавър",
  description: "ТК Кентавър",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bg">
      <body className={teko.className}>{children}</body>
    </html>
  );
}
