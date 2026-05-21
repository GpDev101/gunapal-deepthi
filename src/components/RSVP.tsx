import { useState } from 'react';
import type { locales } from '@/data/locales';
import { WEDDING } from '@/lib/config';
import Reveal from '@/components/decor/Reveal';
import { FlourishDivider } from '@/components/decor/Ornaments';

type Props = { t: (typeof locales)['en'] };

export default function RSVP({ t }: Readonly<Props>) {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState(1);
  const [attending, setAttending] = useState<'yes' | 'no'>('yes');
  const [note, setNote] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = `RSVP — ${name || 'Guest'} (${attending === 'yes' ? 'Attending' : 'Not attending'})`;
    const body = [
      `Name: ${name}`,
      `Attending: ${attending === 'yes' ? t.willAttend : t.willNotAttend}`,
      `Guests: ${guests}`,
      '',
      note ? `Message: ${note}` : '',
    ]
      .filter(Boolean)
      .join('\n');
    const href = `mailto:${WEDDING.rsvpEmail}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  }

  return (
    <section id="rsvp" className="section">
      <Reveal>
        <div className="max-w-xl mx-auto text-center">
          <span className="eyebrow">{t.rsvp}</span>
          <h2 className="section-title mt-2">{t.rsvpTitle}</h2>
          <FlourishDivider className="mx-auto mt-3 w-32 text-gold/70" />
          <p className="mt-3 text-maroon/70 text-sm">{t.rsvpSubtitle}</p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <form
          onSubmit={handleSubmit}
          className="mt-10 glass-card rounded-2xl p-6 sm:p-8 max-w-xl mx-auto space-y-5"
        >
          <div>
            <label
              htmlFor="rsvp-name"
              className="block text-xs uppercase tracking-[0.2em] text-maroon/60"
            >
              {t.yourName}
            </label>
            <input
              id="rsvp-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 w-full rounded-lg border border-maroon/15 bg-white/60 px-4 py-2.5 text-maroon focus:outline-none focus:ring-2 focus:ring-gold/40"
            />
          </div>

          <fieldset className="grid grid-cols-2 gap-3">
            <label
              className={`cursor-pointer rounded-lg border px-4 py-3 text-sm text-center transition ${
                attending === 'yes'
                  ? 'bg-maroon text-ivory border-maroon'
                  : 'border-maroon/20 text-maroon/80 hover:bg-maroon/5'
              }`}
            >
              <input
                type="radio"
                name="attending"
                className="sr-only"
                checked={attending === 'yes'}
                onChange={() => setAttending('yes')}
              />
              {t.willAttend}
            </label>
            <label
              className={`cursor-pointer rounded-lg border px-4 py-3 text-sm text-center transition ${
                attending === 'no'
                  ? 'bg-maroon text-ivory border-maroon'
                  : 'border-maroon/20 text-maroon/80 hover:bg-maroon/5'
              }`}
            >
              <input
                type="radio"
                name="attending"
                className="sr-only"
                checked={attending === 'no'}
                onChange={() => setAttending('no')}
              />
              {t.willNotAttend}
            </label>
          </fieldset>

          {attending === 'yes' && (
            <div>
              <label
                htmlFor="rsvp-guests"
                className="block text-xs uppercase tracking-[0.2em] text-maroon/60"
              >
                {t.guests}
              </label>
              <input
                id="rsvp-guests"
                type="number"
                min={1}
                max={10}
                value={guests}
                onChange={(e) =>
                  setGuests(
                    Math.max(1, Math.min(10, Number(e.target.value) || 1)),
                  )
                }
                className="mt-2 w-32 rounded-lg border border-maroon/15 bg-white/60 px-4 py-2.5 text-maroon focus:outline-none focus:ring-2 focus:ring-gold/40"
              />
            </div>
          )}

          <div>
            <label
              htmlFor="rsvp-note"
              className="block text-xs uppercase tracking-[0.2em] text-maroon/60"
            >
              {t.message}
            </label>
            <textarea
              id="rsvp-note"
              rows={3}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="mt-2 w-full rounded-lg border border-maroon/15 bg-white/60 px-4 py-2.5 text-maroon focus:outline-none focus:ring-2 focus:ring-gold/40"
            />
          </div>

          <div className="pt-2 text-center">
            <button type="submit" className="btn-primary">
              {t.sendRsvp}
            </button>
          </div>
        </form>
      </Reveal>
    </section>
  );
}
