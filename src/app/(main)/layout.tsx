import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar/page";
import { Cinzel, EB_Garamond } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cinzel",
})

const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-garamond",
})

export const metadata: Metadata = {
  title: "Carlos Lopez",
  description: "Carlos Lopez is a first year at the University of Central Florida",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${garamond.variable}`}>
      <body
        className={` text-[#dfe6f3] antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
