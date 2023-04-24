import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';


const Register = () => {

    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);

    const { createUser, verifyEmail, updateUserProfile } = useContext(AuthContext);


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                setError('');
                form.reset();
                handleUpdateUserProfile(name, photoURL);
                handleEmailVerification();
                toast.success('A verfication Email has been sent to your email address. Please check and confirm your inbox and spam folder.')

            })
            .catch(error => {
                setError(error.message)
            });

    }


    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => { console.log('Updated Profile Successfully') })
            .catch(error => console.error(error));
    }

    const handleEmailVerification = () => {
        verifyEmail()
            .then(() => {
                console.log('Email verification sent Successfully')
            })
            .catch(error => console.error(error));
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked);
    }



    return (
        <Container className='mt-3'>
            <h2>Please Register Here</h2>
            <Form className='' onSubmit={handleSubmit}>
                <Form.Group className="mb-3 col col-md-4 mx-auto" controlId="formBasicEmail">
                    <Form.Label>Enter Your Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Name" />

                </Form.Group>
                <Form.Group className="mb-3 col col-md-4 mx-auto" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name='photoURL' type="text" placeholder="URL" />

                </Form.Group>
                <Form.Group className="mb-3 col col-md-4 mx-auto" controlId="formBasicEmail">
                    <Form.Label>Enter Your Email</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Email" />

                </Form.Group>


                <Form.Group className="mb-3 col col-md-4 mx-auto" controlId="formBasicPassword">
                    <Form.Label>Enter a Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3 col col-md-4 mx-auto" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox"
                        onClick={handleAccepted}
                        label={<>Please Accept Our <Link to='/terms'>Terms and Conditions</Link></>} />
                </Form.Group>


                <Form.Group className='col col-md-4 mx-auto'>
                    <Button variant="primary py-2 px-3 "
                        type="submit"
                        disabled={!accepted}
                        className=''
                    >
                        Register
                    </Button>
                </Form.Group>



                <Form.Group className='mt-3 col col-md-4 mx-auto'>

                    <Form.Text>
                        Already Have an Account? Please <Link className=' fw-semibold' to='/login'>Login</Link> Here
                    </Form.Text>

                    <Form.Text className="text-danger">
                        {error}
                    </Form.Text>
                </Form.Group>

                <Form.Text className="text-danger">
                    {error}
                </Form.Text>




            </Form>
        </Container>

    );
};

export default Register;