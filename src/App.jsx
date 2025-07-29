import { useState } from 'react'
import './App.css'
import AxiosGET from './components/AxiosGET'
import AxiosPOST from './components/AxiosPOST'
import WeatherApp from './components/WeatherApp'

function App() {
  return(
    <>
      <AxiosGET />
      <AxiosPOST />
      <WeatherApp />
    </>

  )
}

export default App
