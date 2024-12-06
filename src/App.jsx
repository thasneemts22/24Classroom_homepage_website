import React from 'react'
import Navbar from './componentes/Navbar/Navbar'
import Home from './componentes/HOME/Home'
import HomeTwo from './componentes/HomeTwo/HomeTwo'
import Cbsc from './componentes/CBSC/Cbsc'
import KeralaSate from './componentes/KeralaSate/KeralaSate'
import Info from './componentes/Information/Inform'
import Courses from './componentes/Courses/Courses'
import Features from './componentes/Features/Features'
import Track from './componentes/Tracks/Track'
import Student from './componentes/Student/Student'
import AppDownload from './componentes/AppDownload/AppDownload'
import Footer from './componentes/Footer/Footer'

import './App.css';
import Standards from './componentes/Standards/Standards'







function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <HomeTwo/>
      <Cbsc/>
      <Standards/>
      <KeralaSate/>
      <Standards/>
      <Info/>
      <Courses/>
      <Features/>
      <Track/>
      <Student/>
      <AppDownload/>
      <Footer/>
     
    </div>
  )
}

export default App
