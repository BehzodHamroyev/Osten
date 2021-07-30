import React from 'react';
import './ClientCommit.css';

const ClientCommit = (props) => {
  return (
    <div className="ClientCommit container text-center">
      <h4>{props.data.title}</h4>
      <div className="boder my-1"></div>
      <p>{props.data.subTitle}</p>
    </div>
  );
};

export default ClientCommit;
