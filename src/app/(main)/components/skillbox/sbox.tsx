import Image from "next/image";
import { motion } from "motion/react";

// Add C++ , SQL, PostgreSQL, Java, Vite, Three.js, MediaPipe, MongoDB
const Languages = [
  { name: "Python", icon: "images/python.svg" },
  { name: "C#", icon: "images/csharp.svg" },
  { name: "C++", icon: "images/cpp.svg" },
  { name: "C", icon: "images/c.svg" },
  { name: "HTML", icon: "images/html.svg" },
  { name: "CSS", icon: "images/css.svg" },
  { name: "JavaScript", icon: "images/javascript.svg" },
  { name: "TypeScript", icon: "images/typescript.svg" },
  { name: "Java", icon: "images/java.svg" },
  { name: "SQL", icon: "images/SQL.svg" }
];

const FrameworksPackages = [
  { name: "React", icon: "images/react.svg" },
  { name: "Next.js", icon: "images/nextjs.svg" },
  { name: "Tailwind CSS", icon: "images/tailwind.svg" },
  { name: ".Net", icon: "images/NET.svg" },
  { name: "Node.js", icon: "images/node.svg" },
  { name: "Vite", icon: "images/vite.svg" },
  { name: "Three.js", icon: "images/threejs.svg" },
];

const Tools = [
  { name: "Git", icon: "images/git.svg" },
  { name: "GitHub", icon: "images/github.svg" },
  { name: "Visual Studio Code", icon: "images/vscode.svg" },
  { name: "Figma", icon: "images/figma.svg" },
  { name: "Vercel", icon: "images/vercel.svg" },
  { name: "Blender", icon: "/images/blender.svg" },
  { name: "Linux", icon: "images/Linux.svg" },
  { name: "Unity", icon: "images/unity.svg" },
  { name: "Oracle VirtualBox", icon: "images/VirtualBox.svg" },
  { name: "PostgreSQL", icon: "images/postgreSQL.svg" }
];

export default function SkillBox() {
  return (

    <div className="mt-8 grid grid-cols-3 mx-20 min-h-screen">
      <div className="">
        <h1 className="font-semibold text-2xl">
          Languages
        </h1>
        <div className="grid grid-cols-3 gap-2 place-items-center mx-[56px] mt-3">
          {Languages.map((lang) => (
            <div key={lang.name} className="w-20 h-20 bg-[#262531] border-2 border-[#616E93] rounded-xl flex flex-col items-center justify-center hover:scale-105 hover:shadow-[0_0_12px_#616E93] transition-all duration-300 ease-in-out">
              <Image
                src={lang.icon}
                alt={lang.name}
                width={52.5}
                height={52.5}
              />
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1 className="font-semibold text-2xl">
          Frameworks & Packages
        </h1>
        <div className="grid grid-cols-3 gap-2 place-items-center mx-[56px] mt-3">
          {FrameworksPackages.map((framework) => (
            <div key={framework.name} className="w-20 h-20 bg-[#262531] border-2 border-[#616E93] rounded-xl flex flex-col items-center justify-center hover:scale-105 hover:shadow-[0_0_12px_#616E93] transition-all duration-300 ease-in-out">
              <Image
                src={framework.icon}
                alt={framework.name}
                width={52.5}
                height={52.5}
              />
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1 className="font-semibold text-2xl">
          Tools
        </h1>
        <div className="grid grid-cols-3 gap-2 place-items-center mx-[56px] mt-3">
          {Tools.map((tool) => (
            <div key={tool.name} className="w-20 h-20 bg-[#262531] border-2 border-[#616E93] rounded-xl flex flex-col items-center justify-center hover:scale-105 hover:shadow-[0_0_12px_#616E93] transition-all duration-300 ease-in-out">
              <Image
                src={tool.icon}
                alt={tool.name}
                width={52.5}
                height={52.5}
              />
            </div>
          ))}
        </div>
      </div>
    </div>

  );
}
