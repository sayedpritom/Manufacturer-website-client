import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const SignUp = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile] = useUpdateProfile(auth);

    let location = useLocation();
    let navigate = useNavigate();

    let errorMessage;
    let from = location.state?.from?.pathname || '/';

    useEffect(() => {
        if (user || user1) {
            navigate(from, { replace: true });
        }
    }, [user, user1, from, navigate])

    if (error || error1) {
        errorMessage = error?.message || error1?.message;
    }

    const onSubmit = async data => {
      await createUserWithEmailAndPassword(data.email, data.password);  
      await updateProfile({displayName: data.name});  
    };

    if(loading || loading1) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="card w-96 lg:w-1/3 mx-auto my-10 bg-base-100 shadow-xl p-5">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Please Sing Up to proceed</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                        <input type="Name" {...register("name", { required: true })} placeholder="Name" className="input input-bordered input-info w-full my-3 max-w-md" />
                        <br />
                        <input type="email" {...register("email", { required: true })} placeholder="Email Address" className="input input-bordered input-info w-full my-3 max-w-md" />
                        <br />
                        <input type="password" {...register("password", { required: true })} placeholder="Password" className="input input-bordered input-info w-full my-3 max-w-md" />
                        <br />
                        <input type="submit" className="btn btn-primary" value="Sign Up" />
                    </form>
                </div>
                <p className="text-red-500 text-center">{errorMessage}</p>
                <p className="text-center">Already Have an Account? <span className="text-primary"><Link to="/login">Login</Link></span></p>
                <div className="mx-auto">
                    <div className="divider">OR</div>
                    <button className="btn btn-outline btn-primary w-full my-3 max-w-md" onClick={() => signInWithGoogle()}>Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;