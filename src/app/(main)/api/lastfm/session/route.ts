import { NextResponse } from 'next/server';
import crypto from 'crypto';

// Generate apiSig,
function generateApiSig(params: Record<string, string>, sharedSecret: string): string {
  const sortedKeys = Object.keys(params).sort(); // returns arr of keys, sorted
  const paramString = sortedKeys.map(key => key + params[key]).join(''); 
  return crypto.createHash('md5').update(paramString + sharedSecret).digest('hex'); // create hash
}

export async function GET() {
  const apiKey = process.env.LASTFM_API_KEY!; // ! non-null assertion, acknowledging var existence
  const sharedSecret = process.env.LASTFM_SHARED_SECRET!;
  const token = process.env.LASTFM_TOKEN!;

  // Object to generate sig, and send query
  const params = {
    method: 'auth.getSession',
    api_key: apiKey,
    token,
  };
  
  const apiSig = generateApiSig(params, sharedSecret);

  const query = new URLSearchParams({
    ...params, // ... = Spread operator to take all key/val pairs
    api_sig: apiSig, 
    format: 'json', // Want response as a json
  });

  const res = await fetch(`https://ws.audioscrobbler.com/2.0/?${query}`);
  const data = await res.json(); // Parse the json data, returning object
  return NextResponse.json(data); // Return data as a json to client
}
