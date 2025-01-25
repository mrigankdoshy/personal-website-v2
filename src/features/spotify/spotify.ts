/* eslint-disable no-console */

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID!;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET!;
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN || '';

const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const NOW_PLAYING_ENDPOINT =
  'https://api.spotify.com/v1/me/player/currently-playing';

export const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString(
  'base64'
);

export type TrackInfo = {
  isPlaying: boolean;
  progress: number;
  duration: number;
  track: string;
  artist: string;
  coverUrl: string;
  url: string;
};

type CurrentlyPlayingResponse = SpotifyApi.CurrentlyPlayingResponse;

type Track = SpotifyApi.TrackObjectFull;

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
): TrackInfo | null {
  const { progress_ms, item, is_playing, currently_playing_type } = trackInfo;

  if (item === null || currently_playing_type !== 'track') {
    return null;
  }

  const { duration_ms, name, artists, album, external_urls } = item as Track;

  return {
    progress: progress_ms ?? 0,
    duration: duration_ms,
    track: name,
    artist: artists.map(({ name }) => name).join(', '),
    isPlaying: is_playing,
    coverUrl: album.images[album.images.length - 1]?.url ?? '',
    url: external_urls.spotify,
  };
}

async function getCurrentTrack(): Promise<TrackInfo | null> {
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
      return null;
    }

    const data: CurrentlyPlayingResponse = await response.json();
    const formattedTrack = formatTrackInfo(data);

    if (formattedTrack === null) {
      console.log('No track data available or not currently playing a track');
    }

    return formattedTrack;
  } catch (error) {
    console.error('Error in getCurrentTrack:', error);
    return null;
  }
}

async function getCoverBase64(url: string) {
  try {
    const res = await fetch(url);
    const buff = await res.arrayBuffer();
    return `data:image/jpeg;base64,${Buffer.from(buff).toString('base64')}`;
  } catch (e) {
    console.error('Error fetching cover image:', e);
    return '';
  }
}

type GetNowPlayingParams = { coverFormat?: 'url' | 'base64' };
type GetNowPlayingResult = Promise<TrackInfo | { isPlaying: false }>;

export async function getNowPlaying({
  coverFormat = 'url',
}: GetNowPlayingParams): GetNowPlayingResult {
  try {
    const track = await getCurrentTrack();

    if (track === null) {
      console.log('No track currently playing');
      return { isPlaying: false };
    }

    if (coverFormat === 'base64' && typeof window !== 'undefined') {
      const coverBase64 = await getCoverBase64(track.coverUrl);
      return { ...track, coverUrl: coverBase64 };
    }

    return track;
  } catch (error) {
    console.error('Error in getNowPlaying:', error);
    return { isPlaying: false };
  }
}
