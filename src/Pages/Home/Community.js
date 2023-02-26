import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import user from '../../images/banner/community/user.png'
import board from '../../images/banner/community/board.png'
import donation from '../../images/banner/community/donation.png'
import graduate from '../../images/banner/community/graduate.png'
import money from '../../images/banner/community/money.png'
import task from '../../images/banner/community/task.png'
import userGraduate from '../../images/banner/community/userGraduate.png'
import userGroup from '../../images/banner/community/userGroup.png'

const Community = () => {
    return (
        <>
            <div className='green-bg'>
                <Container>
                    <Row className='my-5'>
                        <Col xl={4} lg={4} md={6} sm={12} xs={12}>
                            <div className='my-5 py-5'>
                                <Image src={user} alt="User" className='d-flex mx-auto'/>
                                <div className='text-center'>
                                    <h4 className='my-2'>10+</h4>
                                    <p>People Served</p>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4} lg={4} md={6} sm={12} xs={12}>
                            <div className='my-5 py-5'>
                                <Image src={task} alt="Task" className='d-flex mx-auto'/>
                                <div className='text-center'>
                                    <h4 className='my-2'>5</h4>
                                    <p>Programs Available</p>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4} lg={4} md={6} sm={12} xs={12}>
                            <div className='my-5 py-5'>
                                <Image src={money} alt="Money" className='d-flex mx-auto'/>
                                <div className='text-center'>
                                    <h4 className='my-2'>10000</h4>
                                    <span style={{fontSize:"10px"}}>( by end of December 2022 )</span>
                                    <p>Reduce Debt Amount</p>
                                    
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='green-bg'>
                <Container>
                    <Row className='my-5'>
                        <Col xl={4} lg={4} md={6} sm={12} xs={12}>
                            <div className='my-5 py-5'>
                                <Image src={graduate} alt="graduate" className='d-flex mx-auto'/>
                                <div className='text-center'>
                                    <h4 className='my-2'>20</h4>
                                    <p>Current Students Enrolled</p>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4} lg={4} md={6} sm={12} xs={12}>
                            <div className='my-5 py-5'>
                                <Image src={userGraduate} alt="userGraduate" className='d-flex mx-auto'/>
                                <div className='text-center'>
                                    <h4 className='my-2'>0</h4>
                                    <p>Graduate</p>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4} lg={4} md={6} sm={12} xs={12}>
                            <div className='my-5 py-5'>
                                <Image src={board} alt="Board" className='d-flex mx-auto'/>
                                <div className='text-center'>
                                    <h4 className='my-2'>0</h4>
                                    <p>Leadership Training - Coaches</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='green-bg'>
                <Container>
                    <Row className='my-5'>
                        <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                            <div className='my-5 py-5'>
                                <Image src={donation} alt="Donation" className='d-flex mx-auto'/>
                                <div className='text-center'>
                                    <h4 className='my-2'>10+</h4>
                                    <p>Volunteers</p>
                                </div>
                            </div>
                        </Col>
                        <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                            <div className='my-5 py-5'>
                                <Image src={userGroup} alt="userGroup" className='d-flex mx-auto'/>
                                <div className='text-center'>
                                    <h4 className='my-2'>0</h4>
                                    <p>Employees</p>
                                    <span style={{fontSize:"10px"}}>currently fully operated by volunteers.</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Community;