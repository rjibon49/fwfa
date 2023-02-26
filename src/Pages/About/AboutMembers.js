import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import UseProfile from '../../hooks/UseProfile';

const AboutMembers = () => {

    // const hancleCLickLinkedin = () => {
    //     window.open("");
    // };
    // const hancleJustinLinkedin = () => {
    //     window.open("https://www.linkedin.com/company/71980528/");
    // };
    // const hancleThomasLinkedin = () => {
    //     window.open("https://www.linkedin.com/company/71980528/");
    // };
    // const hancleAnthonyLinkedin = () => {
    //     window.open("https://www.linkedin.com/company/71980528/");
    // };

    const [pfl] = UseProfile();
    console.log(pfl);
    return (
        <section className='mt-5 pb-5'>
            <div className=''>
                <h2 className='section-title-b'>Our Executive Team</h2>
            </div>
                <Container className='green-bg'>
                    <p className='about-details'>Financial Wellness for All’s executive team has combined knowledge and over 25 years experience from multiple fields related to financial wellness and financial literacy. .</p>
                </Container>

                <Container className=''>
                    <Row>
                        {
                            pfl.map (pf => <Col xs={12} sm={12} md={6} lg={6} xl={6} key={pf.id}>
                                <div className='emp-biodata'>
                                    <div className="emp-title">
                                        <div className="emp-image">
                                            <Image src={pf.images} alt="Profile-Pic" />
                                        </div>
                                            <h3>{pf.name}</h3>
                                            <h6>{pf.jobTitle}</h6>
                                            <h6>{pf.post}</h6>
                                            <p style={{fontWeight:"700",fontSize:"10px"}}>{pf.position}</p>
                                            <div className='py-2 emp-social'>
                                                {/* <i className="fab fa-twitter mx-2 fs-4 green"></i>
                                                <i className="fab fa-instagram mx-2 fs-4 green"></i> */}
                                                
                                                <a href={pf.linkedin} target="_blank" rel="noreferrer"><i className="fab fa-linkedin mx-2 linkedin"></i></a>
                                            </div>
                                    </div>
                                    <div className="vl"></div>
                                        <div className="emp-info">
                                            <p className="pf-info">{pf.details}</p>
                                        </div>  
                                    </div>
                            </Col>)
                        }
                        
                    </Row>
                </Container>
            </section>
    );
};

export default AboutMembers;

// https://i.ibb.co/RQzq2v9/akram.jpg
// https://i.ibb.co/ryXvc33/anthony.jpg
// https://i.ibb.co/m8JcFsR/justin.jpg
// https://i.ibb.co/bR8xs72/thomas.jpg


// https://i.ibb.co/VpqVq5f/anthony.png