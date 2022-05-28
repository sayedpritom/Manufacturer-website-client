import React from 'react';

const ManageAnOrder = ({ order, refetch }) => {

    const { _id, image, name, quantity, price, date, phone } = order;

    return (
            <tr>
                <td><img className="w-20" src={image} alt="" /></td>
                <td>{name}</td>
                <td>{quantity}</td>
                <td>${price}</td>
                <td>{date}</td>
                <td>{phone}</td>
                <td><button className="btn btn-error">Cancel</button></td>
            </tr>
    );
};

export default ManageAnOrder;