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

export const metadata: Metadata = 
{
  title: "Carlos Lopez", // Carlos E Lopez or Carlos Lopez idk
  description: "Carlos E. Lopez is an undergraduate Computer Science student at the University of Central Florida.",
  keywords: [
    "Carlos Lopez",
    "Carlos E. Lopez",
    "Carlos Emilio Lopez",
    "Carlos Lopez UCF",
    "Carlos Lopez Computer Science",
    "Carlos e Lopez developer UCF",
    "Carlos e Lopez",
    "Carlos e Lopez UCF",
    "UCF",
    "UCF CECS",
    "University of Central Florida",
    "Full Stack Developer",
    "Web Developer",
    "Software Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Open Source",
  ],
  openGraph: {
    type: "website",
    title: "Carlos Emilio Lopez",
    description: "Carlos E. Lopez is an undergraduate Computer Science student at the University of Central Florida with a passion for web and game development.",
    url: "https://carloselopez.dev",
    images: [{url: "https://carloselopez.dev/images/favicon.jpg"}]
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${garamond.variable} h-full min-h-screen`}>
      <body className=" antialiased h-full overflow-x-hidden">
        <Background>
          <Navbar />
          {children}
        </Background>
      </body>
    </html>
  );
}
