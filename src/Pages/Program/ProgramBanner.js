import Aos from 'aos';
import React, { useEffect } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Typewriter } from 'react-simple-typewriter';
import pb from '../../images/program/pb.png';

const ProgramBanner = () => {
    useEffect(() => {
        Aos.init({
            offset: 100,
            duration: 2000,
            easing:'ease-in'
        });
        
    },[])
    return (
            <Container className='green-bg mb-5'>
                <Row className="banner-horizontal">
                    <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                        <Image src={pb} className='top-banner-left' data-aos="zoom-in"/>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                        <div className='text-center green banner-horizontal-right'>
                            <h2 className=' banner-title mb-4' > 
                                <Typewriter
                                    // cursor
                                    // cursorStyle="_"
                                    typeSpeed={100}
                                    // deleteSpeed={50}
                                    delaySpeed={500}
                                    words={['Program']}
                                    />
                            </h2>
                            <p className='banner-details' data-aos="slide-left">
                            Our curriculum has been designed to engage students regardless of their ethnicity, race, family structure, or socio-economic status. It is also designed to be an interactive experience for all with the aid of visuals and extensive narratives where necessary.
                            </p>
                        </div>
                    </Col>
                </Row>
             </Container>
    );
};

export default ProgramBanner;