import './NewsCard.css';
import React from 'react';
import { Link } from 'react-router-dom';

const ContactCard = (props) => {
  return (
    <div key={`${props.key}`} className=" col-md-4 my-5">
      <Link to={`${props.data.to}`}>
        <div className="ContactCard h-100">
          <img src={`${props.data.img}`} className="w-100 " alt="" />
          <div className="ContactCardTitle">
            <p className="">{`${props.data.title}`}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ContactCard;
