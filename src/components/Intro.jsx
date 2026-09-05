import { motion } from "framer-motion";

const tickerItems = [
  "Full-Service Creative & Digital Agency",
  "10+ years of creative expertise",
  "50+ brands and businesses served",
];

export default function Intro() {
  const loop = [...tickerItems, ...tickerItems, ...tickerItems];
  return (
    <section className="border-y border-line bg-cream overflow-hidden">
      <div className="py-4 relative">
        <motion.div
          className="flex gap-10 whitespace-nowrap"
          animate={{ x: ["0%", "-33.333%"] }}
          transition={{ duration: 24, ease: "linear", repeat: Infinity }}
        >
          {loop.map((text, i) => (
            <span key={i} className="flex items-center gap-10 text-[13px] font-medium text-muted">
              {text}
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
