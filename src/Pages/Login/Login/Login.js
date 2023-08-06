import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { Container } from 'react-bootstrap';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';




const Login = () => {

    const [error, setError] = useState('');
    const { signIn, setLoading, providerLogin } = useContext(AuthContext);
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
                    toast.error('Your Email is not verfied. Please verify your email address')
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

    const googleProvider = new GoogleAuthProvider();

    const handleSignInWithGoogle = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                if (user.emailVerified) {
                    navigate(from, { replace: true })
                }

                else {
                    toast.error('Your Email is not verfied. Please verify your email address')
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


    const githubProvider = new GithubAuthProvider();

    const handleSignInWithGithub = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');

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

            <Form className='' onSubmit={handleSubmit}>


                <Form.Group className="mb-3 col col-md-4 mx-auto mt-3" controlId="formBasicEmail">
                    <Form.Label className='h2 mb-3'>Please Login Here</Form.Label>
                    <br />
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
                        Login with Google or Github?
                        <br />
                        <div className='mt-2 mb-2'>
                            <button className='border-0 bg-transparent'><FaGoogle onClick={handleSignInWithGoogle} className='fs-4 text-primary me-3'></FaGoogle></button>
                            <button className='border-0 bg-transparent'><FaGithub onClick={handleSignInWithGithub} className='fs-4 text-primary me-3'></FaGithub></button>
                        </div>

                    </Form.Text>


                    <Form.Text className=''>
                        New to Learn IT? Please <Link className='fw-semibold' to='/register'>Register</Link> Here.
                    </Form.Text>


                    <Form.Text className="text-danger">
                        <h6>{error}</h6>

                    </Form.Text>
                </Form.Group>



            </Form>
        </Container>

    );
};

export default Login;