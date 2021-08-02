import React from 'react';
import HomeSecFive from '../../Container/Home/HomeSecFive';
import HomeSecFour from '../../Container/Home/HomeSecFour';
import HomeSecOne from '../../Container/Home/HomeSecOne';
import HomeSecSeven from '../../Container/Home/HomeSecSeven';
import HomeSecsix from '../../Container/Home/HomeSecSix';
import HomeSecThree from '../../Container/Home/HomeSecThree';
import HomeSecTwo from '../../Container/Home/HomeSecTwo';

const Home = () => {
  return (
    <div className=" home py-5">
      <HomeSecOne />
      <HomeSecTwo />
      <HomeSecThree />
      <HomeSecFour />
      <HomeSecFive />
      <HomeSecsix/>
      <HomeSecSeven/>
    </div>
  );
};

export default Home;
