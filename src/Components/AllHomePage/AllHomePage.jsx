import './AllHomePage.css';
import React from 'react';

const AllHomePage = (props) => {
  return (
    <div className="AllHomePage">
      <div className="before">
        <h1>{props.title}</h1>
        <p>{props.subTitle}</p>
      </div>
    </div>
  );
};

export default AllHomePage;
