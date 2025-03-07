import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Contact from './sections/Contact'
import Experience from './sections/Experience'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import Loader from "./sections/Loader";
import NavBar from './sections/NavBar'
import Skills from './sections/Skills'

const SectionWrapper = ({ children, animation }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={animation}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);

  const fadeIn = {
    hidden: { opacity: 0, y: 500 },
    visible: { opacity: 1, y: 0 },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };


  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);


  return (
    <main className="max-w-7xl mx-auto">
      {loading && <Loader />}

      <div className={loading ? "hidden" : "block"}>
        <NavBar />
        <SectionWrapper animation={fadeIn}>
          <Hero />
        </SectionWrapper>

        <SectionWrapper animation={slideInLeft}>
          <Skills />
        </SectionWrapper>

        <Experience />

        <SectionWrapper animation={slideInRight}>
          <Contact />
        </SectionWrapper>

        <Footer />
      </div>
    </main>
  )
}

export default App