import { motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';
import type { locales } from '@/data/locales';
import { WEDDING } from '@/lib/config';
import { FlourishDivider } from '@/components/decor/Ornaments';

type Props = { t: (typeof locales)['en'] };

export default function Hero({ t }: Readonly<Props>) {
  const reduce = useReducedMotion();
  const [imgOk, setImgOk] = useState(true);

  const base = import.meta.env.BASE_URL;
  const coupleSrc = `${base}${WEDDING.coupleImage}`.replace('//', '/');

  return (
    <header className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(60% 50% at 50% 20%, rgba(212,175,55,0.16), transparent 60%), radial-gradient(60% 60% at 80% 80%, rgba(232,154,176,0.14), transparent 60%)',
        }}
      />

      <div className="section flex flex-col items-center text-center pt-28 sm:pt-32">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="h-serif italic text-maroon/70 text-sm sm:text-base"
        >
          {t.withBlessings}
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 flex items-center gap-3 text-templeGreen"
        >
          <span className="h-px w-10 bg-templeGreen/50" />
          <span className="eyebrow !text-templeGreen">{t.saveTheDate}</span>
          <span className="h-px w-10 bg-templeGreen/50" />
        </motion.div>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="h-display mt-4 text-5xl sm:text-7xl leading-tight text-maroon text-shadow-soft"
        >
          {t.groomName}
          <span className="block text-gold text-3xl sm:text-4xl my-2">&amp;</span>
          {t.brideName}
        </motion.h1>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.35 }}
          className="mt-10 float-y"
        >
          {imgOk ? (
            <img
              src={coupleSrc}
              alt={t.coupleAlt}
              onError={() => setImgOk(false)}
              className="max-h-[320px] sm:max-h-[420px] w-auto mx-auto select-none drop-shadow-[0_12px_24px_rgba(107,27,27,0.18)]"
              draggable={false}
            />
          ) : (
            <CouplePlaceholder />
          )}
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-10"
        >
          <FlourishDivider className="mx-auto w-32 text-gold/70" />
          <p className="mt-3 h-serif text-xl sm:text-2xl text-maroon">
            {t.ceremonyDate}
          </p>
          <p className="h-serif text-base sm:text-lg text-maroon/80">
            {t.ceremony} · {t.ceremonyTime}
          </p>
          <p className="mt-2 text-sm text-maroon/70">{t.venueName}</p>
          <p className="text-xs text-maroon/60">{WEDDING.venueShort}</p>

          <div className="mt-7 flex flex-wrap gap-3 justify-center">
            <a href="#rsvp" className="btn-primary">
              {t.rsvp}
            </a>
            <a href="#location" className="btn-ghost">
              {t.locationTitle}
            </a>
          </div>
        </motion.div>
      </div>
    </header>
  );
}

function CouplePlaceholder() {
  return (
    <div className="mx-auto max-w-md rounded-2xl border border-dashed border-maroon/30 bg-white/50 backdrop-blur p-8 text-center">
      <svg viewBox="0 0 320 220" className="mx-auto w-56 h-auto" fill="none">
        {/* groom */}
        <g>
          <circle cx="115" cy="80" r="22" fill="#FCE0CC" stroke="#6B1B1B" strokeWidth="1.4" />
          <path d="M93 100 Q115 215 137 100 Z" fill="#FDFBF7" stroke="#6B1B1B" strokeWidth="1.4" />
          <path d="M99 102 L131 102 L127 120 L103 120 Z" fill="#E5C46B" opacity="0.85" />
        </g>
        {/* bride */}
        <g>
          <circle cx="205" cy="80" r="22" fill="#FCE0CC" stroke="#6B1B1B" strokeWidth="1.4" />
          <path d="M183 100 Q205 215 227 100 Z" fill="#E89AB0" stroke="#6B1B1B" strokeWidth="1.4" />
          <path d="M189 102 L221 102 L217 120 L193 120 Z" fill="#D4AF37" opacity="0.85" />
        </g>
      </svg>
      <p className="mt-3 text-xs text-maroon/70">
        Save your artwork as <code className="text-maroon">public/assets/couple.png</code>
      </p>
    </div>
  );
}
