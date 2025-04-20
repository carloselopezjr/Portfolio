import Image from "next/image";

const Projects = [
  {
    name: "Riffs",
    image: "/images/riffs.png",
    date: "Apr 2025 - Apr 2025",
    stack: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget augue vestibulum, eleifend dui eu, efficitur libero. Suspendisse tempus, nisl accumsan ultricies vulputate, metus justo mollis dui, quis malesuada nisi ante laoreet ex. Etiam scelerisque volutpat posuere. Sed imperdiet ipsum dui, id molestie ex pellentesque non. Quisque lacinia pellentesque ex, eget porttitor eros rutrum sed. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur pellentesque lorem at diam cursus, at suscipit turpis pharetra. Sed vitae odio ac tortor varius egestas sed quis nunc. Praesent vestibulum, quam eget laoreet scelerisque, dolor justo hendrerit dui, dignissim pulvinar ligula purus quis tellus. Donec id volutpat massa. Vestibulum bibendum lorem eu nunc vulputate euismod. Mauris viverra velit ac sapien elementum tincidunt. Praesent convallis convallis odio. Nullam posuere vitae ligula eget venenatis. Curabitur efficitur vestibulum ante eu pretium.",
  },
  {
    name: "Kmodo",
    image: "/images/kmodo.webp",
    date: "Jan 2025 - Apr 2025",
    stack: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget augue vestibulum, eleifend dui eu, efficitur libero. Suspendisse tempus, nisl accumsan ultricies vulputate, metus justo mollis dui, quis malesuada nisi ante laoreet ex. Etiam scelerisque volutpat posuere. Sed imperdiet ipsum dui, id molestie ex pellentesque non. Quisque lacinia pellentesque ex, eget porttitor eros rutrum sed. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur pellentesque lorem at diam cursus, at suscipit turpis pharetra. Sed vitae odio ac tortor varius egestas sed quis nunc. Praesent vestibulum, quam eget laoreet scelerisque, dolor justo hendrerit dui, dignissim pulvinar ligula purus quis tellus. Donec id volutpat massa. Vestibulum bibendum lorem eu nunc vulputate euismod. Mauris viverra velit ac sapien elementum tincidunt. Praesent convallis convallis odio. Nullam posuere vitae ligula eget venenatis. Curabitur efficitur vestibulum ante eu pretium.",
  },
  {
    name: "My Portfolio",
    image: "/images/spark-a-hack.webp",
    date: "Jan 2025 - Present",
    stack: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget augue vestibulum, eleifend dui eu, efficitur libero. Suspendisse tempus, nisl accumsan ultricies vulputate, metus justo mollis dui, quis malesuada nisi ante laoreet ex. Etiam scelerisque volutpat posuere. Sed imperdiet ipsum dui, id molestie ex pellentesque non. Quisque lacinia pellentesque ex, eget porttitor eros rutrum sed. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur pellentesque lorem at diam cursus, at suscipit turpis pharetra. Sed vitae odio ac tortor varius egestas sed quis nunc. Praesent vestibulum, quam eget laoreet scelerisque, dolor justo hendrerit dui, dignissim pulvinar ligula purus quis tellus. Donec id volutpat massa. Vestibulum bibendum lorem eu nunc vulputate euismod. Mauris viverra velit ac sapien elementum tincidunt. Praesent convallis convallis odio. Nullam posuere vitae ligula eget venenatis. Curabitur efficitur vestibulum ante eu pretium.",
  },
  {
    name: "Spark-A-Hack",
    image: "/images/spark-a-hack.webp",
    date: "Sep 2024 - Nov 2024",
    stack: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget augue vestibulum, eleifend dui eu, efficitur libero. Suspendisse tempus, nisl accumsan ultricies vulputate, metus justo mollis dui, quis malesuada nisi ante laoreet ex. Etiam scelerisque volutpat posuere. Sed imperdiet ipsum dui, id molestie ex pellentesque non. Quisque lacinia pellentesque ex, eget porttitor eros rutrum sed. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur pellentesque lorem at diam cursus, at suscipit turpis pharetra. Sed vitae odio ac tortor varius egestas sed quis nunc. Praesent vestibulum, quam eget laoreet scelerisque, dolor justo hendrerit dui, dignissim pulvinar ligula purus quis tellus. Donec id volutpat massa. Vestibulum bibendum lorem eu nunc vulputate euismod. Mauris viverra velit ac sapien elementum tincidunt. Praesent convallis convallis odio. Nullam posuere vitae ligula eget venenatis. Curabitur efficitur vestibulum ante eu pretium.",
  },
];

export default function ProjectBox() {
    return (
      <div className="flex flex-row justify-center w-full gap-4 flex-wrap">
        {Projects.map((proj) => (
          <div
            key={proj.name}
            className="relative group w-[250px] h-[300px] border-2 border-purple-900 rounded-xl flex overflow-hidden bg-purp shadow-xl"
          >
            {/* hover show desc */}
            <div className="absolute bg-black bg-opacity-100 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-sm overflow-y-auto">
              {proj.description}
            </div>
  
            <span className="pb-12 flex flex-col items-center justify-center h-full w-full">
            <Image src={proj.image} alt={proj.name} width={150} height={150} />
            <h1 className=" text-xl font-bold mt-2">{proj.name}</h1>
            <h2 className="text-md font-semibold text-gray-600">{proj.date}</h2>
            </span>

            {/* work on this later */}
            <h3 className="opacity-0 p-1 absolute bottom border-purple-900 bg-slate-800 rounded-md border-2"> {proj.stack}</h3>
            
          </div>
        ))}
      </div>
    );
  }
  
