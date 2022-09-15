import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const [userDetails, setUserDetails] = useState({})

    const { displayName: name, photoURL: image, email } = user;
    let { education, location, phone, linkedIn } = userDetails;

    const { data, isLoading, refetch } = useQuery('userDetails', () => fetch(`https://vast-citadel-09653.herokuapp.com/userDetails/${email}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setUserDetails(data)
        })
    )

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();

    const educationInput = watch("education");
    const locationInput = watch("location");
    const phoneInput = watch("phone");
    const linkedInInput = watch("linkedIn");

    useEffect(() => {
        const newUser = { education: educationInput, location, phone, linkedIn };
        setUserDetails(newUser);
        console.log(userDetails, newUser)
    }, [educationInput])

    useEffect(() => {
        const newUser = { location: locationInput, education, phone, linkedIn };
        setUserDetails(newUser);
    }, [locationInput])

    useEffect(() => {
        const newUser = { phone: phoneInput, location, education, linkedIn };
        setUserDetails(newUser);
    }, [phoneInput])

    useEffect(() => {
        const newUser = { linkedIn: linkedInInput, location, education, phone };
        setUserDetails(newUser);
    }, [linkedInInput])


    const onSubmit = () => {
        fetch(`https://vast-citadel-09653.herokuapp.com/userDetails/${email}`, {
            method: 'PUT',
            headers: {
                'content-Type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(userDetails)
        })
            .then(response => response.json())
            .then(data => {
                if (data.acknowledged) {
                    console.log(userDetails)
                    toast.success('Information Updated Successfully');
                    reset();
                    refetch();
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <div>
            <div class="card lg:card-side bg-white shadow-lg">
                <div class="card-body">
                    <h2 class="card-title text-3xl text-primary">{name}</h2>
                    <p>{email}</p>
                    <hr />
                    <div class="card-actions flex-col justify-end">
                        <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
                            <div className='grid grid-cols-1 xl:grid-cols-2 gap-5'>
                                <div>
                                    <label for="education">Education:</label> <br />
                                    <input type="text" {...register("education")} value={userDetails.education} className=" bg-white input input-bordered input-md w-full max-w-lg m-2" /> <br />
                                </div>
                                <div>
                                    <label for="location">Location:</label> <br />
                                    <input type="text" {...register("location")} value={userDetails.location} className=" bg-white input input-bordered input-md w-full max-w-lg m-2" /> <br />
                                </div>
                                <div>
                                    <label for="phone">Phone Number:</label> <br />
                                    <input type="text" {...register("phone")} value={userDetails.phone} className=" bg-white input input-bordered input-md w-full max-w-lg m-2" /> <br />
                                </div>
                                <div>
                                    <label for="LinkedIn">LinkedIn Profile:</label> <br />
                                    <input type="text" {...register("linkedIn")} value={userDetails.linkedIn} className=" bg-white input input-bordered input-md w-full max-w-lg m-2" /> <br />
                                </div>
                            </div>
                            <input className={`btn btn-primary my-4 ml-2`} type="submit" value="Update Information" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;