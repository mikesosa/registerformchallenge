import React, { useState } from "react";
import { Form, Col, Button, Row } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import CountryList from "../CountryList";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const RegisterForm = () => {
  const [country, setCountry] = useState("");
  const [file, setFile] = useState(null);
  const [date, setDate] = useState(new Date());
  const [sendBtn, setSendBtn] = useState({
    color: "dark",
    text: "Register Now!"
  });

  const { register, handleSubmit, errors, control } = useForm();
  const onSubmit = data => {
    setSendBtn({
      color: "primary",
      text: "Congrats!"
    });
    console.log(data);
  };

  const countryHandler = e => {
    setCountry(e.target.value);
  };

  const fileHandler = e => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const dateHandler = data => {
    setDate(data[0]);
  };
  const renderImg = () => {
    if (file) {
      return <img alt="Profile P ic" src={file} />;
    } else {
      return <div className="placeholder " />;
    }
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Col className="leftCol">
          <h4>Personal information</h4>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                ref={register({ required: true, minLength: 3 })}
                placeholder="First Name"
              />
              <div className="error">
                {errors.firstName && (
                  <small>Please enter a valid first name</small>
                )}
              </div>
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                ref={register({ required: true, minLength: 3 })}
                placeholder="Last Name"
              />
              <div className="error">
                {errors.lastName && (
                  <small>Please enter a valid last name</small>
                )}
              </div>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Enter email"
                ref={register({
                  required: true,
                  pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i
                })}
              />
              <div className="error">
                {errors.email && <small>Please enter a valid Email</small>}
              </div>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                ref={register({
                  required: true,
                  // Min 8 digits, 1 uppercase, 1 number, 1 spec char
                  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i
                })}
                placeholder="Password"
              />
              <div className="error">
                {errors.password && (
                  <small>Please enter a valid Password</small>
                )}
              </div>
            </Form.Group>
          </Form.Row>
        </Col>

        <Col className="rightCol">
          <h4>Optional</h4>
          <Row style={{ display: "flex", alignItems: "center" }}>
            <Col md={4} className="imgHolder">
              {renderImg()}
            </Col>
            <Col md={8} className="optImg">
              <Row className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="customFile"
                  name="profilePic"
                  onChange={fileHandler}
                  ref={register}
                />
                <label className="custom-file-label" htmlFor="customFile">
                  Profile Picture
                </label>
              </Row>
              <Row className="datePicker">
                <Controller
                  as={DatePicker}
                  showYearDropdown
                  peekNextMonth
                  showMonthDropdown
                  dropdownMode="select"
                  dateFormat="dd/MM/yyyy"
                  name="birthdayDate"
                  control={control}
                  selected={date}
                  onChange={dateHandler}
                />
                <Form.Label>
                  Your
                  <br />
                  Birthday
                </Form.Label>
              </Row>
            </Col>
          </Row>

          <Form.Row style={{ marginTop: "12px" }}></Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="number"
                name="phoneNumber"
                ref={register()}
                placeholder="Phone Number"
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Country</Form.Label>
              <Form.Control
                as="select"
                value={country}
                ref={register}
                name="country"
                onChange={countryHandler}
              >
                <option>Choose...</option>;
                {CountryList.map((country, index) => {
                  return <option key={index}>{country}</option>;
                })}
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Button
            type="submit"
            variant={sendBtn.color}
            className="btn btn-lg btn-block"
          >
            {sendBtn.text}
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default RegisterForm;
