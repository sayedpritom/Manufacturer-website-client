import React from 'react';
import { useQuery } from 'react-query';
import Product from './Product';

const ManageProducts = () => {

    const { data: items, isLoading, refetch } = useQuery('items', () => fetch(`http://localhost:5000/parts`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }
    )
    .then(response => response.json()));

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Item's Name</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {items?.map((item, index) => <Product key={item._id} item={item} index={index} refetch={refetch}></Product>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;