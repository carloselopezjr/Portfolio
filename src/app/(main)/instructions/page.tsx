export default function enc() {
  return (
    <div className="mt-24">
      <h1 className=" text-4xl font-semibold text-center "> Instructions </h1>
      <h2 className="text-lg mt-2 opacity-90 text-center">
        {`
        Here are my instructions: A Beginner's Guide to Modding Terraria`}
      </h2>
      <h3 className="text-center text-sm opacity-90">
        {` These instructions provide a brief understanding of how to mod Terraria
        using tModLoader, `}
        <br />
        {`
        
         an expansion of Terraria that allows users to create their own
        custom content `}
      </h3>
      <div className="flex justify-center">
        <embed
          className="border-4 p-4 border-purple-950 rounded-xl bg-purp"
          src="/Instructions.pdf"
          type="application/pdf"
          width="900px"
          height="900px"
        ></embed>
      </div>
    </div>
  );
}
