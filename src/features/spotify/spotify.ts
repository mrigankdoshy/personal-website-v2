/* eslint-disable no-console */

import type {
  CurrentlyPlayingResponse,
  PlayHistory,
  RecentlyPlayedResponse,
  RecentlyPlayedTrack,
  TopTrack,
  TopTrackResponse,
  Track,
  TrackInfo,
} from '@/features/spotify/types';

export const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID!;
export const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET!;
export const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN || '';
export const VERCEL_URL = process.env.VERCEL_URL;

export const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
export const NOW_PLAYING_ENDPOINT =
  'https://api.spotify.com/v1/me/player/currently-playing';
export const RECENTLY_PLAYED_ENDPOINT =
  'https://api.spotify.com/v1/me/player/recently-played?limit=1';
export const TOP_TRACKS_ENDPOINT =
  'https://api.spotify.com/v1/me/top/tracks?limit=10&time_range=medium_term';

export const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString(
  'base64'
);

export class SpotifyAuthError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'SpotifyAuthError';
  }
}

let cachedToken: { value: string; expiresAt: number } | undefined;

async function getAccessToken(): Promise<string> {
  if (cachedToken !== undefined && Date.now() < cachedToken.expiresAt) {
    return cachedToken.value;
  }

  if (!REFRESH_TOKEN) {
    throw new SpotifyAuthError('SPOTIFY_REFRESH_TOKEN is not set');
  }

  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: REFRESH_TOKEN,
    }),
    cache: 'no-store',
  });

  const body = await response.json().catch(() => ({}));

  if (!response.ok || typeof body.access_token !== 'string') {
    const reason = body.error_description ?? body.error ?? 'unknown error';
    throw new SpotifyAuthError(
      `token refresh failed (${response.status}): ${reason}`
    );
  }

  if (
    typeof body.refresh_token === 'string' &&
    body.refresh_token !== REFRESH_TOKEN
  ) {
    console.warn(
      'Spotify returned a rotated refresh token — update SPOTIFY_REFRESH_TOKEN'
    );
  }

  cachedToken = {
    value: body.access_token,
    // Expire early so an in-flight request can't race the real expiry.
    expiresAt: Date.now() + Math.max((body.expires_in ?? 3600) - 60, 30) * 1000,
  };

  return cachedToken.value;
}

// revalidate is a shared server-side cache, so it — not the client poll rate —
// bounds how hard we hit Spotify.
async function spotifyFetch(
  endpoint: string,
  revalidate: number
): Promise<Response> {
  const token = await getAccessToken();

  return fetch(endpoint, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    next: {
      revalidate,
    },
  });
}

function formatTrackInfo({
  progress_ms,
  item,
  is_playing,
  currently_playing_type,
}: CurrentlyPlayingResponse): TrackInfo | undefined {
  if (!item || currently_playing_type !== 'track') {
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
    coverUrl: album.images[0]?.url ?? '',
    url: external_urls.spotify,
  };
}

async function getCurrentTrack(): Promise<TrackInfo | undefined> {
  const response = await spotifyFetch(NOW_PLAYING_ENDPOINT, 1);

  if (response.status === 204) {
    return undefined;
  }

  if (!response.ok) {
    console.log(`Spotify now-playing returned status ${response.status}`);
    return undefined;
  }

  const data: CurrentlyPlayingResponse = await response.json();
  return formatTrackInfo(data);
}

export async function getNowPlaying(): Promise<
  TrackInfo | { isPlaying: false }
> {
  const track = await getCurrentTrack();
  return track ?? { isPlaying: false };
}

function formatRecentlyPlayed({
  track,
  played_at,
}: PlayHistory): RecentlyPlayedTrack {
  return {
    track: track.name,
    artists: track.artists.map((artist) => ({
      name: artist.name,
      url: artist.external_urls.spotify,
    })),
    coverUrl: track.album.images[0]?.url ?? '',
    url: track.external_urls.spotify,
    playedAt: played_at,
  };
}

export async function getRecentlyPlayed(): Promise<
  RecentlyPlayedTrack[] | undefined
> {
  const response = await spotifyFetch(RECENTLY_PLAYED_ENDPOINT, 30);

  if (!response.ok) {
    console.log(`Spotify recently-played returned status ${response.status}`);
    return undefined;
  }

  const data: RecentlyPlayedResponse = await response.json();
  return data.items.map(formatRecentlyPlayed);
}

function formatTopTrack(track: Track): TopTrack {
  return {
    track: track.name,
    artists: track.artists.map((artist) => ({
      name: artist.name,
      url: artist.external_urls.spotify,
    })),
    coverUrl: track.album.images[0]?.url ?? '',
    url: track.external_urls.spotify,
  };
}

export async function getTopTracks(): Promise<TopTrack[] | undefined> {
  const response = await spotifyFetch(TOP_TRACKS_ENDPOINT, 3600);

  if (!response.ok) {
    console.log(`Spotify top-tracks returned status ${response.status}`);
    return undefined;
  }

  const data: TopTrackResponse = await response.json();
  return data.items.map(formatTopTrack);
}
