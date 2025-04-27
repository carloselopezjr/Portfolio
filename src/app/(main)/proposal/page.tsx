export default function enc() {
  return (
    <div className="mt-24">
      <h1 className=" text-4xl font-semibold text-center "> Proposal </h1>
      <h2 className="text-lg mt-2 opacity-90 text-center">
        {`
          Visual Aesthetics, Identity, and Authenticity in
            Contemporary Rap Culture
         `}
      </h2>
      <h3 className="text-center text-sm opacity-90">
        {` How visual aesthetics in contemporary rap music—such as album covers, fashion,
and digital design—communicate 
 `}
        <br />
        {`
          
           philosophical ideas about identity, authenticity, and cultural resistance. `}
      </h3>
      <div className="flex justify-center">
        <embed
          className="border-4 p-4 border-purple-950 rounded-xl bg-purp"
          src="/Proposal.pdf"
          type="application/pdf"
          width="900px"
          height="900px"
        ></embed>
      </div>
    </div>
  );
}
