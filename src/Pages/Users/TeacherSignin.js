import React from 'react';
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
import Divider from '@mui/material/Divider';
import tsi from './../../images/Users/teacherSignin.png'
import { Link } from 'react-router-dom';
import { TextField } from '@mui/material';
import GoToTop from '../../GotoTop';

const TeacherSignin = () => {
    return (
        <Container >
            <Row className='abtevt'>
                <Col xs={12} sm={12} md={12} lg={6} xl={6} className='user-leftside'>
                    <div className='green-bg p-5'>
                        <Image src={tsi}  className='images ' />
                    </div>
                </Col>
                <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                    <div className='formside py-5 my-5'>
                            <h4 className='fw-bold mb-5 text-center'>Login a Teacher Account</h4>
                            <div className='d-flex justify-content-evenly'>
                                <Button className='user-btn'><i className="fab fa-google mx-2"></i> Continue With Google</Button>
                                <Button className='user-btn'><i className="fab fa-facebook mx-2"></i> Continue With Facebook</Button>
                            </div>
                        
                        <Divider className='my-3'>OR</Divider>
                        
                        <Form className='commentFrom'>
                            <Row className="mb-3">
                        
                                <Form.Group className="mb-3">
                                    <TextField
                                id="demo-helper-text-aligned"
                                label="Enter Your E-mail Address"
                                size="small"
                                className='s-comment-form'
                                fullWidth
                            />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <TextField
                                id="demo-helper-text-aligned"
                                label="Enter Your Password"
                                size="small"
                                className='s-comment-form'
                                fullWidth
                            />
                                </Form.Group>
                                <Link to={`/signupTeacher`} style={{color:"black", fontWeight:"700"}}>Forgot my password?</Link>
                            </Row>
                            <div className='text-center'>
                                <Button className='userbtn'>Sign in</Button>
                                <p className='mt-4'>Dont't have an account? <Link to={`/signupTeacher`} style={{color:"black", fontWeight:"700"}}>Sign up</Link></p>
                            </div>
                        </Form>
                    </div>
                </Col>
            </Row>
            <GoToTop />
        </Container>
    );
};

export default TeacherSignin;