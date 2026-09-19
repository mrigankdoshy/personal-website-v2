import { fetchJson } from '@/features/spotify/fetch-json';
import { RecentlyPlayedTrack, TrackInfo } from '@/features/spotify/types';
import { useQuery } from '@tanstack/react-query';

type NowPlayingResponse =
  | TrackInfo
  | (Partial<TrackInfo> & {
      isPlaying: false;
      recentlyPlayed?: RecentlyPlayedTrack[];
    });

export function useNowPlaying() {
  return useQuery<NowPlayingResponse>({
    queryKey: ['now-playing'],
    queryFn: () => fetchJson<NowPlayingResponse>('/api/now-playing'),
    refetchInterval: 1000,
  });
}
