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
        <div className= "flex p-5">
            <h1 className="font-bold absolute p-5 mt-20 mr-96 text-4xl">
                Projects
            </h1>
        </div>
    );
}