import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../Shared/CourseCard/CourseCard';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import BannerCarousel from '../Shared/BannerCarousel/BannerCarousel';


const Home = () => {

    const allCourses = useLoaderData();


    return (
        <div>


            <Container>
                <div className='mb-2'>
                    <BannerCarousel></BannerCarousel>
                </div>
                <h2>Choose from our popular courses: </h2>
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