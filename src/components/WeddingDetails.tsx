"use client";
import { Calendar, Clock, MapPin } from "lucide-react";

interface Props { t: any; }

export default function WeddingDetails({ t }: Props) {
  return (
    <section className="py-12 px-6">
      <div className="max-w-3xl mx-auto glass-card p-8 rounded-xl shadow-premium">
        <h3 className="text-center text-2xl font-display mb-6">{t.ceremonyTitle}</h3>

        <div className="grid sm:grid-cols-3 gap-6 items-center">
          <div className="text-center">
            <Calendar className="mx-auto text-gold" />
            <div className="font-serif font-bold mt-2">Thursday</div>
            <div className="text-sm text-maroon/70">2nd July 2026</div>
          </div>

          <div className="text-center">
            <Clock className="mx-auto text-gold" />
            <div className="font-serif font-bold mt-2">{t.muhurthaTitle}</div>
            <div className="text-sm text-maroon/70">{t.muhurthaTime}</div>
          </div>

          <div className="text-center">
            <MapPin className="mx-auto text-gold" />
            <div className="font-serif font-bold mt-2">{t.venueName}</div>
            <div className="text-sm text-maroon/70">{t.venueAddress}</div>
          </div>
        </div>

        <div className="flex gap-3 justify-center mt-6">
          <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="px-4 py-2 bg-maroon text-ivory rounded-md text-sm">Open Maps</a>
          <button className="px-4 py-2 border border-gold text-maroon rounded-md text-sm">Save Calendar</button>
          <button className="px-4 py-2 border border-gold text-maroon rounded-md text-sm">Share</button>
        </div>
      </div>
    </section>
  );
}
