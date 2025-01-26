/* eslint-disable no-console */
import { getNowPlaying } from '@/features/spotify/spotify';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const data = await getNowPlaying();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in now-playing API route:', error);
    return NextResponse.json(
      { error: 'Failed to fetch now playing data' },
      { status: 500 }
    );
  }
}
