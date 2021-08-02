import './ContactCard.css';
import React from 'react';

const ContactCard = (props) => {
  return (
    <div key={`${props.key}`} className=" col-md-4 my-5">
      <div className="ContactCard h-100">
        <img
          src={`${props.data.img}`}
          className="w-100 "
          alt=""
        />
        <div className="ContactCardTitle">
          <p className="">{`${props.data.title}`}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
