import { useEffect, useState } from "react";

export function useCountdown(targetISO: string) {
  const target = new Date(targetISO).getTime();
  const [timeLeft, setTimeLeft] = useState(() => Math.max(0, target - Date.now()));

  useEffect(() => {
    const t = setInterval(() => {
      const diff = Math.max(0, target - Date.now());
      setTimeLeft(diff);
    }, 1000);
    return () => clearInterval(t);
  }, [target]);

  const seconds = Math.floor((timeLeft / 1000) % 60);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

  return { days, hours, minutes, seconds, completed: timeLeft <= 0 };
}
