import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Services from './components/pages/Services'
import './assets/css/style.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/services' element={<Services/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/about' element={<About/>} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
