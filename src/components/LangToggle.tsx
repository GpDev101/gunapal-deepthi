import type { LocaleType } from '@/data/locales';

type Props = {
  lang: LocaleType;
  onChange: (l: LocaleType) => void;
};

export default function LangToggle({ lang, onChange }: Readonly<Props>) {
  return (
    <div className="fixed top-4 right-4 z-50 flex gap-1 glass-card p-1 rounded-full">
      <button
        type="button"
        onClick={() => onChange('en')}
        aria-pressed={lang === 'en'}
        className={`px-3 py-1 rounded-full text-xs transition ${
          lang === 'en' ? 'bg-maroon text-ivory' : 'text-maroon/70 hover:text-maroon'
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => onChange('kn')}
        aria-pressed={lang === 'kn'}
        className={`px-3 py-1 rounded-full text-xs transition ${
          lang === 'kn' ? 'bg-maroon text-ivory' : 'text-maroon/70 hover:text-maroon'
        }`}
      >
        ಕನ್ನಡ
      </button>
    </div>
  );
}
