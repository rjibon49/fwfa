import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import awareness from './../../images/banner/awareness.png'
import literacy from './../../images/banner/literacy1.png'
import coaching from './../../images/banner/coaching1.png'
import ReactPlayer from 'react-player';


const AboutDetails = () => {
    return (
        <section className='my-5'>
            <Container className='my-5 green-bg'>
                <ReactPlayer
                        className="react-ab"
                        width='100%'
                        height='600px'
                        controls
                        url={`https://fwfadatabasecenter.s3.amazonaws.com/videos/FWFA-InrtroductionVideo.mp4`}
                        light={true}
                    />
            </Container>
            <div className=''>
                <h2 className='section-title-b'>FWFA’s Mission Statement</h2>
            </div>
                <Container className='green-bg my-5'>
                    <p className='about-details'>Financial Wellness for All provides Financial Education for people that are underserved by traditional financial services through our core teaching methodology of Awareness, Literacy, and Coaching.</p>
                </Container>
            <div className=''>
                <h2 className='section-title-b'>FWFA’s  Vision</h2>
            </div>
                <Container className='green-bg my-5'>
                    <p className='about-details py-5'>Financial Wellness for All vision is to raise the competency level in finance of those underserved by traditional financial services, so they can have more financial stability, reduce debt, and save for their future.</p>
                </Container>
            <div className=''>
                <h2 className='section-title-b'>The 3-tier method approach</h2>
            </div>
            <div className='green-bg my-5'>
                <Container className=''>
                    <Row className='py-4'>
                        <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                            <div className='card'>
                                <div className='ab-card-space'>
                                    <Image src={awareness} className='card-image'/>
                                    <div>
                                        <h3>Awareness</h3>
                                        <p>Upon graduation, the student who has gone through Financial Awareness, Financial Literacy, and Financial Coaching will have charted a map to success with our expert coaches. Graduates will understand their financial situation, learn best practices and the root cause of the problem as well as clear solutions through coaching. Furthermore, we ask each graduate to stay onboard to mentor our future students to share their experiences and continue to have our coachwork with these mentors to ensure they are reminded of financial wellness. Through this mentorship process, we hope they will take on the FWFA's Leadership Training to become a coach so they can give back to the community by teaching others to financial wellness. </p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                            <div className='card'>
                                <div className='ab-card-space'>
                                    <Image src={literacy} className='card-image'/>
                                    <div>
                                        <h3>Literacy</h3>
                                        <p>We envision these on-demand courses (access anytime - self-study) supplemented with live online and in-person support. After completing each core course, the individual qualifies for a particular supplemental lesson (live online or in-person) to help the individual apply what they have learned on each topic and to chart out the road to their financial wellness. We use technology and data analysis to benchmark each student to help ensure maximum success for each individual. From this course, students get access to coaching one-on-one with an expert coach to guide them through their financial struggle to financial wellness. Each coaching session is catered to that individual only. </p>
                                    </div>
                                </div>
                                
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                            <div className='card'>
                                <div className='ab-card-space'>
                                    <Image src={coaching} className='card-image'/>
                                    <div>
                                        <h3>Coaching</h3>
                                        <p>Coaching is a one on one approach that we cater to each individual person.The core course is - Foundation for Financial Wellness Program (FFWP). This 12-week course that runs repetitively throughout the year is carefully developed to meet the needs of all students.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
};

export default AboutDetails;