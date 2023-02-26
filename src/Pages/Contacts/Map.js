import React from 'react';

const Map = () => {
    return (
        <div className='mb-5 map'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13267.065216271896!2d-116.36793197582801!3d33.76670432896977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dafc5a94382c97%3A0x6c5f41e6f2b7596d!2sCoachella%20Valley!5e0!3m2!1sen!2sbd!4v1643098571537!5m2!1sen!2sbd"
              width="100%"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
        </div>
    );
};

export default Map;