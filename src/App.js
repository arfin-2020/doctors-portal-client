import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import './App.css';
import Appointment from './Pages/Appointment/Appointment';
import AuthProvider from "./Pages/Context/AuthProvider";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <div className="App">
     <Router>
       <AuthProvider>
       <Routes>
         <Route exact path="/" element = {<Home/>}/>
          <Route path='/login' element = {<Login/>}/>
         <Route path="/appointment" element={<Appointment/>}/>
      
       </Routes>
       </AuthProvider>
       <ToastContainer />
     </Router>
    </div>
  );
}

export default App;
