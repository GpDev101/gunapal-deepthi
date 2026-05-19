"use client";
import { motion } from "framer-motion";

export default function CoupleStory() {
  const events = [
    { year: '2018', title: 'First Meeting', body: 'They met at a family function in Mysore.' },
    { year: '2022', title: 'Engagement', body: 'A quiet family engagement celebrated with blessings.' },
    { year: '2026', title: 'Wedding Day', body: 'Gunapal & Deepthi tie the knot at Yoganarasimha Swamy Temple.' }
  ];

  return (
    <section className="py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <h4 className="text-lg font-display mb-6 text-center">Our Story</h4>
        <div className="space-y-6">
          {events.map((e, i) => (
            <motion.div key={e.title} initial={{ opacity:0, x: -10 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} className="flex gap-4 items-start">
              <div className="w-12 text-maroon font-semibold">{e.year}</div>
              <div>
                <div className="font-serif font-bold">{e.title}</div>
                <div className="text-sm text-maroon/70">{e.body}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
