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

function formatTrackInfo({
  progress_ms,
  item,
  is_playing,
  currently_playing_type,
}: CurrentlyPlayingResponse): TrackInfo | undefined {
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
    coverUrl: album.images[0]?.url ?? '',
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

export async function getNowPlaying(): Promise<
  TrackInfo | { isPlaying: false }
> {
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
  try {
    const token = await getAccessToken();
    const response = await fetch(RECENTLY_PLAYED_ENDPOINT, {
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

    const data: RecentlyPlayedResponse = await response.json();
    const formattedTracks = data.items.map(formatRecentlyPlayed);

    if (formattedTracks.length < 1) {
      console.log('No recently played tracks');
    }

    return formattedTracks;
  } catch (error) {
    console.error('Error in getCurrentTrack:', error);
    return undefined;
  }
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
  try {
    const token = await getAccessToken();
    const response = await fetch(TOP_TRACKS_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    if (response.status !== 200) {
      console.log(`Spotify API returned status ${response.status}`);
      return undefined;
    }

    const data: TopTrackResponse = await response.json();
    const formattedTracks = data.items.map(formatTopTrack);

    if (formattedTracks.length < 1) {
      console.log('No recently played tracks');
    }

    return formattedTracks;
  } catch (error) {
    console.error('Error in getTopTracks:', error);
    return undefined;
  }
}
