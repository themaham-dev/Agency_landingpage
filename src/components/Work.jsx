import Reveal from "./Reveal";
import { work, workIntro } from "../data/content";

function WorkCard({ item, delay }) {
  return (
    <Reveal
      delay={delay}
      className="group grid md:grid-cols-2 rounded-md border border-line overflow-hidden"
    >
      <div className="p-8 md:p-10 flex flex-col justify-center order-2 md:order-1">
        <span className="text-[11px] font-medium text-muted uppercase tracking-wide">
          {item.category}
        </span>
        <h3 className="mt-4 font-serif text-[22px] md:text-[26px] leading-[1.3] tracking-[-0.01em] max-w-[22ch] text-ink">
          {item.title}
        </h3>

        <div className="mt-7 flex items-end gap-4">
          <span className="font-serif text-[34px] md:text-[40px] leading-none text-ink">
            {item.stat}
          </span>
          <span className="text-[12.5px] leading-snug text-muted max-w-[16ch] pb-1">
            {item.statLabel}
          </span>
        </div>

        <button className="mt-7 inline-flex items-center gap-2 text-[13.5px] font-medium text-ink/80 group-hover:text-accent transition-colors duration-300 w-fit">
          Read case study
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-line group-hover:border-accent group-hover:bg-accent transition-colors duration-300 ease-smooth">
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path
                d="M3 7h8M7 3l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-ink/70 group-hover:text-cream transition-colors duration-300"
              />
            </svg>
          </span>
        </button>
      </div>

      <div className="relative order-1 md:order-2 min-h-[220px] md:min-h-[320px]">
        <img
          src={item.image}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
          loading="lazy"
        />
      </div>
    </Reveal>
  );
}

export default function Work() {
  return (
    <section id="work" className="py-20 md:py-28 scroll-mt-24">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <Reveal className="max-w-[46ch]">
            <span className="eyebrow-dot text-[13px] font-medium text-muted">{workIntro.eyebrow}</span>
            <h2 className="mt-4 font-serif text-[28px] md:text-[42px] leading-[1.15] tracking-[-0.01em] text-ink">
              {workIntro.heading}
            </h2>
            <p className="mt-4 max-w-[54ch] text-[14px] leading-relaxed text-muted">
              {workIntro.desc}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <button
              onClick={() =>
                document.querySelector("#insights")?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center rounded-md bg-ink text-cream text-[13px] font-medium px-5 py-3 hover:bg-accent transition-colors duration-300 ease-smooth whitespace-nowrap"
            >
              See all work
            </button>
          </Reveal>
        </div>

        <div className="mt-10 flex flex-col gap-6">
          {work.map((item, i) => (
            <WorkCard key={item.number} item={item} delay={i * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
}
