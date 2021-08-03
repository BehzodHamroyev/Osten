
import React from 'react';
import AllHomePage from '../../Components/AllHomePage/AllHomePage';
import Collapse1 from '../../Components/Production/Collapse/Collapse1';
import Title from '../../Components/HomeComponent/Title/Title';
import HomeSecSeven from '../../Container/Home/HomeSecSeven';
import Collapse2 from '../../Components/Production/Collapse/Collapse2';
import Collapse3 from '../../Components/Production/Collapse/Collapse3';
import Collapse4 from '../../Components/Production/Collapse/Collapse4';


class Production extends React.Component {
  constructor(props) {
    super(props);
  }
  state = { activ1: false, activ2: true, activ3: true, activ4: true };
  clickActive1 = () => {
    this.setState((state) => {
      return {
        activ1: !this.state.activ1,
        activ2: true,
        activ3: true,
        activ4: true,
      };
    });
  };
  clickActive2 = () => {
    this.setState((state) => {
     
      return {
        activ2: !this.state.activ2,
        activ1: true,
        activ3: true,
        activ4: true,
      };
    });
  };
  clickActive3 = () => {
    this.setState((state) => {
     
      return {
        activ3: !this.state.activ3,
        activ1: true,
        activ2: true,
        activ4: true,
      };
    });
  };
  clickActive4 = () => {
    this.setState((state) => {
     
      return {
        activ3: true,
        activ1: true,
        activ2: true,
        activ4: !this.state.activ4,
      };
    });
  };
  render() {
    return (
      <div className="Production">
        <AllHomePage title="Production" />
        <Title title="Производство" color="dark" />
        <div className="row container p-5">
          <div className="col-md-4 d-flex justify-content-start align-items-end flex-column">
            <button
              onClick={this.clickActive1}
              className={`btn-${(this.state.activ1 && 'light text-dark') || 'info text-white'} btn w-75  fw-bold my-2`}
            >
              Пассажирские лифты
            </button>
            <button
              onClick={this.clickActive2}
              className={`btn-${(this.state.activ2 && 'light text-dark') || 'info text-white'} btn w-75  fw-bold my-2`}
            >
              Лифт для коттеджей
            </button>
            <button
              onClick={this.clickActive3}
              className={`btn-${(this.state.activ3 && 'light text-dark') || 'info text-white'} btn w-75  fw-bold my-2`}
            >
              Больничный лифт
            </button>
            <button
              onClick={this.clickActive4}
              className={`btn-${(this.state.activ4 && 'light text-dark' ) || 'info text-white'} btn w-75  fw-bold my-2`}
            >
              Грузовой лифт
            </button>
          </div>
          <div className="col-md-8">
            <Collapse1
              className={`${(this.state.activ1 && 'd-none') || ''} `}
            />
            <Collapse2
              className={`${(this.state.activ2 && 'd-none') || ''} `}
            />
            <Collapse3
              className={`${(this.state.activ3 && 'd-none') || ''} `}
            />
            <Collapse4
              className={`${(this.state.activ4 && 'd-none') || ''} `}
            />
          </div>
        </div>
        <HomeSecSeven />
      </div>
    );
  }
}

export default Production;
