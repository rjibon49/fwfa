import React, { useState } from 'react';
import { Button, Col, Container, Form, Image, Row, Spinner, Toast } from 'react-bootstrap';
import Divider from '@mui/material/Divider';
import ssi from './../../images/Users/studentSignin.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';
import GoToTop from '../../GotoTop';
import useAuth from '../../hooks/useAuth';

const Login = () => {

    const [loginData, setLoginData] = useState({});

  const {user, loginUser, isLoding, authError} = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = e => {
      loginUser(loginData.email, loginData.password, location, navigate);
      e.preventDefault();
  };

    return (
        <Container >
            <Row className='abtevt'>
                <Col xs={12} sm={12} md={12} lg={6} xl={6} className='user-leftside'>
                    <div className='green-bg p-5'>
                        <Image src={ssi}  className='images ' />
                    </div>
                </Col>
                <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                    <div className='formside py-5 my-5'>
                            <h4 className='fw-bold mb-5 text-center'>Login a Student Account</h4>
                            <div className='d-flex justify-content-evenly'>
                                <Button className='user-btn'><i className="fab fa-google mx-2"></i> Continue With Google</Button>
                                <Button className='user-btn'><i className="fab fa-facebook mx-2"></i> Continue With Facebook</Button>
                            </div>
                        
                        <Divider className='my-3'>OR</Divider>
                        
                        {!isLoding && 
                        <Form className='commentFrom' onSubmit={handleLoginSubmit}>
                            <Row className="mb-3">
                        
                                <Form.Group className="mb-3">
                                    <TextField
                                        id="demo-helper-text-aligned"
                                        label="Enter Your E-mail Address"
                                        size="small"
                                        className='s-comment-form'
                                        fullWidth
                                        onChange={handleOnBlur}
                                        name="email"
                                        type="email"
                            />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <TextField
                                        id="demo-helper-text-aligned"
                                        label="Enter Your Password"
                                        size="small"
                                        className='s-comment-form'
                                        fullWidth
                                        onChange={handleOnBlur}
                                        name="password"
                                        type="password"
                            />
                                </Form.Group>
                                <Link to={`/signupStudent`} style={{color:"black", fontWeight:"700"}} type="submit" >Forgot my password?</Link>
                            </Row>
                            <div className='text-center'>
                                <Button className='userbtn' type="submit" >Sign in</Button>
                                <p className='mt-4'>Dont't have an account? <Link to={`/register`} style={{color:"black", fontWeight:"700"}}>Sign up</Link></p>
                            </div>
                        </Form> }
                        {isLoding && <Spinner animation="border" />}
                        {
                            user?.email && <Toast className="text-center bg-success text-white mx-auto">
                            <Toast.Body><strong>Login Successfully</strong></Toast.Body>
                            </Toast>
                        }
                        {
                            authError && <Toast className="text-center bg-danger text-white mx-auto" >
                            <Toast.Body><strong>Login Error</strong></Toast.Body>
                            </Toast>
                        }
                    </div>
                </Col>
            </Row>
            <GoToTop />
        </Container>
    );
};

export default Login;