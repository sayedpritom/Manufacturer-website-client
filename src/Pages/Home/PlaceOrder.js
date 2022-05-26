import React from 'react';
import { useParams } from "react-router-dom";

const PlaceOrder = () => {
    let { id } = useParams();
    return (
        <div className="max-w-7xl mx-auto px-10 mt-40">
            <h1 >Place Order: {id}</h1>
            <div class="card card-side bg-base-100 shadow-xl">
                <figure><img src="https://api.lorem.space/image/movie?w=200&h=280" alt="Movie" /></figure>
                <div class="card-body">
                    <h2 class="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;