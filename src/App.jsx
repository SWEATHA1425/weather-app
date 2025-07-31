import { useState } from 'react'
import './App.css'
import AxiosGET from './components/AxiosGET'
import AxiosPOST from './components/AxiosPOST'
import WeatherApp from './components/WeatherApp'
import Feedback from './components/Feedback'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function Navbar(){
  return(
    <nav className='fixed top-0 left-0 w-full bg-blue-600 text-white p-4 flex justify-between items-center z-10'>
      <h1 className='text-xl font-bold'>Weather and Axios</h1>
      <ul className='flex space-x-6'>
        <li><Link to='/get'>Get</Link></li>
        <li><Link to='/post'>Post</Link></li>
        <li><Link to='/weather'>Weather</Link></li>
        <li><Link to='/feedback'>Feedback</Link></li>
      </ul>
    </nav>
  )
}

function App() {
  return(
    <Router>
      <Navbar />
      <div className="pt-16 px-6">
      <Routes>
        <Route path='/' element={<AxiosGET />} />
        <Route path='/get' element={<AxiosGET />} />
        <Route path='/post' element={<AxiosPOST />} />
        <Route path='/weather' element={<WeatherApp />} />
        <Route path='/feedback' element={<Feedback />} />
      </Routes>
      </div>
    </Router>

  )
}

export default App
