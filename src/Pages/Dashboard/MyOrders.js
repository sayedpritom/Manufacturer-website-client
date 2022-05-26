import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useEffect, useState } from 'react';
import Order from './Order';

const MyOrders = () => {
    const [user] = useAuthState(auth);

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/orders/${user?.email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])

    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => <Order key={order._id} order={order} index={index}></Order>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;