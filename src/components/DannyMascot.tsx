import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { WEDDING } from '@/lib/config';

type Size = 'sm' | 'md' | 'lg' | 'xl';

type Props = {
  messages: ReadonlyArray<string>;
  alt: string;
  size?: Size;
  /** If true, the bubble is shown by default with the first message
   *  and rotates through the rest on click. Use for places where Danny
   *  is making a persistent ask (e.g. the RSVP nudge). */
  initialBubble?: boolean;
  /** Auto-cycle the bubble through messages every N seconds. */
  autoCycleSeconds?: number;
};

const SIZE_CLASS: Record<Size, string> = {
  sm: 'w-24 sm:w-28',
  md: 'w-32 sm:w-40',
  lg: 'w-44 sm:w-56',
  xl: 'w-56 sm:w-72 lg:w-96',
};

export default function DannyMascot({
  messages,
  alt,
  size = 'md',
  initialBubble = false,
  autoCycleSeconds,
}: Readonly<Props>) {
  const reduce = useReducedMotion();
  const [idx, setIdx] = useState(initialBubble ? 0 : -1);

  const base = import.meta.env.BASE_URL;
  const src = `${base}${WEDDING.dannyImage}`.replace('//', '/');

  // Optional auto-rotation through the messages.
  useEffect(() => {
    if (!autoCycleSeconds || idx < 0 || messages.length < 2) return;
    const id = globalThis.setTimeout(() => {
      setIdx((i) => (i + 1) % messages.length);
    }, autoCycleSeconds * 1000);
    return () => globalThis.clearTimeout(id);
  }, [autoCycleSeconds, idx, messages.length]);

  function handleClick() {
    setIdx((i) => (i < 0 ? 0 : (i + 1) % messages.length));
  }

  const current = idx >= 0 ? messages[idx] : null;

  return (
    <div className="flex flex-col items-center select-none">
      <div className="relative">
        {/* Bubble wrapper spans the exact width of Danny (button) and flex-centers
            the speech bubble above his head — bulletproof centering. */}
        <AnimatePresence mode="wait">
          {current !== null && (
            <motion.div
              key={idx}
              initial={reduce ? false : { opacity: 0, y: 8, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduce ? undefined : { opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-0 top-0 -translate-y-[85%] flex justify-center pointer-events-none"
            >
              <div className="relative bg-white border border-maroon/20 rounded-2xl shadow-premium px-3 sm:px-4 py-2 text-maroon h-display font-bold text-xs sm:text-base text-center leading-tight w-max max-w-[170px] sm:max-w-[240px]">
                {current}
                <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          type="button"
          onClick={handleClick}
          aria-label={alt}
          className={`${SIZE_CLASS[size]} block danny-bob rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold/50`}
        >
          <img
            src={src}
            alt={alt}
            draggable={false}
            className="w-full h-auto select-none"
          />
        </button>
      </div>
    </div>
  );
}
