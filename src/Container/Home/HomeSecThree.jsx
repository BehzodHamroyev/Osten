import React from 'react';
import Title from '../../Components/HomeComponent/Title/Title';
import HomeCard from '../../Components/HomeComponent/HomeCard/HomeCard';
import { FaSortAmountUp, FaRunning, FaGlobeAsia } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
const data = [
  {
    md: '4',
    icon: <FaSortAmountUp />,
    title: '300',
    subTitle: 'лифтов в год',
    color: 'white',
  },
  {
    md: '4',
    icon: <FaGlobeAsia />,
    title: '2',
    subTitle: 'года на рынке',
    color: 'white',
  },
  {
    md: '4',
    icon: <FaRunning />,
    title: '200',
    subTitle: 'эскалаторов в год',
    color: 'white',
  },
];
const HomeSecThree = () => {
  return (
    <div className="HomeSecThree">
      <div className="HomeSecOneCommint">
        <Fade bottom>
          <Title title="Результаты" color="white" />
        </Fade>
        <Fade bottom>
          <div className="row mt-5 m-0">
            {data.map((v, i) => (
              <HomeCard key={i} data={v} />
            ))}
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default HomeSecThree;
