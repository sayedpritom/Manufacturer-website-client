import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ManageAnOrder from './ManageAnOrder';
import './ManageAllOrders.css';

const ManageAllOrders = () => {

    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch(`https://try-m1nm.onrender.com/allOrders/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }
    )
        .then(response => response.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full bg-white">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Client's Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Order Placed On</th>
                            <th>Phone</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders?.map((order, index) => <ManageAnOrder key={order._id} order={order} index={index} refetch={refetch}></ManageAnOrder>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;