import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import GoToTop from '../../../../GotoTop';

const School = ({school}) => {

    const {id, title, images, category, details} = school;

    return (
        <>
        <div className='pb-5 green-bg mb-5 pbshadow me-xl-5 me-lg-4 me-md-0 me-sm-0' >
            <div className=''>
                <Image src={images} className='images'/>
            </div>
            
            <div>
                <Link to={`/blog/${school.id}`} className=''> <h5 className='post-title'>{title}</h5></Link>
                <p className='post-details'>{details} <Link to={`/school/${id}`} style={{color:"#F37559"}}> ..Keep Reading</Link></p>
            </div>
            <div className='text-center'>
                <div className='py-2'>
                <Link to={`/school`} style={{color:"#F37559"}}><i className="fas fa-user-circle mx-2 fs-5 green"></i>{category}</Link>
                    <i className=" mx-2 fs-4 green">|</i>
                    <i className="far fa-comment-dots mx-2 fs-5 green"> 03 Comments</i>
                </div>
            </div>
            <GoToTop />
        </div>
        </>
    );
};

export default School;