import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import AboutStats from "./components/AboutStats";
import Approach from "./components/Approach";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonial from "./components/Testimonial";
import Work from "./components/Work";
import LetsGetSpecific from "./components/LetsGetSpecific";
import Insights from "./components/Insights";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-accent origin-left z-[60]"
      style={{ scaleX }}
    />
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="bg-cream text-ink font-sans">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <AboutStats />
        <Approach />
        <Services />
        <WhyChooseUs />
        <Testimonial />
        <Work />
        <LetsGetSpecific />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
