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

  if (!track) return null;

  return (
    <div className="bg-gray-50/5 max-w-[280px] h-[325px] rounded-xl">
      <h1 className="mt-2 text-2xl font-bold text-center">
        Listening Now
      </h1>
      <Image
        className="mt-2 rounded-xl mx-auto"
        src={track.image}
        alt={`${track.name} by ${track.artist}`}
        width={200}
        height={250}
      />
      <div className="p-0 bg-white/10 rounded-[6px] mt-4 border-white/20 mx-[40px]">
        <Link
          href={track.url}
          className=" text-xs text-center font-bold hover:underline"
        >
          {track.name}
        </Link>
        <h2 className="text-[10px] font-semibold opacity-70">
          {track.artist}
        </h2>
      </div>

    </div>
  );
}
