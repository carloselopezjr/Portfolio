import Image from "next/image";
import { motion } from "motion/react";

const Projects = [
  {
    name: "Fashion Society",
    image: "/images/fs.png",
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
    image: "/images/handscape.png",
    date: "Sept 2025 - Sept 2025",
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
    <div className="mx-auto max-w-5xl grid grid-cols-3 gap-4 mt-4">
      {Projects.map((proj, index) => (
        <div key={proj.name} className=" border flex flex-col rounded-lg bg-orange-800/70 backdrop-blur-md overflow-hidden h-[525px] max-h-[800px] hover:border-black hover:z-10">
          <Image
            key={proj.name}
            src={proj.image}
            alt={proj.name}
            height={50}
            width={150}
          />

          <div>
            <h1 className=" pl-4 text-left text-2xl ">
              {proj.name} <span className="text-xs underline text-white/70">{proj.date}</span>
            </h1>

          </div>

        
          <div className="text-left">
            <h1 className="mx-4 ">
              {proj.description}
            </h1>
          </div>


            <div className="grid grid-cols-3 gap-4 mx-4">
              {proj.stack.map((techStack) => (
                <h1 key={techStack.name} className="text-sm border rounded-xl mt-4 bg-orange-900 p-1 text-center">
                  {techStack.name}
                </h1>
              ))}
            </div>
          
          <div className={`mt-auto mx-2 pb-4 justify-center ${testArr.length == 3 ? `grid grid-cols-3` : `grid grid-cols-2`}`} >
            {testArr.map((arr, index) => (
              <div key={arr.name} className="mx-[14px] ">
                <h1 className="border p-[2px] rounded-xl">
                  {arr.name}
                </h1>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
};