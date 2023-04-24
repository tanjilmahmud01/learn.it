import React, { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import toast from 'react-hot-toast';

const Profile = () => {

    const { user, updateUserProfile } = useContext(AuthContext);
    const [name, setName] = useState(user?.displayName);
    const photoURLRef = useRef(user?.photoURL);


    const handleSubmit = event => {
        event.preventDefault();
        handleUpdateUserProfile(name, photoURLRef);


    }

    const handleNameChange = event => {
        setName(event.target.value);
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURLRef.current.value
        }



        updateUserProfile(profile)
            .then(() => { toast.success('Your Account Details Has Been Updated.') })
            .catch(error => error => toast.error(error));

        console.log(profile);

        // updateUserProfile(profile)
        //     .then(() => {
        //         toast.success('Your Account Details Has Been Updated.')
        //     })
        //     .catch(error => toast.error(error));
    }

    return (

        <Container>
            <h2>Update your profile</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3 mx-auto" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control readOnly defaultValue={user?.email} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3 mx-auto" controlId="formBasicPassword">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control onChange={handleNameChange} defaultValue={name} type="text" placeholder="Name" />
                </Form.Group>

                <Form.Group className="mb-3 mx-auto" >
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control ref={photoURLRef} defaultValue={user?.photoURL} type="text" placeholder="Photo URL" />
                </Form.Group>


                <Button variant="primary" type="submit">
                    Update
                </Button>
            </Form>
        </Container>

    );
};

export default Profile;