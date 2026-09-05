import { useState } from "react";
import Reveal from "./Reveal";
import { specificNeeds } from "../data/content";

export default function LetsGetSpecific() {
  const [selected, setSelected] = useState(null);

  const goToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const ctaLabel = selected
    ? `Talk to us about ${selected.charAt(0).toLowerCase()}${selected.slice(1)}`
    : "Talk to us about your project";

  return (
    <section className="py-16 md:py-20 bg-[#0B2A43] text-cream relative overflow-hidden">
      <div
        className="absolute -left-32 -bottom-32 h-[420px] w-[420px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, #2ECC71 0%, transparent 70%)" }}
      />
      <div className="container-x relative">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <Reveal>
            <span className="text-[12px] font-medium tracking-wide text-cream/60 uppercase">
              Let's get specific
            </span>
            <h2 className="mt-4 font-serif text-[26px] md:text-[36px] leading-[1.2] tracking-[-0.01em] max-w-[16ch]">
              What does your business need next?
            </h2>
            <p className="mt-4 text-[14px] leading-relaxed text-cream/55 max-w-[38ch]">
              Tell us where it hurts. We'll route you to the right team and a
              relevant piece of work — not a generic sales call.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-wrap gap-3 md:justify-end content-start">
            {specificNeeds.map((need) => (
              <button
                key={need}
                onClick={() => setSelected(need)}
                className={`px-5 py-2.5 rounded-full border text-[13px] font-medium transition-all duration-300 ease-smooth ${
                  selected === need
                    ? "bg-cream border-cream text-ink"
                    : "border-cream/25 text-cream/80 hover:border-cream/60 hover:text-cream"
                }`}
              >
                {need}
              </button>
            ))}
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mt-10 pt-8 border-t border-cream/15">
          <button
            onClick={goToContact}
            className="inline-flex items-center rounded-md bg-ink text-cream text-[14px] font-medium px-6 py-3.5 hover:bg-accent transition-colors duration-300 ease-smooth"
          >
            {ctaLabel}
          </button>
        </Reveal>
      </div>
    </section>
  );
}
