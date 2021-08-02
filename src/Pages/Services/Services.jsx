import { render } from '@testing-library/react';
import React from 'react';
import AllHomePage from '../../Components/AllHomePage/AllHomePage';
import Title from '../../Components/HomeComponent/Title/Title';
import Collapse1 from '../../Components/Services/Collapse1';
import Collapse2 from '../../Components/Services/Collapse2';
import Collapse3 from '../../Components/Services/Collapse3';
import Collapse4 from '../../Components/Services/Collapse4';
import Collapse5 from '../../Components/Services/Collapse5';
import HomeSecSeven from '../../Container/Home/HomeSecSeven';
import './Services.css';

class Services extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    activ1: false,
    activ2: true,
    activ3: true,
    activ4: true,
    activ5: true,
  };
  clickActiv1 = () => {
    this.setState((state) => {
      console.log(state);
      return {
        activ1: !this.state.activ1,
        activ2: true,
        activ3: true,
        activ4: true,
        activ5: true,
      };
    });
  };
  clickActiv2 = () => {
    this.setState((state) => {
      console.log(state);
      return {
        activ1: true,
        activ2: !this.state.activ2,
        activ3: true,
        activ4: true,
        activ5: true,
      };
    });
  };
  clickActiv3 = () => {
    this.setState((state) => {
      console.log(state);
      return {
        activ1: true,
        activ2: true,
        activ3: !this.state.activ3,
        activ4: true,
        activ5: true,
      };
    });
  };
  clickActiv4 = () => {
    this.setState((state) => {
      console.log(state);
      return {
        activ1: true,
        activ2: true,
        activ3: true,
        activ4: !this.state.activ4,
        activ5: true,
      };
    });
  };
  clickActiv5 = () => {
    this.setState((state) => {
      console.log(state);
      return {
        activ3: true,
        activ1: true,
        activ2: true,
        activ4: true,
        activ5: !this.state.activ5,
      };
    });
  };
  render() {
    return (
      <div className="Services">
        <AllHomePage title="Services" />
        <Title title="Услуги" color="dark" />
        <div className="row m-0 container">
          <div className="col-md-4 d-flex flex-column align-items-center">
            <button
              onClick={this.clickActiv1}
              className={`btn  btn-${
                (this.state.activ1 && 'light text-dark') || 'info text-white'
              } mt-2 fw-bold`}
            >
              Проектирование
            </button>
            <button
              onClick={this.clickActiv2}
              className={`btn  btn-${
                (this.state.activ2 && 'light text-dark') || 'info text-white'
              } mt-2 fw-bold`}
            >
              Монтаж лифтов и лифтового оборудования
            </button>
            <button
              onClick={this.clickActiv3}
              className={`btn  btn-${
                (this.state.activ3 && 'light text-dark') || 'info text-white'
              } mt-2 fw-bold`}
            >
              Техническое обслуживание лифтов и лифтового оборудования
            </button>
            <button
              onClick={this.clickActiv4}
              className={`btn  btn-${
                (this.state.activ4 && 'light text-dark') || 'info text-white'
              } mt-2 fw-bold`}
            >
              Запасные части
            </button>
            <button
              onClick={this.clickActiv5}
              className={`btn  btn-${
                (this.state.activ5 && 'light text-dark') || 'info text-white'
              } mt-2 fw-bold`}
            >
              Ремонт лифтов и лифтового оборудования
            </button>
          </div>
          <div className="col-md-8">
            <Collapse1
              className={`${(this.state.activ1 && 'd-none') || ''} text-start mt-4`}
            />
            <Collapse2
              className={`${(this.state.activ2 && 'd-none') || ''} text-start mt-4`}
            />
            <Collapse3
              className={`${(this.state.activ3 && 'd-none') || ''} text-start mt-4`}
            />
            <Collapse4
              className={`${(this.state.activ4 && 'd-none') || ''} text-start mt-4`}
            />
            <Collapse5
              className={`${(this.state.activ5 && 'd-none') || ''} text-start mt-4`}
            />
          </div>
        </div>
        <HomeSecSeven/>
      </div>
    );
  }
}

export default Services;
