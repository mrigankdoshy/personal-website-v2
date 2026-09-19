import { spotifyErrorResponse } from '@/features/spotify/route-error';
import { getRecentlyPlayed } from '@/features/spotify/spotify';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const data = await getRecentlyPlayed();

    if (!data) {
      return NextResponse.json(
        { error: 'No recently played tracks available' },
        { status: 404 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    return spotifyErrorResponse('recently-played', error);
  }
}
