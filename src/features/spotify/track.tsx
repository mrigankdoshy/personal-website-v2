type TrackProps = {
  track: string;
  artist: string;
  url: string;
};

export function Track({
  track = 'Not playing',
  artist = 'Spotify',
  url,
}: TrackProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block transition-opacity hover:opacity-80"
    >
      <h2 className="truncate text-lg font-bold">{track}</h2>
      <p className="truncate text-sm text-gray-400">{artist}</p>
    </a>
  );
}
