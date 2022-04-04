import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../hooks/useReviews';
import Review from '../Review/Review';
import './Home.css'

const Home = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div className="container">
            <h2 className='text-warning'>World Finest laptop</h2>
            <div className='row'>

                <div className='col-md-6' style={{ "marginTop": '50px' }}>
                    <div className="special-heading text-left">
                        <h4 className="section_header margin_0  ">
                            <span className=" thin text-transform-none">
                                Welcome!	</span>
                        </h4>
                        <h2 className="section_header margin_0  ">
                            <span className=" bold text-uppercase">
                                Laptop Zoo	</span>
                        </h2>
                    </div>
                    <div className="text-block">
                        <p>The highly-trained technicians have many years of experience with all laptop, notebook, macbook and desktop computer repairs. We pride our company on honesty and the good relationships forged through customer satisfaction. We service all makes and models of MAC laptops, Imac, PC laptops, notebooks and most desktops: Dell, Sony, IBM, HP, Acer, Apple, etc.</p>
                    </div>

                    <div className="fw-divider-space " style={{ "marginTop": "30px" }}>

                    </div>
                    <Link to="/about" target="_self" className="btn btn-primary ">
                        About US</Link>

                </div>
                <div className='col-md-6'>
                    <img src="//webdesign-finder.com/techcare/wp-content/uploads/2017/06/after.jpg" alt="3861" className="twentytwenty-before" style={{ "width": "100%", "margin": '50px' }} />
                </div>
            </div>
            {/* Review Section  */}
            <div className='mt-5'>
                <h1>Customer Reviews: {3}</h1>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        reviews.map(review => review.id < 4 ? <Review key={review.id} review={review}></Review> : <h1 key={review.id}></h1>)
                    }


                </div>
                <Link to='/reviews' className=''><button type="button" class="btn btn-primary mb-5">See All Reviews</button></Link>
            </div>

        </div >
    );
};

export default Home;