import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Services from './components/pages/Services'
import Projects from './components/pages/Projects'
import Contact from './components/pages/Contact'
import './assets/css/style.scss'
import Blogs from './components/pages/Blogs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/services' element={<Services/>} />
                <Route path='/projects' element={<Projects/>} />
                <Route path='/blogs' element={<Blogs/>} />
                <Route path='/contact' element={<Contact/>} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
