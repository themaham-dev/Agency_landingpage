import Reveal from "./Reveal";
import { brand, footerColumns, socials, nav } from "../data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-ink text-cream pt-20 md:pt-28 pb-10">
      <div className="container-x">
        <Reveal className="text-center max-w-[46ch] mx-auto">
          <h2 className="text-[30px] md:text-[52px] leading-[1.1] tracking-[-0.01em] font-medium">
            Let's build what's next.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-cream/55">
            Have a project, idea, or business challenge? Tell us what you need
            and let's create something that moves your business forward.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8">
            <button
              onClick={() => scrollTo("#contact")}
              className="btn-arrow rounded-full bg-accent text-cream text-[14px] font-medium px-6 py-3.5 hover:bg-cream hover:text-ink transition-colors duration-300 ease-smooth"
            >
              Get in touch
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => scrollTo("#work")}
              className="btn-arrow text-[14px] font-medium link-underline"
            >
              View our work
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </Reveal>

        <div className="mt-20 grid sm:grid-cols-2 md:grid-cols-4 gap-10 border-t border-cream/10 pt-14">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-[13px] font-medium text-cream/55">{col.title}</h4>
              <ul className="mt-5 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => {
                        const match = nav.find((n) => n.label.toLowerCase() === link.toLowerCase());
                        if (match) scrollTo(match.href);
                        else if (link.toLowerCase() === "contact") scrollTo("#contact");
                      }}
                      className="text-[14px] text-cream/75 hover:text-cream transition-colors duration-300 text-left"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col md:flex-row md:items-center justify-between gap-6 border-t border-cream/10 pt-8">
          <div>
            <div className="text-[16px] font-semibold tracking-tight">{brand.name}</div>
            <div className="text-[13px] text-cream/50">{brand.tagline}</div>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {socials.map((s) => (
              <a key={s} href="#" className="text-[13px] text-cream/60 hover:text-cream link-underline">
                {s}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-3 text-[12px] text-cream/40">
          <span>© {year} {brand.name}. All rights reserved.</span>
          <div className="flex gap-5">
            <a href="https://qodea.com/privacy-policy/" target="_blank" rel="noreferrer" className="hover:text-cream/70">
              Privacy Policy
            </a>
            <a href="https://qodea.com/website-terms-conditions/" target="_blank" rel="noreferrer" className="hover:text-cream/70">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-cream/70">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
