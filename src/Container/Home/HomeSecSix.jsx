import React from 'react';
import ClientCommit from '../../Components/HomeComponent/ClientCommit/ClientCommit';
import Title from '../../Components/HomeComponent/Title/Title';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/scrollbar/scrollbar.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import '../../Pages/Home/Home.css';

// import Swiper core and required modules
import SwiperCore, {
  Keyboard,
  Scrollbar,
  Navigation,
  Pagination,
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Keyboard, Scrollbar, Navigation, Pagination]);

const data = [
  {
    title: `JOHN DOE • PROPERTY INVESTOR`,
    subTitle: `Lorem Ipsum - это текст-"рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.`,
  },
  {
    title: `JOHN DOE • PROPERTY INVESTOR`,
    subTitle: `Lorem Ipsum - это текст-"рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.`,
  },
  {
    title: `JOHN DOE • PROPERTY INVESTOR`,
    subTitle: `Lorem Ipsum - это текст-"рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.`,
  },
  {
    title: `JOHN DOE • PROPERTY INVESTOR`,
    subTitle: `Lorem Ipsum - это текст-"рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.`,
  },
];
const HomeSecsix = () => {
  return (
    <div className="HomeSecsix">
      <div className="HomeSecOneCommint">
        <Title title="Отзывы клиентов" color="white" />

        <Swiper
          scrollbar={true}
          className="mySwiper"
        >
          {data.map((v, i) => {
            return (
              <SwiperSlide>
                <ClientCommit data={v} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSecsix;
