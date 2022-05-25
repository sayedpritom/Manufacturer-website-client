import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'


const Review = ({ userReview }) => {
    const { name, review, image, rating } = userReview;
    return (
        <div>
            <div class="card w-full bg-base-100 shadow-xl">
                <div class="card-body">
                    <div className="flex">
                        <div class="avatar">
                            <div class="w-24 rounded-full">
                                <img src={image} />
                            </div>
                        </div>
                        <h2 class="card-title ml-4">{name}</h2>
                    </div>
                    <p>{review}</p>
                    <div class="rating">
                        {[...Array(rating).keys()].map(rating => <FontAwesomeIcon icon={faStar} />)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;