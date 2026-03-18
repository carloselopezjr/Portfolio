import { NextResponse } from "next/server";

// I feel so smart for being typesafe :thumbsup:
type Album = {
    name: string;
    artist: {
        name: string;
    }
    image: {
        "#text"?: string;
    }[];
    playcount: number;
    url: string;
}

export async function GET() {
    const apiKey = process.env.LASTFM_API_KEY!;
    const username = process.env.LASTFM_USERNAME!;


    const query = new URLSearchParams({
        method: "user.gettopalbums",
        user: username,
        api_key: apiKey,
        period: "1month",
        limit: "9",
        format: "json",
    });

    const res = await fetch(`https://ws.audioscrobbler.com/2.0/?${query}`);
    const data = await res.json();

    const albums = data.topalbums.album.map((album: Album) => ({
        name: album.name,
        artist: album.artist.name,
        image: album.image[2]?.["#text"], // medium sized image
        playcount: album.playcount,
        url: album.url,
    }));

    return NextResponse.json({ albums });
}