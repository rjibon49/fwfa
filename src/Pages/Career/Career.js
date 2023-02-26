import React from 'react';
import { Button, Col, Container, Image, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import GoToTop from '../../GotoTop';
import Footer from '../Shared/Footer';
import  career from './../../images/banner/career.png'

const Career = () => {
    return (
        <>
        <section className='green-bg mb-5'>
            <Container className='py-5'>
                <Row className='banner-horizontal'>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Image src={career} className='banner-images' style={{width:"50%"}}/>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <div className='text-center green horizontal'>
                        <h2 className='contact-title'>
                            Join Our Team
                            </h2>
                            <p>
                            Are you interested in working for FWFA but don't see any current openings relevant to your career or skills? Not a problem, we'd love to keep you in mind for future openings! Share your resume with us, we will reach out if something relevent opens up.
                            </p>
                            <p className='py-3'> Please send your resume to <b>info@financialwellnessforall.org</b> </p>
                            <p className='py-3'><i className="fas fa-phone-alt event-t me-3"></i> (617) 371-7731</p>
                        </div>
                    </Col>
                </Row>
             </Container>
        </section>
             <Container className='green-bg my-5 pbshadow px-5 pb-5'>
                <h1 className=" py-5 text-center event-title">Available Opportunity</h1>
                <p style={{fontSize:"12px", fontWeight:"700"}}>We are seeking for the following position:</p>
                <Row className='pt-5'>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Position</th>
                            <th className='text-center'>Vacancy</th>
                            <th className='text-center'></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>1</td>
                            <td>Intern – Content Writter</td>
                            <td className='text-center'>01</td>
                            <td><Link to={`/apply-now`} className='pb-5'><Button className='apply-btn d-block'>Apply Now</Button></Link></td>
                            </tr>
                            <tr>
                            <td>2</td>
                            <td>Intern – Graphics Designer</td>
                            <td className='text-center'>01</td>
                            <td className='text-center'><Link to={`/apply-now`} className='pb-5'><Button className='apply-btn d-block'>Apply Now</Button></Link></td>
                            </tr>
                            <tr>
                            <td>3</td>
                            <td>Intern – Marketing Coordinator</td>
                            <td className='text-center'>01</td>
                            <td className=''><Link to={`/apply-now`} className='pb-5'><Button className='apply-btn d-block'>Apply Now</Button></Link></td>
                            </tr>
                        </tbody>
                    </Table>
                    {/* <Col xl={4} lg={4} md={4}>
                        <div>
                            <h6 className='pb-5'>Position</h6>
                            <p className='pb-5'>1. Intern – Content Writter</p>
                            <p className='pb-5'>2. Intern – Graphics Designer</p>
                            <p className='pb-5'>3. Intern – Marketing Coordinator</p>
                        </div>
                    </Col>
                    <Col xl={4} lg={4} md={4}>
                        <div className='text-center'>
                            <h6 className='pb-5'>Vacancy</h6>
                            <p className='pb-5'>01</p>
                            <p className='pb-5'>01</p>
                            <p className='pb-5'>01</p>
                        </div>
                    </Col>
                    <Col xl={4} lg={4} md={4}>
                        <div className='ae-form'>
                            <h6 className='pb-5'> </h6>
                            <Link to={`/apply-now`} className='pb-5'><Button className='apply-btn d-block'>Apply Now</Button></Link>
                            <Link to={`/apply-now`} className='pb-5'><Button className='apply-btn d-block'>Apply Now</Button></Link>
                            <Link to={`/apply-now`} className='pb-5'><Button className='apply-btn d-block'>Apply Now</Button></Link>
                        </div>
                    </Col> */}
                </Row>
             </Container>
             <Footer />
             <GoToTop />
        </>
    );
};

export default Career;