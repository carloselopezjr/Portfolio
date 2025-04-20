import Skillbox from "../components/skillbox/page";


export default function Skills() {
  return (
    <div className="justify-center text-center mt-24 p-4">
      <h1 className="text-4xl font-bold"> Skills </h1>
      <h2 className="text-xl m-4 opacity-90">
        {"Throughout my journey as a Student Engineer, I've learned quite a few skills! Here they are:"}
      </h2>
      <div className="">
        <Skillbox />
      </div>
    </div>
  );
}
