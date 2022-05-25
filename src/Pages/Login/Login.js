import React from 'react';
import { Link } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin';
import { useForm } from "react-hook-form";

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <div class="card w-96 lg:w-1/3 mx-auto my-10 bg-base-100 shadow-xl p-5">
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Please Login to proceed</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="email" {...register("email", { required: true })} placeholder="Email Address" class="input input-bordered input-info w-full my-3 max-w-xs" />
                        <input type="password" {...register("password", { required: true })} placeholder="Password" class="input input-bordered input-info w-full my-3 max-w-xs" />
                        <input type="submit" class="btn btn-primary" value="Login" />
                    </form>
                </div>
                <p>Don't have an account? <span className="text-primary"><Link to="/signup">Create an account</Link></span></p>
                <SocialLogin></SocialLogin>
            </div>
        </div >
    );
};

export default Login;