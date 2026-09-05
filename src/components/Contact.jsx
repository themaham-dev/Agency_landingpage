import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import { brand, countries } from "../data/content";

const initialForm = {
  firstName: "",
  lastName: "",
  workEmail: "",
  jobTitle: "",
  companyName: "",
  country: "",
  message: "",
  updates: false,
  agree: false,
};

const inputClasses =
  "w-full bg-transparent border-b border-line focus:border-ink outline-none py-3 text-[15px] placeholder:text-muted transition-colors duration-300";

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const update = (key) => (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm((f) => ({ ...f, [key]: value }));
  };

  const requiredOk =
    form.firstName.trim() &&
    form.lastName.trim() &&
    form.workEmail.trim() &&
    form.jobTitle.trim() &&
    form.message.trim() &&
    form.agree;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!requiredOk) {
      setError("Please fill in all required fields and agree to the privacy policy.");
      return;
    }
    setError("");
    // Wire this up to your API / CRM endpoint of choice.
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 scroll-mt-24">
      <div className="container-x grid lg:grid-cols-[1.1fr,0.9fr] gap-16">
        <div>
          <Reveal>
            <span className="eyebrow-dot text-[13px] font-medium text-muted">Contact</span>
            <h2 className="mt-4 text-[28px] md:text-[42px] leading-[1.15] tracking-[-0.01em] font-medium">
              Let's talk
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted max-w-[46ch]">
              Send us a message, and we'll connect you with the right people to
              move forward.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-10 rounded-2xl border border-line p-8"
                >
                  <h3 className="text-[20px] font-medium">Message sent.</h3>
                  <p className="mt-2 text-[14px] text-muted">
                    Thanks {form.firstName || "there"} — a member of our team
                    will be in touch shortly.
                  </p>
                  <button
                    onClick={() => {
                      setForm(initialForm);
                      setSubmitted(false);
                    }}
                    className="mt-6 text-[13px] font-medium link-underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-10 flex flex-col gap-7 max-w-[560px]"
                  noValidate
                >
                  <div className="grid sm:grid-cols-2 gap-7">
                    <label className="flex flex-col gap-1">
                      <span className="text-[13px] text-muted">First name*</span>
                      <input
                        required
                        value={form.firstName}
                        onChange={update("firstName")}
                        className={inputClasses}
                        placeholder="Jane"
                      />
                    </label>
                    <label className="flex flex-col gap-1">
                      <span className="text-[13px] text-muted">Last name*</span>
                      <input
                        required
                        value={form.lastName}
                        onChange={update("lastName")}
                        className={inputClasses}
                        placeholder="Doe"
                      />
                    </label>
                  </div>

                  <label className="flex flex-col gap-1">
                    <span className="text-[13px] text-muted">Work email*</span>
                    <input
                      required
                      type="email"
                      value={form.workEmail}
                      onChange={update("workEmail")}
                      className={inputClasses}
                      placeholder="jane@company.com"
                    />
                  </label>

                  <div className="grid sm:grid-cols-2 gap-7">
                    <label className="flex flex-col gap-1">
                      <span className="text-[13px] text-muted">Job title*</span>
                      <input
                        required
                        value={form.jobTitle}
                        onChange={update("jobTitle")}
                        className={inputClasses}
                        placeholder="Marketing Manager"
                      />
                    </label>
                    <label className="flex flex-col gap-1">
                      <span className="text-[13px] text-muted">Company name</span>
                      <input
                        value={form.companyName}
                        onChange={update("companyName")}
                        className={inputClasses}
                        placeholder="Company Inc."
                      />
                    </label>
                  </div>

                  <label className="flex flex-col gap-1">
                    <span className="text-[13px] text-muted">Country</span>
                    <select
                      value={form.country}
                      onChange={update("country")}
                      className={`${inputClasses} appearance-none`}
                    >
                      <option value="">Select a country</option>
                      {countries.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="flex flex-col gap-1">
                    <span className="text-[13px] text-muted">Your message*</span>
                    <textarea
                      required
                      value={form.message}
                      onChange={update("message")}
                      rows={4}
                      className={`${inputClasses} resize-none`}
                      placeholder="Tell us about your project..."
                    />
                  </label>

                  <label className="flex items-start gap-3 text-[13px] text-muted">
                    <input
                      type="checkbox"
                      checked={form.updates}
                      onChange={update("updates")}
                      className="mt-0.5 h-4 w-4 accent-accent"
                    />
                    I would like to receive news and updates.
                  </label>

                  <label className="flex items-start gap-3 text-[13px] text-muted">
                    <input
                      type="checkbox"
                      required
                      checked={form.agree}
                      onChange={update("agree")}
                      className="mt-0.5 h-4 w-4 accent-accent"
                    />
                    I agree to the{" "}
                    <a
                      href="https://qodea.com/privacy-policy/"
                      target="_blank"
                      rel="noreferrer"
                      className="link-underline text-ink"
                    >
                      privacy policy
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://qodea.com/website-terms-conditions/"
                      target="_blank"
                      rel="noreferrer"
                      className="link-underline text-ink"
                    >
                      terms of use
                    </a>
                    .
                  </label>

                  {error && <p className="text-[13px] text-accent">{error}</p>}

                  <button
                    type="submit"
                    className="btn-arrow self-start rounded-full bg-ink text-cream text-[14px] font-medium px-7 py-3.5 hover:bg-accent transition-colors duration-300 ease-smooth"
                  >
                    Send message
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="lg:pt-2">
          <div className="relative rounded-[24px] overflow-hidden bg-ink text-cream p-8 md:p-10 h-full min-h-[420px] flex flex-col justify-between">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src="/media/contact-video.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />

            <div className="relative">
              <span className="eyebrow-dot text-[13px] font-medium text-cream/55">Visit us</span>
              <h3 className="mt-4 text-[22px] md:text-[26px] font-medium tracking-[-0.01em] max-w-[18ch]">
                We have twelve locations across our three operating regions
                around the world.
              </h3>
            </div>
            <div className="relative mt-10">
              <div className="text-[13px] text-cream/55">Call us</div>
              <a href={`tel:${brand.phone.replace(/\s/g, "")}`} className="mt-1 block text-[20px] font-medium link-underline">
                {brand.phone}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
