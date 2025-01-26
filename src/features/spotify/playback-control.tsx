import { faPause } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'motion/react';

type PlaybackControlProps = {
  isPlaying: boolean;
};

export function PlaybackControl({ isPlaying }: PlaybackControlProps) {
  return (
    <div className="h-6 w-6">
      {isPlaying ? <Equalizer /> : <FontAwesomeIcon icon={faPause} size="lg" />}
    </div>
  );
}

function Equalizer() {
  return (
    <div className="flex h-full items-end space-x-0.5">
      {[0.75, 0.9, 0.6, 0.7].map((height, index) => (
        <motion.div
          key={index}
          className="w-1.5 rounded-sm bg-[#1ED760]"
          initial={{ height: 0 }}
          animate={{ height: `${height * 100}%` }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            repeatType: 'reverse',
            duration: 0.4 + index * 0.1,
            delay: index * 0.2,
          }}
        />
      ))}
    </div>
  );
}
