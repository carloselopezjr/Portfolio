import type { Metadata } from "next";

import "./globals.css";
import Navbar from "./components/navbar/nbar";
import Background from "./components/backgrounds/bg";

export const metadata: Metadata = 
{
  title: "Carlos Lopez",
  description: "Computer Science student passionate about building full-stack web apps, developer tools, and interactive projects!",
  keywords: [
    "Carlos Lopez",
    "Carlos E. Lopez",
    "Carlos Emilio Lopez",
    "Carlos Emilio Lopez Jr",
    "Carlos Emilio Lopez UCF",
    "Carlos Emilio Lopez Computer Science",
    "Carlos Emilio Lopez developer UCF",
    "Carlos Lopez UCF",
    "carloselopez.dev",
    "carloselopez",
    "Carlos Lopez Computer Science",
    "Carlos e Lopez developer UCF",
    "Carlos e Lopez",
    "Carlos e Lopez UCF",
    "UCF College of Engineering and Computer Science",
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
    "questpowerr",
    "questpower",
  ],
  openGraph: {
    type: "website",
    title: "Carlos Lopez",
    description: "Computer Science student passionate about building full-stack web apps, developer tools, and interactive projects!",
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
    <html lang="en" className={` h-full min-h-screen`}>
      <body className=" antialiased h-full overflow-x-hidden">
        <Background>
          <Navbar />
          {children}
        </Background>
      </body>
      
    </html>
  );
}
