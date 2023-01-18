import React from 'react'
import Navbar from '../../containers/Navbar/Navbar'
import TextBanner from "../../containers/TextBanner/Banner";
import ContactUsMaps from "./ContactUsMaps/Maps"
import Footer from '../../containers/Footer/Footer';
function ContactUs() {
  return (
    <div>
        <Navbar/>
        <TextBanner title="Bize Ulaşın"/>
        <ContactUsMaps/>
        <Footer/>
    </div>
  )
}

export default ContactUs