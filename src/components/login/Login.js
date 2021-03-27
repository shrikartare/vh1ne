import React from "react";
import {Row,Col,Form,Button} from "react-bootstrap";
import "../landing-page/landingPage.scss";

const  Login = () =>{

    return (
        <>
          <Form>
            <Form.Group as={Row} controlId="username">
                <Col sm={12}>
                      <Form.Control placeholder="Username" type="text" />
                          </Col>
                      </Form.Group>
                      <Form.Group as={Row} controlId="password" className="pwd-form-cntrl">
                        <Col sm={12}>
                          <Form.Control placeholder="Password" type="password" />
                        </Col>
                      </Form.Group>
                      <Row>
                        <Button variant="link">Register</Button>
                        <Button variant="link" className="forgot-pwd">Forgot Password</Button>
                     </Row>  
                      <Form.Group as={Row}>
                <Col sm={12}>
                    <Button type="submit">LOG IN</Button>
                </Col>
            </Form.Group>
          </Form>
        </>
    )
};

export default Login;