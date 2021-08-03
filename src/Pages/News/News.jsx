import React from 'react';
import AllHomePage from '../../Components/AllHomePage/AllHomePage';
import NewsCard from '../../Components/News/NewsCard';
import Title from '../../Components/HomeComponent/Title/Title';
import HomeSecSeven from '../../Container/Home/HomeSecSeven'
const data = [
  {
    to:"news-1",
    img: 'https://orzu-tehnopark.s3.amazonaws.com/OSTEN-ST-7.jpg',
    title: 'Построен новый лифт',
    
  },
  {
    to:"news-2",
    img: 'https://orzu-tehnopark.s3.amazonaws.com/OSTEN-ST-4.jpg',
    title: 'РЕМОНТ И ОБСЛУЖИВАНИЕ ЭСКАЛАТОРОВ   ',
  },
  {
    to:"news-3",
    img: 'https://orzu-tehnopark.s3.amazonaws.com/OSTEN-L1.jpg',
    title: '  ДИСПЕТЧЕРИЗАЦИЯ    ',
  },
  {
    to:"news-4",
    img: 'https://orzu-tehnopark.s3.amazonaws.com/liftpartner.png',
    title: 'ПАССАЖИРСКИЕ ЛИФТЫ',
  },
];
const News= () => {
  return (
    <div className="News">
      <AllHomePage title="News" />
      <Title title="News" color="dark" />
      <div className="container">
        <div className="row">
          {data.map((v, i) => {
            return <NewsCard key={i} data={v} />;
          })}
        </div>
      </div>
      <HomeSecSeven/>
    </div>
  );
};

export default News;
