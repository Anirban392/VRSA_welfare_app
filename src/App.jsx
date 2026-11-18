import { useState} from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import FixedCarousal from './components/FixedCarousal'
import InfiniteCarousal from './components/InfiniteCarousal'
import About from './components/About'
import Footer from './components/Footer'
import './App.css'

function App() {
 // const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
     <Navbar/>
     <Routes>
        <Route path="/" element={null} />
        <Route path="/about" element={null} />
        <Route path="/work" element={null} />
        <Route path="/campaigns" element={null} />
        <Route path="/events" element={null} />
        <Route path="/contact" element={null} />
        <Route path="/donate" element={null} />
      </Routes>
      <Banner/>
      <FixedCarousal/>
      <InfiniteCarousal/>
      <About/>
      <Footer/>
    </BrowserRouter>
     
    </>
  )
}

export default App
