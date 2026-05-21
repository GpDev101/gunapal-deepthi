import type { locales } from '@/data/locales';
import { WEDDING } from '@/lib/config';
import Reveal from '@/components/decor/Reveal';
import { FlourishDivider } from '@/components/decor/Ornaments';

type Props = { t: (typeof locales)['en'] };

export default function Location({ t }: Readonly<Props>) {
  return (
    <section id="location" className="section text-center">
      <Reveal>
        <span className="eyebrow">{t.venue}</span>
        <h2 className="section-title mt-2">{t.locationTitle}</h2>
        <FlourishDivider className="mx-auto mt-3 w-36 text-gold/70" />
        <p className="h-serif mt-4 text-xl sm:text-2xl text-maroon">{t.venueName}</p>
        <p className="text-maroon/80 text-sm sm:text-base mt-1">{t.venueAddress}</p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-8 glass-card rounded-2xl overflow-hidden max-w-3xl mx-auto">
          <iframe
            title={t.venueName}
            aria-label={t.venueName}
            src={WEDDING.googleMapsEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-72 sm:h-96 border-0"
          />
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-8">
          <a
            href={WEDDING.googleMapsUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="btn-primary"
          >
            {t.openInMaps}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
