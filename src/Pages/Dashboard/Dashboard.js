import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {



    return (
        <div className="max-w-7xl mx-auto my-10">
            <div class="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col mx-5 xl:mx-0  ">
                    <Outlet></Outlet>
                </div>
                <div class="drawer-side">
                    <label for="dashboard-sidebar" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <li><Link to="/dashboard">My Orders</Link></li>
                        <li><Link to="/dashboard/addAReview">Add a Review</Link></li>
                        <li><Link to="/dashboard/MyProfile">My Profile</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;