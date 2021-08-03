import React from 'react';
import { FaTelegram, FaInstagram, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <div className="Footer mt-5  text-white  ">
    <div className="p-5">
    <div className="row m-0 d-flex justify-content-center container py-5 ">
        <div className="col-md-4 text-start">
          <div className="d-flex justify-content-center  flex-column  text-start">
            <h4 className="text-start">О НАС</h4>
            <p className="text-start">
              «Osten» — уникальный производитель, лифтов и эскалаторов в Средней
              Азии Компания «Osten» была основана в 2019 году!
            </p>
            <h5 className="text-start">МЫ В СОЦ.СЕТЯХ:</h5>
            <div className="icons d-flex">
              <div className="icon">
                <FaFacebook />
              </div>
              <div className="icon">
                <FaInstagram />
              </div>
              <div className="icon">
                <FaTelegram />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 h-100 ">
          <div className="d-flex justify-content-between   flex-column">
            <h4>ПОСЛЕДНИЕ НОВОСТИ</h4>
            <Link to="news-1">
              Построен новый лифт
            </Link>
            <Link
              className="my-4"
              to="news-2"
            >
              РЕМОНТ И ОБСЛУЖИВАНИЕ ЭСКАЛАТОРОВ
            </Link>
            <Link to="news-3">
              ДИСПЕТЧЕРИЗАЦИЯ
            </Link>
          </div>
        </div>
        <div className="col-md-4">
          <div className="d-flex justify-content-between   flex-column">
            <h4>КОНТАКТЫ</h4>
            <p>
              <span className="fw-bold">Номер телефона:</span> +998 (93)
              511-11-17 +998 (91) 791-51-15
            </p>
            <p>
              <span className="fw-bold">Электронная почта:</span> info@uzlift.uz
            </p>
            <p>
              <span className="fw-bold">Адрес:</span> 100077, город Ташкент,
              улица Мухаммад Юсуф 1А.
            </p>
          </div>
        </div>
      </div>
   
    </div>
    </div>
  );
};

export default Footer;
