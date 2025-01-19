import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/page";



const Noto_SansSans = Noto_Sans({
  variable: "--font-Noto_Sans-sans",
  subsets: ["latin"],
});

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
    <html lang="en">
      <body
        className={`${Noto_SansSans.className} text-creamy antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
