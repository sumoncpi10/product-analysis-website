import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
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
                <h1>Customer Reviews</h1>
            </div>

        </div >
    );
};

export default Home;