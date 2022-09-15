import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import useAdmin from '../../hooks/useAdmin.js';
import Loading from '../Shared/Loading';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);

    if (adminLoading) {
        return <Loading></Loading>
    }

    return (
        <div className="max-w-7xl mx-auto my-10">
            <div className="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col mx-5 xl:mx-0  ">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-white text-dark">

                        {admin ?
                            <>
                                <li><Link to="/dashboard">My Profile</Link></li>
                                <li><Link to="/dashboard/manageAllOrders">Manage All Orders</Link></li>
                                <li><Link to="/dashboard/addAProduct">Add a Product</Link></li>
                                <li><Link to="/dashboard/makeAdmin">Make Admin</Link></li>
                                <li><Link to="/dashboard/manageProducts">Manage Products</Link></li>
                            </>
                            :
                            <>
                                <li><Link to="/dashboard">My Profile</Link></li>
                                <li><Link to="/dashboard/myOrders">My Orders</Link></li>
                                <li><Link to="/dashboard/addAReview">Add a Review</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;