import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import collaborate from './../../../images/collaborative/collaborate.png';

const CollaborativeBanner = () => {
    return (
        <section className='green-bg mb-5'>
            <Container className='pt-5'>
                <Row className="pt-5">
                    <Col xs={12} sm={12} md={6} lg={7} xl={7}>
                        <div className= 'green horizontal'>
                            <h2 className='banner-title'>
                                Collaborative Partnership
                            </h2>
                            <p className='pb-3'>
                            Collaborate Partnership with Business, School, and Religious Organizations to get the companies and those part of into better financial wellness.
                            </p>
                            <p>a.	Helping businesses and their employees</p>
                            <p>b.	School – helping the school, employees, and their students</p>
                            <p>c.	Religious organizations – the organization, the employees, and their congregation</p> 
                        </div>
                    </Col>
                    
                    <Col xs={12} sm={12} md={6} lg={5} xl={5}>
                        <Image src={collaborate} className='images'/>
                    </Col>
                    
                </Row>
             </Container>
        </section>
    );
};

export default CollaborativeBanner;