/* eslint-disable no-console */
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
    console.error('Error in top-tracks API route:', error);
    return NextResponse.json(
      { error: 'Failed to fetch top tracks data' },
      { status: 500 }
    );
  }
}
