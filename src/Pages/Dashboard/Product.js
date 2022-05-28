import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Product = ({ item, index, refetch }) => {
    const { _id, image, name, quantity, price, date, phone } = item;

    const handleRemove = () => {
        fetch(`http://localhost:5000/item/${_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
        .then(response => response.json())
        .then(data => {
            if (data.acknowledged) {
                toast.success('Product Deleted Successfully');
                refetch();
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    return (
        <tr>
            <td><img className="w-20" src={image} alt="" /></td>
            <td>{name}</td>
            <td>${price}</td>
            <td><button className="btn btn-error" onClick={handleRemove}>Remove</button></td>
        </tr>
    );
};

export default Product;