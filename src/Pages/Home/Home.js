import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../Shared/CourseCard/CourseCard';
import { Col, Container, Row } from 'react-bootstrap';

const Home = () => {

    const allCourses = useLoaderData();


    return (
        <div>
            <h3>Total Course Found: {allCourses.length}</h3>

            <Container>
                <Row className=''>
                    {
                        allCourses.map(course => {
                            return (
                                <Col className='mb-4' lg={4}>
                                    <CourseCard
                                        key={course.course_id}
                                        course={course}
                                    ></CourseCard>
                                </Col>
                            )
                        }

                        )
                    }

                </Row>

            </Container>

        </div>
    );
};

export default Home;