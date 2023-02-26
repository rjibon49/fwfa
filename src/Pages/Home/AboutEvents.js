import React, { useRef } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import calender from './../../images/banner/calender.png';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';


const AboutEvents = () => {
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
        <div className='green-bg pbshadow'>
            <Container className='pt-5'>
                <Row className='abtevt'>
                    <Col xs={12} sm={12} md={12} lg={7} xl={7}>
                    <div className='text-center'>
                        <h1 className='page-title text-white'>To Know More</h1>
                        <h1 className='page-title text-white'>About Our Events</h1>
                    </div>
                        <Image src={calender} className='aboutevent-img'/> 
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={5} xl={5} className='ae-form'>
                        <form className="row g-3 " ref={form} onSubmit={sendEmail}>
                            <div className="col-12 ">
                                <input type="text" className="form-control ae-comment-form" placeholder="Enter Your E-mail" name="user_email" id="formGroupExampleInput"/>
                            </div>
                            <div className="col-12 text-center pt-3">
                                <button className="ae-btn" type='submit' value="Send" onClick={subscribeSuccessfully}>Get Notification</button>
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
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutEvents;