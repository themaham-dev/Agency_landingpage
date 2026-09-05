import Reveal from "./Reveal";
import { testimonial } from "../data/content";

export default function Testimonial() {
  return (
    <section className="bg-ink text-cream py-14 md:py-20 overflow-hidden">
      <div className="container-x grid md:grid-cols-[1.2fr,0.8fr] gap-12 items-center">
        <Reveal>
          <span className="eyebrow-dot text-[13px] font-medium text-cream/55">
            Customer review
          </span>
          <p className="mt-6 font-serif text-[24px] md:text-[30px] leading-[1.35] tracking-[-0.01em] max-w-[26ch]">
            “{testimonial.quote}”
          </p>
          <div className="mt-7 flex items-center gap-3 text-[13px]">
            <span className="font-medium">{testimonial.name}</span>
            <span className="text-cream/55">{testimonial.role}</span>
            <span className="h-4 w-px bg-cream/25" />
            <span className="font-semibold">{testimonial.company}</span>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-[300px] aspect-[4/4.6] rounded-md overflow-hidden shadow-2xl">
            <img
              src={testimonial.image}
              alt={`${testimonial.name} portrait`}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
