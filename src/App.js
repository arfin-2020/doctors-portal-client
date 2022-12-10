import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Appointment from "./Pages/Appointment/Appointment";
import AuthProvider from "./Pages/Context/AuthProvider";
import AddDoctor from "./Pages/Dashboard/AddDoctor/AddDoctor";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Admin from "./Pages/Dashboard/DashboardHome/Admin/Admin";
import DashboardHome from "./Pages/Dashboard/DashboardHome/DashboardHome";
import Users from "./Pages/Dashboard/DashboardHome/Users/Users";
import Payment from "./Pages/Dashboard/Payment";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import ManageDoctor from "./Pages/ManageDoctor/ManageDoctor";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import Register from "./Pages/Register/Register";
function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<Register />} />
            <Route path="*" element={<PrivateRoute />}>
              <Route path="appointment" element={<Appointment />} />
              <Route path="*" element={<Dashboard />}>
                <Route path="dashboard" element={<DashboardHome />} />
                <Route path="dashboard/payment/:appointmentId" element={<Payment />} />
                <Route path="dashboard/admin" element={<Admin />} />
                <Route path="dashboard/allusers" element={<Users />} />
                <Route path="admin/addDoctor" element={<AddDoctor />} />
                <Route path="admin/manageDoctor" element={<ManageDoctor/>} />
              </Route>
            </Route>
          </Routes>
        </AuthProvider>
        <ToastContainer />
      </Router>
    </div>
  );
}

export default App;
