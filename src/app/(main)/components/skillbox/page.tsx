import Image from "next/image";

const Languages = [
  { name: "Python", icon: "images/python.svg" },
  { name: "C#", icon: "images/csharp.svg" },
  { name: "C", icon: "images/c.svg" },
  { name: "HTML", icon: "images/html.svg" },
  { name: "CSS", icon: "images/css.svg" },
  { name: "JavaScript", icon: "images/javascript.svg" },
  { name: "TypeScript", icon: "images/typescript.svg" },
];

const FrameworksPackages = [
  { name: "React", icon: "images/react.svg" },
  { name: "Next.js", icon: "images/next.svg" },
  { name: "Tailwind CSS", icon: "images/tailwind.svg" },
  { name: ".Net", icon: "images/NET.svg" },
  { name: "Node.js", icon: "images/node.svg" },
];

const Tools = [
  { name: "Git", icon: "images/git.svg" },
  { name: "GitHub", icon: "images/github.svg" },
  { name: "Visual Studio Code", icon: "images/vscode.svg" },
  { name: "Figma", icon: "images/figma.svg" },
  { name: "Vercel", icon: "images/vercel.svg" },
  { name: "Blender", icon: "images/blender.svg" },
];

export default function SkillBox() {
  return (
    <div className="flex flex-col w-full mt-4 p-4 gap-4">

      <div className="flex flex-row gap-4 w-full">
        {/* Languages */}
        <div className="flex-1 text-center rounded-xl border-4 border-purple-900 bg-purp p-4 w-1/2">
          <h1 className="font-bold text-4xl mb-4">Languages</h1>
          <div className="grid grid-cols-5 gap-2 place-items-center">
            {Languages.map((lang) => (
              <div
                key={lang.name}
                className="p-4 rounded-xl bg-gray-950 border-purple-900 border-2 hover:bg-gray-900 transition duration-300 ease-in-out hover:scale-110"
              >
                <Image src={lang.icon} alt={lang.name} width={75} height={75} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 text-center rounded-xl border-4 border-purple-900 bg-purp p-4 w-1/2">
          <h1 className="font-bold text-4xl mb-4">Frameworks/Packages</h1>
          <div className="grid grid-cols-5 gap-2 place-items-center">
            {FrameworksPackages.map((fpack) => (
              <div
                key={fpack.name}
                className="p-4 rounded-xl bg-gray-950 border-purple-900 border-2 hover:bg-gray-900 transition duration-300 ease-in-out hover:scale-110"
              >
                <Image
                  src={fpack.icon}
                  alt={fpack.name}
                  width={75}
                  height={75}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className=" text-center rounded-xl border-4 border-purple-900 bg-purp p-4 w-[49.5%]">
        <h1 className="font-bold text-4xl mb-4">Tools</h1>
        <div className="grid grid-cols-5 gap-2 place-items-center">
          {Tools.map((tool) => (
            <div
              key={tool.name}
              className="p-4 rounded-xl bg-gray-950 border-purple-900 border-2 hover:bg-gray-900 transition duration-300 ease-in-out hover:scale-110"
            >
              <Image src={tool.icon} alt={tool.name} width={75} height={75} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
