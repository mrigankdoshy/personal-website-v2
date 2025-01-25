type PlaybackControlProps = {
  isPlaying: boolean;
};

export function PlaybackControl({ isPlaying }: PlaybackControlProps) {
  return (
    <div className="h-6 w-6">{isPlaying ? <Equalizer /> : <PauseIcon />}</div>
  );
}

function Equalizer() {
  return (
    <div className="flex h-full items-end space-x-0.5">
      {[0.75, 0.9, 0.6, 0.7].map((height, index) => (
        <div
          key={index}
          className="w-1.5 animate-equalizer rounded-sm bg-[#1ED760]"
          style={{
            height: `${height * 100}%`,
            animationDelay: `${index * 0.2}s`,
          }}
        />
      ))}
    </div>
  );
}

function PauseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full">
      <rect x="6" y="4" width="4" height="16" rx="1" />
      <rect x="14" y="4" width="4" height="16" rx="1" />
    </svg>
  );
}
