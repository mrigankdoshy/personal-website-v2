'use client';

import { Cover } from '@/features/spotify/cover';
import { PlaybackControl } from '@/features/spotify/playback-control';
import { PlayerWrapper } from '@/features/spotify/player-wrapper';
import { Progress } from '@/features/spotify/progress';
import { TopTracks } from '@/features/spotify/top-tracks';
import { Track } from '@/features/spotify/track';
import { useNowPlaying } from '@/features/spotify/use-now-playing';
import { useRecentlyPlayed } from '@/features/spotify/use-recently-played';
import { formatDistanceToNow } from 'date-fns';

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
    return <PlayerWrapper>Loading...</PlayerWrapper>;
  }

  if (errorNowPlaying || errorRecentlyPlayed) {
    return (
      <PlayerWrapper>
        Error: {((errorNowPlaying || errorRecentlyPlayed) as Error).message}
      </PlayerWrapper>
    );
  }

  if (!nowPlaying || !recentlyPlayed) {
    return <PlayerWrapper>No data available</PlayerWrapper>;
  }

  const { isPlaying, progress, duration, track, artists, coverUrl, url } =
    nowPlaying;

  const isCurrentlyPlaying = track !== undefined && artists !== undefined;

  return (
    <PlayerWrapper>
      <h2 className="text-lg font-semibold">
        {isCurrentlyPlaying ? 'Currently Playing' : 'Last Played'}
      </h2>
      <div className="flex items-center gap-4">
        <Cover coverUrl={coverUrl ?? recentlyPlayed.coverUrl} />
        <div className="flex flex-grow flex-col justify-between gap-3">
          <div className="flex items-center justify-between gap-4">
            <Track
              track={track ?? recentlyPlayed.track}
              trackUrl={url ?? recentlyPlayed.url}
              artists={artists ?? recentlyPlayed.artists}
            />
            {isCurrentlyPlaying ? (
              <PlaybackControl isPlaying={isPlaying} />
            ) : (
              <p className="text-xs text-muted-foreground">
                {formatPlayedAt(recentlyPlayed.playedAt)}
              </p>
            )}
          </div>
          {isPlaying && <Progress progress={progress} duration={duration} />}
        </div>
      </div>
      <TopTracks />
    </PlayerWrapper>
  );
}
