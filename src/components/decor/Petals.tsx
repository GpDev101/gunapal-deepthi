import { useMemo } from 'react';
import { Blossom, Petal } from './Ornaments';

type FloatSpec = {
  id: string;
  kind: 'petal' | 'blossom';
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

export default function Petals({ count = 20 }: Readonly<{ count?: number }>) {
  const petals = useMemo<FloatSpec[]>(() => {
    return Array.from({ length: count }).map((_, i) => {
      // ~1 in 3 falls is a full cherry blossom; the rest are single petals
      const kind: FloatSpec['kind'] = Math.random() < 0.33 ? 'blossom' : 'petal';
      return {
        id: `fall-${i}-${Math.random().toString(36).slice(2, 8)}`,
        kind,
        left: `${rand(0, 100).toFixed(1)}%`,
        delay: `${rand(0, 16).toFixed(2)}s`,
        duration: `${rand(14, 28).toFixed(2)}s`,
        drift: `${rand(-80, 80).toFixed(0)}px`,
        scale: Number(rand(0.55, 1.25).toFixed(2)),
        rotate: `${rand(-40, 40).toFixed(0)}deg`,
      };
    });
  }, [count]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 overflow-hidden"
      style={{ zIndex: -1 }}
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
            {p.kind === 'blossom' ? (
              <Blossom className="w-4 h-4 sm:w-5 sm:h-5" />
            ) : (
              <Petal className="w-3 h-4 sm:w-4 sm:h-5" />
            )}
          </span>
        );
      })}
    </div>
  );
}
