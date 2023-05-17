import React from 'react';
import { Card, Button } from 'react-bootstrap'

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

                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

        </div>
    );
};

export default CourseCard;