import React from 'react';
import './IconCard.css';
const IconCard = (props) => {
  return (
    <div className={`col-12 col-md-${props.data.md} my-3`}>
      <div className="IconCard py-5   ">
        <div className={`icon   text-${(props.data.color)}`}> {props.data.icon}</div>
        <h4 classname={`fw-bold text-${(props.data.color)}`}>{props.data.title}</h4>
        <p className={`text-${(props.data.color)}`}>{props.data.subTitle}</p>
      </div>
    </div>
  );
};

export default IconCard;
