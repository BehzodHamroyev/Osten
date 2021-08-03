import './NewsComponents.css';
import React from 'react';
import AllHomePage from '../AllHomePage/AllHomePage';
import HomeSecSeven from '../../Container/Home/HomeSecSeven';

const NewsComponent = (props) => {
  return (
    <>
      <AllHomePage title={props.data.title} />
      <div
        className={`${props.className} container text-start d-flex flex-column justify-content-center align-items-center`}
      >
        <h1 className="mt-5">{props.data.title}</h1>
        <p>{props.data.subTitle}</p>
        <img src={props.data.img} alt="" />
        {props.data.comments.map((v, i) => {
          return (
            <div>
              <p className="fw-bold">{v.CommentTitle}</p>
              <p> {v.comment}</p>
            </div>
          );
        })}
      </div>
      <div className="py-4">
        <HomeSecSeven />
      </div>
    </>
  );
};

export default NewsComponent;
