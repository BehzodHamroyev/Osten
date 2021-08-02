import React from 'react';
import HomeCard from '../../Components/HomeComponent/HomeCard/HomeCard';
import Title from '../../Components/HomeComponent/Title/Title';
import { FaToolbox, FaPencilRuler, FaCopy, FaTools } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
const data = [
  {
    icon: <FaPencilRuler />,
    title: 'ПРОЕКТИРОВАНИЕ',
    subTitle: 'ПОДРОБНО ПРО ПРОЕКТИРОВАНИЕ',
    md: '3',
  },
  {
    icon: <FaToolbox />,
    title: 'ПРОЕКТИРОВАНИЕ',
    subTitle: 'ПОДРОБНО ПРО ПРОЕКТИРОВАНИЕ',
    md: '3',
  },
  {
    icon: <FaCopy />,
    title: 'ПРОЕКТИРОВАНИЕ',
    subTitle: 'ПОДРОБНО ПРО ПРОЕКТИРОВАНИЕ',
    md: '3',
  },
  {
    icon: <FaTools />,
    title: 'ПРОЕКТИРОВАНИЕ',
    subTitle: 'ПОДРОБНО ПРО ПРОЕКТИРОВАНИЕ',
    md: '3',
  },
];
const HomeSecTwo = () => {
  return (
    <div className="HomeSecTwo bg-white container ">
      <Fade bottom>
        <Title color="dark" title="Наши услуги" />
      </Fade>
      <Fade bottom>
        <div className="row mt-5 m-0">
          {data.map((v, i) => (
            <HomeCard key={i} data={v} />
          ))}
        </div>
      </Fade>
    </div>
  );
};

export default HomeSecTwo;
