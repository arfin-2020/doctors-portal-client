import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home/Home/Home";
import Appointment from './Pages/Appointment/Appointment';
function App() {
  return (
    <div className="App">
     <Router>
       <Routes>
         <Route exact path="/" element = {<Home/>}/>

         <Route path="/appointment" element={<Appointment/>}/>
      
       </Routes>
     </Router>
    </div>
  );
}

export default App;
