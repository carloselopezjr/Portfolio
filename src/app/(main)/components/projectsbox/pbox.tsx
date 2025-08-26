import Image from "next/image";
import { motion } from "motion/react";

const Projects = [
  {
    name: "Riffs",
    image: "/images/riffs.png",
    date: "Apr 2025 - Apr 2025",
    stack: [
      {
        name: "TypeScript",
        img: "/images/typescript.svg",
      },
      {
        name: "TailwindCSS",
        img: "/images/tailwind.svg",
      },
      {
        name: "React",
        img: "/images/react.svg",
      },
      {
        name: "Next.js",
        img: "/images/next.svg",
      },
      {
        name: "FL Studio",
        img: "/images/flstudio.webp",
      },
    ],
    description:
      "     Riffs is a creative music app where you can hum a melody, convert it into guitar tabs, edit it, and jam out in a Guitar Hero-style game-play experience.",
  },
  {
    name: "Kmodo",
    image: "/images/kmodo.webp",
    date: "Jan 2025 - Present",
    stack: [
      {
        name: "React",
        img: "/images/react.svg",
      },
      {
        name: "TailwindCSS",
        img: "/images/tailwind.svg",
      },
      {
        name: "TypeScript",
        img: "/images/typescript.svg",
      },
      {
        name: "Next.js",
        img: "/images/next.svg",
      },
      {
        name: "tRPC",
        img: "/images/trpc.svg",
      },
      {
        name: "Drizzle",
        img: "/images/drizzle.svg",
      },
      {
        name: "PostgreSQL",
        img: "/images/postgreSQL.svg",
      },
    ],
    description:
      "Kmodo is a centralized hackathon dashboard designed streamline the hackathon experience. It brings event creation, organization, and participation into one cohesive platform, making hackathons more accessible and enjoyable.",
  },
  {
    name: "My Portfolio",
    image: "/images/avatar.webp",
    date: "Jan 2025 - Present",
    stack: [
      {
        name: "Next.js",
        img: "/images/next.svg",
      },
      {
        name: "TailwindCSS",
        img: "/images/tailwind.svg",
      },
      {
        name: "TypeScript",
        img: "/images/typescript.svg",
      },
      {
        name: "React",
        img: "/images/react.svg",
      },
      { name: "LastFm",
        img: "/images/lastFm.svg"
      }
    ],
    description:
      "This is my personal portfolio, showcasing everything I've done so far in my journey. I have learned so much while building this, and it has become my pride and joy. I hope you enjoy it as much as I do. ",
  },
  {
    name: "Spark-A-Hack",
    image: "/images/spark-a-hack.webp",
    date: "Sep 2024 - Nov 2024",
    stack: [
      {
        name: "Gemini API",
        img: "/images/gemini.svg",
      },
      {
        name: "React",
        img: "/images/react.svg",
      },
      {
        name: "Python",
        img: "/images/python.svg",
      },
      {
        name: "TailwindCSS",
        img: "/images/tailwind.svg",
      },
      {
        name: "TypeScript",
        img: "/images/typescript.svg",
      },
      {
        name: "Next.js",
        img: "/images/next.svg",
      },
    ],
    description:
      "Spark-A-Hack was my first Hackathon project. It leverages Gemini's API to generate winning hackathon project ideas based on over 30,000 winning submissions from DevPost. ",
  },
  {
    name: "Project Diablo",
    image: "/images/crescendo.webp",
    date: "May 2025 - Present",
    stack: [
      {
        name: "Lua",
        img: "/images/lua.svg",
      },
      {
        name: "Roblox Studio",
        img: "/images/robloxstudio.svg",
      },
      {
        name: "Blender",
        img: "/images/blender.svg",
      },
      
    ],
    description: "Project Diablo is a Roblox game that I am currently developing with a team of friends. It plans to be an hack and slash PVP game with gameplay inspired by GunZ movement and Devil May Cry combat mechanics.",
  },
];

export default function ProjectBox() {
  return (
    <div className="flex lg:mt-10 lg:flex lg:flex-row justify-center w-full flex-wrap">
      {Projects.map((proj, index) => (
        <motion.div
          key={proj.name}
          initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.2, duration: 1, ease: "easeInOut" }}
          className="w-[350px] h-[350px] m-2 lg:scale-110 lg:relative group lg:w-[250px] lg:h-[300px] border-2 border-[#9a4129] rounded-xl flex overflow-hidden backdrop-blur-md shadow-xl hover:transition-all hover:duration-300 hover:ease-in-out hover:scale-125 hover:shadow-[0_0_12px_#e3612f] hover:border-[#e3612f]"
        >
          {/* actual box  */}
          <div className="lg:pb-12 flex flex-col items-center justify-center h-full w-full hover:blur-sm">
            <Image
              className="rounded-xl"
              src={proj.image}
              alt={proj.name}
              width={150}
              height={150}
            />
            <h1 className="text-3xl lg:text-xl font-bold mt-2 text-black">{proj.name}</h1>
            <h2 className="text-xl lg:text-md font-semibold text-gray-800">{proj.date}</h2>
          </div>
          {/* hover show desc */}
          <div className="inset-0 absolute bg-[url(/images/TheUtterEast.webp)] bg-blur bg-opacity-100 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-[13px]">
            <div className="p-1 h-full font-semibold text-left text-xl lg:text-sm">
              {proj.description}
              {proj.stack && Array.isArray(proj.stack) && (
                <div className="mt-6 grid grid-cols-4 gap-2 place-items-center">
                  {proj.stack.map((st, index) => (
                    <div key={index} title={st.name} className="">
                      {" "}
                      {/* customize tooltip soon */}
                      <Image
                        src={st.img}
                        alt={st.name}
                        width={45}
                        height={45}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
