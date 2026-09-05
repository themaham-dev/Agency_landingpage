import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import { approach } from "../data/content";

const tabs = [
  { key: "usual", label: approach.usual.label },
  { key: "complete", label: approach.complete.label },
];

export default function Approach() {
  const [active, setActive] = useState("usual");
  const data = approach[active];

  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="container-x">
        <Reveal className="text-center mx-auto">
          <h2 className="font-serif text-[24px] md:text-[32px] leading-[1.25] tracking-[-0.01em] text-ink">
            Two ways to look at how
            <br />
            we help you grow.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex justify-center">
          <div className="inline-flex bg-ink/5 rounded-full p-1.5 relative">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={`relative z-10 px-5 md:px-6 py-2.5 text-[12px] md:text-[13px] font-medium tracking-wide rounded-full transition-colors duration-300 ${
                  active === t.key ? "text-cream" : "text-ink/60 hover:text-ink"
                }`}
              >
                {active === t.key && (
                  <motion.span
                    layoutId="approach-pill"
                    className="absolute inset-0 bg-ink rounded-full -z-10"
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}
                {t.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 md:mt-16 max-w-[860px] mx-auto min-h-[340px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {data.items.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="border-t border-line py-7 md:py-8 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-10 group"
                >
                  <span className="shrink-0 text-[13px] font-medium text-muted md:w-[190px]">
                    {`0${i + 1} — ${item.title}`}
                  </span>
                  <p className="text-[15px] leading-relaxed text-ink/75 group-hover:text-ink transition-colors duration-300 max-w-[52ch]">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
