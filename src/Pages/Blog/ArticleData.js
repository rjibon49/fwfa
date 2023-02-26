import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import parse from 'html-react-parser';

const ArticleData = ({article}) => {
    const {_id, ArticleName, undefined, image, createdAt} = article;

    useEffect(() => {
        Aos.init({
            offset: 100,
            duration: 1000,
            easing:'ease-in'
        });
        
    },[])


    return (
        <div className='p-5 green-bg mb-5 pbshadow me-xl-5 me-md-1' data-aos="zoom-in">
            <div className=''>
                <ReactPlayer 
                    width='100%'
                    height='100%'
                    controls
                    url={image}
                    />
            </div>
            
            <div>
                <Link as={Link} to={`/article/${_id}`} className=''> <h5 className='post-title'>{ArticleName}</h5></Link>
                <div className='pb-4 ps-4'>
                                <span className='pe-5' style={{fontSize:"10px"}}>Sunday, June-06 {createdAt}</span>
                                <span className='ps-5' style={{fontSize:"10px"}}>11:30 - 3:00</span>
                            </div>
                <p className='post-details'>{parse(`${undefined.slice(0, 400)}`)}<Link as={Link} to={`/article/${_id}`} className='e-link'> Continue Reading</Link></p> 
            </div>
        </div>
    );
};

export default ArticleData;