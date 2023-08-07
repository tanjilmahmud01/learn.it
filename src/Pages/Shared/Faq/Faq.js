import React from 'react';
import './Faq.modular.css';
import { Accordion } from 'react-bootstrap';

const Faq = () => {
    return (
        <div className='container'>
            <h2 className='fw-bolder text-secondary'>Learn.IT How To? The FAQ:</h2>

            <p className='lead'>Learn.IT aims to provide a online tutorial solution to all technologies related to web development. Some of the most asked questions are answered here for everyone's convenience.</p>

            <div>
                <ul style={{ listStyle: "disc" }}>
                    <li>How to register for a course?</li>
                    <li>How many hours are needed to finish the course?</li>
                    <li>How are the course performance evaluated?</li>
                    <li>Is support available online 24/7?</li>
                    <li>How to get a online certificate after finishing the course?</li>

                </ul>
            </div>
            <div className='container mt-2'>
                <Accordion defaultActiveKey={['0']} alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>How to register for a course?</Accordion.Header>
                        <Accordion.Body>
                            Just Login with your Gmail, Github or register with your email and password. Then, checkout the course and after payment, you will be able to access the course contents.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>How many hours are needed to finish the course?</Accordion.Header>
                        <Accordion.Body>
                            Depending on the course, the total duration of the content videos for each course is mentioned in the course details. It might take double the time as you have to repeat the steps shown in the tutorials.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>How are the course performance evaluated?</Accordion.Header>
                        <Accordion.Body>
                            Course performance is scored by the assignments submitted from time to time during the total duration of a course.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Is support available online 24/7?</Accordion.Header>
                        <Accordion.Body>
                            Yes, the support is available online all day, all week, whenever you need!
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>How to get a online certificate after finishing the course?</Accordion.Header>
                        <Accordion.Body>
                            After submitting all the assignments, a online certificate will be automatically sent to your email mentionining your scores and performance.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>

        </div>
    );
};

export default Faq;