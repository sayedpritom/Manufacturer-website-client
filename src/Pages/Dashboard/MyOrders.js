import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useEffect, useState } from 'react';
import Order from './Order';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const MyOrders = () => {
    const [user] = useAuthState(auth);

    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch(`https://try-m1nm.onrender.com/orders/${user?.email}`, {
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }
    )
    .then(response => response.json()));

    if(isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Client's Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Order Placed On</th>
                            <th>Phone</th>
                            <th>Pay or Cancel Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders?.map((order, index) => <Order key={order._id} order={order} index={index} refetch={refetch}></Order>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;