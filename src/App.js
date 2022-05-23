import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Appointment from "./Pages/Appointment/Appointment";
import AuthProvider from "./Pages/Context/AuthProvider";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
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
              <Route path="dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </AuthProvider>
        <ToastContainer />
      </Router>
    </div>
  );
}

export default App;
