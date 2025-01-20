import React from 'react'
import Contact from './sections/Contact'
import Experience from './sections/Experience'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import NavBar from './sections/NavBar'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Testimonials from './sections/Testimonials'

const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      <NavBar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      {/* <Testimonials />
      <Contact /> */}
      <Footer />
    </main>
  )
}

export default App