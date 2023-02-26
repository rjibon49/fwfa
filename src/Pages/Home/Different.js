import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import awareness from './../../images/banner/awareness.png'
import coaching from './../../images/banner/coaching1.png'
import literacy from './../../images/banner/literacy1.png'
import trainning from './../../images/banner/trainning.png'
import useAos from '../../hooks/useAos';

const Different = () => {

   useAos ();

    return (
        <>
            <Container className='my-5' style={{overflow:"hidden"}}>
                <div className='text-center'>
                    <h2 className='section-title2'>What Makes Us Different</h2>
                    <p className='banner-details'>With these simplified proven success with our clients, we implement a 3-tier approach to Financial Wellness: Awareness, Literacy, and Coaching.</p>
                </div>
                <Row className='mt-5 '>
                    <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                        <div className='card' >
                            <div className='card-space'>
                                <Image src={awareness} className='card-image'/>
                                <div>
                                    <h3>Awareness</h3>
                                    <p>Financial Awareness is know where you are at with your personal finance. </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                        <div className='card' >
                            <div className='card-space' >
                                <Image src={literacy} className='card-image' />
                                <div>
                                    <h3>Literacy</h3>
                                    <p>Financial Literacy is to educate yourself and understanding your current situation.  Our Foundation for Financial Wellness Program gives this education piece in learning all of the major pieces.  It is thorough education that we get out of challenges to financial wellness.</p>
                                </div>
                            </div>
                            
                        </div>
                    </Col>
                    
                    <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                        <div className='card' >
                            <div className='card-space' >
                                <Image src={coaching} className='card-image'/>
                                <div>
                                    <h3>Coaching</h3>
                                    <p>Coaching is a one on one approach that we cater to each individual person.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className='green-bg mt-5 pb-5 rounded'>
                    <div className='text-center pt-5'>                        
                        <h2 className='section-title2 text-white'>Training To Be a Coach</h2>
                        <p className='banner-details trainning-p' >Our graduate can participate in an extensive and comprehensive training to become a Coach to help us pay it forward by helping more people to learn about their personal finances and be on their way to financial wellness.</p>
                        <Image src={trainning} className='leader-image' />
                    </div>
                    <Row className='mt-5'>
                        <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                            <div className='l-card' data-aos="slide-right">
                                <div>
                                    <h3>Awareness</h3>
                                    <p>Financial Awareness is know where you are at with your personal finance. </p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                            <div className='l-card' data-aos="zoom-in">
                                <div>
                                    <h3>Literacy</h3>
                                    <p>Financial Literacy is to educate yourself and understanding your current situation.  Our Foundation for Financial Wellness Program gives this education piece in learning all of the major pieces.  It is thorough education that we get out of challenges to financial wellness.</p>
                                </div>                        
                            </div>
                        </Col>
                        
                        <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                            <div className='l-card' data-aos="slide-left">
                                <div>
                                    <h3>Coaching</h3>
                                    <p>Coaching is a one on one approach that we cater to each individual person.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    );
};


export default Different;

