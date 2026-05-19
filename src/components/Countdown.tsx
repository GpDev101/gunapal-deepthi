"use client";

import { useEffect, useState } from "react";

interface CountdownProps {
  target: string;
}

export default function Countdown({ target }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date(target).getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <section className="py-16 bg-gradient-to-b from-transparent to-maroon/5">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-maroon mb-12">
          Countdown to Love
        </h2>
        <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-lg p-6 text-center shadow-lg"
            >
              <div className="text-3xl font-bold text-maroon mb-2">
                {String(item.value).padStart(2, "0")}
              </div>
              <div className="text-sm text-maroon/70">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
