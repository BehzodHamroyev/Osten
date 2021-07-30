import React from 'react';
import './Title.css';

const Title = (props) => {
  return (
    <div className="Title d-flex justify-content-center flex-column align-items-center">
      <h1 className={`text-${props.color}`}>{props.title}</h1>
      <span
        className={`boder bg-${props.color}`}></span>
    </div>
  );
};

export default Title;
