import Reveal from "./Reveal";
import { services } from "../data/content";

function ServiceCard({ item, delay }) {
  return (
    <Reveal delay={delay} className="group border-t border-line py-6 first:border-t">
      <div className="flex items-stretch gap-6 md:gap-7">
        <div className="flex-1 min-w-0 flex flex-col justify-center">
          <span className="text-[12px] text-muted">{item.number}</span>
          <h3 className="mt-3 text-[18px] md:text-[20px] font-medium tracking-[-0.01em] leading-snug">
            {item.title}
          </h3>
          <p className="mt-2 text-[13.5px] leading-relaxed text-ink/70 max-w-[36ch]">
            {item.tagline}
          </p>
          <p className="mt-3 text-[11.5px] font-medium tracking-wide text-muted/80 uppercase">
            {item.tags}
          </p>
        </div>

        <div className="relative shrink-0 w-28 sm:w-36 md:w-44 rounded-md overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-110"
            loading="lazy"
          />
        </div>
      </div>
    </Reveal>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 scroll-mt-24">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <Reveal className="max-w-[38ch] md:max-w-none">
            <span className="eyebrow-dot text-[13px] font-medium text-muted">Services</span>
            <h2 className="mt-4 font-serif text-[26px] md:text-[38px] leading-[1.2] tracking-[-0.01em] text-ink">
              <span className="md:hidden">
                Helping businesses build, connect,
                <br />
                and grow with confidence.
              </span>
              <span className="hidden md:inline">
                Helping businesses build, connect, and
                <br />
                grow with confidence.
              </span>
            </h2>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-x-14 mt-10">
          {services.map((item, i) => (
            <ServiceCard key={item.number} item={item} delay={(i % 2) * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
