import React from 'react';
import pic1 from '../../../assets/04.jpg';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='container d-md-flex flex-md-column-reverse'>


            <img className='img-fluid border border-danger' src={pic1} alt="" />
            <Link className='mx-auto mb-3 mt-3' to='/'>
                <Button className='px-3 py-2 ' variant="primary">Error 404! Not Found. Back to Home.....</Button>
            </Link>

        </div>
    );
};

export default Error;