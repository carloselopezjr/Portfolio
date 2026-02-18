"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Track = {
  name: string;
  artist: string;
  url: string;
  image: string;
}

const SkeletonLoader = () => (
  <div className="bg-gray-50/5 max-w-[280px] h-[325px] rounded-xl animate-pulse">
    <h1 className="mt-2 text-2xl font-bold text-center opacity-50">
      Loading Track...
    </h1>
    <div className="mt-2 rounded-xl mx-auto bg-white/10 w-[200px] h-[200px]" />
    <div className="p-0 bg-white/10 rounded-[6px] mt-4 border-white/20 mx-[40px] h-12">
      <div className="w-full h-4 bg-white/10 rounded mt-2" />
      <div className="w-3/4 h-3 bg-white/10 rounded mt-2" />
    </div>
  </div>
);

export default function Listening() {

  
  const [track, setTrack] = useState<Track | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/lastfm/recent")
      .then((res) => res.json())
      .then((data) => {
        setTrack(data.track);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return (
    <SkeletonLoader />
    );
  }

  if (!track) {
    return null;
  }

  
  return (
    <div className="bg-gray-50/5 max-w-[280px] h-[325px] rounded-xl pt-2">
      <h1 className="mt-2 text-xl font-bold text-center">
        Recently Listened
      </h1>
      <Image
        className="mt-2 rounded-xl mx-auto"
        src={track.image}
        alt={`${track.name} by ${track.artist}`}
        width={200}
        height={200}
      />
      <div className="p-0 bg-white/10 rounded-[6px] mt-4 border-white/20 mx-[40px]">
        <Link
          href={track.url}
          className=" text-xs text-center font-bold hover:underline line-clamp-2"
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
