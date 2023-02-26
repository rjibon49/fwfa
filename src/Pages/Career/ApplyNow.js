import React from 'react';
import { Container, Button } from 'react-bootstrap';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';

const ApplyNow = () => {

    const onChange = (e) => {
        const files = e.target.files;
        const file = files[0];
    }
    return (
        <>
        <Header></Header>

        <Container className='p-5'>
            <h1 className='event-title'>Please Upload Your Resume</h1>
            <div className='ae-form py-5' style={{backgroundColor:"#F9F8F8", height:"50vh", boxShadow:"0 9px 8px 0 rgba(0, 0, 0, 0.2), 0 15px 13px 0 rgba(0, 0, 0, 0.19)", borderRadius:"10px", fontSize:"50px"}}>
                {/* <input type="file" accept="application/pdf" onChange={onchange} name="cv" value="" />
                <i class="far fa-file-pdf"></i>
                <p style={{marginTop:"20px", fontSize:"14px"}}>Please upload your resume pdf format</p> */}
                <h1>Under Construction</h1>
                <p>Don't panic we are back soon.</p>
                <p>Thank you</p>
            </div>
            <div className='mt-5 text-end'>
                <Button className='app-btn'>Apply</Button>
            </div>
        </Container>

        <Footer></Footer>
        </>
    );
};

export default ApplyNow;