import React, { useEffect, useState } from 'react';
import { confirm } from "react-confirm-box";
import { Link } from 'react-router-dom';

const Order = ({ order, refetch }) => {
    const [deleting, setDeleting] = useState(false);

    const { _id, image, name, quantity, price, date, phone, paid, transactionId } = order;

    const options = {
        render: (message, onConfirm, onCancel) => {
            return (
                <div className="alert bg-white shadow-lg">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span>Are you sure you want to cancel this order?</span>
                    </div>
                    <div className="flex-none">
                        <button onClick={onCancel} className="btn btn-sm btn-ghost">No</button>
                        <button onClick={onConfirm} className="btn btn-sm btn-primary">Yes</button>
                    </div>
                </div>
            );
        }
    };

    const handleDelete = async () => {
        const result = await confirm("Are you sure?", options);
        setDeleting(true)
        if (result) {
            fetch(`https://try-m1nm.onrender.com/delete/${_id}`, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`

                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setDeleting(false)
                    refetch();
                })
        }
        return
    };

    return (
        <>
            <tr>
                <td><img className="w-20" src={image} alt="" /></td>
                <td>{name}</td>
                <td>{quantity}</td>
                <td>${price}</td>
                <td>{date}</td>
                <td>{phone}</td>
                <td>
                    {!paid ?
                        <div>
                            <Link to={`/dashboard/payment/${_id}`}><button className="btn btn-sm btn-success">Pay</button></Link>
                            <button onClick={handleDelete} className="btn btn-sm btn-error ml-2">
                                { deleting ? <svg className="animate-spin h-4 w-4 rounded-full bg-transparent border-2 border-transparent border-opacity-50 mx-2" style={{"border-right-color": "white", "border-top-color": "white"}} viewBox="0 0 24 24"></svg> : "Cancel"}
                            </button>
                        </div>
                        :
                        <div>
                            <span className="text-success font-medium uppercase">Paid</span> <br />
                            <small>Transaction ID: </small>
                            <small className="text-orange-500 block break-all">{transactionId}</small>
                        </div>
                    }
                </td>
                <td></td>
            </tr>
        </>
    );
};

export default Order;