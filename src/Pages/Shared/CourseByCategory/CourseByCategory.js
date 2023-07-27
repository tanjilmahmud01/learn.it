import React from 'react';
import Categories from '../Categories/Categories';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';

const CourseByCategory = () => {

    const coursesByCategory = useLoaderData();


    return (
        <div>
            <Container>
                <Row>
                    <Col lg="3">
                        <Categories></Categories>
                    </Col>

                    <Col className='' lg="9">
                        <Row>
                            {
                                coursesByCategory.map(course => {
                                    return (

                                        <Col className='mb-4' lg={5}>
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
                    </Col>


                </Row>

            </Container>


        </div>
    );
};

export default CourseByCategory;