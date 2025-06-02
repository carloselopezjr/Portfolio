"use client";

import { usePathname } from "next/navigation";

export default function Background({ children }: {children: React.ReactNode}) {

  const pathname = usePathname();

  const background = 
  pathname === "/" ? "bg-[url(/images/Winterness.webp)]"
    : pathname === "/projects" ? "bg-[url(/images/alien_red.webp)]"
    : pathname === "/experience" ? "bg-[url(/images/SkyBox.jpg)]"
    : pathname === "/skills" ? "bg-[url(/images/StarryNight.webp)]"
    : "";

    return (
        <div className={` text-[#dfe6f3] antialiased ${background} bg-cover bg-center min-h-full w-full bg-no-repeat `}>
            {children}
        </div>
    )
}