import Skillbox from "../components/skillbox/page";


export default function Skills() {
  return (
    <div className="justify-center mt-24 p-4">
      <h2 className="text-xl text-center m-4 opacity-90">
        {"Throughout my journey as a Student Engineer, I've acquired quite a few skills! Here they are:"}
      </h2>
      <div className="grid items-center justify-center">
        <Skillbox />
      </div>
    </div>
  );
}
