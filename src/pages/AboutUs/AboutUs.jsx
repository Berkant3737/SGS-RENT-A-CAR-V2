import React from 'react'
import Navbar from '../../containers/Navbar/Navbar'
import TextBanner from "../../containers/TextBanner/Banner"
import AboutUsText from "./AboutUsText/Text"
import Footer from '../../containers/Footer/Footer'

function AboutUs() {
  return (
    <div>
        <Navbar/>
        <TextBanner title="Hakkımızda"/>
        <AboutUsText/>
        <Footer/>
    </div>
  )
}

export default AboutUs