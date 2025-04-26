import Link from "next/link";

const assignments = [
  {
    name: "Resume",
    link: "/CS_Resume.pdf",
  },
  {
    name: "Cover Letter",
    link: "/cover_letter.pdf",
  },
  {
    name: "Mini-Interview",
    link: "https://youtu.be/rd6WfIsmyS7M",
  },
];


{/* boxes should all be the same size fix later */}
export default function enc() {
  return (
    <div>
      <h1 className="font-bold text-2xl mt-28 text-center "> Below are redirects to my Resume, Cover Letter, and Mini-Interview! </h1>
    <div className="mt-2 grid grid-cols-2 text-center justify-center ">
      {assignments.map((assignment, index) => (
        <div 
        key={assignment.name} 
        className={`m-4 p-20 bg-purp border-purple-900 border-2 rounded-xl " ${
            index === 2 ? "col-span-2 justify-self-center" : ""
        }`}
        >
          <Link 
          href={assignment.link} 
          className="text-lg font-semibold p-40 hover:underline hover:opacity-70">
            {assignment.name}
          </Link>
        </div>
      ))}
    </div>
    </div>
  );
}
