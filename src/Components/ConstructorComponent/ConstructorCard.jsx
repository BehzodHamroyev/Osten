import React from 'react';
import './ConstructorCard.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
const ConstructorCard = (props) => {
  return (
    <div key={props.key} className="ConstructorCard">
      <h4 className="text-start mb-4">
        <span className="fw-bold">{props.data.title}</span>
        {props.data.subTitle}
      </h4>
      <div className=" row mx-0 ">
        {props.data.imgs?.map((v, i) => {
          return (
            <div className="col-md-3 col-sm-6 overflow-hidden">
              <img src={v.img} className="mr-3 w-75 my-3 cursor-pointer " alt="" />
            </div>
          );
        })}
      </div>
      <div className=" row  mx-0  ">
        {props.data.inputs?.map((v, i) => {
          return (
            <FormGroup className=" col-12  text-start  my-3 d-flex justify-content-between">
              <Label for="exampleEmail" className="">{v.label}</Label>
              <Input
                type="number"
                name={`${v.label}`}
                id={`${v.label}`}
                placeholder={`${v.label}`}
                className="w-50"
              />
            </FormGroup>
          );
        })}
      </div>
    </div>
  );
};

export default ConstructorCard;
