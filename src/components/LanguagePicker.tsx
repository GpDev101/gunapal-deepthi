import { motion, useReducedMotion } from 'framer-motion';
import type { LocaleType } from '@/data/locales';
import { FlourishDivider, GaneshaSymbol } from '@/components/decor/Ornaments';

type Props = {
  onChoose: (lang: LocaleType) => void;
};

export default function LanguagePicker({ onChoose }: Readonly<Props>) {
  const reduce = useReducedMotion();

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lang-picker-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-6"
      style={{
        background:
          'radial-gradient(60% 50% at 50% 20%, rgba(212,175,55,0.18), transparent 60%), radial-gradient(60% 60% at 80% 80%, rgba(232,154,176,0.18), transparent 60%), #FDFBF7',
      }}
    >
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative glass-card rounded-3xl px-8 py-10 sm:px-12 sm:py-12 text-center max-w-md w-full"
      >
        <GaneshaSymbol className="mx-auto w-12 h-12" />
        <FlourishDivider className="mx-auto mt-4 w-32 text-gold/70 gold-shimmer" />

        <h2
          id="lang-picker-title"
          className="h-display mt-6 text-2xl sm:text-3xl text-maroon"
        >
          Choose your language
        </h2>
        <p className="h-display mt-2 text-xl sm:text-2xl text-maroon/80">
          ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => onChoose('en')}
            className="group rounded-2xl border border-maroon/20 bg-white/60 px-6 py-5 text-maroon hover:bg-maroon hover:text-ivory transition shadow-premium"
          >
            <span className="block h-display text-2xl">English</span>
            <span className="block text-[11px] uppercase tracking-[0.25em] text-maroon/60 group-hover:text-ivory/80 mt-1">
              Continue
            </span>
          </button>
          <button
            type="button"
            onClick={() => onChoose('kn')}
            className="group rounded-2xl border border-maroon/20 bg-white/60 px-6 py-5 text-maroon hover:bg-maroon hover:text-ivory transition shadow-premium"
          >
            <span className="block h-display text-2xl">ಕನ್ನಡ</span>
            <span className="block text-[11px] uppercase tracking-[0.25em] text-maroon/60 group-hover:text-ivory/80 mt-1">
              ಮುಂದುವರಿಸಿ
            </span>
          </button>
        </div>

        <p className="mt-6 text-[11px] text-maroon/50">
          You can switch any time from the top-right · ಯಾವಾಗ ಬೇಕಾದರೂ ಬದಲಾಯಿಸಿ
        </p>
      </motion.div>
    </div>
  );
}
