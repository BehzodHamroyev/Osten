import './Collapse.css';
import React from 'react';
import CollapsTitle from './CollapsTitle';

const Collapse3 = (props) => {
  return (
    <div className={`Collapse3 ${props.className}`}>
      <CollapsTitle
        title="Больничный лифт"
        subTitle="Больничный лифт часто используется в огромных лечебных заведениях, современных лечебных центрах, санаториях, центрах медикосанитарной помощи и т. д., где лечение больных и спасение умирающих является основной обязанностью. Серия больничных лифтов Osten придерживается гуманного подхода, применяет технологию группового наблюдения из экспертной системы, а также сокращает время ожидания пациентов до минимума."
      />
      <img src="https://osten.vercel.app/images/diff/img6.jpg" className="w-100 mt-3" alt="" />
      <img src="https://osten.vercel.app/images/diff/img7.jpg" className="w-100 mt-3" alt="" />
    </div>
  );
};

export default Collapse3;
