import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import PlaceOrder from './Pages/Home/PlaceOrder';
import Dashboard from './Pages/Dashboard/Dashboard';
import AddAReview from './Pages/Dashboard/AddAReview'
import MyReviews from './Pages/Dashboard/MyReviews';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyProfile from './Pages/Dashboard/MyProfile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders';
import AddAProduct from './Pages/Dashboard/AddAProduct';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/item/:id" element={
          <RequireAuth>
            <PlaceOrder></PlaceOrder>
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route index element={<MyOrders />}></Route>
          <Route path='addAReview' element={<AddAReview />}></Route>
          <Route path='myReviews' element={<MyReviews />}></Route>
          <Route path='myProfile' element={<MyProfile />}></Route>

          <Route path='manageAllOrders' element={<ManageAllOrders />}></Route>
          <Route path='addAProduct' element={<AddAProduct />}></Route>
          <Route path='makeAdmin' element={<MakeAdmin />}></Route>
          <Route path='manageProducts' element={<ManageProducts />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
