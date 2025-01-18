import { useQuery } from '@tanstack/react-query';

export function useLastUpdated() {
  return useQuery({
    queryKey: ['lastUpdated'],
    queryFn: async () => {
      const response = await fetch('/api/last-updated');
      if (!response.ok) {
        throw new Error('Failed to fetch last updated time');
      }
      const data = await response.json();
      return new Date(data.lastUpdated);
    },
  });
}
