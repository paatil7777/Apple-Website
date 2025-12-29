import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './Component/Navbar'
import { Container } from './Component/Container'
import { HeroSlider } from './Component/HeroSlider'
import { Footer } from './Component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     <Container />
     <HeroSlider />
     <Footer />
    </>
  )
}

export default App
