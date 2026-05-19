"use client";
import { motion } from "framer-motion";

const events = [
  { time: '7:00 AM', title: 'Guest Arrival' },
  { time: '8:30 AM', title: 'Muhurta' },
  { time: '9:00 AM', title: 'Blessings' },
  { time: '12:00 PM', title: 'Lunch' }
];

export default function EventTimeline() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <h4 className="text-lg font-display mb-6 text-center">Event Timeline</h4>
        <div className="space-y-4">
          {events.map((e,i) => (
            <motion.div initial={{ opacity:0, x: -8 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} key={e.time} className="flex items-center gap-4">
              <div className="w-20 text-maroon/80">{e.time}</div>
              <div className="flex-1 border-l border-gold pl-4">
                <div className="font-serif font-bold">{e.title}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
