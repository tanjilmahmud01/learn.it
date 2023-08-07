import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import logo from './learn It.png';
import '../Header/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faSignOutAlt, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

import { GoogleAuthProvider } from 'firebase/auth';





const Header = () => {



    const [showDropdown, setShowDropdown] = useState(false);
    const { user, providerLogin, logOut } = useContext(AuthContext);
    // const [user, setUser] = useState(null);



    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }


    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Signed in as: {user?.displayName}
        </Tooltip>
    );




    return (
        <div>

            <Navbar className='container bg-white' collapseOnSelect expand="lg" bg="light" variant="light">

                <Container className='shadow bg-body-tertiary rounded'>

                    <Navbar.Brand className='' href="#home">
                        <Link to='/'>
                            <img
                                src={logo}
                                className="d-inline-block align-top logo-img"
                                alt="Learn.IT logo"
                            />
                        </Link>

                    </Navbar.Brand>




                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="me-5">
                            {/* <Nav.Link><Link to='/login'>Login</Link></Nav.Link> */}
                            {/* <Link className="nav-link hover-underline-animation" id="RouterNavLink" to="/register">Register</Link> */}

                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "nav-link hover-underline-animation" : isActive ? "nav-link active fw-semibold text-success" : "nav-link hover-underline-animation fw-semibold text-secondary me-2"
                                }
                            >
                                HOME
                            </NavLink>

                            <NavLink
                                to="/faq"
                                className={({ isActive, isPending }) =>
                                    isPending ? "nav-link hover-underline-animation" : isActive ? "nav-link active fw-semibold text-success" : "nav-link hover-underline-animation fw-semibold text-secondary me-2"
                                }
                            >
                                FAQ
                            </NavLink>

                            <NavLink
                                to="/blog"
                                className={({ isActive, isPending }) =>
                                    isPending ? "nav-link hover-underline-animation" : isActive ? "nav-link active fw-semibold text-success" : "nav-link hover-underline-animation fw-semibold text-secondary me-2"
                                }
                            >
                                BLOG
                            </NavLink>




                            <NavDropdown className='fw-semibold hover-underline-animation ms-2' show={showDropdown} onMouseEnter={() => setShowDropdown(true)}
                                onMouseLeave={() => setShowDropdown(false)} title="COURSES" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">

                                    <Link
                                        to="/courses"
                                        className="dropdown-option-no-underline"
                                    >
                                        See All Categories
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    <Link
                                        to="/blog"
                                        className="dropdown-option-no-underline"
                                    >
                                        Blog
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3"><Link
                                    to="/faq"
                                    className="dropdown-option-no-underline"
                                >
                                    FAQ
                                </Link></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    <Link
                                        to="/login"
                                        className="dropdown-option-no-underline"
                                    >
                                        Login
                                    </Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>




                        <Nav className='ms-auto'>
                            {/* <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link> */}

                            {
                                user?.uid
                                    ?
                                    <div className='d-flex flex-column align-items-start'>
                                        <div className=' d-flex align-items-center justify-content-start mb-2'>
                                            <span className='fw-semibold me-2 p-2 w-50'>Welcome, {user?.displayName}</span>
                                            {console.log(user)}
                                            <div className='w-25 '>
                                                {user?.photoURL

                                                    ?
                                                    // for tooltip use OverlayTrigger element
                                                    <OverlayTrigger
                                                        placement="right"
                                                        delay={{ show: 250, hide: 400 }}
                                                        overlay={renderTooltip}

                                                    >

                                                        <NavLink to='/profile'>
                                                            <Image
                                                                style={{ height: '40px' }}
                                                                roundedCircle
                                                                src={user?.photoURL}>

                                                            </Image>
                                                        </NavLink>

                                                    </OverlayTrigger>

                                                    :
                                                    <NavLink to='/profile'>
                                                        <FontAwesomeIcon icon={faUserTie}></FontAwesomeIcon>
                                                    </NavLink>

                                                }
                                            </div>

                                        </div>




                                        {/* <Button onClick={handleLogOut} className='ms-2 fw-semibold' variant='dark'>Logout</Button> */}

                                        <Button onClick={handleLogOut} className='ms-2 fw-semibold' variant='dark'><FontAwesomeIcon icon={faSignOutAlt} className='me-2'></FontAwesomeIcon>Logout</Button>



                                    </div>

                                    :
                                    <div className='d-flex flex-lg-row flex-sm-column justify-content-between align-items-center '>
                                        <NavLink
                                            to="/login"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "nav-link hover-underline-animation" : isActive ? "nav-link active fw-semibold text-success" : "nav-link hover-underline-animation fw-semibold text-secondary me-2"
                                            }
                                        >
                                            LOGIN
                                        </NavLink>
                                        <NavLink
                                            to="/register"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "nav-link hover-underline-animation" : isActive ? "nav-link active fw-semibold text-success" : "nav-link hover-underline-animation fw-semibold text-secondary me-2"
                                            }
                                        >
                                            REGISTER
                                        </NavLink>

                                        <div>
                                            <div>

                                                <input className='checkbox' type="checkbox" name="" id="checkbox" />
                                                <label htmlFor="checkbox" className="checkbox-label">
                                                    <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>
                                                    <FontAwesomeIcon icon={faSun}></FontAwesomeIcon>
                                                    <span class="ball"></span>
                                                </label>
                                            </div>
                                        </div>

                                    </div>


                            }
                        </Nav>


                    </Navbar.Collapse>
                </Container>

            </Navbar>



            {/* <Navbar className='container mt-3 border rounded' style={myStyle} expand="lg" variant='light'>
                <Container className=''>
                    <Navbar.Brand className='w-50' href="#home">

                        <img
                            src={logo}
                            className="d-inline-block align-top logo-img"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className='' id="basic-navbar-nav">

                        <Nav className="ms-auto border w-100">
                            <Nav.Link className='fw-semibold' href="#home">HOME</Nav.Link>
                            <NavDropdown className='fw-semibold ms-4' show={showDropdown} onMouseEnter={() => setShowDropdown(true)}
                                onMouseLeave={() => setShowDropdown(false)} title="COURSES" id="basic-nav-dropdown">
                                <NavDropdown.Item className='' href="#action/3.1">Action Hero</NavDropdown.Item>
                                <NavDropdown.Item className='' href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item className='' href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className='' href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className='fw-semibold ms-4' href="#link">BLOG</Nav.Link>
                            <Nav.Link className='fw-semibold ms-4' href="#link">FAQ</Nav.Link>

                            <Nav.Link className=''>
                                {
                                    user?.uid
                                        ?
                                        <div className='d-flex align-items-center justify-content-center'>
                                            <span className='me-1'> Welcome, {user?.displayName}</span>
                                            <Button variant="warning" onClick={handleLogOut}>Logout</Button>
                                        </div>

                                        :
                                        <div className='d-flex flex-sm-column justify-content-sm-around flex-lg-row '>

                                            <Link to='/login' style={{ textDecoration: 'none', color: 'rgb(0 0 0 / 55%)' }} className='fw-semibold ms-4'>LOGIN</Link>
                                            <Link to='/register' className='fw-semibold ms-4' style={{ textDecoration: 'none', color: 'rgb(0 0 0 / 55%)' }} >REGISTER</Link>

                                        </div>

                                }
                            </Nav.Link>

                            <Navbar.Text className='ms-5'>

                                {user?.photoURL

                                    ?

                                    <OverlayTrigger
                                        placement="right"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={renderTooltip}
                                    >
                                        <Image
                                            style={{ height: '30px' }}
                                            roundedCircle
                                            src={user.photoURL}>
                                        </Image>
                                    </OverlayTrigger>

                                    : <FontAwesomeIcon icon={faUserTie}></FontAwesomeIcon>
                                }


                            </Navbar.Text>

                            <Navbar.Text className='ms-5'><Button onClick={handleGoogleSignIn}>Google Sign In</Button></Navbar.Text>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}

        </div >
    );
};

export default Header;