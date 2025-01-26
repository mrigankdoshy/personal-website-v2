export type Artist = {
  name: string;
  url: string;
};

export type TrackInfo = {
  isPlaying: boolean;
  progress: number;
  duration: number;
  track: string;
  artists: Artist[];
  coverUrl: string;
  url: string;
};

export type CurrentlyPlayingResponse = SpotifyApi.CurrentlyPlayingResponse;

export type Track = SpotifyApi.TrackObjectFull;
