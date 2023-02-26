import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import donate from './../../images/banner/donate.png';
import card from './../../images/card.png';

const Ship = () => {
    return (
        <>
            <div className='green-bg sb-form'>
                <Container className='my-5'>
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                            <div>
                                <Image src={donate} className='ship-img' />
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                            <div className='sb-form' style={{marginTop:"30px"}}>
                                {/* <a href="https://www.paypal.com/donate/?hosted_button_id=PWEN8NYUJZKS6" rel='noreferrer' target="_blank" className='donate-btn'>Donation</a> */}
                                <form action="https://www.paypal.com/donate" method="post" target="_top">
                                    <input type="hidden" name="hosted_button_id" value="PWEN8NYUJZKS6" />
                                    <input type="image" src={card} border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" style={{width:"75%", display:"block", margin:"0 auto"}}/>
                                    <img alt="" border="0" src="np" width="2" height="2" />
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Ship;