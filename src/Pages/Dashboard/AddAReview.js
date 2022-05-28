import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddAReview = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);
    console.log(user)
    const imgbbAPIKey = 'ed05dfbb9cd0531dd8532fdb27b4be2b';

    const onSubmit = data => {
        fetch('https://vast-citadel-09653.herokuapp.com/addReview', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Review Added Successfully');
                    reset()
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <div>
            <h1>Add Review</h1>
            <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("name")} value={user.displayName} readOnly className="input input-bordered input-md w-full max-w-lg m-2" /> <br />
                <textarea type="text" {...register("review", { required: true })} placeholder="Share Your Experience" className="input input-bordered input-lg w-full max-w-lg h-40 m-2"></textarea>
                <input type="number" {...register("rating", { required: true })} min="1" max="5" placeholder="Rate Your Experience Between 1-5" className="input input-bordered input-md w-full max-w-lg m-2"></input>
                <br />
                <input className={`btn btn-primary ml-2 my-4`} type="submit" value="Submit Review" />
            </form>
        </div>
    );
};

export default AddAReview;