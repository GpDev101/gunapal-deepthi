"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const PH = [
  '/assets/images/couple-placeholder.png',
  '/assets/images/engagement-1.jpg',
  '/assets/images/temple-1.jpg'
];

export default function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h4 className="text-lg font-display mb-6 text-center">Gallery</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {PH.map((src, i) => (
            <motion.img key={src} src={src} alt="" onClick={()=>setOpen(i)} whileHover={{ scale:1.03 }} className="w-full h-40 object-cover rounded-md cursor-pointer shadow-sm" />
          ))}
        </div>
        {open !== null && (
          <div className="fixed inset-0 bg-black/60 z-40 flex items-center justify-center" onClick={()=>setOpen(null)}>
            <motion.img initial={{ scale:0.9, opacity:0 }} animate={{ scale:1, opacity:1 }} src={PH[open]} className="max-w-[90%] max-h-[80%] rounded-lg" />
          </div>
        )}
      </div>
    </section>
  );
}
