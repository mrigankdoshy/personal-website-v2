import { spotifyErrorResponse } from '@/features/spotify/route-error';
import { getTopTracks } from '@/features/spotify/spotify';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const data = await getTopTracks();

    if (!data) {
      return NextResponse.json(
        { error: 'No top tracks available' },
        { status: 404 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    return spotifyErrorResponse('top-tracks', error);
  }
}
