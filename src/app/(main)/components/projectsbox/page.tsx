import Image from "next/image";

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
    date: "Jan 2025 - Apr 2025",
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
    image: "/images/vergil.gif",
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
    description: "port port port port",
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
      }
      ,
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
    "im sitting on the highest mountain, watching overseas."
  },
];

export default function ProjectBox() {
  return (
    <div className="mt-10 flex flex-row justify-center w-full gap-4 flex-wrap">
      {Projects.map((proj) => (
        <div
          key={proj.name}
          className="scale-110 m-4 relative group w-[250px] h-[300px] border-2 border-purple-900 rounded-xl flex overflow-hidden bg-purp shadow-xl hover:transition duration-300 ease-in-out hover:scale-125 "
        >
          {/* actual box 
              at some point add hover:blur or smth */}
          <div className="pb-12 flex flex-col items-center justify-center h-full w-full hover:blur-sm">
            <Image src={proj.image} alt={proj.name} width={150} height={150} />
            <h1 className=" text-xl font-bold mt-2">{proj.name}</h1>
            <h2 className="text-md font-semibold text-gray-600">{proj.date}</h2>
          </div>
          {/* hover show desc */}
          <div className="inset-0 absolute bg-gray-900 bg-opacity-100 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-xs">
            <div className="p-2 h-full text-left">
              {proj.description}
              {proj.stack && Array.isArray(proj.stack) && (
                <div className="mt-6 grid grid-cols-4 gap-2 place-items-center">
                  {proj.stack.map((st, index) => (
                    <div key={index} title={st.name} className=""> {/* customize tooltip soon */}
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
        </div>
      ))}
    </div>
  );
}
