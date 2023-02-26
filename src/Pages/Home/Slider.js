import Aos from 'aos';
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Typewriter } from 'react-simple-typewriter';
import 'aos/dist/aos.css';

const Slider = () => {

    useEffect(() => {
        Aos.init({
            offset: 100,
            duration: 1000,
            easing:'ease-in'
        });
        
    },[])
    
    return (

        <div className='slider-bg'>
            <Container className='sb-form'>
                <Row >
                    <Col xl={2} lg={2} md={1} sm={1} xs={1}></Col>
                    <Col xl={8} lg={8} md={10} sm={10} xs={10}>
                    <div className='text-center text-white'>
                        <h2 className='banner-title mb-4'>
                        <Typewriter
                                    // cursor
                                    // cursorStyle="_"
                                    typeSpeed={100}
                                    // deleteSpeed={50}
                                    delaySpeed={500}
                                    words={['Welcome']}
                                    /></h2>
                        <p className='home-banner-details' data-aos="fade-down">
                        Do you want financial stability and understand where you are at with your finances? Contact us and explore some of our programs. We are a non-profit organization that helps provide financial coaching with our experts.
                        </p>
                    </div>
                    </Col>
                    <Col xl={2} lg={2} md={1} sm={1} xs={1}></Col>
                </Row>
            </Container>
        </div>

        // <Carousel fade>
        //     <Carousel.Item className='slider-bg'>
        //         <Container className='sb-form'>
        //             <Row >
        //                 <Col xl={3} lg={2} md={1} sm={1} xs={1}></Col>
        //                 <Col xl={6} lg={8} md={10} sm={10} xs={10}>
        //                 <div className='text-center text-white'>
        //                     <h2 className='banner-title'>Welcome</h2>
        //                     <p className='banner-details'>Do you want financial stability and understand where you are at with your finances? Contact us and explore some of our programs. We are a non-profit organization that helps provide financial coaching with our experts.</p>
        //                 </div>
        //                 </Col>
        //                 <Col xl={3} lg={2} md={1} sm={1} xs={1}></Col>
        //             </Row>
        //         </Container>
        //     </Carousel.Item>
        //     <Carousel.Item className='slider-bg'>
        //         <Container className='sb-form'>
        //             <Row >
        //                 <Col xl={3} lg={2} md={1} sm={1} xs={1}></Col>
        //                 <Col xl={6} lg={8} md={10} sm={10} xs={10}>
        //                 <div className='text-center text-white'>
        //                     <h2 className='banner-title'>Welcome</h2>
        //                     <p className='banner-details'>Do you want financial stability and understand where you are at with your finances? Contact us and explore some of our programs. We are a non-profit organization that helps provide financial coaching with our experts.</p>
        //                 </div>
        //                 </Col>
        //                 <Col xl={3} lg={2} md={1} sm={1} xs={1}></Col>
        //             </Row>
        //         </Container>
        //     </Carousel.Item>
        //     <Carousel.Item className='slider-bg'>
        //         <Container className='sb-form'>
        //             <Row >
        //                 <Col xl={3} lg={2} md={1} sm={1} xs={1}></Col>
        //                 <Col xl={6} lg={8} md={10} sm={10} xs={10}>
        //                 <div className='text-center text-white'>
        //                     <h2 className='banner-title'>Welcome</h2>
        //                     <p className='banner-details'>Do you want financial stability and understand where you are at with your finances? Contact us and explore some of our programs. We are a non-profit organization that helps provide financial coaching with our experts.</p>
        //                 </div>
        //                 </Col>
        //                 <Col xl={3} lg={2} md={1} sm={1} xs={1}></Col>
        //             </Row>
        //         </Container>
        //     </Carousel.Item>
        // </Carousel>
        
    );
};

export default Slider;