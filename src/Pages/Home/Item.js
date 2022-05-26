import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
    const {_id, name, description, image, price, stock, minimumOrder } = item;
    return (
        <div>
            <div class="card w-full bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={image} alt="motors" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{name}</h2>
                    <p>Description: {description.length > 50 ? description.substring(0, 100) + '...' : description}</p>
                    <p>Available in stock: {stock}</p>
                    <p>Minimum Order Quantity: {minimumOrder}</p>
                    <p className='text-1xl text-primary font-medium'>Price: ${price}</p>
                    <div class="card-actions">
                        <Link to={`/item/${_id}`}><button class="btn btn-primary">Buy Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;