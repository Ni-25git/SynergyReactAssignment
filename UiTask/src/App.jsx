import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Navbar/Hero'
import CategoryCard from './Components/CategoryCard/CategoryCard'
import BoxContainer from './Components/BoxContainer/BoxContainer'
import ShowCaseSection from './Components/ShowCaseSection/ShowCaseSection'
import BrandSection from './Components/BrandSection/BrandSection'
import Footer from './Components/Footer/Footer'

function App() {


  return (
    <>
     <Navbar/>
     <Hero/>
     <CategoryCard/>
     <BoxContainer/>
     <ShowCaseSection/>
     <BrandSection/>
     <Footer/>
    </>
  )
}

export default App
