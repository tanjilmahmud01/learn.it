import { faCertificate, faGears, faInfinity, faTicket, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './CourseDetails.css';
import StarRatings from 'react-star-ratings';

const CourseDetails = () => {

    const selectedCourse = useLoaderData();

    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        fetch(`http://localhost:5000/course-categories/${selectedCourse.category_id}`)
            .then(res => res.json())
            .then(data => setSelectedCategory(data))
    }, []);


    return (
        <div>

            <div className="container px-4 py-5">
                <h2 className="pb-2 border-bottom">{selectedCategory.name} / {selectedCourse?.course_title}</h2>

                <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
                    <div className="col d-flex flex-column align-items-start gap-2">
                        <img className='img-fluid rounded' src={selectedCourse?.course_banner} alt="" />
                        <h2 className="fw-bold text-body-emphasis">{selectedCourse?.course_title}</h2>
                        <p className="text-body-secondary">{selectedCourse?.course_description}</p>

                        <div className='mb-2 d-flex align-items-center justify-content-between'>
                            <span className='me-1 mt-1 ratingText fw-bolder fs-5'>{selectedCourse?.course_rating}</span>
                            <span className=' d-flex flex-column justify-content-center'><StarRatings
                                rating={selectedCourse?.course_rating}
                                starRatedColor="orange"
                                starDimension="18px"
                                starSpacing="2px"
                            /></span>
                            <span className='ms-2'>({selectedCourse?.course_reviews} ratings)</span>
                            <span className='ms-2 me-1'>({selectedCourse?.course_enrolled_students} students enrolled)</span>

                        </div>
                        <div className=' d-flex gap-1'>
                            <span className=''>Created By:</span>

                            <span className=''>{selectedCourse?.course_author?.name}</span>

                        </div>



                        <Link className="btn btn-primary btn-lg mt-2" to=''>Checkout</Link>
                    </div>

                    <div className="col">
                        <div className="row row-cols-1 row-cols-sm-2 g-4">
                            <div className="col d-flex flex-column gap-2">
                                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-success bg-gradient fs-4 rounded-3">
                                    <FontAwesomeIcon icon={faInfinity}></FontAwesomeIcon>
                                </div>
                                <h4 className="fw-semibold mb-0 text-body-emphasis">Full Lifetime Access</h4>
                                <p className="text-body-secondary">Access the course from anywhere, anytime. No time restrictions.</p>
                            </div>

                            <div className="col d-flex flex-column gap-2">
                                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-success bg-gradient fs-4 rounded-3">
                                    <FontAwesomeIcon icon={faVideo}></FontAwesomeIcon>
                                </div>
                                <h4 className="fw-semibold mb-0 text-body-emphasis">Online Course</h4>
                                <p className="text-body-secondary">50 hours of on-demand pre recorded video lectures.</p>
                            </div>

                            <div className="col d-flex flex-column gap-2">
                                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-success bg-gradient fs-4 rounded-3">
                                    <FontAwesomeIcon icon={faTicket}></FontAwesomeIcon>
                                </div>
                                <h4 className="fw-semibold mb-0 text-body-emphasis">24/7 Support</h4>
                                <p className="text-body-secondary">Online token based support available all week.</p>
                            </div>

                            <div className="col d-flex flex-column gap-2">
                                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-success bg-gradient fs-4 rounded-3">
                                    <FontAwesomeIcon icon={faCertificate}></FontAwesomeIcon>
                                </div>
                                <h4 className="fw-semibold mb-0 text-body-emphasis">Certification</h4>
                                <p className="text-body-secondary">Online certificate mentioning your performace upon completion.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;