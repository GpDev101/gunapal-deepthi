import type { locales } from '@/data/locales';
import { WEDDING, type RsvpContact, type RsvpRole } from '@/lib/config';
import Reveal from '@/components/decor/Reveal';
import { FlourishDivider } from '@/components/decor/Ornaments';

type Props = { t: (typeof locales)['en'] };

function WhatsAppIcon({ className = '' }: Readonly<{ className?: string }>) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden
      className={className}
      fill="currentColor"
    >
      <path d="M16.001 2.667c-7.364 0-13.333 5.97-13.333 13.333 0 2.353.617 4.654 1.79 6.682L2.667 29.333l6.85-1.79a13.27 13.27 0 0 0 6.484 1.69h.006c7.364 0 13.333-5.97 13.333-13.333S23.37 2.667 16.001 2.667zm0 24.305h-.005a11.06 11.06 0 0 1-5.63-1.541l-.404-.24-4.06 1.063 1.084-3.957-.263-.418a11.04 11.04 0 0 1-1.69-5.879c0-6.118 4.976-11.094 11.094-11.094 2.962 0 5.747 1.155 7.841 3.252a11.02 11.02 0 0 1 3.253 7.847c-.003 6.118-4.979 11.094-11.097 11.094zm6.087-8.31c-.334-.167-1.975-.974-2.282-1.086-.306-.111-.529-.167-.751.167-.222.334-.862 1.085-1.057 1.308-.195.222-.39.25-.724.083-.334-.167-1.41-.52-2.687-1.658-.993-.886-1.664-1.98-1.859-2.314-.195-.334-.021-.514.146-.681.15-.149.334-.39.501-.585.167-.195.222-.334.334-.557.111-.222.056-.418-.028-.585s-.751-1.812-1.029-2.48c-.271-.65-.547-.563-.751-.573l-.64-.012c-.222 0-.585.083-.892.418-.306.334-1.169 1.143-1.169 2.786 0 1.642 1.196 3.229 1.363 3.452.167.222 2.355 3.595 5.706 5.041.798.344 1.42.55 1.905.704.8.254 1.528.219 2.104.133.642-.096 1.975-.808 2.253-1.587.278-.78.278-1.448.195-1.587-.083-.139-.306-.222-.64-.39z" />
    </svg>
  );
}

function MailIcon({ className = '' }: Readonly<{ className?: string }>) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function nameFor(role: RsvpRole, t: (typeof locales)['en']) {
  return role === 'groom' ? t.groomName : t.brideName;
}

export default function Rsvp({ t }: Readonly<Props>) {
  const whatsappContacts: RsvpContact[] = WEDDING.rsvpContacts.filter(
    (c) => c.whatsapp,
  );
  const emailContacts: RsvpContact[] = WEDDING.rsvpContacts.filter(
    (c) => c.email,
  );

  const waHref = (number: string) =>
    `https://wa.me/${number}?text=${encodeURIComponent(t.rsvpWhatsAppMessage)}`;

  const mailHref = (address: string) =>
    `mailto:${address}?subject=${encodeURIComponent(
      t.rsvpEmailSubject,
    )}&body=${encodeURIComponent(t.rsvpEmailBody)}`;

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
        <div className="mt-10 max-w-md mx-auto flex flex-col items-center gap-6">
          {whatsappContacts.length > 0 && (
            <div className="w-full flex flex-col items-center gap-3">
              {whatsappContacts.length > 1 && (
                <p className="text-[11px] uppercase tracking-[0.3em] text-maroon/60">
                  {t.rsvpWhatsApp}
                </p>
              )}
              <div className="w-full flex flex-col sm:flex-row gap-3 justify-center">
                {whatsappContacts.map((c) => (
                  <a
                    key={`wa-${c.role}`}
                    href={waHref(c.whatsapp)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex-1 sm:flex-none inline-flex items-center justify-center gap-3 rounded-full bg-maroon text-ivory px-8 py-4 text-base font-medium tracking-wide shadow-premium hover:bg-maroon/90 hover:scale-[1.02] active:scale-[0.98] transition min-h-[52px]"
                  >
                    <WhatsAppIcon className="w-5 h-5 text-gold transition group-hover:text-ivory" />
                    <span>
                      {whatsappContacts.length > 1
                        ? nameFor(c.role, t)
                        : t.rsvpWhatsApp}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {emailContacts.length > 0 && (
            <div className="flex flex-col items-center gap-2">
              {emailContacts.length > 1 && (
                <p className="text-xs text-maroon/60">{t.rsvpEmail}</p>
              )}
              <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
                {emailContacts.map((c, i) => (
                  <span
                    key={`em-${c.role}`}
                    className="inline-flex items-center"
                  >
                    {i > 0 && (
                      <span
                        aria-hidden
                        className="mr-5 text-maroon/30 select-none"
                      >
                        ·
                      </span>
                    )}
                    <a
                      href={mailHref(c.email)}
                      className="group inline-flex items-center gap-2 text-sm text-maroon/70 hover:text-maroon underline-offset-4 hover:underline transition"
                    >
                      <MailIcon className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                      <span>
                        {emailContacts.length > 1
                          ? nameFor(c.role, t)
                          : t.rsvpEmail}
                      </span>
                    </a>
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </Reveal>
    </section>
  );
}
