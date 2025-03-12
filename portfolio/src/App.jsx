import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Loader from "./sections/Loader";
import NavBar from "./sections/NavBar";
import Skills from "./sections/Skills";

const SectionWrapper = ({ children, animation }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={animation}
      transition={{ duration: 0.8, ease: "easeOut", bounce: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, staggerChildren: 0.2 } },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 80 } },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 75 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 80 } },
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.6 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } },
  };

  const rotateEffect = {
    hidden: { opacity: 0, rotate: -15 },
    visible: { opacity: 1, rotate: 0, transition: { duration: 1 } },
  };

  return (
    <main className="max-w-7xl mx-auto">
      {loading && <Loader />}

      <div className={loading ? "hidden" : "block"}>
        <NavBar />

        <SectionWrapper animation={fadeIn}>
          <Hero />
        </SectionWrapper>

        <SectionWrapper animation={rotateEffect}>
          <Skills />
        </SectionWrapper>

        <SectionWrapper animation={slideInRight}>
          <Experience />
        </SectionWrapper>

        <SectionWrapper animation={scaleUp}>
          <Contact />
        </SectionWrapper>

        <SectionWrapper animation={rotateEffect}>
          <Footer />
        </SectionWrapper>
      </div>
    </main>
  );
};

export default App;
