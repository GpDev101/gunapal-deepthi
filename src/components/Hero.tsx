import { motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';
import type { locales } from '@/data/locales';
import { WEDDING } from '@/lib/config';
import { CherryBranch, FlourishDivider } from '@/components/decor/Ornaments';

type Props = { t: (typeof locales)['en'] };

export default function Hero({ t }: Readonly<Props>) {
  const reduce = useReducedMotion();
  const [imgOk, setImgOk] = useState(true);
  const [bgOk, setBgOk] = useState(true);

  const base = import.meta.env.BASE_URL;
  const coupleSrc = `${base}${WEDDING.coupleImage}`.replace('//', '/');
  const bgMobile = `${base}${WEDDING.templeBgMobile}`.replace('//', '/');
  const bgDesktop = `${base}${WEDDING.templeBgDesktop}`.replace('//', '/');

  return (
    <header className="relative overflow-hidden min-h-screen flex flex-col">
      <div aria-hidden className="absolute inset-0 -z-10">
        {bgOk ? (
          <>
            <picture>
              <source media="(min-width: 768px)" srcSet={bgDesktop} />
              <img
                src={bgMobile}
                alt=""
                onError={() => setBgOk(false)}
                draggable={false}
                className="absolute inset-0 w-full h-full object-cover object-center select-none bg-ken-burns"
              />
            </picture>
            {/* ivory wash:
                - heavy at the very top behind the blessing/names (readability)
                - opens up around the couple (the temple does the work)
                - lifts again behind the date/venue line
                - fully opaque at the bottom so the seam into Countdown is invisible */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to bottom, rgba(253,251,247,0.95) 0%, rgba(253,251,247,0.7) 22%, rgba(253,251,247,0.18) 48%, rgba(253,251,247,0.45) 78%, rgba(253,251,247,1) 100%)',
              }}
            />
          </>
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(60% 50% at 50% 20%, rgba(212,175,55,0.16), transparent 60%), radial-gradient(60% 60% at 80% 80%, rgba(232,154,176,0.14), transparent 60%)',
            }}
          />
        )}
      </div>

      {/* cherry-blossom branches hanging from the top corners */}
      <motion.div
        aria-hidden
        initial={reduce ? false : { opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute top-0 left-0 w-40 sm:w-60 lg:w-72 z-10"
      >
        <CherryBranch className="w-full h-auto branch-sway" />
      </motion.div>
      <motion.div
        aria-hidden
        initial={reduce ? false : { opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute top-0 right-0 w-40 sm:w-60 lg:w-72 z-10"
      >
        <CherryBranch flip className="w-full h-auto branch-sway branch-sway-delay" />
      </motion.div>

      <div className="relative flex-1 flex flex-col items-center justify-center text-center max-w-5xl mx-auto px-6 py-16 sm:py-20">
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
          <span
            className={`block text-gold my-2 ${
              t.nameJoiner.length > 1
                ? 'h-serif italic text-xl sm:text-2xl lg:text-3xl'
                : 'text-3xl sm:text-4xl'
            }`}
          >
            {t.nameJoiner === '&' ? <>&amp;</> : t.nameJoiner}
          </span>
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
              className="max-h-[320px] sm:max-h-[440px] lg:max-h-[520px] w-auto mx-auto select-none drop-shadow-[0_12px_24px_rgba(107,27,27,0.18)]"
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
          <FlourishDivider className="mx-auto w-32 sm:w-44 text-gold/70" />
          <p className="mt-4 h-serif text-2xl sm:text-3xl lg:text-4xl text-maroon">
            {t.ceremonyDate}
          </p>
          <p className="mt-1 h-serif text-lg sm:text-xl lg:text-2xl text-maroon/80">
            {t.ceremony} · {t.ceremonyTime}
          </p>

          <div className="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-4 justify-center">
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
