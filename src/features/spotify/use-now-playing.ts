import { TrackInfo } from '@/features/spotify/types';
import { useQuery } from '@tanstack/react-query';

type NowPlayingResponse =
  | TrackInfo
  | (Partial<TrackInfo> & { isPlaying: false });

export function useNowPlaying() {
  return useQuery<NowPlayingResponse>({
    queryKey: ['now-playing'],
    queryFn: async () => {
      const response = await fetch('/api/now-playing');
      if (!response.ok) {
        throw new Error('Failed to fetch now playing data');
      }
      return response.json();
    },
    refetchInterval: 1000,
  });
}
