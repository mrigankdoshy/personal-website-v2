import { TopTrack } from '@/features/spotify/types';
import { useQuery } from '@tanstack/react-query';

export function useTopTracks() {
  return useQuery<TopTrack[]>({
    queryKey: ['top-tracks'],
    queryFn: async () => {
      const response = await fetch('/api/top-tracks');
      if (!response.ok) {
        throw new Error('Failed to fetch top tracks data');
      }
      return response.json();
    },
  });
}
