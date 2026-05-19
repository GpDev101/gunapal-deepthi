"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import IntroLoader from "@/components/IntroLoader";
import Hero from "@/components/Hero";
import Countdown from "components/Countdown";
import WeddingDetails from "@/components/WeddingDetails";
import CoupleStory from "@/components/CoupleStory";
import Gallery from "components/Gallery";
import EventTimeline from "components/EventTimeline";
import LocationSection from "components/LocationSection";
import RSVPForm from "@/components/RSVPForm";
import Footer from "@/components/Footer";
import { locales, LocaleType } from "@/data/locales";

export default function Page() {
  const search = useSearchParams();
  const [lang, setLang] = useState<LocaleType>('en');
  const [guest, setGuest] = useState<string | null>(null);
  const [opened, setOpened] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const g = search.get('guest'); if (g) setGuest(decodeURIComponent(g));
    const l = search.get('lang'); if (l === 'kn' || l === 'en') setLang(l);
  }, [search]);

  const t = locales[lang];

  return (
    <main className="selection:bg-gold/20">
      <audio ref={audioRef} src="/assets/audio/mysore-veena.mp3" loop preload="auto" />
      {!opened ? (
        <IntroLoader 
          t={t} 
          guest={guest ?? undefined}
          onOpen={() => {
            setOpened(true);
            if (audioRef.current) audioRef.current.volume = 0.35;
            audioRef.current?.play().catch(()=>{});
          }} 
        />
      ) : (
        <>
          <div className="fixed top-5 right-5 z-50 flex gap-2 glass-card p-1 rounded-full">
            <button onClick={() => setLang('en')} className={`px-3 py-1 rounded-full text-xs ${lang==='en' ? 'bg-maroon text-white' : 'text-maroon/70'}`}>EN</button>
            <button onClick={() => setLang('kn')} className={`px-3 py-1 rounded-full text-xs ${lang==='kn' ? 'bg-maroon text-white' : 'text-maroon/70'}`}>ಕನ್ನಡ</button>
          </div>

          <Hero t={t} guest={guest} />
          <Countdown target="2026-07-02T08:30:00+05:30" />
          <WeddingDetails t={t} />
          <CoupleStory />
          <Gallery />
          <EventTimeline />
          <LocationSection />
          <RSVPForm t={t} />
          <Footer />
        </>
      )}
    </main>
  );
}
