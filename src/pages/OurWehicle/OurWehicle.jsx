import React from 'react'
import Navbar from '../../containers/Navbar/Navbar';
import TextBanner from "../../containers/TextBanner/Banner";
import WehicleContent from "./WehicleContent/Content"
import Footer from '../../containers/Footer/Footer';


function OurWehicle() {
  return (
    <div>
      <Navbar/>
      <TextBanner title="Araç Filomuz"/>
      <WehicleContent/>
      <Footer/>
    </div>
  )
}

export default OurWehicle
