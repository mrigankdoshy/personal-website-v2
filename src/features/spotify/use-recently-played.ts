import { RecentlyPlayedTrack } from '@/features/spotify/types';
import { useQuery } from '@tanstack/react-query';

export function useRecentlyPlayed() {
  return useQuery<RecentlyPlayedTrack[]>({
    queryKey: ['recently-played'],
    queryFn: async () => {
      const response = await fetch('/api/recently-played');
      if (!response.ok) {
        throw new Error('Failed to fetch recently played data');
      }
      return response.json();
    },
  });
}
