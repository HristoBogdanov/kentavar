import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer";

const oswald = Oswald({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={oswald.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
