import { spotifyErrorResponse } from '@/features/spotify/route-error';
import { getNowPlaying } from '@/features/spotify/spotify';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const data = await getNowPlaying();
    return NextResponse.json(data);
  } catch (error) {
    return spotifyErrorResponse('now-playing', error);
  }
}
