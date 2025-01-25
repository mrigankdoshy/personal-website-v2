type ProgressProps = {
  progress: number;
  duration: number;
};

export function Progress({ progress, duration }: ProgressProps) {
  const percentage = (progress / duration) * 100;

  return (
    <div className="h-1 w-full max-w-[200px] overflow-hidden rounded-full bg-gray-500">
      <div
        className="h-full rounded-full bg-[#1ED760] transition-all duration-300 ease-in-out"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}
