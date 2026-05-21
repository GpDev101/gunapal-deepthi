import type { locales } from '@/data/locales';
import Reveal from '@/components/decor/Reveal';
import { FlourishDivider, MangoLeaf } from '@/components/decor/Ornaments';

type Props = { t: (typeof locales)['en'] };

export default function Details({ t }: Readonly<Props>) {
  return (
    <section id="details" className="section">
      <Reveal>
        <div className="text-center">
          <span className="eyebrow">{t.ceremony}</span>
          <h2 className="section-title mt-2">{t.detailsTitle}</h2>
          <FlourishDivider className="mx-auto mt-3 w-36 text-gold/70" />
        </div>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        <Reveal delay={0.05}>
          <div className="relative glass-card rounded-2xl p-8 text-center overflow-hidden">
            <MangoLeaf className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 text-templeGreen/40" />
            <p className="eyebrow">{t.ceremony}</p>
            <p className="h-serif mt-4 text-2xl text-maroon">{t.ceremonyDate}</p>
            <p className="h-serif text-xl text-maroon/80">{t.ceremonyTime}</p>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="relative glass-card rounded-2xl p-8 text-center overflow-hidden">
            <MangoLeaf className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 text-templeGreen/40" />
            <p className="eyebrow">{t.venue}</p>
            <p className="h-serif mt-4 text-2xl text-maroon">{t.venueName}</p>
            <p className="h-serif text-sm text-maroon/80 mt-1">
              {t.venueAddress}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
