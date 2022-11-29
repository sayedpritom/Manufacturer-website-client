import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddAProduct = () => {

    const imageStorageKey = '18e3e5c22bace69d65d048922d9822a0';

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const inputQuantity = watch("quantity");

    const onSubmit = data => {
        console.log(data);
        const formData = new FormData();
        const image = data.image[0];
        formData.append('image', image);
        
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        console.log(formData)

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const product = {
                        name: data.name,
                        description: data.description,
                        minimumOrder: data.minimumOrder,
                        stock: data.stock,
                        price: data.price,
                        image: img
                    }
                    console.log(product)
                    // send data to database
                    fetch('https://try-m1nm.onrender.com/addProduct', {
                        method: 'POST',
                        headers: {
                            'content-Type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                    .then(res => res.json())
                    .then(inserted => {
                        if (inserted.insertedId) {
                            toast.success('Product Added Successfully');
                            reset();
                        } else {
                            toast.error('Failed To Add The Product')
                        }
                    })

                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <div>
            <h2 className="text-2xl text-primary font-bold">Add a Product</h2>
            <hr className='my-5' />
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* user name */}
                <input type="text" {...register("name", { required: true })} placeholder="Product Name" className="input bg-white input-bordered input-md w-full max-w-xs m-2" /> <br />
                {errors.name && <span className="block ml-2 text-red-400">{errors.name && 'name'} is required</span>} <br />
                {/* product image */}
                <input type="file" {...register("image", {
                    required: {
                        value: true,
                        message: 'Image is required'
                    }
                })} className="input bg-white input-bordered input-md w-full max-w-xs m-2" /> <br />
                {errors.image && <span className="block ml-2 text-red-400">{errors.image && 'image'} is required</span>} <br />
                {/* product description */}
                <textarea type="text" {...register("description", { required: true })} placeholder="Product Description" className="input bg-white input-bordered input-lg w-full max-w-lg h-40 m-2"></textarea> <br />
                {errors.description && <span className="block ml-2 text-red-400">{errors.description && 'description'} is required</span>} <br />
                {/* minimum order amount */}
                <input type="number" {...register("minimumOrder", { required: true })} placeholder="Minimum Order Quantities" className="input bg-white input-bordered input-md w-full max-w-xs m-2" /> <br />
                {errors.minimumOrder && <span className="block ml-2 text-red-400">{errors.minimumOrder && 'minimumOrder'} is required</span>} <br />
                {/* stock */}
                <input type="text" {...register("stock", { required: true })} placeholder="Current Stock" className="input bg-white input-bordered input-md w-full max-w-xs m-2" /> <br />
                {errors.stock && <span className="block ml-2 text-red-400">{errors.stock && 'stock'} is required</span>} <br />
                {/* price */}
                <input type="text" {...register("price", { required: true })} placeholder="Product Price" className="input bg-white input-bordered input-md w-full max-w-xs m-2" /> <br />
                {errors.price && <span className="block ml-2 text-red-400">{errors.price && 'price'} is required</span>} <br />
                <input className={`btn btn-primary ml-2`} type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddAProduct;