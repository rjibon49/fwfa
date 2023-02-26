import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import school1 from './../../../images/collaborative/school1.png'
import school2 from './../../../images/collaborative/school2.png'

const CollaborativeLists = () => {

    return (
        <section className='my-5'>
            <div className='text-center'>
                <Link to={`/school`}><h2 className='page-title'>School</h2></Link>
            </div>
            <div className='my-5'>
                <Container className=''>
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                            <div className='p-5 green-bg my-5 pbshadow'>
                                <div className=''>
                                    <Image src={school1} className='images'/>
                                </div>
                                <div className='text-center'>
                                    <div className='py-2'>
                                        <Link to={`/school`}style={{color:"#F37559"}}><i className="fas fa-user-circle mx-2 fs-5 green"></i>School</Link>
                                        <i className=" mx-2 fs-4 green">|</i>
                                        <i className="far fa-comment-dots mx-2 fs-5 green"> 03 Comments</i>
                                    </div>
                                </div>
                                <div>
                                    <h5 className='py-2'>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</h5>
                                    <p>
                                    Akram A. Tadlaoui is the Founder and CEO of FWFA. He attended Yale Management School and is an experienced Financial Advisor and experienced Chief Executive Officer. He has over 10 years of experience of helping people achieve financial security through greater financial literacy and advising. In particular, he has a proven track record in business coaching, and this could be of enormous benefit to those who lack financial literacy and basic financial management skills. Akram has a strong record of working effectively with diverse groups people  <Link to={`/school`} style={{color:"#F37559"}}>....Keep Reading</Link>
                                    </p> 
                                    
                                </div>
                            </div>
                        </Col>

                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                            <div className='p-5 green-bg my-5 pbshadow'>
                                <div className=''>
                                    <Image src={school2} className='images'/>
                                </div>
                                <div className='text-center'>
                                    <div className='py-2'>
                                        <Link to={`/school`}style={{color:"#F37559"}}><i className="fas fa-user-circle mx-2 fs-5 green"></i>School</Link>
                                        <i className=" mx-2 fs-4 green">|</i>
                                        <i className="far fa-comment-dots mx-2 fs-5 green"> 03 Comments</i>
                                    </div>
                                </div>
                                <div>
                                    <h5 className='py-2'>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</h5>
                                    <p>
                                    Akram A. Tadlaoui is the Founder and CEO of FWFA. He attended Yale Management School and is an experienced Financial Advisor and experienced Chief Executive Officer. He has over 10 years of experience of helping people achieve financial security through greater financial literacy and advising. In particular, he has a proven track record in business coaching, and this could be of enormous benefit to those who lack financial literacy and basic financial management skills. Akram has a strong record of working effectively with diverse groups people  <Link to={`/school`} style={{color:"#F37559"}}>....Keep Reading</Link>
                                    </p> 
                                    
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className='text-center'>
                <Link to={`/university`}><h2 className='page-title'>University</h2></Link>
            </div>
            <div className='my-5'>
                <Container className=''>
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                            <div className='p-5 green-bg my-5   pbshadow'>
                                <div className=''>
                                    <Image src={school1} className='images  '/>
                                </div>
                                <div className='text-center'>
                                    <div className='py-2'>
                                        <Link to={`/university`}style={{color:"#F37559"}}><i className="fas fa-user-circle mx-2 fs-5 green"></i>University</Link>
                                        <i className=" mx-2 fs-4 green">|</i>
                                        <i className="far fa-comment-dots mx-2 fs-5 green"> 03 Comments</i>
                                    </div>
                                </div>
                                <div>
                                    <h5 className='py-2'>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</h5>
                                    <p>
                                    Akram A. Tadlaoui is the Founder and CEO of FWFA. He attended Yale Management School and is an experienced Financial Advisor and experienced Chief Executive Officer. He has over 10 years of experience of helping people achieve financial security through greater financial literacy and advising. In particular, he has a proven track record in business coaching, and this could be of enormous benefit to those who lack financial literacy and basic financial management skills. Akram has a strong record of working effectively with diverse groups people  <Link to={`/university`} style={{color:"#F37559"}}>....Keep Reading</Link>
                                    </p> 
                                    
                                </div>
                            </div>
                        </Col>

                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                            <div className='p-5 green-bg my-5   pbshadow'>
                                <div className=''>
                                    <Image src={school2} className='images  '/>
                                </div>
                                <div className='text-center'>
                                    <div className='py-2'>
                                        <Link to={`/university`}style={{color:"#F37559"}}><i className="fas fa-user-circle mx-2 fs-5 green"></i>University</Link>
                                        <i className=" mx-2 fs-4 green">|</i>
                                        <i className="far fa-comment-dots mx-2 fs-5 green"> 03 Comments</i>
                                    </div>
                                </div>
                                <div>
                                    <h5 className='py-2'>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</h5>
                                    <p>
                                    Akram A. Tadlaoui is the Founder and CEO of FWFA. He attended Yale Management School and is an experienced Financial Advisor and experienced Chief Executive Officer. He has over 10 years of experience of helping people achieve financial security through greater financial literacy and advising. In particular, he has a proven track record in business coaching, and this could be of enormous benefit to those who lack financial literacy and basic financial management skills. Akram has a strong record of working effectively with diverse groups people  <Link to={`/university`} style={{color:"#F37559"}}>....Keep Reading</Link>
                                    </p> 
                                    
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='text-center'>
                <Link to={`/business`}><h2 className='page-title'>Business</h2></Link>
            </div>
            <div className='my-5'>
                <Container className=''>
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                            <div className='p-5 green-bg my-5   pbshadow'>
                                <div className=''>
                                    <Image src={school1} className='images  '/>
                                </div>
                                <div className='text-center'>
                                    <div className='py-2'>
                                        <Link to={`/business`}style={{color:"#F37559"}}><i className="fas fa-user-circle mx-2 fs-5 green"></i>Businesst</Link>
                                        <i className=" mx-2 fs-4 green">|</i>
                                        <i className="far fa-comment-dots mx-2 fs-5 green"> 03 Comments</i>
                                    </div>
                                </div>
                                <div>
                                    <h5 className='py-2'>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</h5>
                                    <p>
                                    Akram A. Tadlaoui is the Founder and CEO of FWFA. He attended Yale Management School and is an experienced Financial Advisor and experienced Chief Executive Officer. He has over 10 years of experience of helping people achieve financial security through greater financial literacy and advising. In particular, he has a proven track record in business coaching, and this could be of enormous benefit to those who lack financial literacy and basic financial management skills. Akram has a strong record of working effectively with diverse groups people  <Link to={`/business`} style={{color:"#F37559"}}>....Keep Reading</Link>
                                    </p> 
                                    
                                </div>
                            </div>
                        </Col>

                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                            <div className='p-5 green-bg my-5   pbshadow'>
                                <div className=''>
                                    <Image src={school2} className='images  '/>
                                </div>
                                <div className='text-center'>
                                    <div className='py-2'>
                                        <Link to={`/business`}style={{color:"#F37559"}}><i className="fas fa-user-circle mx-2 fs-5 green"></i>Businesst</Link>
                                        <i className=" mx-2 fs-4 green">|</i>
                                        <i className="far fa-comment-dots mx-2 fs-5 green"> 03 Comments</i>
                                    </div>
                                </div>
                                <div>
                                    <h5 className='py-2'>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</h5>
                                    <p>
                                    Akram A. Tadlaoui is the Founder and CEO of FWFA. He attended Yale Management School and is an experienced Financial Advisor and experienced Chief Executive Officer. He has over 10 years of experience of helping people achieve financial security through greater financial literacy and advising. In particular, he has a proven track record in business coaching, and this could be of enormous benefit to those who lack financial literacy and basic financial management skills. Akram has a strong record of working effectively with diverse groups people  <Link to={`/business`} style={{color:"#F37559"}}>....Keep Reading</Link>
                                    </p> 
                                    
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='text-center'>
                <Link to={`/nonprofit`}><h2 className='page-title'>Non-Profit</h2></Link>
            </div>
            <div className='my-5'>
                <Container className=''>
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                            <div className='p-5 green-bg my-5   pbshadow'>
                                <div className=''>
                                    <Image src={school1} className='images  '/>
                                </div>
                                <div className='text-center'>
                                    <div className='py-2'>
                                        <Link to={`/nonprofit`}style={{color:"#F37559"}}><i className="fas fa-user-circle mx-2 fs-5 green"></i>Non-Profit</Link>
                                        <i className=" mx-2 fs-4 green">|</i>
                                        <i className="far fa-comment-dots mx-2 fs-5 green"> 03 Comments</i>
                                    </div>
                                </div>
                                <div>
                                    <h5 className='py-2'>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</h5>
                                    <p>
                                    Akram A. Tadlaoui is the Founder and CEO of FWFA. He attended Yale Management School and is an experienced Financial Advisor and experienced Chief Executive Officer. He has over 10 years of experience of helping people achieve financial security through greater financial literacy and advising. In particular, he has a proven track record in business coaching, and this could be of enormous benefit to those who lack financial literacy and basic financial management skills. Akram has a strong record of working effectively with diverse groups people  <Link to={`/nonprofit`} style={{color:"#F37559"}}>....Keep Reading</Link>
                                    </p> 
                                    
                                </div>
                            </div>
                        </Col>

                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                            <div className='p-5 green-bg my-5   pbshadow'>
                                <div className=''>
                                    <Image src={school2} className='images  '/>
                                </div>
                                <div className='text-center'>
                                    <div className='py-2'>
                                        <Link to={`/nonprofit`}style={{color:"#F37559"}}><i className="fas fa-user-circle mx-2 fs-5 green"></i>Non-Profit</Link>
                                        <i className=" mx-2 fs-4 green">|</i>
                                        <i className="far fa-comment-dots mx-2 fs-5 green"> 03 Comments</i>
                                    </div>
                                </div>
                                <div>
                                    <h5 className='py-2'>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</h5>
                                    <p>
                                    Akram A. Tadlaoui is the Founder and CEO of FWFA. He attended Yale Management School and is an experienced Financial Advisor and experienced Chief Executive Officer. He has over 10 years of experience of helping people achieve financial security through greater financial literacy and advising. In particular, he has a proven track record in business coaching, and this could be of enormous benefit to those who lack financial literacy and basic financial management skills. Akram has a strong record of working effectively with diverse groups people  <Link to={`/nonprofit`} style={{color:"#F37559"}}>....Keep Reading</Link>
                                    </p> 
                                    
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='text-center'>
                <Link to={`/employee`}><h2 className='page-title'>Employee</h2></Link>
            </div>
            <div className='my-5'>
                <Container className=''>
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                            <div className='p-5 green-bg my-5   pbshadow'>
                                <div className=''>
                                    <Image src={school1} className='images  '/>
                                </div>
                                <div className='text-center'>
                                    <div className='py-2'>
                                        <Link to={`/employee`}style={{color:"#F37559"}}><i className="fas fa-user-circle mx-2 fs-5 green"></i>Employee</Link>
                                        <i className=" mx-2 fs-4 green">|</i>
                                        <i className="far fa-comment-dots mx-2 fs-5 green"> 03 Comments</i>
                                    </div>
                                </div>
                                <div>
                                    <h5 className='py-2'>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</h5>
                                    <p>
                                    Akram A. Tadlaoui is the Founder and CEO of FWFA. He attended Yale Management School and is an experienced Financial Advisor and experienced Chief Executive Officer. He has over 10 years of experience of helping people achieve financial security through greater financial literacy and advising. In particular, he has a proven track record in business coaching, and this could be of enormous benefit to those who lack financial literacy and basic financial management skills. Akram has a strong record of working effectively with diverse groups people  <Link to={`/employee`} style={{color:"#F37559"}}>....Keep Reading</Link>
                                    </p> 
                                    
                                </div>
                            </div>
                        </Col>

                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                            <div className='p-5 green-bg my-5   pbshadow'>
                                <div className=''>
                                    <Image src={school2} className='images  '/>
                                </div>
                                <div className='text-center'>
                                    <div className='py-2'>
                                        <Link to={`/employee`}style={{color:"#F37559"}}><i className="fas fa-user-circle mx-2 fs-5 green"></i>Employee</Link>
                                        <i className=" mx-2 fs-4 green">|</i>
                                        <i className="far fa-comment-dots mx-2 fs-5 green"> 03 Comments</i>
                                    </div>
                                </div>
                                <div>
                                    <h5 className='py-2'>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</h5>
                                    <p>
                                    Akram A. Tadlaoui is the Founder and CEO of FWFA. He attended Yale Management School and is an experienced Financial Advisor and experienced Chief Executive Officer. He has over 10 years of experience of helping people achieve financial security through greater financial literacy and advising. In particular, he has a proven track record in business coaching, and this could be of enormous benefit to those who lack financial literacy and basic financial management skills. Akram has a strong record of working effectively with diverse groups people  <Link to={`/employee`} style={{color:"#F37559"}}>....Keep Reading</Link>
                                    </p> 
                                    
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
};

export default CollaborativeLists;