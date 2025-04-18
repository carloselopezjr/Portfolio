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
    <div className="">
      <div className="text-center rounded-xl border-4 border-purple-900 bg-purp  p-4 mx-40">
        <h1 className="font-bold text-4xl mb-4"> Languages </h1>
        <div className="grid grid-cols-5 gap-2 place-items-center ">
          {Languages.map((lang) => (
            <div
              key={lang.name}
              className="p-4 rounded-xl bg-gray-950 border-purple-900 border-2 hover:bg-gray-900 animation duration-500 ease-in-out hover:scale-110"
            >
              <Image src={lang.icon} alt={lang.name} width={75} height={75} />
            </div>
          ))}
        </div>
      </div>

      <div className="text-center rounded-xl border-4 border-purple-900 bg-purp  p-4 mx-40 mt-4">
        <h1 className="font-bold text-4xl mb-4"> Frameworks/Packages </h1>
        <div className="grid grid-cols-5 gap-2 place-items-center">
          {FrameworksPackages.map((fpack) => (
            <div
              key={fpack.name}
              className="p-4 rounded-xl bg-gray-950 border-purple-900 border-2 hover:bg-gray-900 animation duration-500 ease-in-out hover:scale-110"
            >
              <Image src={fpack.icon} alt={fpack.name} width={75} height={75} />
            </div>
          ))}
        </div>
      </div>

      <div className="text-center rounded-xl border-4 border-purple-900 bg-purp  p-4 mx-40 mt-4">
        <h1 className="font-bold text-4xl mb-4"> Tools </h1>
        <div className="grid grid-cols-5 gap-2 place-items-center">
          {Tools.map((tools) => (
            <div
              key={tools.name}
              className="p-4 rounded-xl bg-gray-950 border-purple-900 border-2 hover:bg-gray-900 animation duration-500 ease-in-out hover:scale-110"
            >
              <Image src={tools.icon} alt={tools.name} width={75} height={75} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
