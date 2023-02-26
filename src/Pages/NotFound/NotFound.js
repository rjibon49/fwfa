import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <Container>
            <div className='notfound'>
                <h1 style={{fontSize:"175px", color:"#505050", marginBottom:"20px"}}>4O4</h1>
                <Link to="/home"><button className="userbtn">Go Back Home</button></Link>
            </div>
        </Container>
    );
};

export default NotFound;