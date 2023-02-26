import React, { useState } from 'react';
import { Button, Col, Container, Form, Image, Row, Spinner, Toast } from 'react-bootstrap';
import Divider from '@mui/material/Divider';
import ssu from './../../images/Users/studentSignup.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';
import GoToTop from '../../GotoTop';
import useAuth from "../../hooks/useAuth";

const StudentSignup = () => {

        const [registerData, setRegisterData] = useState({});
        const location = useLocation();
        const history = useNavigate();
      
        const { user, registerUser, isLoding, authError } = useAuth ();
      
        const handleOnBlur = (e) => {
          const field = e.target.name;
          const value = e.target.value;
          const newRegisterData = { ...registerData };
          newRegisterData[field] = value;
          setRegisterData(newRegisterData);
        };

        const handleRegisterSubmit = (e) => {
            if (registerData.password !== registerData.password1) {
              alert("Your password did not match");
              return;
            }
            registerUser(
              registerData.email,
              registerData.password,
              registerData.name,
              location,
              history
            );
            e.preventDefault();
          };
        


    return (
        <Container >
            <Row className='abtevt'>
                <Col xs={12} sm={12} md={12} lg={6} xl={6} className='user-leftside'>
                    <div className='green-bg p-5'>
                        <Image src={ssu}  className='images ' />
                    </div>
                </Col>
                <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                    <div className='formside py-5 my-5'>
                            <h4 className='fw-bold mb-5 text-center'>Create a Student Account</h4>
                            <div className='d-flex justify-content-evenly'>
                                <Button className='user-btn'><i className="fab fa-google mx-2"></i> Continue With Google</Button>
                                <Button className='user-btn'><i className="fab fa-facebook mx-2"></i> Continue With Facebook</Button>
                            </div>
                        
                        <Divider className='my-3'>OR</Divider>
                        
                        {!isLoding && ( 
                            <Form onSubmit={handleRegisterSubmit} className='commentFrom'>
                                <Row className="mb-3">
                            
                                    <Form.Group className="mb-3">
                                        <TextField
                                    id="demo-helper-text-aligned"
                                    label="Enter Your Full Name"
                                    size="small"
                                    className='s-comment-form'
                                    fullWidth
                                    name="name"
                                    onChange={handleOnBlur}
                                    required

                                />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <TextField
                                    id="demo-helper-text-aligned"
                                    label="Enter Your E-mail Address"
                                    size="small"
                                    className='s-comment-form'
                                    fullWidth
                                    name="email"
                                    onChange={handleOnBlur}
                                    required
                                />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <TextField
                                    id="demo-helper-text-aligned"
                                    label="Enter Your Password"
                                    size="small"
                                    className='s-comment-form'
                                    type="password"
                                    fullWidth
                                    name="password"
                                    onChange={handleOnBlur}
                                    required
                                />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <TextField
                                    id="demo-helper-text-aligned"
                                    label="Enter Your Password"
                                    size="small"
                                    className='s-comment-form'
                                    type="password"
                                    fullWidth
                                    name="password1"
                                    onChange={handleOnBlur}
                                    required
                                />
                                    </Form.Group>
                                    <Form.Group className="mb-3" id="formGridCheckbox">
                                        <Form.Check type="checkbox" label="I agree terms and conditions"  required/>
                                    </Form.Group>
                                </Row>
                                <div className='text-center'>
                                    <Button className='userbtn' type='submit'>Sign Up</Button>
                                    <p className='mt-4'>Already have an account? <Link to={`/signinTeacher`} style={{color:"black", fontWeight:"700"}}>Log in</Link></p>
                                </div>
                        </Form>
                        )} 
                        {isLoding && <Spinner animation="border" />}
                            {user?.email && (
                                <Toast className="text-center bg-success text-white mx-auto">
                                <Toast.Body>
                                    <strong>Registration Successfully</strong>
                                </Toast.Body>
                                </Toast>
                            )}
                            {authError && (
                                <Toast className="text-center bg-danger text-white mx-auto">
                                <Toast.Body>
                                    <strong>Registration Error</strong>
                                </Toast.Body>
                                </Toast>
                            )}
                    </div>
                </Col>
            </Row>
            <GoToTop />
        </Container>
    );
};

export default StudentSignup;