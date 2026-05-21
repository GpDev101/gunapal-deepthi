import type { SVGProps } from 'react';

export function MangoLeaf(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 24" fill="none" {...props}>
      <path
        d="M2 12c8-9 18-9 30 0s22 9 30 0"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M8 12c2-4 5-4 8 0s6 4 8 0"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M24 12c2-4 5-4 8 0s6 4 8 0"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M40 12c2-4 5-4 8 0s6 4 8 0"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function FlourishDivider(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 120 16" fill="none" {...props}>
      <path
        d="M2 8h36"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M82 8h36"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M44 8c4-5 8-5 12 0s8 5 12 0"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="60" cy="8" r="1.4" fill="currentColor" />
    </svg>
  );
}

export function Lantern({ delay = 0, ...props }: SVGProps<SVGSVGElement> & { delay?: number }) {
  return (
    <svg viewBox="0 0 40 80" fill="none" {...props}>
      <line x1="20" y1="0" x2="20" y2="14" stroke="#D4AF37" strokeWidth="1" />
      <ellipse cx="20" cy="16" rx="6" ry="2" fill="#D4AF37" />
      <path
        d="M14 18 Q20 36 26 18 Z"
        fill="url(#lantern-glow)"
        stroke="#D4AF37"
        strokeWidth="1.2"
      />
      <ellipse cx="20" cy="38" rx="6" ry="2" fill="#D4AF37" />
      <line x1="20" y1="40" x2="20" y2="46" stroke="#D4AF37" strokeWidth="1" />
      <circle cx="20" cy="50" r="2.5" fill="#D4AF37">
        <animate
          attributeName="opacity"
          values="0.6;1;0.6"
          dur="2.4s"
          begin={`${delay}s`}
          repeatCount="indefinite"
        />
      </circle>
      <defs>
        <radialGradient id="lantern-glow" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FFE9A8" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.55" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export function FloralCorner({
  flip = false,
  ...props
}: SVGProps<SVGSVGElement> & { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 140 140"
      fill="none"
      style={flip ? { transform: 'scaleX(-1)' } : undefined}
      {...props}
    >
      <g stroke="#2E7A5E" strokeWidth="1.2" strokeLinecap="round" fill="none">
        <path d="M10 10 Q60 30 50 80" />
        <path d="M10 10 Q40 40 70 50" />
        <path d="M10 10 Q30 60 20 100" />
      </g>
      <g fill="#E89AB0">
        <circle cx="50" cy="80" r="6" />
        <circle cx="44" cy="74" r="4" />
        <circle cx="56" cy="86" r="4" />
        <circle cx="70" cy="50" r="6" />
        <circle cx="64" cy="44" r="4" />
        <circle cx="76" cy="56" r="4" />
        <circle cx="20" cy="100" r="6" />
        <circle cx="14" cy="94" r="4" />
        <circle cx="26" cy="106" r="4" />
      </g>
      <g fill="#D4AF37">
        <circle cx="50" cy="80" r="1.6" />
        <circle cx="70" cy="50" r="1.6" />
        <circle cx="20" cy="100" r="1.6" />
      </g>
      <g fill="#2E7A5E">
        <ellipse cx="38" cy="38" rx="3" ry="6" transform="rotate(35 38 38)" />
        <ellipse cx="58" cy="22" rx="2.5" ry="5" transform="rotate(45 58 22)" />
        <ellipse cx="22" cy="60" rx="2.5" ry="5" transform="rotate(-25 22 60)" />
      </g>
    </svg>
  );
}

export function ArchFrame(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 400 600" fill="none" preserveAspectRatio="none" {...props}>
      <defs>
        <linearGradient id="arch-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E5C46B" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#B6932A" />
        </linearGradient>
      </defs>
      <path
        d="M20 580 V 200 Q 20 60 200 30 Q 380 60 380 200 V 580"
        stroke="url(#arch-gold)"
        strokeWidth="3"
        fill="none"
      />
      <path
        d="M30 580 V 200 Q 30 70 200 42 Q 370 70 370 200 V 580"
        stroke="url(#arch-gold)"
        strokeWidth="1"
        fill="none"
        opacity="0.55"
      />
      <circle cx="200" cy="22" r="6" fill="#D4AF37" />
      <circle cx="200" cy="22" r="3" fill="#FDFBF7" />
    </svg>
  );
}

export function GaneshaSymbol(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 40" fill="none" {...props}>
      <text
        x="50%"
        y="56%"
        textAnchor="middle"
        fontSize="28"
        fill="#6B1B1B"
        fontFamily="serif"
      >
        ॐ
      </text>
    </svg>
  );
}

export function Petal({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 18" className={className} aria-hidden>
      <ellipse cx="6" cy="9" rx="4.5" ry="8.5" fill="#E89AB0" opacity="0.85" />
      <ellipse cx="6" cy="9" rx="2" ry="6" fill="#F4C7D2" opacity="0.9" />
    </svg>
  );
}
