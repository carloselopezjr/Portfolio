import Link from "next/link";

const assignments = [
  {
    name: "Resume",
    link: "/CS_Resume.pdf",
  },
  {
    name: "CV",
    link: "/cover_letter.pdf",
  },
  {
    name: "Mini-Interview",
    link: "https://youtu.be/r6WfIsmyS7M",
  },
];


{/* boxes should all be the same size fix later */}
export default function enc() {
  return (
    <div className="grid grid-cols-2 text-center justify-center mt-40">
      {assignments.map((assignment, index) => (
        <div 
        key={assignment.name} 
        className={`m-4 p-20 bg-purp border-purple-900 border-2 rounded-xl " ${
            index === 2 ? "col-span-2 justify-self-center" : ""
        }`}
        >
          <Link 
          href={assignment.link} 
          className="p-20">
            {assignment.name}
          </Link>
        </div>
      ))}
    </div>
  );
}
