import React from 'react';
import { Link } from 'react-router-dom';
import AllHomePage from '../../Components/AllHomePage/AllHomePage';
import Title from '../../Components/HomeComponent/Title/Title';
import HomeSecSeven from '../../Container/Home/HomeSecSeven';
import './Products.css';
const data = [
  {
    img: 'https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/16/mls2_heV74LX.jpg',
    to: '/osten-1',
    title: 'Osten1',
  },
  {
    img: 'https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/16/OSTEN-L2.jpg',
    to: '/osten-2',
    title: 'Osten2',
  },
  {
    img: 'https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/16/mls2_heV74LX.jpg',
    to: '/osten-3',
    title: 'Osten3',
  },
];
class Products extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    active1: false,
    active2: true,
    active3: true,
  };
  onClick1 = () => {
    this.setState((state) => {
      return {
        active1: !this.state.active1,
        active2: true,
        active3: true,
      };
    });
  };
  onClick2 = () => {
    this.setState((state) => {
      return {
        active1: true,
        active2: !this.state.active2,
        active3: true,
      };
    });
  };
  onClick3 = () => {
    this.setState((state) => {
      return {
        active1: true,
        active2: true,
        active3: !this.state.active3,
      };
    });
  };
  render() {
    return (
      <div className="Products ">
        <AllHomePage title="Products" />
        <Title title="ПРОДУКЦИЯ" color="dark" />
        <div className="collaps">
          <button
            onClick={this.onClick1}
            className={`btn btn-${
              (this.state.active1 && 'light') || 'info'
            }  mx-3`}
          >
            Поручни лифтов
          </button>
          <button
            onClick={this.onClick2}
            className={`btn btn-${
              (this.state.active2 && 'light') || 'info'
            }  mx-3`}
          >
            Опции
          </button>
          <button
            onClick={this.onClick3}
            className={`btn btn-${
              (this.state.active3 && 'light') || 'info'
            }  mx-3`}
          >
            Кабины лифтов
          </button>
        </div>
        <div className={`${(this.state.active1 && 'd-none') || ''}`}></div>
        <div className={`${(this.state.active2 && 'd-none') || ''}`}></div>
        <div className="container">
          <div
            className={`${(this.state.active3 && 'd-none') || ''} row   m-0 `}
          >
            {data.map((v, i) => {
              return (
                <div key={i} className="col-md-3 ">
                  <Link to={v.to}>
                    <div className="position-relative cardImg">
                      <img src={v.img} alt="" className="w-100" />
                      <div className="content">
                        <p>{v.title}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <HomeSecSeven />
      </div>
    );
  }
}

export default Products;
