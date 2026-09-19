import { fetchJson } from '@/features/spotify/fetch-json';
import { TopTrack } from '@/features/spotify/types';
import { useQuery } from '@tanstack/react-query';

export function useTopTracks() {
  return useQuery<TopTrack[]>({
    queryKey: ['top-tracks'],
    queryFn: () => fetchJson<TopTrack[]>('/api/top-tracks'),
  });
}
