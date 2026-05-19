import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gunapal & Deepthi — Wedding Invitation',
  description: 'Join us to celebrate the wedding ceremony on July 2, 2026 at Yoganarasimha Swamy Temple, Mysore.',
  openGraph: {
    title: 'Gunapal & Deepthi — Wedding Invitation',
    description: 'Dhaara Muhūrta: July 2nd, 2026 | Mysore',
    url: 'https://yourdomain.in',
    images: [{ url: '/assets/images/og-preview-card.jpg', width: 1200, height: 630 }]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600&family=Cormorant+Garamond:ital,wght@0,500;0,700;1,500&family=Inter:wght@300;400;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
