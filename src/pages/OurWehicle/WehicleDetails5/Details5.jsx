import React, { Fragment, useRef, useState } from "react";
import Navbar from '../../../containers/Navbar/Navbar';
import TextBanner from "../../../containers/TextBanner/Banner"
import Footer from '../../../containers/Footer/Footer';
import DetailsJson from "../../../Json/WehicleDetails/Car5.json"


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Lazy, Pagination, Navigation } from "swiper";
function WehicleDetails() {
  return (
    <div>
        <Navbar/>
        <TextBanner title="MERCEDES S CLASS"/>
        <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        lazy={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Lazy, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        {DetailsJson.map((details) => {
          return(
            <>
              {details.imgs.map((test) => {
              console.log(test.img1);
              return(
                <>
                  <img className="swiper-lazy" src={test.img1} alt="img1"/>
                  <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                </>
              )
            })}
            </>
          )
        })}
        </SwiperSlide>
      </Swiper>
    <Footer/>
    </div>
  )
}
export default WehicleDetails