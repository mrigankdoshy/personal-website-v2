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

const formatPlayedAt = (playedAt: string | undefined): string => {
  if (!playedAt) {
    return '';
  }
  const date = new Date(playedAt);
  return formatDistanceToNow(date, { addSuffix: true });
};

export function Player() {
  const { data, isLoading, error } = useNowPlaying();
  const { data: recentlyPlayedTracks } = useRecentlyPlayed();

  const recentlyPlayed = recentlyPlayedTracks?.[0];

  if (isLoading) {
    return <PlayerWrapper>Loading...</PlayerWrapper>;
  }

  if (error) {
    return <PlayerWrapper>Error: {(error as Error).message}</PlayerWrapper>;
  }

  if (!data) {
    return <PlayerWrapper>No data available</PlayerWrapper>;
  }

  const { isPlaying, progress, duration, track, artists, coverUrl, url } = data;

  const hasTrack = track !== undefined && artists !== undefined;

  return (
    <PlayerWrapper>
      <h2 className="text-lg font-semibold">
        {hasTrack ? 'Currently Playing' : 'Last Played'}
      </h2>
      <div className="flex items-center gap-4">
        <Cover coverUrl={coverUrl ?? recentlyPlayed?.coverUrl} />
        <div className="flex flex-grow flex-col justify-between gap-4">
          <div
            className={`flex ${hasTrack ? 'items-start' : 'items-center'} justify-between`}
          >
            <Track
              track={track ?? recentlyPlayed?.track}
              trackUrl={url ?? recentlyPlayed?.url}
              artists={artists ?? recentlyPlayed?.artists}
            />
            {hasTrack ? (
              <PlaybackControl isPlaying={isPlaying} />
            ) : (
              <p className="text-xs text-muted-foreground">
                {formatPlayedAt(recentlyPlayed?.playedAt)}
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
