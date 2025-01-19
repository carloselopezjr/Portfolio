import type { Metadata } from "next";
import { Gelasio } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/page";



const GelasioSans = Gelasio({
  variable: "--font-Gelasio-sans",
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
        className={`${GelasioSans.className} text-creamy antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
