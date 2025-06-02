import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.LASTFM_API_KEY!;
  const username = process.env.LASTFM_USERNAME!;

  const query = new URLSearchParams({
    method: "user.getrecenttracks",
    user: username,
    api_key: apiKey,
    limit: "1",
    format: "json",
  });

  const res = await fetch(`https://ws.audioscrobbler.com/2.0/?${query}`);
  const data = await res.json();

  const track = data.recenttracks.track[0];

  return NextResponse.json({
    track: {
      name: track?.name,
      artist: track?.artist["#text"],
      album: track?.album["#text"],
      image: track?.image?.[2]?.["#text"], // medium sized image
      url: track?.url,
    },
  });
}
