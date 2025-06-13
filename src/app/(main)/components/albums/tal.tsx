"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";

export default function TopAlbums() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [albums, setAlbums] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/lastfm/topalbums")
      .then((res) => res.json())
      .then((data) => setAlbums(data.albums));
  }, []);

  if (albums.length === 0) return null;


  return (
    <div>
      <h1 className="text-center text-2xl font-bold">
       Top Albums This Month:
      </h1>

      <div className=" p-[19px] rounded-xl  backdrop-blur-md bg-transparent">
        <div className="grid grid-cols-3 gap-1 rounded-lg ">
          {albums.map((album, index) => (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: "easeInOut" }}
              key={index}
              className=""
            >
              <Image
                className=" hover:scale-110 transition-all duration-150 ease-in-out hover:shadow-lg"
                src={album.image}
                alt={`${album.name} by ${album.artist}`}
                title={album.name}
                width={110}
                height={50}
                onClick={() => window.open(album.url, "_blank")}
                style={{ cursor: "pointer" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
