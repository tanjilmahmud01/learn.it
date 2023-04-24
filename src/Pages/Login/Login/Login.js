import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { Container } from 'react-bootstrap';




const Login = () => {

    const [error, setError] = useState('');
    const { signIn, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                if (user.emailVerified) {
                    navigate(from, { replace: true })
                }

                else {
                    toast.error('Your Email is not verfied. Please verify our email address')
                }
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    return (

        <Container>
            <h2>Please Login here</h2>
            <Form className='' onSubmit={handleSubmit}>


                <Form.Group className="mb-3 col col-md-4 mx-auto" controlId="formBasicEmail">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Email" />

                </Form.Group>


                <Form.Group className="mb-3 col col-md-4 mx-auto" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>




                <Form.Group className='col col-md-4 mx-auto'>
                    <Button variant="primary py-2 px-3 "
                        type="submit"

                        className=''
                    >
                        Login
                    </Button>
                </Form.Group>

                <Form.Group className='mt-3 col col-md-4 mx-auto'>
                    <Form.Text className=''>
                        New to Learn IT? Please <Link className='fw-semibold' to='/register'>Register</Link> Here.
                    </Form.Text>


                    <Form.Text className="text-danger">
                        {error}
                    </Form.Text>
                </Form.Group>



            </Form>
        </Container>

    );
};

export default Login;