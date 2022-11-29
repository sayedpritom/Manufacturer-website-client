import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Product = ({ item, index, refetch }) => {
    const [deleting, setDeleting] = useState(false);
    const { _id, image, name, quantity, price, date, phone } = item;

    const handleRemove = () => {
        setDeleting(true);
        fetch(`https://try-m1nm.onrender.com/item/${_id}`, {
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
                setDeleting(false);
            })
            .catch((error) => {
                console.error('Error:', error);
                setDeleting(false);
            });
    }

    return (
        <tr>
            <td><img className="w-20" src={image} alt="" /></td>
            <td>{name}</td>
            <td>${price}</td>
            <td><button className="btn btn-error" onClick={handleRemove}>
                {deleting ? <svg className="animate-spin h-4 w-4 rounded-full bg-transparent border-2 border-transparent border-opacity-50 mx-2" style={{ "border-right-color": "white", "border-top-color": "white" }} viewBox="0 0 24 24"></svg>
                    : "Remove"}
            </button></td>
        </tr>
    );
};

export default Product;