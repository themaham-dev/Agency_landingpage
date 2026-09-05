import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav, brand } from "../data/content";

const SECTION_IDS = ["home", "services", "work", "insights", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleClick = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-smooth ${
        scrolled ? "bg-cream/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(16,18,16,0.08)]" : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-[76px]">
        <button
          onClick={() => handleClick("#home")}
          className="font-sans font-bold text-[19px] md:text-[21px] tracking-[-0.01em] text-ink"
        >
          {brand.name}
        </button>

        <nav className="hidden md:flex items-center gap-9">
          {nav.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = active === id;
            return (
              <button
                key={item.href}
                onClick={() => handleClick(item.href)}
                className="relative flex items-center gap-1 text-[14px] font-medium py-2 text-ink/80 hover:text-ink transition-colors duration-300"
              >
                {item.label}
                {item.label === "What we do" && (
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="mt-[1px]">
                    <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                <motion.span
                  className="absolute left-0 -bottom-0.5 h-[1.5px] bg-accent"
                  initial={false}
                  animate={{ width: isActive ? "100%" : "0%" }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                />
              </button>
            );
          })}
        </nav>

        <button
          onClick={() => handleClick("#contact")}
          className="hidden md:inline-flex items-center rounded-md bg-ink text-cream text-[13px] font-medium px-5 py-3 hover:bg-accent transition-colors duration-300 ease-smooth"
        >
          Contact Us
        </button>

        <button
          className="md:hidden flex flex-col gap-[5px] w-7"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <motion.span
            animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }}
            className="h-[1.5px] w-full bg-ink block origin-center transition-transform"
          />
          <motion.span
            animate={{ opacity: open ? 0 : 1 }}
            className="h-[1.5px] w-full bg-ink block"
          />
          <motion.span
            animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }}
            className="h-[1.5px] w-full bg-ink block origin-center transition-transform"
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-cream border-t border-line"
          >
            <div className="container-x py-6 flex flex-col gap-5">
              {[...nav, { label: "Contact", href: "#contact" }].map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleClick(item.href)}
                  className="text-left text-[17px] font-medium"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
