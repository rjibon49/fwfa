import React from 'react';
import { Container} from 'react-bootstrap';
import ReactPlayer from 'react-player';
import FWFAExplainerVideo from './../../videos/FWFAExplainerVideo.mp4';

const Banner = () => {
    return (
        <div>
            <div>
                <h2 className='section-title'>We are passionate about our mission and we strive for excellence</h2>
            </div>
                <Container className='my-5 green-bg'>
                <ReactPlayer
                className="react-pl"
                width='100%'
                height='600px'
                controls
                url={FWFAExplainerVideo}
                light={true}
                // playIcon
                />
            </Container>
        </div>
    );
};

export default Banner;