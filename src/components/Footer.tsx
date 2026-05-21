import type { locales } from '@/data/locales';
import { FlourishDivider } from '@/components/decor/Ornaments';

type Props = { t: (typeof locales)['en'] };

export default function Footer({ t }: Readonly<Props>) {
  return (
    <footer className="mt-10 py-12 text-center text-xs text-maroon/60">
      <FlourishDivider className="mx-auto w-32 text-gold/70" />
      <p className="mt-4 text-[11px] uppercase tracking-[0.35em] text-gold">
        {t.footerNote}
      </p>
      <p className="mt-3">
        © {new Date().getFullYear()} {t.groomName} &amp; {t.brideName}
      </p>
    </footer>
  );
}
