import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    console.log(user);

    if (loading) {
        return (
            <div className=' mt-3' >

                <div className='ms-auto w-50'>
                    <Spinner className='' animation="border" variant="primary" />
                </div>



            </div>

        );
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }

    return children;
};

export default PrivateRoute;