import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'


const Review = ({ userReview }) => {
    const { name, review, image, rating } = userReview;
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="flex">
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src={image} />
                            </div>
                        </div>
                        <h2 className="card-title ml-4">{name}</h2>
                    </div>
                    <p>{review}</p>
                    <div className="rating">
                        {[...Array(rating).keys()].map(rating => <FontAwesomeIcon icon={faStar} />)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;