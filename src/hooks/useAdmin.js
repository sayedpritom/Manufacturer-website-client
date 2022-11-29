import { useState, useEffect } from 'react';

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);

    useEffect(() => {
        fetch(`https://try-m1nm.onrender.com/admin/${user.email}`, {
            method: 'GET',
            headers: {
                'content-Type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(response => response.json())
            .then(data => {
                setAdmin(data.admin)
                setAdminLoading(false)
            })
    }, [user])
    return [admin, adminLoading]
}

export default useAdmin;