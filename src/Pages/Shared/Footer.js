import React, { useRef } from 'react';
import { Button, Col, Container, Image, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomeIcon from '@mui/icons-material/Home';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import facebook from '../../images/social/facebook.png'
import tumblr from '../../images/social/fa-brands_tumblr-square.png'
import instagram from '../../images/social/instagram.png'
import linkedin from '../../images/social/linkedin.png'
import pinterest from '../../images/social/pinterest.png'
import quora from '../../images/social/quora.png'
import twitter from '../../images/social/twitter-bird.png'
import youtube from '../../images/social/youtube.png'

const Footer = () => {

    // const hancleClickLinkedin = () => {
    //     window.open("https://www.linkedin.com/company/71980528/");
    // };

    const form = useRef();

    const sendEmail = (e) => {
        emailjs.sendForm('service_w6n0q0j', 'portfolio_template', form.current, 'user_BXxlWuVopHEZNoAJEVyHQ')
          .then((result) => {
              console.log(result.text)
          }, (error) => {
              console.log(error.text);
          });
          
          e.target.reset();
          e.preventDefault();
      };

      const subscribeSuccessfully= () => {
        toast.success('Subscribe Successfully', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            });
    }

    return (
        <section className='green-bg sbshadow over'>
            <Container className='py-5'>
                <Row className='py-5 fbrow'>
                    <Col xs={12} sm={12} md={5} lg={6} xl={6}>
                        <div className='mb-3 f-contact'>
                            <h4 className='pb-4'>Contact Us</h4>
                            <p className='pb-2'><HomeIcon className="me-3"/> Greater Palm Spring, CA-USA</p>
                            <p className='pb-2'><LocalPhoneIcon className="me-3"/>(617) 371-7731 (Text Only)</p>
                            <p className='pb-2'><EmailIcon className="me-3"/>info@financialwellnessforall.org</p>
                        </div>
                        <div className='f-icon'>
                            <h4 className='pb-4'>Follow Us</h4>
                            <div className="py-1 top-text">
                            <a href="https://fb.me/FWFA.501c3" target="_blank" rel='noreferrer' className='square px-3'><Image src={facebook} alt="Facebook"/></a>
                            <a href="https://www.tumblr.com/blog/fwfa" target="_blank" rel='noreferrer' className='square'><Image src={tumblr} alt="tumblr"/></a>
                            <a href="https://www.instagram.com/fwfa501c3/" target="_blank" rel='noreferrer' className='square'><Image src={instagram} alt="instagram"/></a>
                            <a href="https://www.linkedin.com/company/fwfa" target="_blank" rel='noreferrer' className='square'><Image src={linkedin} alt="linkedin"/></a>
                            <a href="https://www.pinterest.com/financialwellnessforall0129" target="_blank" rel='noreferrer' className='square'><Image src={pinterest} alt="pinterest"/></a>
                            <a href="https://www.quora.com/Financialwellnessforall" target="_blank" rel='noreferrer' className='square'><Image src={quora} alt="quora"/></a>
                            <a href="https://twitter.com/fwfa501c3" target="_blank" rel='noreferrer' className='square'><Image src={twitter} alt="twitter"/></a>
                            <a href="https://www.youtube.com/channel/UCWtwSa0mZBFxKkl5ukmQdMg" target="_blank" rel='noreferrer' className='square'><Image src={youtube} alt="youtube"/></a>
                            <p className='mt-3 text-white'>English (US)</p>
                        </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={7} lg={6} xl={6}>
                        <Nav className="mx-auto fw-bold pb-3 text-white">
                            <Nav.Link as={Link} to="/home" className="btnt">Home</Nav.Link>
                            <Nav.Link as={Link} to="/events" className="btnt">Events</Nav.Link>
                            <Nav.Link as={Link} to="/articles" className="btnt">Blog</Nav.Link>
                            <Nav.Link as={Link} to="/career" className="btnt">Career</Nav.Link>
                            <a href="https://www.paypal.com/donate/?hosted_button_id=PWEN8NYUJZKS6" rel='noreferrer' target="_top" className='donation'>Donation</a> 
                        </Nav>
                        <div className='mb-3 f-subs'>
                            <h3 className='green-title ps-2 mb-3' >Subscribe to Our Newsletter</h3>
                            <p className='ps-2 btnt'>Please subcribe to our newsletter to receive updates from the organization (programs, webinar, career opportunities, volunteers, events, courses, and much more)</p>
                            <form ref={form} onSubmit={sendEmail} className="card-content my-5"> 
                                <div className="form-input text-center">
                                    <label for="email"></label>
                                    <input type="email" placeholder="Enter Your Email" className='subs'name="user_email" id="formGroupExampleInput"/>
                                    <Button className="subs-btn" type='submit' value="Send" onClick={subscribeSuccessfully}>Subscribe</Button>
                                </div>
                                <ToastContainer
                                    position="top-right"
                                    autoClose={2000}
                                    hideProgressBar={false}
                                    newestOnTop={false}
                                    closeOnClick
                                    rtl={false}
                                    pauseOnFocusLoss
                                    draggable={false}
                                    pauseOnHover
                                />
                            </form>
                        </div>
                    </Col>
                </Row>
                <div className='text-center'>
                    <p>&copy; 2022 – Financial Wellness For All (FWFA) is a 501c3 non-profit organization.</p>
                </div>
            </Container>
        </section>
    );
};

export default Footer;