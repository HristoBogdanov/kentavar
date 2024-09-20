import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer";

const oswald = Oswald({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ТК Кентавър",
  icons: {
    icon: "/Клуб-Кентавър-лого.jpeg",
  },
  description:
    "ТК Кентавър - тренировки по олимпийско таекуондо и тае-бо в град Казанлък и село Овощник с треньори Николай, Христо и Любомир Богданови и Любомир Събчев.",
  keywords: "таекуондо, тренировки, спорт, тае-бо, Казанлък, Овощник",
  robots: "index, follow",
  openGraph: {
    title: "ТК Кентавър",
    description:
      "ТК Кентавър - тренировки по олимпийско таекуондо и тае-бо в град Казанлък и село Овощник с треньори Николай, Христо и Любомир Богданови и Любомир Събчев.",
    url: "https://taekwondokentavar.bg",
    siteName: "ТК Кентавър",
    images: [
      {
        url: "/Клуб-Кентавър.jpeg",
        width: 800,
        height: 600,
      },
    ],
    locale: "bg-BG",
    type: "website",
  },
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
