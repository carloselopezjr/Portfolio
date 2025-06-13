"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export default function Listening() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [track, setTrack] = useState<any>(null);

  useEffect(() => {
    fetch("/api/lastfm/recent")
      .then((res) => res.json())
      .then((data) => setTrack(data.track));
  }, []);

  if (!track)
    return (
      <div>
        <h1 className="text-2xl lg:text-2xl font-bold text-center">
          Currently Listening To:
        </h1>
        <div className="w-full flex flex-col items-center">
          <div className="bg-transparent z-0 p-14 rounded-xl backdrop-blur-md transition-all duration-300 ease-in-out">
            <div className=" rounded-xl mb-2 w-[200px] h-[250px]" />
            <h1 className="mt-4 text-xl font-bold hover:underline"></h1>
            <h2 className="text-lg font-semibold opacity-90" />
          </div>
        </div>
      </div>
    );

  return (
    <div>
      <h1 className="text-2xl lg:text-2xl font-bold text-center">
        Currently Listening To:
      </h1>
      <div className="w-full flex flex-col items-center">
        <div className="bg-transparent z-0 p-14 rounded-xl backdrop-blur-md transition-all duration-300 ease-in-out">
          <motion.div
            className=""
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, ease: "easeInOut" }}
          >
            <Image
              className=" rounded-xl mb-2"
              src={track.image}
              alt={`${track.name} by ${track.artist}`}
              width={200}
              height={250}
            />
            <Link
              href={track.url}
              className="mt-4 text-xl font-bold hover:underline"
            >
              {" "}
              {track.name}{" "}
            </Link>
            <h2 className="text-lg font-semibold opacity-90">
              {" "}
              {track.artist}{" "}
            </h2>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
