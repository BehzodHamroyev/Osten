import React from 'react';
import AllHomePage from '../AllHomePage/AllHomePage';
import './Osten.css';
import Title from '../HomeComponent/Title/Title';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Data from '../../datas/Datas';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';

import '../../Pages/Home/Home.css';

// import Swiper core and required modules
import SwiperCore, { Navigation } from 'swiper/core';
import HomeSecSeven from '../../Container/Home/HomeSecSeven';

// install Swiper modules
SwiperCore.use([Navigation]);
const Osten = (props) => {
  return (
    <div className={`${props.className} Osten `}>
      <AllHomePage title={props.data.title} />
      <Title title={props.data.title} color={props.data.color} />
      <p>{props.data.topCommit}</p>
      <div className="row container">
        <div className="col-md-6">
          <Swiper navigation={true} className="mySwiper h-100 w-100">
            {props.data.imgs?.map((v, i) => {
              return (
                <SwiperSlide key={i} className="overflow-auto">
                  <div className="">
                    <img src={v.img}  className="w-100 " alt="" />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="col-md-6 text-start">
          <p>{props.data.rightCommit1}</p>
          <h5>Detail 2</h5>
          <p>{props.data.rightCommit2}</p>
          <h5>Detail 3</h5>
          <p>{props.data.rightCommit3}</p>
        </div>
      </div>
      <div className="text-start px-5">
        <h5>Detail 1</h5>
        <p>{props.data.rightCommit2}</p>
      </div>

<div className="py-4">      <HomeSecSeven /></div>
    </div>
  );
};

export default Osten;
