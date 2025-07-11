"use client";

import Link from "next/link";
import { DynamicIcon } from "lucide-react/dynamic";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react"

export default function Navbar() {
  type LucideIconName = "file-text" | "github" | "linkedin";

  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const borderColor =
    pathname === "/"
      ? "border-[#5148a4] hover:border-[#9990af] hover:shadow-[0_0_12px_#9990af]"
      : pathname === "/projects"
      ? "border-[#9a4129] hover:border-[#e3612f] hover:shadow-[0_0_12px_#e3612f]"
      : pathname === "/experience"
      ? "border-[#5148a4] hover:border-[#9990af] hover:shadow-[0_0_12px_#9990af]"
      : pathname === "/skills"
      ? "border-[#4c536c] hover:border-[#616e93] hover:shadow-[0_0_12px_#616e93]"
      : pathname === "/about"
      ? "border-[#292546] hover:border-[#6177af] hover:shadow-[0_0_12px_#6177af]"
      : "border-gray-300 hover:border-[#aee7ff] hover:shadow-[0_0_12px_#aee7ff]";

  const navItems = [
    {
      href: "/about",
      label: "About",
    },
    {
      href: "/projects",
      label: "Projects",
    },
    {
      href: "/experience",
      label: "Experience",
    },
    {
      href: "/skills",
      label: "Skills",
    },
  ];

  const dIcons: { name: LucideIconName; href: string }[] = [
    {
      name: "file-text",
      href: "/Resume.pdf",
    },
    {
      name: "github",
      href: "https://github.com/carloselopezjr",
    },
    {
      name: "linkedin",
      href: "https://www.linkedin.com/in/carloselopezjr/",
    },
  ];

  return (
    <div className=" rounded-full scale-90 p-2">
      <nav
        className={`font-cinzel text-2xl font-semibold text-[#dfe6f3] backdrop-blur-xl p-6 ${borderColor} border-2 rounded-xl hover:transition duration-300 ease-in-out`}
      >
        <ul className="lg:flex lg:space-x-8">
          {/* conditional underline */}
          <li
            className={`mr-auto 
              ${
                pathname === "/"
                  ? "underline decoration-[#aee7ff]"
                  : "hover:underline"
              } transition duration-300 
              ${menuOpen ? "hidden" : "block"} hidden sm:block`}
            // Get rid of my name on mobile
          >
            <Link href="/" className="">
              Carlos E. Lopez
            </Link>
          </li>

          {/* hamburger menu for mobile */}
          <div className="relative">
  <button
    className="sm:hidden text-white text-3xl focus:outline-none"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    ☰
  </button>
  {/* got lazy here */}
  <Link href="/" className="lg:hidden ml-8 hover:underline transition-all duration-300 ease-in-out" > 
  Carlos E. Lopez
  </Link>

  <AnimatePresence initial={false}>
    {menuOpen && (
      <motion.div
        key="mobileMenu"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className=" mt-2 sm:hidden overflow-hidden"
      >
        <ul className="">
          {navItems.map((item) => (
            <li
              key={item.label}
              className={`hover:underline mt-2 decoration-frost hover:opacity-80 transition-all duration-300 ease-in-out ${
                pathname === item.href ? "underline decoration-[#aee7ff]" : ""
              }`}
            >
              <Link href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}

          {dIcons.map((icon) => (
            <li
              key={icon.name}
              className="hover:opacity-70 transition-all mt-2 duration-300"
            >
              <Link href={icon.href} onClick={() => setMenuOpen(false)}>
                <DynamicIcon name={icon.name} />
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    )}
  </AnimatePresence>
</div>
          
          {/* mapping through pages */}
          {navItems.map((item) => (
            <li
              key={item.label}
              className={`hidden sm:flex hover:underline decoration-frost hover:opacity-80 transition-all duration-300 ease-in-out
              ${
                pathname === item.href ? "underline decoration-[#aee7ff]" : ""
              }`}
            >
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}

          {/* mapping through icons */}
          {dIcons.map((icon) => (
            <li
              key={icon.name}
              className="hidden sm:flex hover:opacity-70 transition-all duration-300"
            >
              <Link href={icon.href}>
                <DynamicIcon name={icon.name} />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
