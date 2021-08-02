import './NewsComponents.css';
import React from 'react';
import data from '../../datas/Osten1';

const NewsComponent = (props) => {
  return (
    <div
      className={`${props.className} d-flex justify-content-center align-items-center`}
    >
      <h1 className="mt-5">{data.title}</h1>
      <p>{data.subTitle}</p>
      <img src={data.img} alt="" />
      {data.comments.map((v,i) => {
        return (
          <div>
            <p className="fw-bold">{v.CommentTitle}</p>
            <p> {v.comment}</p>
          </div>
        );
      })}
    </div>
  );
};

export default NewsComponent;
