export type TrackInfo = {
  isPlaying: boolean;
  progress: number;
  duration: number;
  track: string;
  artist: string;
  coverUrl: string;
  url: string;
};

export type CurrentlyPlayingResponse = SpotifyApi.CurrentlyPlayingResponse;

export type Track = SpotifyApi.TrackObjectFull;
