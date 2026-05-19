"use client";
import { motion } from "framer-motion";

interface Props { t: any; guest?: string | null; }

export default function Hero({ t, guest }: Props) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {/* subtle temple silhouette bg image placeholder */}
        <div className="absolute inset-x-0 top-8 h-56 bg-[url('/assets/images/temple-silhouette.png')] bg-center bg-no-repeat opacity-10" />
      </div>

      <div className="z-10 text-center max-w-3xl">
        <p className="text-sm text-maroon/60 uppercase tracking-wider mb-4">
          Together with their families
        </p>

        <motion.h2
          initial={{ y: 8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="font-display text-4xl md:text-6xl leading-tight mb-4"
        >
          Gunapal P.{" "}
          <span className="text-gold mx-2">&amp;</span> Deepthi R.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-sm md:text-base text-maroon/80 mb-6"
        >
          Request the honor of your presence at their wedding ceremony
        </motion.p>

        <div className="text-sm text-maroon/70 mb-10">
          Thursday, July 2, 2026
        </div>

        <motion.div
          whileHover={{ y: -6 }}
          className="mx-auto w-64 md:w-96"
        >
          <div className="relative rounded-2xl shadow-premium p-6 bg-gradient-to-b from-white/70 to-white/40">
            {/* couple illustration placeholder */}
            <img
              src="/assets/images/couple-placeholder.png"
              alt="Couple"
              className="mx-auto w-full h-auto select-none"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
