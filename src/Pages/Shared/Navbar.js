import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const [displayName, setDisplayName] = useState('');
    let location = useLocation();

    useEffect(() => {
        if (user) {
            const myInterval = setInterval(myTimer, 500);

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
        localStorage.removeItem('accessToken');
    };
    return (
        <div className="max-w-7xl mx-auto px-2">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/blogs'>Blogs</Link></li>
                            <li><Link to='/portfolio'>Portfolio</Link></li>
                            {user?.email && <li><Link to='/dashboard'>Dashboard</Link></li>}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-xl">Max Motor</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/blogs'>Blogs</Link></li>
                        <li><Link to='/portfolio'>Portfolio</Link></li>
                        {user?.email && <li><Link to='/dashboard'>Dashboard</Link></li>}
                    </ul>
                </div>
                {user ?
                    <div className="navbar-end">
                        <h3 className="text-primary font-bold mx-4">
                            {displayName}
                        </h3>
                        <button className="btn btn-primary" onClick={logout}>Log Out</button>
                    </div>
                    :
                    <div className="navbar-end">
                        <Link to="/login" className="btn btn-primary">Log In</Link>
                    </div>
                }
                {location.pathname.split('/')[1] === 'dashboard' &&
                    <div className="navbar-end h-5 w-5 ml-10">
                        <label htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                    </div>
                }
            </div>
        </div>
    );
};

export default Navbar;