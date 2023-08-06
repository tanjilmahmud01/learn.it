import React from 'react';
import pic1 from '../../../assets/learn It logo banner.png';
import './BannerCarousel.css';



const BannerCarousel = () => {
    return (

        <div style={{ backgroundColor: "#f1f7f9" }} className="row border rounded mt-3">
            <div className="col-md-7 ">
                <div className='d-flex '>
                    <h2 className="mt-5 featurette-heading fw-normal lh-1">Learn from Anywhere
                        <span className="text-secondary">, Everywhere.</span></h2>
                </div>

                <p className="lead mb-5">Learn all about computer technologies from thousands of courses from various categories in <span className='fw-bolder'>Learn.IT,</span>  24/7 online video lectures are available for all your devices. Certificates are issued after you complete our courses. </p>
            </div>
            <div className="ms-auto col-md-2">
                <img className='img-fluid' style={{ height: "200px", width: "200px" }} src={pic1} alt="" />
            </div>
        </div>


    );
};

export default BannerCarousel;