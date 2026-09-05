import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

// Splits a stat string like "100+" or "360°" into a numeric part and a suffix.
export function useCountUp(value, duration = 1.6) {
  const match = String(value).match(/^([\d.]+)(.*)$/);
  const target = match ? parseFloat(match[1]) : null;
  const suffix = match ? match[2] : "";
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(target === null ? value : "0");

  useEffect(() => {
    if (!inView || target === null) return;
    const controls = animate(0, target, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        const isInt = Number.isInteger(target);
        setDisplay(isInt ? Math.round(v).toString() : v.toFixed(1));
      },
    });
    return () => controls.stop();
  }, [inView, target, duration]);

  return { ref, text: target === null ? value : `${display}${suffix}` };
}
