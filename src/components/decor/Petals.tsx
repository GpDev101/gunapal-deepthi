import { useMemo } from 'react';
import { Petal } from './Ornaments';

type FloatSpec = {
  id: string;
  left: string;
  delay: string;
  duration: string;
  drift: string;
  scale: number;
  rotate: string;
};

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export default function Petals({ count = 14 }: Readonly<{ count?: number }>) {
  const petals = useMemo<FloatSpec[]>(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: `petal-${i}-${Math.random().toString(36).slice(2, 8)}`,
      left: `${rand(0, 100).toFixed(1)}%`,
      delay: `${rand(0, 14).toFixed(2)}s`,
      duration: `${rand(14, 28).toFixed(2)}s`,
      drift: `${rand(-60, 60).toFixed(0)}px`,
      scale: Number(rand(0.6, 1.2).toFixed(2)),
      rotate: `${rand(-30, 30).toFixed(0)}deg`,
    }));
  }, [count]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {petals.map((p) => {
        const style: React.CSSProperties & Record<string, string | number> = {
          left: p.left,
          animationDelay: p.delay,
          animationDuration: p.duration,
          '--drift': p.drift,
          '--scale': p.scale,
          '--rotate': p.rotate,
        };
        return (
          <span
            key={p.id}
            className="absolute -top-6 will-change-transform petal-fall"
            style={style}
          >
            <Petal className="w-3 h-4 sm:w-4 sm:h-5" />
          </span>
        );
      })}
    </div>
  );
}
