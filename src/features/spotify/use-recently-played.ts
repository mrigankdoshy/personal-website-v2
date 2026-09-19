import { fetchJson } from '@/features/spotify/fetch-json';
import { RecentlyPlayedTrack } from '@/features/spotify/types';
import { useQuery } from '@tanstack/react-query';

export function useRecentlyPlayed() {
  return useQuery<RecentlyPlayedTrack[]>({
    queryKey: ['recently-played'],
    queryFn: () => fetchJson<RecentlyPlayedTrack[]>('/api/recently-played'),
  });
}
