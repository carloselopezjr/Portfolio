import Image from "next/image";
import { motion } from "motion/react";

const Projects = [
  /*
  {
    name: "GeoCity",
    image: "/images/hLanding.png",
    date: "Jan 2026 - Present",
    stack: [
      {
        name: "TypeScript"
      },
      {
        name: "React"
      },
      {
        name: "Next.js"
      },
      {
        name: "TailwindCSS"
      },
      {
        name: "PostgreSQL"
      },
      {
        name: "Prisma"
      },
      {
        name: "tRPC"
      },
      {
        name: "Some LLM idk yet"
      },
      {
        name: "Weather API"
      },
    ],
    description: "Inspired by GeoCities"
  },
  */
  {
    name: "Chip-8 Emulator",
    image: "/images/tempChip8.png",
    date: "Dec 2025 - Present",
    stack: [
      {
        name: "C++"
      },
      {
        name: "SDL2"
      },
      {
        name: "CMake"
      },
    ],
    description: "A simple Chip-8 emulator built in C++ using the SDL2 library for graphics and input handling."
  },
  {
    name: "I'm Human",
    image: "/images/hLanding.png",
    date: "Nov 2025",
    stack: [
      {
        name: "React"
      },
      {
        name: "Next.js"
      },
      {
        name: "TypeScript"
      },
      {
        name: "TailwindCSS"
      },
      {
        name: "PostgreSQL"
      },
      {
        name: "Prisma"
      }
    ],
    description: "Made a really annoying login for Hack Jam 2025's Worst UI Challenge."
  },
  {
    name: "Fih",
    image: "/images/fsLanding.png",
    date: "Nov 2025 - Present",
    stack: [
      {
        name: "Godot"
      },
      {
        name: "GDScript",
      },
      {
        name: "Itch.io"
      },
    ],
    description: "Sharkbyte 2025",
  },
  {
    name: "Fashion Society",
    image: "/images/fsLanding.png",
    date: "Oct 2025 - Present",
    stack: [
      {
        name: "React",
        img: "/images/react.svg",
      },
      {
        name: "Vite",
        img: "/images/vite.svg",
      },
      {
        name: "TypeScript",
        img: "/images/typescript.svg",
      },
      {
        name: "TailwindCSS",
        img: "/images/tailwind.svg",
      },
      {
        name: "MongoDB",
        img: "/images/mongo.svg",
      }
    ],
    description: "Currently developing UCF's Fashion Society website, showcasing their events, members, and mission to the UCF community."
  },

  {
    name: "HandScape",
    image: "/images/handscapeLanding.png",
    date: "Sept 2025",
    stack: [
      {
        name: "React",
        img: "/images/react.svg",
      },
      {
        name: "Next.js",
        img: "/images/next.svg",
      },
      {
        name: "Three.js",
        img: "/images/threejs.svg",
      },
      {
        name: "MediaPipe",
        img: "/images/mediapipe.svg",
      },
      {
        name: "TailwindCSS",
        img: "/images/tailwind.svg"
      },
      {
        name: "TypeScript",
        img: "/images/typescript.svg",
      }
    ],
    description: "HandScape is an interactive 3D sandbox that allows users to spawn and manipulate virtual objects entirely through hand gestures. It recognizes five gestures that let users create, scale, rotate, and move objects in real time."
  },
  {
    name: "Riffs",
    image: "/images/riffsLanding.png",
    date: "Apr 2025",
    stack: [
      {
        name: "TypeScript",
      },
      {
        name: "TailwindCSS",
      },
      {
        name: "React",
      },
      {
        name: "Next.js",
      },
      {
        name: "FL Studio",
      },
      {
        name: "Pitchy API"
      }
    ],
    description:
      "     Riffs is a creative music app where you can hum a melody, convert it into guitar tabs, edit it, and jam out in a Guitar Hero-style game-play experience.",
  },
  {
    name: "Kmodo",
    image: "/images/kmodoLanding.png",
    date: "Jan 2025 - May 2025",
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
    image: "/images/portLanding.png",
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
      {
        name: "LastFm",
        img: "/images/lastFm.svg"
      }
    ],
    description:
      "This is my personal portfolio, showcasing everything I've done so far in my journey. I have learned so much while building this, and it has become my pride and joy. I hope you enjoy it as much as I do. ",
  },
  {
    name: "Spark-A-Hack",
    image: "/images/spark-a-hack.webp",
    date: "Oct 2024",
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
];

const testArr = [
  {
    name: "Github"
  },
  {
    name: "Visit!"
  },
  {
    name: "Devpost"
  }

];

export default function ProjectBox() {
  return (
    <div className="mx-auto max-w-[1016px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {Projects.map((proj, index) => (
        <motion.div
          key={proj.name}
          initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.2, duration: 1, ease: "easeInOut" }}
          className="group border-2 border-orange-300/30 flex flex-col rounded-2xl bg-orange-800/70 backdrop-blur-md shadow-lg hover:transition-all hover:duration-300 hover:ease-in-out hover:shadow-[0_0_12px_#e3612f] hover:border-[#e3612f] overflow-hidden max-h-[400px] hover:max-h-[900px]"
        >
          <Image
            key={proj.name}
            src={proj.image}
            alt={proj.name}
            height={250}
            width={420}
            className="w-full object-cover"
          />

          <div className="flex-1 flex flex-col gap-4 p-4">
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-1">
                <h2 className="text-xl font-semibold leading-tight text-left">{proj.name}</h2>
                <p className="text-xs text-orange-50/80 underline underline-offset-4 text-left">{proj.date}</p>
              </div>
            </div>

            <p className="text-sm text-left text-orange-50/90 line-clamp-3 group-hover:line-clamp-none transition-[line-height] duration-300 ease-in-out">
              {proj.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {proj.stack.map((techStack) => (
                <span
                  key={techStack.name}
                  className="text-[10px] px-3 py-1 rounded-full border border-orange-200/40 bg-orange-900/70"
                >
                  {techStack.name}
                </span>
              ))}
            </div>
          </div>


          {/* nothing
          <div
            className={`grid ${testArr.length === 3 ? "grid-cols-3" : "grid-cols-2"} gap-2 border-t border-orange-200/20 bg-orange-900/40 px-3 py-3`}
          >
            {testArr.map((arr) => (
              <div key={arr.name} className="text-center text-sm font-medium rounded-xl border border-orange-200/30 py-2">
                {arr.name}
              </div>
            ))}
          </div>
          */}
        </motion.div>
      ))}
    </div>
  );
}