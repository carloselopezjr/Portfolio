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
        img: "/images/fff.webp",
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
      {
        name: "Python",
        img: "/images/python.svg",
      },
    ],
    description:
      "Kmodo is a centralized hackathon dashboard designed to unify and streamline the hackathon experience. It brings event creation, organization, and participation into one cohesive platform, making hackathons more accessible and enjoyable.",
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
    ],
    description:
      "My portfolio!!! This is first personal website and I've been enjoying the journey. Doing this project has had me reflecting and thinking of how much I've learned being in the CS Space. This is definitely a version 1, soon it will be time for a makeover.....",
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
        name: "Blender",
        img: "/images/blender.svg",
      },
    ],
    description: "Lorem ipsum blah blah blah poop poop poop",
  },
];

export default function ProjectBox() {
  return (
    <div className="mt-10 flex flex-row justify-center w-full flex-wrap">
      {Projects.map((proj, index) => (
        <motion.div
          key={proj.name}
          initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.2, duration: 1, ease: "easeInOut" }}
          className="scale-110 m-2 relative group w-[250px] h-[300px] border-2 border-[#9a4129] rounded-xl flex overflow-hidden backdrop-blur-md shadow-xl hover:transition duration-300 ease-in-out hover:scale-125 hover:shadow-[0_0_12px_#e3612f] hover:border-[#e3612f]"
        >
          {/* actual box  */}
          <div className="pb-12 flex flex-col items-center justify-center h-full w-full hover:blur-sm">
            <Image
              className="rounded-xl"
              src={proj.image}
              alt={proj.name}
              width={150}
              height={150}
            />
            <h1 className=" text-xl font-bold mt-2 text-black">{proj.name}</h1>
            <h2 className="text-md font-semibold text-gray-800">{proj.date}</h2>
          </div>
          {/* hover show desc */}
          <div className="inset-0 absolute bg-[url(/images/TheUtterEast.webp)] bg-blur bg-opacity-100 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-[13px]">
            <div className="p-2 h-full text-left">
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
