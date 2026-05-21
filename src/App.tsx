import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import LangToggle from '@/components/LangToggle';
import LanguagePicker from '@/components/LanguagePicker';
import Hero from '@/components/Hero';
import Countdown from '@/components/Countdown';
import Details from '@/components/Details';
import Location from '@/components/Location';
import Rsvp from '@/components/RSVP';
import Footer from '@/components/Footer';
import Petals from '@/components/decor/Petals';
import { locales, type LocaleType } from '@/data/locales';
import { WEDDING } from '@/lib/config';

function readStoredLang(): LocaleType | null {
  if (typeof window === 'undefined') return null;
  const fromUrl = new URLSearchParams(window.location.search).get('lang');
  if (fromUrl === 'kn' || fromUrl === 'en') return fromUrl;
  const stored = window.localStorage.getItem('lang');
  return stored === 'kn' || stored === 'en' ? stored : null;
}

export default function App() {
  const [lang, setLang] = useState<LocaleType | null>(readStoredLang);

  useEffect(() => {
    if (!lang) return;
    window.localStorage.setItem('lang', lang);
    document.documentElement.lang = lang === 'kn' ? 'kn' : 'en';
  }, [lang]);

  return (
    <>
      <Petals count={16} />
      <AnimatePresence mode="wait">
        {lang === null ? (
          <LanguagePicker key="picker" onChoose={setLang} />
        ) : (
          <main key="content" className="selection:bg-gold/20">
            <LangToggle lang={lang} onChange={setLang} />
            <Hero t={locales[lang]} />
            <Countdown
              targetIso={WEDDING.dateIso}
              t={locales[lang]}
              lang={lang}
            />
            <Details t={locales[lang]} />
            <Location t={locales[lang]} />
            <Rsvp t={locales[lang]} />
            <Footer t={locales[lang]} />
          </main>
        )}
      </AnimatePresence>
    </>
  );
}
