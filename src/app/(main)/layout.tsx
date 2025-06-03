import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar/nbar";
import { Cinzel, EB_Garamond } from "next/font/google";
import Background from "./components/backgrounds/bg";
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cinzel",
});

const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-garamond",
});

export const metadata: Metadata = {
  title: "Carlos Lopez",
  description: "first year at the University of Central Florida",
  icons: {
    icon: "/"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${garamond.variable} bg-transparent h-full`}>
      <body className="bg-transparent antialiased h-full">
        <Background>
          <Navbar />
          {children}
        </Background>
      </body>
    </html>
  );
}
