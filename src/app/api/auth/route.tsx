import { CLIENT_ID, TOKEN_ENDPOINT, VERCEL_URL } from '@/shared/consts';
import { basic } from '@/shared/spotify';
import { type NextRequest, NextResponse } from 'next/server';

const REDIRECT_URI =
  typeof VERCEL_URL === 'string'
    ? `https://${VERCEL_URL}/api/auth`
    : 'http://localhost:3000/api/auth';

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const code = url.searchParams.get('code');

  if (!code) {
    const query = new URLSearchParams({
      client_id: CLIENT_ID,
      response_type: 'code',
      redirect_uri: REDIRECT_URI,
      scope: 'user-read-currently-playing user-top-read',
    });

    return NextResponse.redirect(
      `https://accounts.spotify.com/authorize?${query.toString()}`
    );
  }

  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri: REDIRECT_URI,
    }).toString(),
  });

  const data = await response.json();

  return NextResponse.redirect(
    new URL(`/auth-callback?token=${data.refresh_token}`, req.url)
  );
}
