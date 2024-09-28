import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminLogin from './Components/AdminLogin';
import Home from './Components/Home';
import Caretaker from './Components/Caretaker';
import CaretakerView from './Components/CaretakerView';
import DriverView from './Components/DriverView';
import AdminTransport from './Components/AdminTransport';
import Doctor from './Components/Doctor';
import DoctorView from './Components/DoctorView';
import SignupView from './Components/SignupView';
import Entertainment from './Components/Entertainment';

function App() {
  return (



    
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login />} />
         <Route path="/signup" element={<Signup />} />
         <Route path="/Adminlogin" element={<AdminLogin/>} />
         <Route path="/Home" element={<Home/>}/>
         <Route path="/caretaker" element={<Caretaker/>}/>
         <Route path="/caretakerview" element={<CaretakerView/>}/>
         <Route path="/driverview" element={<DriverView/>}/>
         <Route path="/driver" element={<AdminTransport/>}/>
         <Route path="/doctor" element={<Doctor/>}/>
         <Route path="/doctorview" element={<DoctorView/>}/>
         <Route path="/userview" element={<SignupView/>}/>       
         <Route path="/enter" element={<Entertainment/>}/>       
    </Routes> </BrowserRouter>


  );
}

export default App;
