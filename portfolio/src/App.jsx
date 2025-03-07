import { useState, useEffect } from "react";
import Contact from './sections/Contact'
import Experience from './sections/Experience'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import Loader from "./sections/Loader";
import NavBar from './sections/NavBar'
import Skills from './sections/Skills'

const App = () => {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);


  return (
    <main className="max-w-7xl mx-auto">
      {loading && <Loader />}

      <div className={loading ? "hidden" : "block"}>
        <NavBar />
        <Hero />
        <Skills />
        <Experience />

        {/* <SectionWrapper animation={slideInRight}>
          <Contact />
        </SectionWrapper> */}
        <Contact />
        <Footer />
      </div>
    </main>
  )
}

export default App