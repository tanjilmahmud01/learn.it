import React from 'react';
import Categories from '../Categories/Categories';
import { Col, Container, Row } from 'react-bootstrap';

const Courses = () => {
    return (
        <div>
            <Container>

                <Row>
                    <Col lg="3">
                        <Categories></Categories>
                    </Col>
                    <Col lg="9">
                        <h2>This is courses page</h2>
                    </Col>
                </Row>
            </Container>




        </div>
    );
};

export default Courses;