import Image from "next/image";


export default function main() {
  return(
  <>
  <div className="flex justify-center mt-20 p-5">
    <h1 className="font-bold p-5 bg-iterationOfPurple rounded-xl text-6xl"> Yo... I&apos;m Carlos!</h1>
    {/* make it type and be like yo...I'm Carlos! */}
  </div>
  <div className="m-6 text-4xl flex justify-center">
    <h2 className="font-semibold rounded-xl bg-iterationOfPurple p-5"> I&apos;m a first year at the University of Central Florida </h2>
  </div>
  <div className="flex items-center justify-center"> {/* fixed im goated */}
    <Image className ="mb-8 hover:animate-spin" src="/testing.jpg" width={150} height={200} alt="ok"></Image>
  </div>
  <div className="flex text-xl justify-center">
    <p>Write some stuff about me here</p>
  </div>
  <div className=""> {/* fix-- put guide in center */}
    <Image className ="" src="/tercharry.png" width={200} height={200} alt="Guide Terraria"></Image>
  </div>
  </>
  );
}