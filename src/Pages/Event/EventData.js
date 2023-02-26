import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import parse from 'html-react-parser';

const EventData = ({event}) => {
    const {_id, eventName, undefined, eventImage} = event;

    useEffect(() => {
        Aos.init({
            offset: 100,
            duration: 1000,
            easing:'ease-in'
        });
        
    },[])


    return (
        <div className='p-xl-5 p-lg-4 p-md-2 p-sm-0 p-xs-0 green-bg mb-5 pbshadow me-xl-5 me-md-1' data-aos="zoom-in">
            <div className=''>
                <ReactPlayer 
                    width='100%'
                    height='100%'
                    controls
                    url={eventImage}
                    />
            </div>
            
            <div>
                {/* <Link as={Link} to={`/article/${_id}`} className=''> <h5 className='post-title'>{ArticleName}</h5></Link> */}
                <h5 className='event-post-title'>{eventName}</h5>

                {/* <div className='pb-4 ps-4'>
                    <span className='pe-5' style={{fontSize:"10px"}}>Sunday, June-06</span>
                    <span className='ps-5' style={{fontSize:"10px"}}>11:30 - 3:00</span>
                </div> */}

                {/* <p className='post-details'>{parse(`${undefined.slice(0, 400)}`)}<Link as={Link} to={`/article/${_id}`} className='e-link'> Continue Reading</Link></p>  */}

                <p className='event-post-details'>{parse(`${undefined}`)}</p>
            </div>
        </div>
    );
};

export default EventData;