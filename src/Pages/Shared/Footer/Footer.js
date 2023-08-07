import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { FaBeer, FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import pic1 from '../../../assets/learn It footer.png';

const Footer = () => {
    return (
        <div className='border rounded mb-1 bg-dark mt-3'>
            {/* <div className='d-flex justify-content-between align-items-center' >
                <div className='w-50 ms-auto'>
                    <img className='' style={{ height: "120px", width: "120px" }} src={pic1} alt="" />
                </div>


            </div> */}


            <footer className="">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><Link to='/' className="nav-link px-2 text-body-secondary">Home</Link></li>
                    <li className="nav-item"><Link to='/courses' className="nav-link px-2 text-body-secondary">Courses</Link></li>
                    <li className="nav-item"><Link to='/blog' className="nav-link px-2 text-body-secondary">Blog</Link></li>
                    <li className="nav-item"><Link to='/faq' className="nav-link px-2 text-body-secondary">FAQs</Link></li>
                    <li className="nav-item"><Link to='/' className="nav-link px-2 text-body-secondary">About</Link></li>

                </ul>


                <p className="text-center text-white">© Learn.IT 2023</p>
                <div className='w-50 p-2 ms-auto'>
                    <span className=' d-flex align-items-center justify-content-end'>

                        <a href="https://web.facebook.com/"><FaFacebookF className='ms-auto text-white fs-5 me-3'></FaFacebookF></a>
                        <a href="https://www.youtube.com/"><FaYoutube className='ms-auto text-white fs-5 me-3'></FaYoutube></a>
                        <a href="https://twitter.com/"><FaTwitter className='ms-auto text-white fs-5 me-3'></FaTwitter></a>

                        {/* <FaYoutube className='text-white fs-5 me-3'></FaYoutube>
                        <FaTwitter className='text-white fs-5 me-2'></FaTwitter> */}
                    </span>
                </div>
            </footer>
        </div>
    );
};

export default Footer;