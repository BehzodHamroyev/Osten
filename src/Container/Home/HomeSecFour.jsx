import React from 'react';
import SwiperCard from '../../Components/HomeComponent/SwiperCard/SwiperCard';
import Title from '../../Components/HomeComponent/Title/Title';
import { Link } from 'react-router-dom';
import ImgSwiper1 from '../../img/lift1.jpg';
import ImgSwiper2 from '../../img/lift2.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

import '../../Pages/Home/Home.css';

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);



const data = [
  { img: ImgSwiper1, name: 'Osten L1' },
  { img: ImgSwiper1, name: 'Osten L2' },
  { img: ImgSwiper2, name: 'Osten L3' },
  { img: ImgSwiper1, name: 'Osten L1' },
  { img: ImgSwiper2, name: 'Osten L2' },
  { img: ImgSwiper1, name: 'Osten L3' },
  { img: ImgSwiper1, name: 'Osten L1' },
  { img: ImgSwiper2, name: 'Osten L2' },
  { img: ImgSwiper1, name: 'Osten L3' },
  { img: ImgSwiper2, name: 'Osten L1' },
];

const HomeSecFour = () => {
  return (
    <div className="container HomeSecFour py-5">
      <Title title="Кабины лифтов" color="dark" />
      <div className="mt-5">
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {data.map((v, i) => {
            return (
              <SwiperSlide>
                <SwiperCard data={v} key={i} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <Link to="/products" className="btn btn-warning text-white fw-bold mt-5 fs-5">
        ВСЯ ПРОДУКЦИЯ
      </Link>
    </div>
  );
};

export default HomeSecFour;
