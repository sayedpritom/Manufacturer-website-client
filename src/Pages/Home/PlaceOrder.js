import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { format, formatDistance, formatRelative, subDays } from 'date-fns';

const PlaceOrder = () => {

    const [user] = useAuthState(auth);
    const { id } = useParams();
    const [date, setDate] = useState(new Date());
    const formattedDate = format(date, 'PP');

    const [item, setItem] = useState({});
    const [invalidInput, setInvalidInput] = useState('')


    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const inputQuantity = watch("quantity");

    const { _id, image, name, description, minimumOrder, stock, price } = item;

    useEffect(() => {
        fetch(`http://localhost:5000/parts/${id}`)
            .then(res => res.json())
            .then(data => setItem(data[0]))
    }, [])


    const onSubmit = data => {
        data.item= name;
        data.price= price;
        data.image= image;
        fetch('http://localhost:5000/order', {
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
                    toast.success('Order Placed Successfully');
                    reset();
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    useEffect(() => {
        if (parseInt(inputQuantity) > stock) {
            setInvalidInput(`Order amount can not be greater than current stock. Current stock is ${stock}`);
        } else if (parseInt(inputQuantity) < minimumOrder) {
            setInvalidInput(`Order amount can not be less than minimum order number. Minimum order is ${minimumOrder}`)
        } else {
            setInvalidInput(null);
        }
    }, [inputQuantity, stock, minimumOrder, watch])

    return (
        <div className="max-w-7xl mx-auto px-10 py-20">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <div className="max-w-xs mr-auto" >
                    <figure><img src={image} alt="Album" /></figure>
                </div>
                <div className="card-body">
                    <h2 className="text-primary font-medium text-3xl my-3">Product Name: {name}</h2>
                    <p>Product Description: {description}</p>
                    <p className="text-xl font-medium">Available in stock: {stock}</p>
                    <p className="text-xl font-medium">Minimum Order Quantity: {minimumOrder}</p>
                    <p className='text-xl font-medium'>Price: ${price}</p>
                    <hr />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* user name */}
                        <input type="text" {...register("name")} value={user.displayName} readOnly className="input input-bordered input-md w-full max-w-xs m-2" />
                        {/* email address */}
                        <input type="text" {...register("email")} value={user.email} readOnly className="input input-bordered input-md w-full max-w-xs m-2" />
                        {/* Item Name */}
                        <input type="text" {...register("item")} value={name} readOnly className="input input-bordered input-md w-full max-w-xs m-2" />
                        {/* price */}
                        <input type="text" {...register("price")} value={"$"+price} readOnly className="input input-bordered input-md w-full max-w-xs m-2" />
                        {/* order date */}
                        <input type="text" {...register("date")} value={formattedDate} readOnly className="input input-bordered input-md w-full max-w-xs m-2" />
                        {/* phone number */}
                        <input type="text" {...register("phone", { required: true })} placeholder="Enter Your Phone Number" className="input input-bordered input-md w-full max-w-xs m-2" />
                        {/* shipping address */}
                        <input type="text" {...register("address", { required: true })} placeholder="Enter Your Address" className="input input-bordered input-md w-full max-w-xs m-2" />
                        {/* order quantity */}
                        <input type="number" placeholder="Please enter quantity" {...register("quantity", { required: true })} className="input input-bordered input-md w-full max-w-xs m-2" />

                        {errors.phone && <span className="block ml-2 text-red-400">{errors.phone && 'Phone'} is required</span>}
                        {errors.address && <span className="block ml-2 text-red-400">{errors.address && 'Address'} is required</span>}
                        {errors.quantity && <span className="block ml-2 text-red-400">{errors.quantity && 'Quantity'} is required</span>}
                        <p className="block ml-2 text-red-400 my-4">{invalidInput}</p>

                        <input className={`btn btn-primary ml-2 ${invalidInput && 'btn-disabled'}`} type="submit" value="Place Order" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;