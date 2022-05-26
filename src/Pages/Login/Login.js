import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';

const Login = () => {
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let location = useLocation();
    let navigate = useNavigate();

    let errorMessage;
    let from = location.state?.from?.pathname || '/';

    useEffect(() => {
        if (user || user1) {
            navigate(from, { replace: true });
        }
    }, [user, user1, from, navigate])


    if (loading || loading1) {
        return <Loading></Loading>
    }

    if (error || error1) {
        errorMessage = error?.message || error1?.message;
    }



    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    }


    return (
        <div>
            <div class="card w-96 lg:w-1/3 mx-auto my-10 bg-base-100 shadow-xl p-5">
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Please Login to proceed</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                        <input type="email" {...register("email", { required: true })} placeholder="Email Address" class="input input-bordered input-info w-full my-3 max-w-md" />
                        <br />
                        <input type="password" {...register("password", { required: true })} placeholder="Password" class="input input-bordered input-info w-full my-3 max-w-md" />
                        <br />
                        <input type="submit" class="btn btn-primary" value="Login" />
                    </form>
                </div>
                <p className="text-red-500 text-center">{errorMessage}</p>
                <p className="text-center">Don't have an account? <span className="text-primary"><Link to="/signup">Create an account</Link></span></p>
                <div className="mx-auto">
                    <div className="divider">OR</div>
                    <button className="btn btn-outline btn-primary w-full my-3 max-w-md" onClick={() => signInWithGoogle()}>Continue With Google</button>
                </div>
            </div>
        </div >
    );
};

export default Login;