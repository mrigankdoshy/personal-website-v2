import { PlayerWrapper } from '@/features/spotify/player-wrapper';
import { Skeleton } from '@/shared/ui/skeleton';

export function PlayerSkeleton() {
  return (
    <PlayerWrapper>
      <Skeleton className="mb-4 h-7 w-40" />
      <div className="flex items-center gap-4">
        <Skeleton className="h-16 w-16 rounded-md" />
        <div className="flex flex-grow flex-col justify-between gap-3">
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col gap-2">
              <Skeleton className="h-5 w-32" />
              <Skeleton className="h-4 w-24" />
            </div>
            <Skeleton className="h-6 w-6 rounded-full" />
          </div>
          <Skeleton className="h-1 w-full max-w-[200px]" />
        </div>
      </div>
      <div className="mt-4">
        <div className="space-y-4">
          <Skeleton className="h-7 w-32" />
          <div className="max-h-56 space-y-4 overflow-hidden">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="flex items-center gap-4">
                <Skeleton className="h-16 w-16 rounded-md" />
                <div className="flex flex-col gap-2">
                  <Skeleton className="h-5 w-32" />
                  <Skeleton className="h-4 w-24" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PlayerWrapper>
  );
}
