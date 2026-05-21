import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { LocaleType, locales } from '@/data/locales';
import Reveal from '@/components/decor/Reveal';
import { FlourishDivider } from '@/components/decor/Ornaments';

type Props = {
  targetIso: string;
  lang: LocaleType;
  t: (typeof locales)['en'];
};

function formatDigits(n: number, lang: LocaleType) {
  if (lang === 'kn') {
    const s = n.toLocaleString('kn-IN', { useGrouping: false });
    return s.length < 2 ? `೦${s}` : s;
  }
  return String(n).padStart(2, '0');
}

function diff(targetMs: number) {
  const now = Date.now();
  const delta = Math.max(0, targetMs - now);
  const days = Math.floor(delta / 86_400_000);
  const hours = Math.floor((delta % 86_400_000) / 3_600_000);
  const minutes = Math.floor((delta % 3_600_000) / 60_000);
  const seconds = Math.floor((delta % 60_000) / 1000);
  return { days, hours, minutes, seconds };
}

export default function Countdown({ targetIso, t, lang }: Readonly<Props>) {
  const reduce = useReducedMotion();
  const targetMs = new Date(targetIso).getTime();
  const [now, setNow] = useState(() => diff(targetMs));

  useEffect(() => {
    const id = globalThis.setInterval(() => setNow(diff(targetMs)), 1000);
    return () => globalThis.clearInterval(id);
  }, [targetMs]);

  const cells: Array<[number, string]> = [
    [now.days, t.days],
    [now.hours, t.hours],
    [now.minutes, t.minutes],
    [now.seconds, t.seconds],
  ];

  return (
    <section className="section text-center">
      <Reveal>
        <h2 className="section-title">{t.countdownTitle}</h2>
        <FlourishDivider className="mx-auto mt-3 w-32 text-gold/70" />
      </Reveal>
      <div className="mt-10 grid grid-cols-4 gap-3 sm:gap-6 max-w-2xl mx-auto">
        {cells.map(([n, label], i) => (
          <Reveal key={label} delay={i * 0.06} y={20}>
            <motion.div
              key={n}
              initial={reduce ? false : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="glass-card rounded-2xl py-5 sm:py-6 flex flex-col"
            >
              <span className="h-display text-3xl sm:text-5xl text-maroon tabular-nums">
                {formatDigits(n, lang)}
              </span>
              <span className="mt-1 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-maroon/60">
                {label}
              </span>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
