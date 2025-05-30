import Image from "next/image";

const Languages = [
  { name: "Python", icon: "images/python.svg" },
  { name: "C#", icon: "images/csharp.svg" },
  { name: "C", icon: "images/c.svg" }, // resize later
  { name: "HTML", icon: "images/html.svg" },
  { name: "CSS", icon: "images/css.svg" },
  { name: "JavaScript", icon: "images/javascript.svg" },
  { name: "TypeScript", icon: "images/typescript.svg" },
  { name: "Lua", icon: "images/lua.svg" },
];

const FrameworksPackages = [
  { name: "React", icon: "images/react.svg" },
  { name: "Next.js", icon: "images/nextjs.svg" },
  { name: "Tailwind CSS", icon: "images/tailwind.svg" }, // resize later
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
    <div className="scale-90 flex flex-col w-full p-4">
      <div className="flex flex-row gap-4 w-full">
        {/* Languages */}
        <div className="flex-1 text-center rounded-xl border-4 border-royalblue bg-ablue p-4 w-1/2 shadow-lg">
          <h1 className="font-bold text-4xl mb-4">Languages</h1>
          <div className="grid grid-cols-5 gap-2 place-items-center">
            {Languages.map((lang) => (
              <div
                key={lang.name}
                className="p-4 rounded-xl bg-gray-950 border-royalblue border-2 hover:bg-gray-900 transition duration-300 ease-in-out hover:scale-110"
              >
                <Image src={lang.icon} alt={lang.name} width={75} height={75} />
              </div>
            ))}
          </div>
        </div>

        {/* Frameworks/Packages */}
        <div className="flex-1 text-center rounded-xl border-4 border-royalblue bg-ablue p-4 w-1/2 shadow-lg">
          <h1 className="font-bold text-4xl mb-4">Frameworks/Packages</h1>
          <div className="grid grid-cols-5 gap-2 place-items-center">
            {FrameworksPackages.map((fpack) => (
              <div
                key={fpack.name}
                className="p-4 rounded-xl bg-gray-950 border-royalblue border-2 hover:bg-gray-900 transition duration-300 ease-in-out hover:scale-110"
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

      {/* Tools */}
      <div className=" text-center rounded-xl mt-2 border-4 border-royalblue bg-ablue p-4 w-[49.5%] shadow-lg">
        <h1 className="font-bold text-4xl mb-4">Tools</h1>
        <div className="grid grid-cols-5 gap-2 place-items-center">
          {Tools.map((tool) => (
            <div
              key={tool.name}
              className="p-4 rounded-xl bg-gray-950 border-royalblue border-2 hover:bg-gray-900 transition duration-300 ease-in-out hover:scale-110"
            >
              <Image src={tool.icon} alt={tool.name} width={75} height={75} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
