import React from 'react';
import Title from '../../Components/HomeComponent/Title/Title';
import IconCard from '../../Components/HomeComponent/IconCard/IconCard';
import '../../Pages/Home/Home.css';
import Fade from 'react-reveal/Fade'
import {
  FaAccusoft,
  FaThumbsUp,
  FaUser,
  FaCheck,
  FaListOl,
} from 'react-icons/fa';
const data = [
  {
    icon: <FaAccusoft />,
    title: 'Поиск и инновации',
    subTitle: 'Мы ведем постоянный поиск и внедряем инноваций',
    md: '4',
  },
  {
    icon: <FaThumbsUp />,
    title: 'Качество и цена',
    subTitle:
      'Предложение лифтов и эскалаторов высокого качества по конкурентным ценам',
    md: '4',
  },
  {
    icon: <FaUser />,
    title: 'Индивидуальный подход',
    subTitle: 'Индивидуальный и гибкий подход к каждому клиенту',
    md: '4',
  },
  {
    icon: <FaListOl />,
    title: 'Широкий ассортимент',
    subTitle:
      'Начиная с решений, оптимизированных для жилых и офисных зданий, заканчивая сложными проектами с эскалаторами и высокоскоростными лифтами',
    md: '4',
  },
  {
    icon: <FaCheck />,
    title: 'Гибкость',
    subTitle:
      'Гибкость технологических решений и собственных прогнозов, ориентированных на потребности каждого здания',
    md: '4',
  },
];
const HomeSecFive = () => {
  return (
    <div className="HomeSecFive">
      <div className="container ">
       <Fade bottom> <Title title="Преимущества" color="dark" /></Fade>
       <Fade bottom> <div className="row d-flex justify-content-center">
          {data.map((v, i) => (
            <IconCard data={v} />
          ))}
        </div></Fade>
      </div>
    </div>
  );
};

export default HomeSecFive;
