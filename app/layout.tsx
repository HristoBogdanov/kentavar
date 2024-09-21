import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer";

const oswald = Oswald({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: 'Спортен клуб по Таекуондо "Кентавър"',
    template: "%s | TK Кентавър",
  },
  description:
    "ТК Кентавър - тренировки по олимпийско таекуондо и тае-бо в град Казанлък и село Овощник с треньори Николай, Христо и Любомир Богданови и Любомир Събчев.",
  keywords:
    "кентавър, kentavar, таекуондо, taekwondo, тренировки, спорт, тае-бо, Казанлък, Овощник",
  robots: "index, follow",
  openGraph: {
    title: 'Спортен клуб по Таекуондо "Кентавър"',
    description:
      "ТК Кентавър - тренировки по олимпийско таекуондо и тае-бо в град Казанлък и село Овощник с треньори Николай, Христо и Любомир Богданови и Любомир Събчев.",
    url: "https://taekwondokentavar.bg",
    siteName: 'Спортен клуб по Таекуондо "Кентавър"',
    images: [
      {
        url: "/Клуб-Кентавър.jpeg",
        width: 1200,
        height: 630,
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
