import React from 'react';
import { useQuery } from 'react-query';
import ManageAnOrder from './ManageAnOrder';

const ManageAllOrders = () => {

    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch(`http://localhost:5000/allOrders/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }}
    )
        .then(response => response.json()));
    console.log(orders)
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
                        {orders?.map((order, index) => <ManageAnOrder key={order._id} order={order} index={index} refetch={refetch}></ManageAnOrder>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;