import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useEffect, useState } from 'react';
import Order from './Order';
import { useQuery } from 'react-query';

const MyOrders = () => {
    const [user] = useAuthState(auth);

    // const [orders, setOrders] = useState([]);

    // useEffect(() => {
    //     fetch(`http://localhost:5000/orders/${user?.email}`)
    //         .then(res => res.json())
    //         .then(data => setOrders(data))
    // }, [])

    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch(`http://localhost:5000/orders/${user?.email}`)
        .then(response => response.json()));

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
                            <th></th>
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