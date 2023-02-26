import React, { useEffect } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import UseProgram from '../../hooks/UseProgram';
import { Link } from 'react-router-dom';
import Aos from 'aos';
// import parse from 'html-react-parser';

const ProgramLists = () => {
    
    useEffect(() => {
        Aos.init({
            offset: 100,
            duration: 1000,
            easing:'ease-in'
        });
        
    },[])
    const [program] = UseProgram();
    console.log(program);

    return (
        <section className='my-5'>
            <div className='text-center'>
                <h2 className='page-title'>Programs We Offer</h2>
            </div>
            <div className='my-5'>
                <Container className=''>
                    <Row>
                        {
                            program.map (pg => <Col xs={12} sm={12} md={12} lg={6} xl={6} key={pg.programId}>
                                <div className='program-card' data-aos="zoom-in">
                                    <div className=''>
                                        <Image src={pg.image} className='images'/>
                                    </div>
                                    <div className='py-4'>
                                        <p className='program-details'><span className='fw-bold'>{pg.programName}</span>{pg.programDescription}</p>
                                    </div>
                                    <div className='text-center'>
                                        <Link to={`/signupStudent`}><Button className='bg-green px-5 py-3 border-0 align-self-end btn-block'><p className='fw-bold'>Join Now</p></Button></Link>
                                    </div>
                                </div>
                            </Col>)
                        }
                    </Row>
                </Container>
            </div>
        </section>
    );
};

export default ProgramLists;