import React from "react";
import {Row,Col,Form,Button} from "react-bootstrap";
import "../../App.scss";
import "../landing-page/landingPage.scss";

const  Register = () =>{

    return (
        <>
                <Form>
                      <Form.Group as={Row} controlId="username">
                       <Col sm={12}>
                      <Form.Control placeholder="UserName" type="text" />
                          </Col>
                      </Form.Group>
                      <Form.Group as={Row} controlId="email">
                      <Col sm={12}>
                       <Form.Control placeholder="E-mail" type="text" />
                          </Col>
                      </Form.Group>
                      <Form.Group as={Row} controlId="password">
                        <Col sm={12}>
                          <Form.Control placeholder="Password" type="password" />
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row} controlId="confirmpassword">
                        <Col sm={12}>
                          <Form.Control placeholder="Confirm Password" type="password" />
                        </Col>
                      </Form.Group> 
                      <Form.Group as={Row}>
                            <Col sm={12}>
                                <Button type="submit">REGISTER</Button>
                            </Col>
                      </Form.Group>
                      <Row>
                        <Button variant="link" className="center-align">Login</Button>
                     </Row>  
          </Form>
        </>
    )
};

export default Register;