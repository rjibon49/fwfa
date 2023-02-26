import React from 'react';
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
import UseCommentData from '../../hooks/UseCommentData';

const BlogCommentData = () => {

    const [commentData] =UseCommentData();

    return (
        <Container>
            <p><i className="fas fa-heart me-3" style={{color:"#C24D3A"}}></i>Charlie & 6 like this </p>
            {
                commentData.map( cdata => <div className='' key={cdata.id}>
                    <Row className='my-4 pb-3 border-bottom border-1 border-scondary'>
                        <Col xl={3} lg={4} md={4} sm={12} xs={12}>
                            <div className=''>
                                <Image src={cdata.images} className="b-comment-image" />
                            </div>
                        </Col>
                        <Col xl={9} lg={8} md={8} sm={12} xs={12}>
                            <div className='py-2'>
                                <h6 className='pb-1'>{cdata.name} <span style={{color:"white", fontSize:"10px", marginLeft:"10px"}}>{cdata.time}</span></h6>
                                <p className='b-comment-details pb-1'>{cdata.details}</p>
                                <div className='d-flex justify-content-between'>
                                <span style={{color:"white", fontSize:"10px", marginLeft:"10px"}}>{cdata.date}</span>
                                <span style={{color:"white", fontSize:"10px", marginLeft:"10px"}}>Reply</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>)
            }

                    <Form className='commentFrom'>
                        <Row className="mb-3">
                            <Form.Group className="mb-3">
                                {/* <Form.Label>What topic do you want to discus?</Form.Label> */}
                                <Form.Control as="textarea" className='b-comment-form' rows={8} placeholder='Type here. . .' />
                            </Form.Group>
                            <Form.Group as={Col} className="mb-3">
                                {/* <Form.Label>Email</Form.Label> */}
                                <Form.Control type="text" className='b-comment-form' placeholder="Name:" />
                            </Form.Group>

                            <Form.Group as={Col} className="mb-3">
                                {/* <Form.Label>Password</Form.Label> */}
                                <Form.Control type="email" className='b-comment-form' placeholder="E-mail:" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                {/* <Form.Label>Your Website URL (Optional) </Form.Label> */}
                                <Form.Control type="text" className='b-comment-form' placeholder="Website (Optional):" />
                            </Form.Group>
                        </Row>
                        <Button className='event-bg px-4 py-2 border-0'>Post Comment</Button>
                    </Form>
        </Container>
    );
};

export default BlogCommentData;