
const carlos = {
  name: "okok Lopez",
  about: "Hello!",
  age: 15,
};

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold">{carlos.name}</h1>
      <h2 className="text-xl">{carlos.about}</h2>
    </div>
  );
}
