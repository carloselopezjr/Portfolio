import Image from "next/image";


export default function main() {
  return(
  <>
  <div className="flex justify-center mt-20">
    <h1 className=" p-5 border-2 bg-cyan-500 rounded-xl text-6xl"> Hi! I&apos;m Carlos</h1>
  </div>
  <div className="m-8 text-4xl flex justify-center">
    <h2> I&apos;m a first year at the University of Central Florida </h2>
  </div>
  <div className="flex items-center justify-center"> {/* fixed im goated */}
    <Image className ="mb-8 hover:animate-spin" src="/testing.jpg" width={150} height={200} alt="ok"></Image>
  </div>
  <div className="flex text-4xl justify-center">
    <p>blah blah</p>
  </div>
  <div className="top-3 right-4 fixed flex justify-end"> {/* put guide in center */}
    <Image className ="" src="/guide.png" width={200} height={200} alt="Guide Terraria"></Image>
  </div>
  </>
  );
}