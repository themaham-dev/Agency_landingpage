import Reveal from "./Reveal";
import { whyChooseUs } from "../data/content";

export default function WhyChooseUs() {
  return (
    <section className="py-14 md:py-20 bg-cream">
      <div className="container-x grid md:grid-cols-2 gap-12 md:gap-16 items-stretch">
        <Reveal className="relative overflow-hidden order-2 md:order-1 min-h-[320px] h-full rounded-md">
          <img
            src={whyChooseUs.image}
            alt="Business Engine team collaborating"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </Reveal>

        <div className="order-1 md:order-2">
          <Reveal>
            <span className="eyebrow-dot text-[13px] font-medium text-muted">Why choose us</span>
            <h2 className="mt-4 font-serif text-[24px] md:text-[32px] leading-[1.2] tracking-[-0.01em] text-ink">
              Creative thinking meets
              <br />
              digital expertise.
            </h2>
            <button
              onClick={() =>
                document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })
              }
              className="mt-6 inline-flex items-center rounded-md bg-ink text-cream text-[13px] font-medium px-5 py-3 hover:bg-accent transition-colors duration-300 ease-smooth"
            >
              About us
            </button>
          </Reveal>

          <div className="mt-8 flex flex-col">
            {whyChooseUs.items.map((item, i) => (
              <Reveal
                key={item.number}
                delay={i * 0.1}
                className="border-t border-line py-5 first:border-t"
              >
                <div className="flex gap-6">
                  <span className="text-[13px] text-accent pt-1">{item.number}</span>
                  <div>
                    <h3 className="text-[17px] md:text-[18px] font-medium tracking-[-0.01em]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-muted max-w-[42ch]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
