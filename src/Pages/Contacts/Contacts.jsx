import React from 'react';
import AllHomePage from '../../Components/AllHomePage/AllHomePage';
import Title from '../../Components/HomeComponent/Title/Title';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
const Contacts = () => {
  return (
    <div className="Contacts">
      <AllHomePage title="Contacts" />
      <Title title="Contacts" color="dark" />
      <div className="container mt-5">
        <iframe
          className="w-100"
          height="500"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47987.82998707824!2d89.23197734277815!3d41.28780778901049!2m3!1f0!2f0!3f0!3m2!1i1024!2i78!4f13.1!3m3!1m2!1s0x38ae8a22aef832e1%3A0x3d31c578e1a8e50a!2z0KfQuNC70LDQvdC30LDRgA!5e0!3m2!1sru!2s!4v1827830793385!5m2!1sru!2s"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
      <h3 className="mt-5">Режим работы с 09:00 до 18:00</h3>
      <div className=" containr px-5 d-flex row justify-content-around mt-3 align-items-center">
        <p className="col-md-4"><span className="fw-bold">Location</span> город Ташкент ...</p>
        <p className="col-md-4">
          <span className="fw-bold">Telephon</span> (+99897) 123-45-87, (+99897) 123-45-87
        </p>
        <p className="col-md-4"><span className="fw-bold">Email:</span> info@lift.uz</p>
      </div>
      <div className="">
        <Form className="row d-flex justify-content-center">
          <FormGroup className="col-8 mt-3">
            <Label className="mb-3" for="exampleEmail">Your Full Name</Label>
            <Input
              type="text"
              name="text"
              id="Name"
              placeholder="with a placeholder"
            />
          </FormGroup>
          <FormGroup className="col-8 mt-3">
            <Label className="mb-3" for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="with a placeholder"
            />
          </FormGroup>
          <FormGroup className="col-8 mt-3">
            <Label className="mb-3" for="exampleFile">Comment</Label>
            <Input type="textarea" name="text" id="exampleText" />
          </FormGroup>
         
        </Form>
        <button className="w-25 mt-5 btn btn-warning">Send</button>
      </div>
    </div>
  );
};

export default Contacts;
