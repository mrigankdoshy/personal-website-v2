/* eslint-disable no-console */

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
    console.error('Error in recently-played API route:', error);
    return NextResponse.json(
      { error: 'Failed to fetch recently playing data' },
      { status: 500 }
    );
  }
}
