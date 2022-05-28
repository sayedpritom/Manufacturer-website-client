import React from 'react';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import User from './User';

const MakeAdmin = () => {

    // const [users, setUsers] = useState([]);

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch(`http://localhost:5000/users`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }}
    )
        .then(response => response.json()));

    return (
        <div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th>Index</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users?.map((user, index) => <User key={user._id} user={user} index={index} refetch={refetch}></User>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;