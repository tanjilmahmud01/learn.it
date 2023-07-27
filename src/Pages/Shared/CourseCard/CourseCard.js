import React from 'react';
import { Card, Button, Row, Col, Stack } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';
import '../CourseCard/CourseCard.css';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {

    const { course_id, course_title, course_banner, course_author, course_rating, course_reviews, course_fee } = course;

    return (
        <div>
            <Card>
                <Card.Img variant="top" src={course_banner} />
                <Card.Body>
                    <Card.Title>{course_title}</Card.Title>
                    <Card.Text>
                        {course_author?.name}
                    </Card.Text>
                    <Card.Text>
                        {/* stack hocche pashapashi element boshanor jonno ekta react bootstrap er element. */}
                        <Stack direction='horizontal' gap={1}>
                            <p className='ratingText fw-bolder fs-6 border border-primary'>{course_rating}</p>
                            <p className='border border-danger d-flex flex-column justify-content-center'><StarRatings
                                rating={course_rating}
                                starRatedColor="orange"
                                starDimension="20px"
                                starSpacing="2px"
                            /></p>
                            <p>({course_reviews})</p>

                        </Stack>






                    </Card.Text>
                    <Card.Text>
                        <p className='fw-bolder fs-3'>${course_fee}</p>
                    </Card.Text>
                    <Link to='/courses'>
                        <Button variant="primary">See All Courses</Button>
                    </Link>

                </Card.Body>
            </Card>

        </div>
    );
};

export default CourseCard;