import Image from "next/image";
import { motion } from "motion/react";

// dont look at this page 

const Languages = [
  { name: "Python", icon: "images/python.svg" },
  { name: "C#", icon: "images/csharp.svg" },
  { name: "C", icon: "images/c.svg" }, // resize later
  { name: "HTML", icon: "images/html.svg" },
  { name: "CSS", icon: "images/css.svg" },
  { name: "JavaScript", icon: "images/javascript.svg" },
  { name: "TypeScript", icon: "images/typescript.svg" },
  { name: "Lua", icon: "images/lua.svg" },
];

const FrameworksPackages = [
  { name: "React", icon: "images/react.svg" },
  { name: "Next.js", icon: "images/nextjs.svg" },
  { name: "Tailwind CSS", icon: "images/tailwind.svg" }, // resize later
  { name: ".Net", icon: "images/NET.svg" },
  { name: "Node.js", icon: "images/node.svg" },
];

const Tools = [
  { name: "Git", icon: "images/git.svg" },
  { name: "GitHub", icon: "images/github.svg" },
  { name: "Visual Studio Code", icon: "images/vscode.svg" },
  { name: "Figma", icon: "images/figma.svg" },
  { name: "Vercel", icon: "images/vercel.svg" },
  { name: "Blender", icon: "images/blender.svg" },
  { name: "Linux", icon: "images/Linux.svg" },
];

export default function SkillBox() {
  return (
    <div className="scale-90 flex flex-col w-full">
      <div className="flex flex-row gap-4 w-full">
        {/* Languages */}
        <motion.div
          className="flex-1 text-center rounded-xl border-2 border-[#232234] backdrop-blur-md p-4 w-1/2 shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <h1 className="font-bold text-4xl mb-4">Languages</h1>
          <motion.div
            className="grid grid-cols-5 gap-2 place-items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {Languages.map((lang, index) => (
              <motion.div
                key={index}
                className="p-4 rounded-xl bg-gray-950 bg-opacity-60 border-[#616e93] border-2 hover:bg-gray-900 transition duration-300 ease-in-out hover:scale-110 hover:border-[#7b8ba8] hover:bg-opacity-60"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.5,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src={lang.icon}
                  alt={lang.name}
                  title={lang.name}
                  width={75}
                  height={75}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Frameworks/Packages */}
        <motion.div
          className="flex-1 text-center rounded-xl border-2 border-[#232234] backdrop-blur-md p-4 w-1/2 shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <h1 className="font-bold text-4xl mb-4">Frameworks/Packages</h1>
          <div className="grid grid-cols-5 gap-2 place-items-center">
            {FrameworksPackages.map((fpack, index) => (
              <motion.div
                key={index}
                className="p-4 rounded-xl bg-gray-950 border-[#616e93] bg-opacity-60 border-2 hover:bg-gray-900 transition duration-300 ease-in-out hover:scale-110 hover:border-[#7b8ba8] hover:bg-opacity-60"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.5,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src={fpack.icon}
                  alt={fpack.name}
                  title={fpack.name}
                  width={75}
                  height={75}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Tools */}
      <motion.div
        className=" text-center rounded-xl mt-2 border-2 border-[#232234] backdrop-blur-md p-4 w-[49.5%] shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <h1 className="font-bold text-4xl mb-4">Developer Tools</h1>
        <div className="grid grid-cols-5 gap-2 place-items-center">
          {Tools.map((tool, index) => (
            <motion.div
              key={index}
              className="p-4 rounded-xl bg-gray-950 bg-opacity-60 border-[#616e93] border-2 hover:bg-gray-900 transition duration-300 ease-in-out hover:scale-110 hover:border-[#7b8ba8] hover:bg-opacity-60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: index * 0.2,
                duration: 0.5,
                ease: "easeInOut",
              }}
            >
              <Image
                src={tool.icon}
                alt={tool.name}
                title={tool.name}
                width={75}
                height={75}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
