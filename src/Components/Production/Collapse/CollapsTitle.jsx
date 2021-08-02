import './Collapse.css';
import React from 'react';

const CollapsTitle = (props) => {
  return (
    <div className="text-start">
      <p className="fw-bold fs-4">{props.title}</p>
      <p>{props.subTitle}</p>
    </div>
  );
};

export default CollapsTitle;
