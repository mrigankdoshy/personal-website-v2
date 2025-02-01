import { Cover } from '@/features/spotify/cover';
import { Track } from '@/features/spotify/track';
import { useTopTracks } from '@/features/spotify/use-top-tracks';
import { motion } from 'motion/react';

export function TopTracks() {
  const { data: tracks } = useTopTracks();

  return (
    <motion.div
      className="space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-lg font-semibold">Top Songs</h2>
      <div className="no-scrollbar max-h-56 space-y-4 overflow-y-auto pr-2">
        {tracks?.map((track, index) => (
          <motion.div
            key={track.url}
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Cover coverUrl={track.coverUrl} />
            <Track
              track={track.track}
              trackUrl={track.url}
              artists={track.artists}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
