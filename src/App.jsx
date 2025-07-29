import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyess from './components/Eyess'
import Projects from './components/Projects'
import Cards from './components/Cards'
import Ready from './components/Ready'
// import Footer from './components/Footer'
import Locomotivescroll from 'locomotive-scroll'
import './App.css'

function App() {
  const locomotivescroll = new Locomotivescroll();
  return (
    <div className='w-full min-h-screen text-white bg-black'>
      <Navbar/>
      <LandingPage />
      <Marquee />
      <About />
      <Eyess />
      <Projects />
      <Cards />
      <Ready />
      {/* <Footer /> */}
    </div>
  )
}

export default App
