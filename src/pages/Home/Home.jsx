import React from 'react'
import Navbar from '../../containers/Navbar/Navbar';
import Banner from '../../containers/Banner/Banner';
import TextHero from "../Home/TextHero/TextHero"
import MainText from "./MainText/MainText"
import ServicesContent from '../Services/ServicesContent/ServicesContent';
import Footer from '../../containers/Footer/Footer';

function Home() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <TextHero/>
      <MainText/>
      <ServicesContent/>
      <Footer/>
    </div>
  )
}

export default Home