import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import { insights, insightsIntro } from "../data/content";

const PAGE_SIZE = 3;
const PAGE_COUNT = Math.ceil(insights.length / PAGE_SIZE);

export default function Insights() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (dir) => {
    setDirection(dir);
    setPage((p) => (p + dir + PAGE_COUNT) % PAGE_COUNT);
  };

  const current = insights.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <section id="insights" className="py-20 md:py-28 scroll-mt-24">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
          <Reveal className="max-w-[24ch]">
            <span className="eyebrow-dot text-[13px] font-medium text-muted">
              {insightsIntro.eyebrow}
            </span>
            <h2 className="mt-4 font-serif text-[36px] md:text-[52px] leading-[1.1] tracking-[-0.01em] text-ink whitespace-nowrap">
              {insightsIntro.heading}
            </h2>
            <p className="mt-3 text-[14px] leading-relaxed text-muted max-w-[46ch]">
              {insightsIntro.subheading}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <button className="inline-flex items-center rounded-md bg-ink text-cream text-[13px] font-medium px-5 py-3 hover:bg-accent transition-colors duration-300 ease-smooth whitespace-nowrap">
              All insights
            </button>
          </Reveal>
        </div>

        <div className="mt-12 relative">
          <button
            onClick={() => go(-1)}
            aria-label="Previous insights"
            className="hidden md:flex absolute -left-5 top-[110px] z-10 h-11 w-11 rounded-full bg-cream border border-line items-center justify-center shadow-md hover:border-accent hover:bg-accent hover:text-cream transition-colors duration-300 ease-smooth"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M11 3L3 11M3 11H9.5M3 11V4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" transform="rotate(180 7 7)" />
            </svg>
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Next insights"
            className="hidden md:flex absolute -right-5 top-[110px] z-10 h-11 w-11 rounded-full bg-cream border border-line items-center justify-center shadow-md hover:border-accent hover:bg-accent hover:text-cream transition-colors duration-300 ease-smooth"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 11L11 3M11 3H4.5M11 3v6.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="overflow-hidden">
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -60 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="grid md:grid-cols-3 gap-8"
              >
                {current.map((article) => (
                  <article key={article.title} className="group">
                    <div className="flex items-center justify-between text-[11.5px] font-medium uppercase tracking-wide text-muted">
                      <span className="eyebrow-dot">{article.category}</span>
                      <span className="normal-case font-normal">{article.readTime}</span>
                    </div>
                    <div className="relative mt-4 rounded-md overflow-hidden aspect-[4/3]">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="mt-4 font-serif text-[19px] leading-snug tracking-[-0.01em] text-ink group-hover:text-accent transition-colors duration-300">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-muted">
                      {article.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-[13px] font-medium link-underline">
                      Read more
                    </span>
                  </article>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-10 flex justify-center gap-2">
          {Array.from({ length: PAGE_COUNT }).map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > page ? 1 : -1);
                setPage(i);
              }}
              aria-label={`Go to insights page ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === page ? "w-6 bg-accent" : "w-1.5 bg-line"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
