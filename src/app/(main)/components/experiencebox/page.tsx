import Image from "next/image";

const experience = [
  {
    name: "Undergraduate Research Assistant",
    img: "/images/adc.png",
    company: "UCF ADC Research Lab",
    date: "March 2025 - Present",
    description: "Working in the ADC Research Lab at UCF, my research focuses on developing an addon to Microsoft Flight Simulator that integrates real-world flight data to simulate past flight paths within the simulator environment. The goal is to enable accurate visual reconstruction of real flight events, providing a powerful tool for analysis and research into flight behavior. ",
  },
  {
    name: "Project Launcher",
    img: "/images/knighthacks.jpg",
    company: "Knight Hacks Project Launch",
    date: "January 2025 - April 2025",
    description: "I won lol",
  },
  {
    name: "Best App Dev",
    img: "/images/bitcamp.png",
    company: "Bitcamp",
    date: "April 2025",
    description: "This April, I traveled to Maryland to participate in Bitcamp",
  },
  {
    name: "Undergraduate Student",
    img: "/images/ucaf.webp",
    company: "University of Central Florida",
    date: "August 2024 - Present",
    description: "Currently enrolled as a Computer Science student at UCF.",
  },
  
];

export default function ExperienceBox() {
  return (
    <div className="scale-110 w-[1000px] mx-auto">
        {/* *sigh* the fact that this is so much more efficient than the other components */}
        {experience.map((exp, index) => (
            <div
                key={index}
                className="bg-ablue border-royalblue rounded-xl border-2 p-4 m-4 shadow-lg"
            >
                <div className="flex">
                    <Image
                            className="rounded-lg mr-2"
                            src={exp.img}
                            alt={exp.company}
                            width={30}
                            height={30}
                        />
                    <h1 className="text-2xl font-bold text-[#dfe6f3]">{exp.name}</h1>
                        
                </div>
                <h2 className="text-lg text-[#8eb6d8]"> {exp.company} | {exp.date} </h2>
                <h3 className="mt-2 text-[#a2c0da]"> {exp.description} </h3>
            </div>
        ))}
    </div>
  );
}
