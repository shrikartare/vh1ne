import React from "react";
import { useHistory } from "react-router-dom";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import validationRules from "../register/register.rules";
import logo from "../../assets/images/logo.svg";
import "../landing-page/landingPage.scss";

const ForgotPassword = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
    shouldFocusError: true,
  });
  const onButtonClick = () => {
    //API Call
    console.log("forgotPassword Button Click");
  };
  return (
    <>
      <div className="landing-page-container">
        <img src={logo} className="App-logo" alt="logo" />
        <Form>
          <Form.Group as={Row} controlId="email">
            <Col sm={12}>
              <Form.Control
                placeholder="Email Address"
                type="text"
                className={errors.email ? "errorControl" : ""}
                {...register("email", validationRules.email)}
              />
              {errors?.email && (
                <p className="errorMessage">{errors.email.message}</p>
              )}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className={"mb-0"}>
            <Col sm={12}>
              <Button
                id="forgot-password"
                type="submit"
                onClick={handleSubmit(onButtonClick)}
              >
                Forgot Password
              </Button>
            </Col>
          </Form.Group>
          <Row>
            <Button
              id="login"
              className={"center-align"}
              variant="link"
              onClick={() => {
                history.push("/");
              }}
            >
              Login
            </Button>
          </Row>
        </Form>
      </div>
    </>
  );
};

export default ForgotPassword;
