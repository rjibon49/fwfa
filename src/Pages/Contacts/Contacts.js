import React, { useRef } from 'react';
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
import contact from './../../images/contact/contact.png'
import home from './../../images/contact/home.png'
import phone from './../../images/contact/phone.png'
import email from './../../images/contact/email.png'
import Map from './Map';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GoToTop from '../../GotoTop';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';

const Contacts = () => {
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

      const addedSuccessFully= () => {
        toast.success('Email Send Successfully', {
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
        <>
        <Header />
        <section className='green-bg mb-5 pbshadow'>
            <Container className='py-5'>
                <Row className='banner-horizontal'>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Image src={contact} className='images'/>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <div className='text-center horizontal'>
                            <h2 className='contact-title mb-4'>
                            Get In Touch
                            </h2>
                            <p>
                            Our curriculum has been designed to engage students regardless of their ethnicity, race, family structure, or socio-economic status.
                            </p>
                            <p className='py-3'><i className="fas fa-phone-alt event-t me-3"></i> (617) 371-7731</p>
                        </div>
                    </Col>
                </Row>
             </Container>
        </section>
        <Container>
            <Row>
                <Col xs={12} sm={12} md={12} lg={8} xl={8}>
                    <div className='green-bg w-xl-75 pbshadow mb-5'>
                        <div className='py-5 px-md-4 px-lg-5 px-xl-5'>
                            <div className='mb-5'>
                                <h3 className='text-center'>Let's Talk</h3>
                            </div>
                            <Form ref={form} onSubmit={sendEmail} className='contact-form'>
                                <Form.Group className="mb-3">
                                    <Form.Label>Your Name</Form.Label>
                                    <Form.Control type="text" className='b-comment-form' placeholder="Enter you name" name="user_name" id="formGroupExampleInput" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Your Email</Form.Label>
                                    <Form.Control type="email" className='b-comment-form' placeholder="Enter you E-mail" name="user_email" id="formGroupExampleInput" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Website URL (optional) </Form.Label>
                                    <Form.Control type="text" className='b-comment-form' placeholder="https://www.url.com" name="user_website" id="formGroupExampleInput"/>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Comment/Questions</Form.Label>
                                    <Form.Control as="textarea" className='b-comment-form' rows={5} placeholder='Type here...' name="message" id="formGroupExampleInput"/>
                                </Form.Group>

                                <Button type='submit' value="Send" className='event-bg px-4 py-2 border-0' onClick={addedSuccessFully}>Send Message</Button>
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
                            </Form>
                        </div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={12} lg={4} xl={4}>
                <div className='e-category-social d-none d-md-none d-lg-block d-xl-block'>
                        <h2 className='mt-5 py-5 text-center'>For More Inquiries</h2>
                            <div className='mb-5 pb-5 contact '>    
                                <p><i className='ps-xl-4 ps-lg-3 ps-md-2 ps-sm-0'><Image src={home} className='p-2 green-bg rounded mb-2'/></i><span className='ps-xl-4 ps-lg-3 ps-md-2 ps-sm-0'> Greater Palm Spring, CA-USA</span></p>
                                <p><i className='ps-xl-4 ps-lg-3 ps-md-2 ps-sm-0'><Image src={phone} className='p-2 green-bg rounded mb-2'/></i><span className='ps-xl-4 ps-lg-3 ps-md-2 ps-sm-0'>(617) 371-7731</span></p>
                                <p><i className='ps-xl-4 ps-lg-3 ps-md-2 ps-sm-0'><Image src={email} className='p-2 green-bg rounded'/></i><span className='ps-xl-4 ps-lg-3 ps-md-2 ps-sm-0'>Info@financialwellnessforall.org</span></p>
                            </div>
                        </div>
                </Col> 
            </Row>
            <Map></Map>
        </Container>
        <GoToTop />
        <Footer />
        </>
    );
};

export default Contacts;