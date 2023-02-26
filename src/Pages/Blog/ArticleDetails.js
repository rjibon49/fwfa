import { Input } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import { Link, useParams } from 'react-router-dom';
import GoToTop from '../../GotoTop';
import UseBlogs from '../../hooks/UseBlogs';
import blogi from './../../images/blog/blog.png'
import BlogCommentData from './BlogCommentData';
import parse from 'html-react-parser';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';
import UseArticles from '../../hooks/UseArticles';
import facebook from '../../images/social/facebook.png'
import tumblr from '../../images/social/fa-brands_tumblr-square.png'
import instagram from '../../images/social/instagram.png'
import linkedin from '../../images/social/linkedin.png'
import pinterest from '../../images/social/pinterest.png'
import quora from '../../images/social/quora.png'
import twitter from '../../images/social/twitter-bird.png'
import youtube from '../../images/social/youtube.png'

const ariaLabel = { 'aria-label': 'description' };

const ArticleDetails = () => {

    const {articleId} =useParams();

    const [articleDetails, setArticleDetails] = useState({});

    useEffect(() => {
        const url = `https://secret-peak-05523.herokuapp.com/article/${articleId}`;
        fetch(url)
        .then(res => res.json())
        .then(data =>setArticleDetails(data))
    },[articleId]);

    const {ArticleName, undefined, image} = articleDetails; 

    const [bls] = UseBlogs();

    const [articles] = UseArticles();

    return (
        <>
        <Header />
        <section className='green-bg mb-5'>
            <Container className='py-5'>
                <Row >
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Image src={blogi} className='images'/>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <div className='text-center green horizontal'>
                            <h2 className='banner-title'>
                                Our Blog
                            </h2>
                            <p className='banner-details mt-5'>
                            Our curriculum has been designed to engage students regardless of their ethnicity, race, family structure, or socio-economic status. It is also designed to be an interactive experience for all with the aid of visuals and extensive narratives where necessary.
                            </p>
                        </div>
                    </Col>
                </Row>
             </Container>
        </section>

        <Container>
            <Row>
                <Col xs={12} sm={12} md={7} lg={8} xl={8}>
                    <div className='p-5 green-bg mb-5 rounded pbshadow me-5'>
                    <ReactPlayer 
                    width='100%'
                    height='100%'
                    controls
                    url={image}
                    />
                        {/* <div className='text-center'>
                            <div className='py-2'>
                                <i className="fas fa-user-circle mx-2 fs-5 green"></i>{category}
                                <i className=" mx-2 fs-4 green">|</i>
                                <i className="far fa-comment-dots mx-2 fs-5 green">03 Comments</i>
                            </div>
                        </div> */}
                        <div className='pb-5'>
                            <h5 className='post-title'>{ArticleName}</h5>
                            <p className='post-details'>{parse(`${undefined}`)}</p> 
                        </div>

                        {/* <BlogCommentData />   */}

                    </div>
                    
                </Col>
                <Col xs={12} sm={12} md={5} lg={4} xl={4}>
                    <div className='green-bg text-center pbshadow py-4 mb-5'>
                        <Input placeholder="Search here . . ." inputProps={ariaLabel} className="w-75"/>
                    </div>
                    <div className='green-bg my-3 pbshadow text-center'>
                        <div className='py-5'>
                            <h6 className='pb-3 fw-bold fs-4 b-categoryItemT'>Category</h6>

                            <Link to={`/school`}><p className='b-categoryItem'>School</p></Link>
                            <Link to={`/university`}><p className='b-categoryItem'>University</p></Link>
                            <Link to={`/business`}><p className='b-categoryItem'>Business</p></Link>
                            <Link to={`/nonprofit`}><p className='b-categoryItem'>Non-Profit</p></Link>
                            <Link to={`/employee`}><p className='b-categoryItem'>Employee</p></Link>
                        </div>
                    </div>
                    <div className='green-bg pbshadow'>
                        <div className='my-5 py-4'>
                            <div className='text-center pb-3 green'>
                                <h5 className='py-3'>Follow</h5>
                                    <Col  className='pb-3'>
                                        <a href="https://fb.me/FWFA.501c3" rel='noreferrer' target="_blank" className='facebook'><Image src={facebook} alt="Facebook"/></a>
                                        <a href="https://twitter.com/fwfa501c3" rel='noreferrer' target="_blank" className='square'><Image src={twitter} alt="twitter"/></a>
                                        <a href="https://www.instagram.com/fwfa501c3/" rel='noreferrer' target="_blank" className='square'><Image src={instagram} alt="instagram"/></a>
                                        <a href="https://www.linkedin.com/company/fwfa" rel='noreferrer' target="_blank" className='square'><Image src={linkedin} alt="linkedin"/></a>
                                    </Col>
                                    <Col className='mt-3'> 
                                        <a href="https://www.pinterest.com/financialwellnessforall0129" rel='noreferrer' target="_blank" className='square'><Image src={pinterest} alt="pinterest"/></a>
                                        <a href="https://www.tumblr.com/blog/fwfa" rel='noreferrer' target="_blank" className='square'><Image src={tumblr} alt="tumblr"/></a>
                                        <a href="https://www.quora.com/Financialwellnessforall" rel='noreferrer' target="_blank" className='square'><Image src={quora} alt="quora"/></a>
                                        <a href="https://www.youtube.com/channel/UCWtwSa0mZBFxKkl5ukmQdMg" rel='noreferrer' target="_blank" className='square'><Image src={youtube} alt="youtube"/></a>
                                    </Col>
                            </div>
                        </div>
                    </div>

                    <div className='green-bg pbshadow'>
                        <div className='my-5 py-4'>
                            <div className=' pb-3 px-4'>
                                <h5 className='py-3 '>Recent Post</h5>
                                {
                                    bls.map ( blo => <Row key={blo.id}>
                                        <Col lg={5} xl={5}>
                                            <div className=''>
                                                <Image src={blo.images} className='images my-3'/>
                                            </div>
                                        </Col>
                                        <Col lg={7} xl={7}>
                                            <div className='my-3'>
                                                <h5 className='recent-title'>{blo.title.slice(0,40)}</h5>
                                                <h6 className="recent-category">{blo.category}</h6>
                                            </div>
                                        </Col>
                                    </Row>)
                                }
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        <GoToTop />
        <Footer />
        </>
    );
};

export default ArticleDetails;