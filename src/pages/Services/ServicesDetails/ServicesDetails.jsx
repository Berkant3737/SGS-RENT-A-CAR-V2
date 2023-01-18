import React from 'react'
import Navbar from '../../../containers/Navbar/Navbar'
import TextBanner from "../../../containers/TextBanner/Banner";
import Footer from '../../../containers/Footer/Footer';

function ServicesDetails(props) {
  return (
    <div>
      <Navbar/>
      <TextBanner title={props.BannerText}/>
        <div className="container Services-Details">
            <div className="row">
                <div className="col-12 text-center">
                    <h1>{props.title}</h1>
                    <p className='text-muted'>{props.text}</p>
                </div>
            </div>
        </div>
      <Footer/>
    </div>
  )
}

export default ServicesDetails