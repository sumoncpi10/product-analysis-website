import React from 'react';

const Review = (props) => {
    const { img, product, usrImg, name, ratings, ratingsCount } = props.review;
    // console.log(img);
    return (
        < div className="col" >
            <div className="card">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{product}</h5>
                    <p className="card-text">Reviewed BY:</p>
                    <img src={usrImg} alt="" />
                    <p><small className="text-muted">{name}</small></p>
                    <p className="card-text">Ratings: {ratings}</p>
                    <p className="card-text">Ratings Count: {ratingsCount}</p>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
        </div>
    );
};

export default Review;