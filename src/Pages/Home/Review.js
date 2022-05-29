import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'


const Review = ({ userReview }) => {
    const { name, review, rating } = userReview;
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{review}</p>
                <div className="rating">
                    {[...Array(parseInt(rating)).keys()].map((rating, index) => <FontAwesomeIcon key={index} icon={faStar} />)}
                </div>
            </div>
        </div>
    );
};

export default Review;