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
    link: "https://www.youtube.com/watch?v=r6WfIsmyS7M", // fix link tmr
  },
];


{/* boxes should all be the same size fix later */}
export default function enc() {
  return (
    <div>
      <h1 className="font-bold text-2xl mt-28 text-center "> Below are redirects to my Resume, Cover Letter, and Mini-Interview! </h1>
    <div className="mt-40 grid grid-cols-2 text-center justify-center ">
      {assignments.map((assignment, index) => (
        <div 
        key={assignment.name} 
        className={`" ${
            index === 2 ? "mr-3 col-span-2 justify-self-center" : ""
        }`}
        >
          <Link 
          href={assignment.link} 
          className=" p-20 bg-purp border-purple-900 border-2 rounded-xl text-lg font-semibold hover:underline hover:bg-purple-900 animation duration-500 ease-in-out">
            {assignment.name}
          </Link>
        </div>
      ))}
    </div>
    </div>
  );
}
