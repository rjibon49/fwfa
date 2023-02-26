import Aos from 'aos';
import React, { useEffect } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Typewriter } from 'react-simple-typewriter';
import donation from '../../images/banner/donation.png'

const DonationBanner = () => {
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
                    <Col xs={12} sm={12} md={12} lg={5} xl={5}>
                        <Image src={donation} className='donation-banner-left' data-aos="zoom-in"/>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={7} xl={7}>
                        <div className='text-center green donation-horizontal-right'>
                            <h2 className=' banner-title mb-4' > 
                                <Typewriter
                                    // cursor
                                    // cursorStyle="_"
                                    typeSpeed={100}
                                    // deleteSpeed={50}
                                    delaySpeed={500}
                                    words={['Thank you for supporting FWFA']}
                                    />
                            </h2>
                            <p className='banner-details' data-aos="slide-left">
                            Your generosity will go toward helping those struggling with their personal finances. We will help them get to financial wellness in a holistic approach. Thank you again for your kind donation. Please reach out to us if you want to donate stocks or other special considerations.
                            </p>
                        </div>
                    </Col>
                </Row>
             </Container>
    );
};

export default DonationBanner;