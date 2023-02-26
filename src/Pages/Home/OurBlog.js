import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import ReactPlayer from 'react-player';
import UseArticles from '../../hooks/UseArticles';
import parse from 'html-react-parser';

const OurBlog = () => {

    // const [bitem] = UseBlogs();
    const [article] = UseArticles();

    return (
        <>
        <div className='my-5'>
            <div className='text-center green pb-5'>
                <h2 className='page-title'>Our Blog</h2>
            </div>
            <Container>
                <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                            }}
                        pagination={{
                        clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            }}
                        modules={[ Pagination, Navigation]} 
                        className="mySwiper pb-5"
                    >
                        {
                            article.map(art => <SwiperSlide key={art._id}> 
                                <div className='blog-card'>
                                    <ReactPlayer 
                                        width='100%'
                                        height='100%'
                                        controls
                                        url={art.image}
                                        />
                                    <div>
                            <Link as={Link} to={`/article/${art._id}`} className=''> <h5 className='post-title'>{art.ArticleName}</h5></Link>
                            <p className='post-details'>{parse(`${art.undefined.slice(0, 200)} . . .`)}<Link as={Link} to={`/article/${art._id}`} style={{color:"#26e761"}}> Continue Reading</Link></p> 
                        </div>
                                    </div>
                            </SwiperSlide>).slice(0, 5)
                        }    
                            
                </Swiper>
            </Container>
            

            
                </div>
        </>
    );
};

export default OurBlog;