import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [review, setReview] = useState([]);

    useEffect(() => {
        fetch('https://vast-citadel-09653.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReview(data))
    }, [])
    return (
        <div>
            <div className="my-28">
                <div className="text-center my-5">
                    <h2 className="text-primary uppercase font-bold text-4xl">This is what our customers says</h2>
                    <hr className="my-10 " />
                </div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5">
                    {review?.map(userReview => <Review key={userReview._id} userReview={userReview}></Review>)}
                </div>
            </div>
        </div>
    );
};

export default Reviews;