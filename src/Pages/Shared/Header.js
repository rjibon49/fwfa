import React from 'react';
import { Col, Container, Image, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './../Style/Style.css'
import logo from './../../images/logo/fwfa-logo.png'
import useAuth from '../../hooks/useAuth';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import facebook from '../../images/social/facebook.png'
import tumblr from '../../images/social/fa-brands_tumblr-square.png'
import instagram from '../../images/social/instagram.png'
import linkedin from '../../images/social/linkedin.png'
import pinterest from '../../images/social/pinterest.png'
import quora from '../../images/social/quora.png'
import twitter from '../../images/social/twitter-bird.png'
import youtube from '../../images/social/youtube.png'

const Header = () => {
    const { user, logout } = useAuth();

    const hancleClickLinkedin = () => {
        window.open("https://www.linkedin.com/company/71980528/");
    };

    return (
    <>
        <div className='top-head mb-3'>
            <Container className='my-2'>
                <Row className=''>
                    <Col xs={6} sm={6} md={6} lg={3} xl={3}>
                        <div className='pt-3 pt-lg-4'>
                            <p className='top-text mb-2'><i className="fas fa-phone-alt me-2"></i> (617) 371-7731 (Text Only)</p>
                            <p className='top-text'><i className="fas fa-location-arrow me-2"></i> Greater Palm Spring, CA-USA</p>
                        </div>
                    </Col>
                    <Col lg={4} xl={4}>
                    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300 , margin: '25px auto 0'}}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Here"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={5} xl={5}>
                        <div className="text-end py-1 top-text">
                            <p className='text-center'>English (US)</p>
                            <a href="https://fb.me/FWFA.501c3" rel='noreferrer' target="_blank" className='square px-3'><Image src={facebook} alt="Facebook"/></a>
                            <a href="https://www.tumblr.com/blog/fwfa" rel='noreferrer' target="_blank" className='square'><Image src={tumblr} alt="tumblr"/></a>
                            <a href="https://www.instagram.com/fwfa501c3/" rel='noreferrer' target="_blank" className='square'><Image src={instagram} alt="instagram"/></a>
                            <a href="https://www.linkedin.com/company/fwfa" rel='noreferrer' target="_blank" className='square'><Image src={linkedin} alt="linkedin"/></a>
                            <a href="https://www.pinterest.com/financialwellnessforall0129" rel='noreferrer' target="_blank" className='square'><Image src={pinterest} alt="pinterest"/></a>
                            <a href="https://www.quora.com/Financialwellnessforall" rel='noreferrer' target="_blank" className='square'><Image src={quora} alt="quora"/></a>
                            <a href="https://twitter.com/fwfa501c3" rel='noreferrer' target="_blank" className='square'><Image src={twitter} alt="twitter"/></a>
                            <a href="https://www.youtube.com/channel/UCWtwSa0mZBFxKkl5ukmQdMg" rel='noreferrer' target="_blank" className='square'><Image src={youtube} alt="youtube"/></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <Container>
        <Navbar collapseOnSelect expand="lg" bg="" variant="light" sticky="top" className=" mt-1 bg-white pb-4" style={{zIndex:"10"}}>
            
                <Navbar.Brand as={Link} to="/">
                    <img src={logo} alt="" className='logo'/>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto menu" >
                            <Nav.Link as={Link} to="/home" className="">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about" className="">About Us</Nav.Link>
                            <Nav.Link as={Link} to="/program" className="">Program</Nav.Link>
                            {/* <Nav.Link as={Link} to="/donation" className="">Donation</Nav.Link> */}
                            <Nav.Link as={Link} to="/collaborative" className="">Collaborative Partnership</Nav.Link>
                            <Nav.Link as={Link} to="/events" className="">Events</Nav.Link>
                            <Nav.Link as={Link} to="/articles" className="">Blog</Nav.Link>
                            <Nav.Link as={Link} to="/contacts" className="">Contact Us</Nav.Link>
                            {user?.email && <Nav.Link as={Link} to="/dashboard" className="">Dashboard</Nav.Link>}

                            {user.email ? <Nav.Link as={Link} to="/" className="" onClick={logout}>Logout</Nav.Link> : <Nav.Link as={Link} to="/superadmin" className="">Signin</Nav.Link>}
                            {/* {user.email ? <Nav.Link as={Link} to="/" className="" onClick={logout}></Nav.Link> : <Nav.Link as={Link} to="/signupfwfa" className="">Signup</Nav.Link>} */}

                            {/* {
                                user?.email &&
                                    <NavDropdown title="Profile" id="basic-nav-dropdown" style={{color:"white"}}>
                                        <Nav className="flex-column text-center">
                                            <span><small>Welcome</small></span>
                                            <span className="fw-bold">{user.displayName}</span>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item as={Link} to="/home" onClick={logout}>Logout</NavDropdown.Item>
                                        </Nav>
                                    </NavDropdown>
                            } */}

                            <a href="https://www.paypal.com/donate/?hosted_button_id=PWEN8NYUJZKS6" rel='noreferrer' target="_top" className='donation'>Donation</a> 
                                {/*  :
                                <NavDropdown title="User" id="basic-nav-dropdown" className=''>
                                    <NavDropdown.Item as={Link} to="/register">Register</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/superAdmin">Login</NavDropdown.Item>
                                </NavDropdown> */}
                                

                            {/* <NavDropdown title="Login" id="basic-nav-dropdown" className=''>
                                <NavDropdown.Item as={Link} to="/signinTeacher">Teacher</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/signinStudent">Student</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/signinAffiliate">Affiliate</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Sign Up" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/signupTeacher">Teacher</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/signupStudent">Student</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/signupAffiliate">Affiliate</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                     
            
      </Navbar>
      </Container>
    </>
    );
};

export default Header;