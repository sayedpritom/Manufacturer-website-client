import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const [displayName, setDisplayName] = useState('');

    useEffect(() => {
        if (user) {
            const myInterval = setInterval(myTimer, 2000);

            function myTimer() {
                if (user.displayName) {
                    setDisplayName(user.displayName)
                    clearInterval(myInterval)
                }
            }
        }

    }, [user])


    const logout = () => {
        signOut(auth);
    };
    return (
        <div className="max-w-7xl mx-auto px-2">
            <div class="navbar bg-base-100">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/blogs'>Blogs</Link></li>
                            <li><Link to='/portfolio'>Portfolio</Link></li>
                            <li><Link to='/orders'>Orders</Link></li>
                            {user?.email && <li><Link to='/dashboard'>Dashboard</Link></li>}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-xl">Max Motor</Link>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/blogs'>Blogs</Link></li>
                        <li><Link to='/portfolio'>Portfolio</Link></li>
                        <li><Link to='/orders'>Orders</Link></li>
                        {user?.email && <li><Link to='/dashboard'>Dashboard</Link></li>}
                    </ul>
                </div>
                {user ?
                    <div class="navbar-end">
                        <h3 className="text-primary font-bold mx-4">
                            {displayName}
                        </h3>
                        <button class="btn btn-primary" onClick={logout}>Log Out</button>
                    </div>
                    :
                    <div class="navbar-end">
                        <Link to="/login" class="btn btn-primary">Log In</Link>
                    </div>
                }
            </div>
        </div>
    );
};

export default Navbar;