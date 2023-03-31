import React from 'react'
import Header from './Component/Header'
import "./Sass/style.scss"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import Nav from './Component/Nav'
import Footer from './Component/Footer'
import Slider from './Component/Slider'
import GoToTop from './Component/GoToTop'

function App() {
  return (
    <div>
      <Header/>
      <Nav/>
      <Slider/>
      <GoToTop/>
      <Footer/>
    </div>
  )
}


export default App
