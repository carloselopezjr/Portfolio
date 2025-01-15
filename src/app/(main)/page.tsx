import Image from "next/image";



export default function main() {
  return(
  <>
  <div className="text-2xl">
    <h1> Hi! I'm Carlos</h1>
    <h2> I'm an undergraduate student at the University of Central Florida. I am currently in my first year </h2>
  </div>
  <div className="">
    <Image src="/testing.jpg" width={150} height={150} className="animate-spin" alt="ok"></Image>
  </div>
  </>
  );
}