import React from 'react'
import Contact from './sections/Contact'
import Experience from './sections/Experience'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import NavBar from './sections/NavBar'
import Projects from './sections/Projects'
import Skills from './sections/Skills'

const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      <NavBar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

export default App