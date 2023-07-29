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
                            <div className='d-flex align-items-center'>
                                <span className='me-1 mt-1 ratingText fw-bolder fs-5'>{course_rating}</span>
                                <span className=' d-flex flex-column justify-content-center'><StarRatings
                                    rating={course_rating}
                                    starRatedColor="orange"
                                    starDimension="20px"
                                    starSpacing="2px"
                                /></span>
                                <span className='mt-1 ms-2'>({course_reviews})</span>

                            </div>

                        </Stack>






                    </Card.Text>
                    <Card.Text>
                        <span className='fw-bolder fs-3'>${course_fee}</span>
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