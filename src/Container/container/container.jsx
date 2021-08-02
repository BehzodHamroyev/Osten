import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer'
import './container.css';

const container = (props) => {
  return (
    <div className="Container">
      <Header />
      <div className="childern">{props.children}</div>
      <Footer/>
    </div>
  );
};

export default container;
