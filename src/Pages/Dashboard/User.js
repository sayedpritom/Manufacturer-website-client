import React, { useState } from 'react';
import { toast } from 'react-toastify';

const User = ({ user, index, refetch }) => {
    const [makingAdmin, setMakingAdmin] = useState(false);
    const { _id, email, role } = user;

    const handleMakeAdmin = () => {
        setMakingAdmin(true)
        fetch(`https://try-m1nm.onrender.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make an admin');
                    setMakingAdmin(false)
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success(`Successfully made an admin`);
                    refetch()
                    setMakingAdmin(false)
                }
            })

    }
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{email}</td>
            <td>
                {role !== 'admin' ?
                    <button class="btn btn-xs btn-primary" onClick={handleMakeAdmin}>
                        {makingAdmin ?
                            <svg className="animate-spin h-4 w-4 rounded-full bg-transparent border-2 border-transparent border-opacity-50 mx-2" style={{ "border-right-color": "white", "border-top-color": "white" }} viewBox="0 0 24 24"></svg>
                            : "Make Admin"}
                    </button>
                    : <button class="btn btn-xs">Admin</button>}
            </td>
        </tr>
    );
};

export default User;