import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
    const {_id, name, description, image, price, stock, minimumOrder } = item;
    console.log(item);
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure className="px-10 pt-10 w-80 h-80 mx-auto block">
                    <img className='rounded-xl' src={image} alt="motors" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>Description: {description.length > 50 ? description.substring(0, 100) + '...' : description}</p>
                    <p>Available in stock: {stock}</p>
                    <p>Minimum Order Quantity: {minimumOrder}</p>
                    <p className='text-1xl text-primary font-medium'>Price: ${price}</p>
                    <div className="card-actions">
                        <Link to={`/item/${_id}`}><button className="btn btn-primary">Buy Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;