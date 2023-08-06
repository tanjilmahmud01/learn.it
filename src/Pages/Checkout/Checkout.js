import React from 'react';
import './Checkout.css';
import { useLoaderData } from 'react-router-dom';
import StarRatings from 'react-star-ratings';

const Checkout = () => {

    const checkedOutCourse = useLoaderData();
    console.log(checkedOutCourse);


    return (
        <div className="container py-3">

            {/* <!-- Card Start --> */}
            <div className="card">
                <div className="row ">

                    <div className="col-md-5">
                        <img className='img-fluid rounded' src={checkedOutCourse?.course_banner} alt="" />
                    </div>

                    <div className="col-md-7 px-3">
                        <div className="ms-auto card-block px-6">
                            <h4 className="card-title">{checkedOutCourse?.course_title} </h4>
                            <p className="card-text">
                                By {checkedOutCourse?.course_author?.name}
                            </p>
                            <p className="card-text d-md-flex align-items-center">
                                <span className='me-2 mt-1 ratingText fw-bolder fs-5'>{checkedOutCourse?.course_rating}</span>
                                <span className=' d-flex flex-column justify-content-center me-1'><StarRatings
                                    rating={checkedOutCourse?.course_rating}
                                    starRatedColor="orange"
                                    starDimension="18px"
                                    starSpacing="2px"
                                /></span>
                                <span className=' text-secondary mt-1'>({checkedOutCourse?.course_reviews} ratings)</span>
                            </p>


                            <p className="card-text h2 text-success">${checkedOutCourse?.course_fee}</p>
                            <br />
                            <button className='mt-auto btn btn-primary me-3 px-3'> Checkout</button>
                            <button className='mt-auto btn btn-primary'> Remove</button>

                        </div>
                    </div>
                    {/* <!-- Carousel start --> */}

                    {/* <!-- End of carousel --> */}
                </div>
            </div>
            {/* <!-- End of card --> */}

        </div>

    );
};

export default Checkout;