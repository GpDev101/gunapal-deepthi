import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { locales } from '@/data/locales';
import { WEDDING } from '@/lib/config';

const STORAGE_KEY = 'music-muted';

type Props = { t: (typeof locales)['en'] };

function SpeakerOnIcon({ className = '' }: Readonly<{ className?: string }>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M11 5 6 9H2v6h4l5 4z" />
      <path d="M15.5 8.5a5 5 0 0 1 0 7" />
      <path d="M19 5a10 10 0 0 1 0 14" />
    </svg>
  );
}

function SpeakerOffIcon({ className = '' }: Readonly<{ className?: string }>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M11 5 6 9H2v6h4l5 4z" />
      <line x1="22" y1="9" x2="16" y2="15" />
      <line x1="16" y1="9" x2="22" y2="15" />
    </svg>
  );
}

export default function MusicToggle({ t }: Readonly<Props>) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const reduce = useReducedMotion();

  // muted=false means user wants music; muted=true means user paused it.
  const [muted, setMuted] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.localStorage.getItem(STORAGE_KEY) === 'true';
  });
  const [available, setAvailable] = useState(true);

  const base = import.meta.env.BASE_URL;
  const src = `${base}${WEDDING.musicFile}`.replace('//', '/');

  // Try to play / pause when state changes, persist preference.
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    window.localStorage.setItem(STORAGE_KEY, String(muted));
    if (muted) {
      audio.pause();
      return;
    }
    audio.play().catch(() => {
      // Browser blocked autoplay — the user will click the button to start.
      // We don't change `muted` because the user's preference is still "on".
    });
  }, [muted]);

  if (!available) return null;

  const label = muted ? t.musicOff : t.musicOn;

  return (
    <>
      <audio
        ref={audioRef}
        src={src}
        loop
        preload="auto"
        onError={() => setAvailable(false)}
      />
      <motion.button
        type="button"
        onClick={() => setMuted((m) => !m)}
        aria-label={label}
        title={label}
        initial={reduce ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="fixed bottom-4 right-4 z-50 flex items-center justify-center w-12 h-12 rounded-full glass-card shadow-premium text-maroon hover:text-maroon hover:scale-110 active:scale-95 transition"
      >
        {muted ? (
          <SpeakerOffIcon className="w-5 h-5" />
        ) : (
          <>
            <SpeakerOnIcon className="w-5 h-5" />
            {!reduce && (
              <span
                aria-hidden
                className="absolute inset-0 rounded-full ring-2 ring-gold/40 animate-music-pulse"
              />
            )}
          </>
        )}
      </motion.button>
    </>
  );
}
