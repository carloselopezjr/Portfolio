import Image from "next/image";
import { motion } from "motion/react";

// Get comfortable enforcing typesafety

type techStack = {
  name: string;
}

type Project = {
  name: string;
  image: string;
  date: string;
  stack: techStack[];
  description: string;
}

const Projects : Project[] = [
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
  /* Remove for now
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
  */
  {
    name: "Fashion Society",
    image: "/images/fsLanding.png",
    date: "Oct 2025 - Present",
    stack: [
      {
        name: "React",
      },
      {
        name: "Vite",
      },
      {
        name: "TypeScript",
      },
      {
        name: "TailwindCSS",
      },
      {
        name: "MongoDB",
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
      },
      {
        name: "Next.js",
      },
      {
        name: "Three.js",
      },
      {
        name: "MediaPipe",
      },
      {
        name: "TailwindCSS",
      },
      {
        name: "TypeScript",
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
      },
      {
        name: "TailwindCSS",
      },
      {
        name: "TypeScript",
      },
      {
        name: "Next.js",
      },
      {
        name: "tRPC",
      },
      {
        name: "Drizzle",
      },
      {
        name: "PostgreSQL",
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
      },
      {
        name: "TailwindCSS",
      },
      {
        name: "TypeScript",
      },
      {
        name: "React",
      },
      {
        name: "LastFm",
      }
    ],
    description:
      "This is my personal portfolio, showcasing everything I've done so far in my journey. I have learned so much while building this, and it has become my pride and joy. I hope you enjoy it as much as I do. ",
  },
  /*
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
  */
];

export default function ProjectBox() {
  return (
    <div className="mx-auto max-w-[1016px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 mb-12">
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

        </motion.div>
      ))}
    </div>
  );
}