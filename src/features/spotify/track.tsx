import { Link } from '@/shared/ui/link';

type TrackProps = {
  track?: string;
  artist?: string;
  url?: string;
};

export function Track({
  track = 'Not playing',
  artist = 'Spotify',
  url,
}: TrackProps) {
  return url ? (
    <Link href={url} className="block transition-opacity hover:opacity-80">
      <h2 className="text-md truncate font-bold">{track}</h2>
      <p className="truncate text-sm text-muted-foreground">{artist}</p>
    </Link>
  ) : (
    <div className="flex flex-col">
      <h2 className="text-md truncate font-bold">{track}</h2>
      <p className="truncate text-sm text-muted-foreground">{artist}</p>
    </div>
  );
}
