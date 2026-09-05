import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const line = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-[120px] md:pt-[135px] pb-20 md:pb-28 overflow-hidden"
    >
      <div className="container-x">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 items-start">
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.h1
              variants={line}
              className="font-serif text-[40px] leading-[1.08] md:text-[56px] md:leading-[1.08] tracking-[-0.01em] max-w-[14ch]"
            >
              We build the technology that powers{" "}
              <span className="text-accent">business growth</span>
            </motion.h1>

            <motion.p
              variants={line}
              className="mt-7 max-w-[46ch] text-[16px] leading-[1.6] text-muted"
            >
              From cinematic production and creative content to websites, digital
              marketing and technology solutions — we help ambitious businesses
              look better, reach more people and grow faster.
            </motion.p>

            <motion.div variants={line} className="mt-9 flex items-center gap-4 flex-wrap">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-arrow rounded-full bg-accent text-cream text-[14px] font-medium px-6 py-3.5 hover:bg-ink transition-colors duration-300 ease-smooth"
              >
                See the results
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-arrow text-[14px] font-medium px-2 py-3.5 link-underline"
              >
                How we help
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-md overflow-hidden aspect-[16/10] bg-ink"
          >
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src="/media/hero-video.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="absolute inset-0 bg-ink/25" />

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-4 right-4 inline-flex items-center gap-2 rounded-full bg-ink/60 backdrop-blur-sm text-cream text-[11px] font-medium tracking-wide px-4 py-2 hover:bg-ink/80 transition-colors duration-300"
            >
              <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                <path d="M1.5 1v7l6-3.5-6-3.5z" fill="currentColor" />
              </svg>
              PLAY WITH SOUND
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
