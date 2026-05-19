"use client";
import { motion } from "framer-motion";

interface Props { t: any; guest?: string; onOpen: ()=>void; }

export default function IntroLoader({ t, guest, onOpen }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-maroon text-ivory">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center px-6">
        <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.9 }} className="mb-6">
          {/* simple diya svg */}
          <div className="mx-auto w-28 h-28 rounded-full bg-gradient-to-br from-gold/30 to-transparent flex items-center justify-center shadow-premium">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-maroon">
              <path d="M12 2c2.5 3 5 3.8 5 7-1 1-3 2-5 2s-4-1-5-2c0-3.2 2.5-4 5-7z" fill="#6B1B1B"/>
            </svg>
          </div>
        </motion.div>

        <motion.div initial={{ y: 20, opacity:0 }} animate={{ y:0, opacity:1 }} transition={{ delay:0.3 }} className="mb-4">
          <h1 className="text-3xl md:text-5xl font-display">{'Gunapal P.'}</h1>
          <div className="text-2xl md:text-3xl my-2 text-gold">&amp;</div>
          <h1 className="text-3xl md:text-5xl font-display">{'Deepthi R.'}</h1>
        </motion.div>

        {guest && <p className="italic text-sm text-ivory/80 mb-4">Dear {guest}, {t?.personalInvite?.replace('{guestName}', guest)}</p>}

        <motion.button onClick={onOpen} whileTap={{ scale:0.98 }} className="mt-6 px-8 py-3 rounded-md bg-ivory text-maroon font-semibold shadow-md">
          Open Invitation
        </motion.button>
      </motion.div>
    </div>
  );
}
