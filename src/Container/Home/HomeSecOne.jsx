import React from 'react';
import '../../Pages/Home/Home.css';
import Zoom from 'react-reveal/Zoom';

const HomeSecOne = () => {
  return (
    <div className="HomeSecOne">
      <div className="HomeSecOneCommint  d-flex align-items-center ">
        <div className="row container  m-0">
          <div className="col-8">
            <Zoom right duration={2000}>
              <h1>
                «Osten» — уникальный производитель, лифтов и эскалаторов в
                Средней Азии
              </h1>
            </Zoom>
            <Zoom right duration={2000}>
              <p className="fs-4 fw-bold">Компания «Osten» была основана в 2019 году!</p>
            </Zoom>
            <Zoom right duration={2000}>
           
              <button className="btn text-white fw-bold fs-4 btn-warning">
                ПОДРОБНЕЕ
              </button>
            </Zoom>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSecOne;
