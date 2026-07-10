import { useState } from 'react'
import './App.css'
import HeaderTop from './Components/HeaderTop'
import NavBar from './Components/NavBar'
import HeroSection from './Pages/Home/HeroSection'
import FlashCardsProducts from './Pages/Home/FlashCardsProducts'
import BrowseCategorySection from './Pages/Home/BrowseCategorySection'
import BestSellingProducts from './Pages/Home/BestSellingProducts'


function App() {

  return (
    <>
    <HeaderTop/>
    <NavBar/>
    <HeroSection/>
    <FlashCardsProducts/>
    <BrowseCategorySection/>
    <BestSellingProducts/>
    </>
  )
}

export default App
