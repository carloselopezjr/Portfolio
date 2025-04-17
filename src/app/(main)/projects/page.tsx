"use client";

const project = [
    {
        name: "The Underground",
        description: "terraria mod using c#",
        image: "placeholder",
        skillsUsed: "C#",
    },
    {
        name: "Spark-A-Hack",
        description: "Hackathon project",
        image: "placeholder",
        skillsUsed: "React, Tailwind, Gemini API, TRPC",
    },
    {
        name: "Portfolio",
        description: "This website",
        image: "placeholder",
        skillsUsed: "Next.js, Tailwind",
    },
];

{/* Add border + background for "Projects" Text", then add a border for the projects themselves */}
export default function Projects() {
    return (
        <div className="mt-60 justify-center flex">
            <div className=" border-8 border-creamy bg-purp w-80 h-80 hover:bg-purp animation duration-500 ease-in-out hover:scale-100 p-4">
                <p className="">in progress </p>
            </div>
        </div>
    
    );
}
