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

export type RecentlyPlayedTrack = {
  track: string;
  artists: Artist[];
  coverUrl: string;
  url: string;
  playedAt: string;
};

export type CurrentlyPlayingResponse = SpotifyApi.CurrentlyPlayingResponse;

export type RecentlyPlayedResponse =
  SpotifyApi.UsersRecentlyPlayedTracksResponse;

export type PlayHistory = SpotifyApi.PlayHistoryObject;

export type Track = SpotifyApi.TrackObjectFull;
