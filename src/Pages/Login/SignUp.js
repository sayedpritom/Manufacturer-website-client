import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from './SocialLogin';

const SignUp = () => {
    return (
        <div>
            <div class="card w-96 lg:w-1/3 mx-auto my-10 bg-base-100 shadow-xl p-5">
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Please Signup to proceed</h2>
                    <input type="name" placeholder="Your Name" class="input input-bordered input-info w-full my-3 max-w-xs" />
                    <input type="email" placeholder="Email Address" class="input input-bordered input-info w-full my-3 max-w-xs" />
                    <input type="password" placeholder="Password" class="input input-bordered input-info w-full my-3 max-w-xs" />
                    <div class="card-actions">
                        <button class="btn btn-primary">Login</button>
                    </div>
                </div>
                <p>Don't have an account? <span className="text-primary"><Link to="/signup">Create an account</Link></span></p>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default SignUp;