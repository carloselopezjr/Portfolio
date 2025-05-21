"use client";

import Link from "next/link";
import { DynamicIcon } from "lucide-react/dynamic";
import { usePathname } from "next/navigation";

export default function Navbar() {
  type LucideIconName = "file-text" | "github" | "linkedin";

  const pathname = usePathname();

  const navItems = [
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
      href: "/CS_Resume.pdf",
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
    <div className=" rounded-full scale-90">
      <nav className="font-cinzel mt-2 text-2xl font-semibold text-[#dfe6f3] bg-[#2e1f47] p-6 rounded-xl hover:transition duration-300 ease-in-out hover:shadow-[0_0_12px_#aee7ff]">
        <ul className="flex space-x-8">
          {/* conditional underline */}
          <li
            className={`mr-auto ${
              pathname === "/"
                ? "underline decoration-[#aee7ff]"
                : "hover:underline"
            } transition duration-300 `}
          >
            <Link href="/">Carlos E. Lopez</Link>
          </li>

          {/* mapping through pages */}
          {navItems.map((item) => (
            <li
              key={item.label}
              className={`hover:underline decoration-frost hover:opacity-80 transition-all duration-300 ease-in-out 
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
              className="hover:opacity-70 transition-all duration-300"
            >
              <Link href={icon.href}>
                <DynamicIcon name={icon.name} />
              </Link>
            </li>
          ))}

          {/*
          
          <li className="hover:underline decoration-frost hover:opacity-80 transition-all duration-300 ease-in-out">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="hover:underline decoration-frost hover:opacity-80  transition-all duration-300 ease-in-out">
            <Link href="/experience">Experience</Link>
          </li>
          <li className="hover:underline decoration-frost hover:opacity-80  transition-all duration-300 ease-in-out">
            <Link href="/skills">Skills</Link>
          </li>
          */}

          {/*}
          <li className="hover:opacity-60 transition-all duration-300">
            <Link href="/CS_Resume.pdf">
              <DynamicIcon name="file-text" />
            </Link>
          </li>
          <li className="hover:opacity-70  transition-all duration-300">
            <Link href="https://github.com/carloselopezjr">
              <DynamicIcon name="github" />
            </Link>
          </li>
          <li className="hover:opacity-70 transition-all duration-300">
            <Link href="https://www.linkedin.com/in/carloselopezjr/">
              <DynamicIcon name="linkedin" />
            </Link>
          </li>
          */}
        </ul>
      </nav>
    </div>
  );
}
