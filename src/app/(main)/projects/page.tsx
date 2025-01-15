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


export default function Projects() {
    return (
        <div>
            {project.map((proj, index) => (
                <div key={index}>
                    <h2 className ="flex justify-center mt-20">{proj.name}</h2>
                    <h1></h1>
                </div>
            ))}
        </div>

    );
}