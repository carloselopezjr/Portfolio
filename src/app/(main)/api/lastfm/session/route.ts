import { NextResponse } from 'next/server';
import crypto from 'crypto';

function generateApiSig(params: Record<string, string>, sharedSecret: string): string {
  const sortedKeys = Object.keys(params).sort();
  const paramString = sortedKeys.map(key => key + params[key]).join('');
  return crypto.createHash('md5').update(paramString + sharedSecret).digest('hex');
}

export async function GET() {
  const apiKey = process.env.LASTFM_API_KEY!;
  const sharedSecret = process.env.LASTFM_SHARED_SECRET!;
  const token = 'lC3Of0lVX0JFz9AN4q_LGl7bNQEXzeRi';

  const params = {
    method: 'auth.getSession',
    api_key: apiKey,
    token,
  };

  const apiSig = generateApiSig(params, sharedSecret);

  const query = new URLSearchParams({
    ...params,
    api_sig: apiSig,
    format: 'json',
  });

  const res = await fetch(`https://ws.audioscrobbler.com/2.0/?${query}`);
  const data = await res.json();

  return NextResponse.json(data);
}
