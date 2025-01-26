/* eslint-disable no-console */

import {
  CurrentlyPlayingResponse,
  Track,
  TrackInfo,
} from '@/features/spotify/types';

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID!;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET!;
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN || '';

const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const NOW_PLAYING_ENDPOINT =
  'https://api.spotify.com/v1/me/player/currently-playing';

const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');

function getRefreshToken(): string {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('spotifyRefreshToken') || '';
  }
  return REFRESH_TOKEN;
}

async function getAccessToken() {
  const refreshToken = getRefreshToken();
  if (!refreshToken) {
    throw new Error('No refresh token available');
  }

  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    }),
  });

  const { access_token } = await response.json();
  return access_token;
}

function formatTrackInfo(
  trackInfo: CurrentlyPlayingResponse
): TrackInfo | undefined {
  const { progress_ms, item, is_playing, currently_playing_type } = trackInfo;

  if (item === undefined || currently_playing_type !== 'track') {
    return undefined;
  }

  const { duration_ms, name, artists, album, external_urls } = item as Track;

  return {
    isPlaying: is_playing,
    progress: progress_ms ?? 0,
    duration: duration_ms,
    track: name,
    artists: artists.map(({ name, external_urls }) => ({
      name,
      url: external_urls.spotify,
    })),
    coverUrl: album.images[album.images.length - 1]?.url ?? '',
    url: external_urls.spotify,
  };
}

async function getCurrentTrack(): Promise<TrackInfo | undefined> {
  try {
    const token = await getAccessToken();
    const response = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      next: {
        revalidate: 60,
      },
    });

    if (response.status !== 200) {
      console.log(`Spotify API returned status ${response.status}`);
      return undefined;
    }

    const data: CurrentlyPlayingResponse = await response.json();
    const formattedTrack = formatTrackInfo(data);

    if (formattedTrack === undefined) {
      console.log('No track data available or not currently playing a track');
    }

    return formattedTrack;
  } catch (error) {
    console.error('Error in getCurrentTrack:', error);
    return undefined;
  }
}

type GetNowPlayingResult = Promise<TrackInfo | { isPlaying: false }>;

export async function getNowPlaying(): GetNowPlayingResult {
  try {
    const track = await getCurrentTrack();

    if (track === undefined) {
      console.log('No track currently playing');
      return { isPlaying: false };
    }

    return track;
  } catch (error) {
    console.error('Error in getNowPlaying:', error);
    return { isPlaying: false };
  }
}
