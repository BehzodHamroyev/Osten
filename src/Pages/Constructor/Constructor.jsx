import React from 'react';
import { Button } from 'reactstrap';
import AllHomePage from '../../Components/AllHomePage/AllHomePage';
import ConstructorCard from '../../Components/ConstructorComponent/ConstructorCard';
import Title from '../../Components/HomeComponent/Title/Title';
import './Constructor.css';
const data = [
  {
    title: 'Шаг 1 ',
    subTitle: ' - Детали проекта',
    inputs: [
      { label: 'Высота (мм)' },
      { label: 'Глубина (мм) ' },
      { label: 'Ширина (мм) ' },
    ],
  },
  {
    title: 'Шаг 2 ',
    subTitle: '- Выберем цвет боковых стенок',
    imgs: [
      {
        img: 'https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/17/texture01_NllNXd8.jpg',
      },
      {
        img: 'https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/17/texture03_vy90iSd.jpg',
      },
      {
        img: 'https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/17/texture07_MqePO8i.jpg',
      },
    ],
  },
  {
    title: 'Шаг 3 ',
    subTitle: '- Выберем цвет задней стенки',
    imgs: [
      {
        img: 'https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/17/texture01_NllNXd8.jpg',
      },
      {
        img: 'https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/17/texture03_vy90iSd.jpg',
      },
      {
        img: 'https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/17/texture07_MqePO8i.jpg',
      },
    ],
  },
  {
    title: 'Шаг 4 ',
    subTitle: ' - Выберем стиль зеркала',
    imgs: [
      {
        img: 'https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/17/icon-mirror-half.png',
      },
      {
        img: 'https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/17/icon-mirror-half-small.png',
      },
      {
        img: 'https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/17/icon-mirror-full_0oE6vfK.png',
      },
      {
        img: 'https://osten.vercel.app/images/lift/mirrors/icon-mirror-none.png',
      },
    ],
  },
  {
    title: 'Шаг 5 ',
    subTitle: ' - Возьмем поручни',
    imgs: [
      {
        img: 'https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/17/handrails1.jpg',
      },
      {
        img: 'https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/17/handrails2.jpg',
      },

      {
        img: 'https://osten.vercel.app/images/lift/mirrors/icon-mirror-none.png',
      },
    ],
  },
  {
    title: 'Шаг 6 ',
    subTitle: ' - Выберем пол',
    imgs: [
      {
        img: 'https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/17/floors01.jpg',
      },
    ],
  },
  {
    title: 'Шаг 7 ',
    subTitle: ' - Подберем потолочное освещение',
    imgs: [
      {
        img: 'https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/17/ceiling5.jpg',
      },
      {
        img: 'https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/17/ceiling1.jpg',
      },
      {
        img: 'https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/17/ceiling3.jpg',
      },
    ],
  },
  {
    title: 'Шаг 8 ',
    subTitle: ' - Детали проекта',
    inputs: [
      { label: 'Название проекта' },
      { label: 'Название компании' },
      { label: 'Контактное лицо' },
      { label: 'Адрес' },
      { label: 'Почтовый индекс' },
      { label: 'Номер телефона' },
      { label: 'Электронной почты' },
    ],
  },
];
const Constructor = () => {
  return (
    <div className="Constructor ">
      <AllHomePage title="Constructor" />
      <Title title="Создайте интерьер своего лифта" color="dark" />
      <div className="row m-0 position-relative container ">
        <div className="col-md-6">
          <div className="">
            <div className="liftTop">
              <img src="" alt="" />
            </div>
            <div className="liftLeft">
              <img src="" alt="" />
            </div>
            <div className="handle">
              <img src="" alt="" />
            </div>
            <img className="liftBg"
              src="https://osten.vercel.app/images/lift/container/frame.png"
              className="w-75"
              alt=""
            />
            <div className="liftRight">
              <img src="" alt="" />
            </div>
            <div className="liftBottom">
              <img src="" alt="" />
            </div>
          </div>
        </div>
        <div className="col-md-6 position-relative ">
            <div className="ConstructorRight overflow-y-auto ">
              <h5 className=" text-start mb-4">
                Создайте свой собственный интерьер лифта онлайн уже сегодня.
                Выберите дизайн из коллекции "COMPANY NAME", комбинируйте
                материалы, освещение и аксессуары, чтобы создать уникальный
                интерьер лифта.
              </h5>
              {data.map((v, i) => {
                return <ConstructorCard key={i} data={v} />;
              })}
            </div>

            <button className="btn btn-warning mt-5">Submit</button>
          </div>
        </div>
    </div>
  );
};

export default Constructor;
