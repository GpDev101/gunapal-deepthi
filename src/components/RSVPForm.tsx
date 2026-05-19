"use client";
import { useState } from "react";

interface Props { t: any; }

export default function RSVPForm({ t }: Props) {
  const [name, setName] = useState('');
  const [attending, setAttending] = useState<'yes'|'no'|''>('');
  const [guests, setGuests] = useState(1);
  const [msg, setMsg] = useState('');
  const [sent, setSent] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !attending) return alert('Please fill name and attending');
    setSent(true);
    setTimeout(()=>setSent(false), 2000);
  }

  return (
    <section className="py-12 px-6">
      <div className="max-w-2xl mx-auto glass-card p-8 rounded-xl">
        <h4 className="text-lg font-display mb-4">RSVP</h4>
        <form onSubmit={submit} className="space-y-4">
          <input value={name} onChange={e=>setName(e.target.value)} placeholder="Name" className="w-full p-3 rounded-md border" />
          <div className="flex gap-2">
            <button type="button" onClick={()=>setAttending('yes')} className={`flex-1 p-3 rounded-md ${attending==='yes'?'bg-maroon text-ivory':'border'}`}>Yes</button>
            <button type="button" onClick={()=>setAttending('no')} className={`flex-1 p-3 rounded-md ${attending==='no'?'bg-maroon text-ivory':'border'}`}>No</button>
          </div>
          <input type="number" min={0} value={guests} onChange={e=>setGuests(Number(e.target.value))} className="w-32 p-3 rounded-md border" />
          <textarea value={msg} onChange={e=>setMsg(e.target.value)} placeholder="Message (optional)" className="w-full p-3 rounded-md border" />
          <div className="flex justify-end">
            <button type="submit" className="px-6 py-2 bg-maroon text-ivory rounded-md">{sent ? 'Saved' : 'Submit'}</button>
          </div>
        </form>
      </div>
    </section>
  );
}
