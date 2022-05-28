import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl my-40 border mx-auto">
                <div class="card-body text-center">
                    <h1 className="text-5xl text-warning font-bold">404</h1>
                    <h1 className="text-xl font-bold">Page Not Found!</h1>
                    <div class="card-actions justify-center my-5">
                        <button class="btn btn-primary"><Link to="/">Go Home</Link></button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default NotFound;