import Image from "next/image";
import { motion } from "motion/react";

type Exp = {
  name: string;
  img: string;
  company: string;
  date: string;
  sentenceOne?: string;
  sentenceTwo?: string;
  sentenceThree?: string;
  bg: string;
}

const experience: Exp[] = [
  {
    name: "Software Engineer Intern",
    img: "/images/UCF.webp",
    company: "Humana",
    date: "May 2026 - Aug. 2026",
    sentenceOne: "Incoming May 2026",
    bg: "bg-sky-100/20",
  },
  {
    name: "Software Engineer",
    img: "/images/UCF.webp",
    company: "CDL Techrangers",
    date: "Feb. 2026 - Present",
    sentenceOne: "Incoming software engineer for UCF's CDL Techrangers!!!",
    bg: "bg-sky-100/20",
  },
  {
    name: "Lead Web Developer",
    img: "/images/KnightsRecords.jpg",
    company: "Knights Records",
    date: "Jan. 2026 - Present",
    sentenceOne: "Recently selected as a lead developer for Knights Records to create their office website as well as sites for their signed artists!",
    bg: "bg-white/25",
  },
  {
    name: "Web Developer",
    img: "/images/fs.png",
    company: "UCF Fashion Society",
    date: "Sept. 2025 - Present",
    sentenceOne: "Currently developing a full-stack club showcase site with React, TypeScript, Express, and MongoDB, integrating Google Calendar sync to keep meeting and event info up to date.",
    sentenceTwo: "Designing responsive React components using Tailwind CSS with mobile-first design, ensuring accessibility across all devices.",
    sentenceThree: "Integrating Google Calendar API to fetch and render events dynamically, reducing content maintenance by 90%.",
    bg: "bg-white/20",
  },
  {
    name: "Undergraduate Research Assistant",
    img: "/images/ucf.webp",
    company: "UCF S.A.G.E Lab",
    date: "Sept. 2025 - Present",
    sentenceOne: "Develop and maintain Python data analysis pipeline using Pandas to process and analyze manually annotated Java pull request data from AI coding agents.",
    sentenceTwo: "Compute per-agent statistics for 1,200+ Java pull requests, including PR types, test changes, and file-level modifications.",
    sentenceThree: "Generate normalized distributions and aggregated metrics by agent and category, exporting reusable CSV datasets to support downstream analysis for the MSR 2026 Mining Challenge.",
    bg: "bg-sky-100/20"
  },
  {
    name: "Hackathon Organizer",
    img: "/images/knighthacks.jpg",
    company: "Knight Hacks",
    date: "July 2025 - Nov. 2025",
    sentenceOne: "Organized and executed Knight Hacks VIII, a university-wide hackathon hosting 1,000+ hackers, 60+ events, and over $60K in prizes.",
    sentenceTwo: "Partnered with 10+ registered student organizations, coordinating workshops and event logistics to strengthen campus collaboration and engagement.",
    sentenceThree: "Fostered lasting collaborations through co-hosted workshops and socials, laying the groundwork for future cross-organizational events at UCF.",
    bg: "bg-sky-200/25"
  },
  {
    name: "Undergraduate Research Assistant",
    img: "/images/adc.png",
    company: "UCF Analytics, Decision, and Control Lab",
    date: "March 2025 - Aug. 2025",
    sentenceOne: "Developed a C#/.NET application integrating with the SimConnect API to control Microsoft Flight Simulator, enabling external command of aircraft positioning and event-driven state updates.",
    sentenceTwo: "Implemented AI-controlled aircraft spawning with deterministic position updates to support simulation scenarios.",
    sentenceThree: "Optimized SimConnect backend to ensure stable event handling and dynamic coordinate updates, enhancing simulator interaction reliability and efficiency by 60%.",
    bg: "bg-sky-300/25"
  },
];

const keywords: string[] = [
  "React",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "Google Calendar",
  "API",
  "C#/.NET",
  "SimConnect",
  "Microsoft Flight Simulator",
  "Tailwind CSS",
  "Knight Hacks VIII",
  "10+",
  "1,000+ hackers",
  "60+ events",
  "$60K",
  "Pandas",
  "1,200+",
  "MSR 2026 Mining Challenge",
];

const highlightKeywords = (text?: string) => {
  if (!text) return text;
  const escaped = keywords.map((keyword) =>
    keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  );
  const parts = text.split(new RegExp(`(${escaped.join("|")})`, "gi"));
  return parts.map((part, index) =>
    keywords.some(
      (keyword) => keyword.toLowerCase() === part.toLowerCase()
    ) ? (
      <span key={`${part}-${index}`} className="text-red-600 font-semibold">
        {part}
      </span>
    ) : (
      part
    )
  );
};

export default function ExperienceBox() {
  return (
    <div className="font-medium flex flex-col items-center text-center text-slate-900 px-3 sm:px-4 gap-6">
      {experience.map((item, index) => (
        <motion.div
          key={item.company}
          initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.2, duration: 1, ease: "easeInOut" }}
          className={`w-full max-w-xl lg:max-w-2xl border border-white/20 ${item.bg} backdrop-blur-lg rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:transition-all hover:duration-300 hover:ease-in-out text-left hover:scale-105 hover:shadow-[0_0_20px_rgba(0,0,0,0.2)]`}
        >
          <div className="lg:p-6 p-2">
            <div className="flex items-start gap-3 sm:gap-4">
              <Image
                src={item.img}
                alt={item.name}
                width={64} // 64 or 75 
                height={64}
                className="rounded-xl border border-white/20 shadow-sm flex-shrink-0"
              />
              <div className="flex-1">
                <h1 className="font-semibold text-lg sm:text-xl md:text-2xl tracking-tight">
                  {item.name}
                </h1>
                <h2 className="text-[11px] sm:text-xs md:text-sm opacity-80">
                  {item.company} | {item.date}
                </h2>
              </div>
            </div>
            <ul className="mt-4 list-outside list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-[13px] sm:text-sm md:text-[15px] leading-relaxed">
              {item.sentenceOne && <li>{highlightKeywords(item.sentenceOne)}</li>}
              {item.sentenceTwo && <li>{highlightKeywords(item.sentenceTwo)}</li>}
              {item.sentenceThree && <li>{highlightKeywords(item.sentenceThree)}</li>}
            </ul>
          </div>
        </motion.div>
      ))}
      <div className="mt-12" />
    </div>
  );
}
