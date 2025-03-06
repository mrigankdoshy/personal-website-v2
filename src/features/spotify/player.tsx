'use client';

import { Cover } from '@/features/spotify/cover';
import { PlaybackControl } from '@/features/spotify/playback-control';
import { PlayerSkeleton } from '@/features/spotify/player-skeleton';
import { PlayerWrapper } from '@/features/spotify/player-wrapper';
import { Progress } from '@/features/spotify/progress';
import { TopTracks } from '@/features/spotify/top-tracks';
import { Track } from '@/features/spotify/track';
import { useNowPlaying } from '@/features/spotify/use-now-playing';
import { useRecentlyPlayed } from '@/features/spotify/use-recently-played';
import { formatDistanceToNow } from 'date-fns';
import { AnimatePresence, motion } from 'motion/react';

const formatPlayedAt = (playedAt: string): string =>
  formatDistanceToNow(new Date(playedAt), { addSuffix: true });

export function Player() {
  const {
    data: nowPlaying,
    isLoading: isLoadingNowPlaying,
    error: errorNowPlaying,
  } = useNowPlaying();

  const {
    data: recentlyPlayedTracks,
    isLoading: isLoadingRecentlyPlayed,
    error: errorRecentlyPlayed,
  } = useRecentlyPlayed();

  const recentlyPlayed = recentlyPlayedTracks?.[0];

  if (isLoadingNowPlaying || isLoadingRecentlyPlayed) {
    return <PlayerSkeleton />;
  }

  if (errorNowPlaying || errorRecentlyPlayed) {
    return (
      <PlayerWrapper>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="text-red-500"
        >
          Error: {((errorNowPlaying || errorRecentlyPlayed) as Error).message}
        </motion.div>
      </PlayerWrapper>
    );
  }

  if (!nowPlaying || !recentlyPlayed) {
    return null;
  }

  const { isPlaying, progress, duration, track, artists, coverUrl, url } =
    nowPlaying;

  const isCurrentlyPlaying = track !== undefined && artists !== undefined;

  return (
    <PlayerWrapper>
      <AnimatePresence mode="wait">
        <motion.div
          key={isCurrentlyPlaying ? 'playing' : 'last-played'}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="mb-4 text-lg font-semibold">
            {isCurrentlyPlaying ? 'Currently Playing' : 'Last Played'}
          </h2>
          <div className="flex items-center gap-4">
            <Cover coverUrl={coverUrl ?? recentlyPlayed.coverUrl} />
            <div className="flex grow flex-col justify-between gap-3">
              <div className="flex items-center justify-between gap-4">
                <Track
                  track={track ?? recentlyPlayed.track}
                  trackUrl={url ?? recentlyPlayed.url}
                  artists={artists ?? recentlyPlayed.artists}
                />
                {isCurrentlyPlaying ? (
                  <PlaybackControl isPlaying={isPlaying} />
                ) : (
                  <motion.p
                    className="text-muted-foreground shrink-0 text-xs"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    {formatPlayedAt(recentlyPlayed.playedAt)}
                  </motion.p>
                )}
              </div>
              {isPlaying && (
                <Progress progress={progress} duration={duration} />
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <TopTracks />
      </motion.div>
    </PlayerWrapper>
  );
}
