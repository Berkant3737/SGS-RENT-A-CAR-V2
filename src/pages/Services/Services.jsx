import React from 'react'
import Navbar from '../../containers/Navbar/Navbar'
import TextBanner from "../../containers/TextBanner/Banner"
import ServicesContent from './ServicesContent/ServicesContent'
import Footer from '../../containers/Footer/Footer'


function Services() {
  return (
    <div>
        <Navbar/>
        <TextBanner title="Hizmetlerimiz"/>
        <ServicesContent/>
        <Footer/>
    </div>
  )
}

export default Services