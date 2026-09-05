import Reveal from "./Reveal";
import { stats } from "../data/content";
import { useCountUp } from "../hooks/useCountUp";

function Stat({ value, label, delay }) {
  const { ref, text } = useCountUp(value);
  return (
    <Reveal delay={delay}>
      <div ref={ref} className="text-[28px] md:text-[34px] font-medium tracking-[-0.01em] text-cream">
        {text}
      </div>
      <div className="mt-1 text-[13px] text-cream/55">{label}</div>
    </Reveal>
  );
}

export default function AboutStats() {
  return (
    <section className="bg-ink text-cream py-16 md:py-20">
      <div className="container-x">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <Reveal>
            <h2 className="font-serif text-[24px] md:text-[32px] leading-[1.3] tracking-[-0.01em] max-w-[20ch]">
              The gap between having a great business and being noticed is
              bigger than it looks.
            </h2>
          </Reveal>

          <div>
            <Reveal delay={0.1}>
              <p className="text-[14px] md:text-[15px] leading-[1.75] text-cream/60 max-w-[54ch]">
                In a crowded digital world, businesses need more than a logo,
                a website, or occasional social media posts. They need a
                strong visual identity, compelling content, powerful digital
                experiences, and marketing strategies that turn attention
                into meaningful results.
              </p>
            </Reveal>

            <div className="mt-6 pt-6 border-t border-cream/15 grid grid-cols-3 gap-6">
              {stats.map((s, i) => (
                <Stat key={s.label} value={s.value} label={s.label} delay={i * 0.08} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
