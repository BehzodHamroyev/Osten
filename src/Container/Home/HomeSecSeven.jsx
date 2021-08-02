import React from 'react';
import Title from '../../Components/HomeComponent/Title/Title';
import PartnerImg1 from '../../img/partner1.png';
import PartnerImg2 from '../../img/partner7.png';
import PartnerImg3 from '../../img/partner3.png';
import PartnerImg4 from '../../img/partner4.png';
import PartnerImg5 from '../../img/partner5.png';
import PartnerImg6 from '../../img/partner6.png';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './style.css';
// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';

import '../../Pages/Home/Home.css';

// import Swiper core and required modules
import SwiperCore, { Pagination } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);
const Imgs = [
  { img: PartnerImg1 },
  { img: PartnerImg2 },
  { img: PartnerImg3 },
  { img: PartnerImg4 },
  { img: PartnerImg5 },
  { img: PartnerImg6 },
];

const HomeSecSeven = () => {
  return (
    <div className="HomeSecSeven my-5 py-5">
      <Title title="Наши партнеры" color="dark" />
      <Swiper slidesPerGroup={4} slidesPerView={4} pagination={true} className="mySwiper">
        {Imgs.map((v, i) => (
          <SwiperSlide>
           {/* <img src={v.img} className="w-50 h-25" alt="" /> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSecSeven;
