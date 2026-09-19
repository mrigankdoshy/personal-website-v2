/* eslint-disable no-console */

import { SpotifyAuthError } from '@/features/spotify/spotify';
import { NextResponse } from 'next/server';

export function spotifyErrorResponse(context: string, error: unknown) {
  if (error instanceof SpotifyAuthError) {
    console.error(`Spotify auth failed in ${context}:`, error.message);

    return NextResponse.json(
      { error: `Spotify authentication failed: ${error.message}` },
      { status: 503 }
    );
  }

  console.error(`Error in ${context} API route:`, error);

  return NextResponse.json(
    { error: `Failed to fetch ${context} data` },
    { status: 500 }
  );
}
