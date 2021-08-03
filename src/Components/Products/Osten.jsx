import React from 'react';
import AllHomePage from '../AllHomePage/AllHomePage';
import './Osten.css';
import Title from '../HomeComponent/Title/Title';
import { Swiper, SwiperSlide } from 'swiper/react';
import Data from '../../datas/Datas';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';

import '../../Pages/Home/Home.css';

// import Swiper core and required modules
import SwiperCore, { Navigation } from 'swiper/core';
import HomeSecSeven from '../../Container/Home/HomeSecSeven';
import { useParams } from 'react-router';

// install Swiper modules
SwiperCore.use([Navigation]);
const Osten = (props) => {
  const { category } = useParams();
  console.log(category);
  const data = Data[category];
  console.log(data);
  return (
    <div className={`${props.className} Osten `}>
      <AllHomePage title={data.title} />
      <Title title={data.title} color={data.color} />
      <p>{data.topCommit}</p>
      <div className="row container">
        <div className="col-md-6">
          <Swiper navigation={true} className="mySwiper h-100 w-100">
            {data.imgs?.map((v, i) => {
              return (
                <SwiperSlide key={i} className="overflow-auto">
                  <div>
                    <img src={v.img}  className="w-100" alt="" />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="col-md-6">
          <p>{data.rightCommit1}</p>
          <h5>Detail 2</h5>
          <p>{data.rightCommit2}</p>
          <h5>Detail 3</h5>
          <p>{data.rightCommit3}</p>
        </div>
      </div>
      <div className="text-start container">
        <h5>Detail 1</h5> <p>{data.bottomCommit}</p>
      </div>

<div className="py-4">      <HomeSecSeven /></div>
    </div>
  );
};

export default Osten;
