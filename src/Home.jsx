import { useState } from 'react'
import './App.css'
import HeaderTop from './Components/HeaderTop'
import NavBar from './Components/NavBar'
import HeroSection from './Pages/Home/HeroSection'
import FlashCardsProducts from './Pages/Home/FlashCardsProducts'
import BrowseCategorySection from './Pages/Home/BrowseCategorySection'
import BestSellingProducts from './Pages/Home/BestSellingProducts'
import MusicExperience from './Pages/Home/MusicExperience'
import OurProducts from './Pages/Home/OurProducts'
import Featured from './Pages/Home/Featured'
import Support from './Pages/Home/Support'


function Home() {

  return (
    <>
    <HeroSection/>
    <FlashCardsProducts/>
    <BrowseCategorySection/>
    <BestSellingProducts/>
    <MusicExperience/>
    <OurProducts/>
    <Featured/>
    <Support/>
    </>
  )
}

export default Home
