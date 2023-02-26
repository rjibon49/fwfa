import React from 'react';
import { Button, Container, Image} from 'react-bootstrap';
import signinbanner from '../../images/banner/lms.png'

const SigninBanner = () => {
    return (
        <div className='mt-5'>
            <Container className='mt-5 bbimg'>
                <Image src={signinbanner} className="aboutevent-img"/>
                <div className='sb-form pt-5'>
                    <Button className='signin-btn'><p className='p-0 m-0'>Sign in LMS</p></Button>
                    <p className='py-4' style={{color:"#000000ab"}}>Don’t have an account? <b>Sign up</b> </p>
                </div>
            </Container>
        </div>
    );
};

export default SigninBanner;