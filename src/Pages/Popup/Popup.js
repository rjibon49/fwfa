import React from 'react';
import { Image } from 'react-bootstrap';
// import event1 from '../../images/Event/Event-poster-1.jpg'
import popup from '../../images/PopUp/PopUp0.1.jpg'
import 'animate.css';

function Popup(props) {
    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner animate__animated animate__zoomIn'>
                <button className='close-btn' onClick={() => props.setTrigger(false)}>X</button>
                { props.children}

                <Image src={popup} alt="EventPoster" className='posterImg'/>
                {/* <p className='enroll'>Enroll Here</p> */}
                <a href="http://fwfacourse.com/" target="_blank" rel='noreferrer' className='webLink'>FWFACourse.com</a>
            </div>
        </div>
    ) : "" ;
};

export default Popup;