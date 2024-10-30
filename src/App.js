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
import Diet from './Components/Diet';
import { Diab } from './Components/Diab';
import Arthritis from './Components/Arthritis';
import Osteo from './Components/Osteo';
import Heart from './Components/Heart';
import Blood from './Components/Blood';
import AdminDoctorView from './Components/AdminDoctorView';
import AdminCareView from './Components/AdminCareView';
import AdminDriverView from './Components/AdminDriverView';
import AlertMessage from './Components/AlertMessage';
import DeleteBooking from './Components/DeleteBooking';
import BookDoctor from './Components/BookDoctor';
import AdminViewBooking from './Components/AdminViewBooking';
import Feedback from './Components/Feedback';
import AdminViewFeedback from './Components/AdminViewFeedback';
import PersonalDoc from './Components/PersonalDoc';
import FetchProfile from './Components/FetchProfile';
import About from './Components/About';
import PersonalCare from './Components/PersonalCare';
import PersonalDriver from './Components/PersonalDriver';




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
         <Route path="/diet" element={<Diet/>}/>       
         <Route path="/diab" element={<Diab/>}/>       
         <Route path="/arthritis" element={<Arthritis/>}/>       
         <Route path="/osteo" element={<Osteo/>}/>       
         <Route path="/heart" element={<Heart/>}/>       
         <Route path="/blood" element={<Blood/>}/>  
         <Route path="/admindoctorview" element={<AdminDoctorView/>}/>  
         <Route path="/admincareview" element={<AdminCareView/>}/>  
         <Route path="/admindoctorview" element={<AdminDoctorView/>}/>  
         <Route path="/admindriverview" element={<AdminDriverView/>}/>  
         <Route path="/alertmsg" element={<AlertMessage/>} ></Route>
        
         <Route path="/bookdoctor" element={<BookDoctor/>} ></Route>
        
         <Route path="/deletebook" element={<DeleteBooking/>} ></Route>
         <Route path="/adminbookview" element={<AdminViewBooking/>} ></Route>
         <Route path="/feedback" element={<Feedback/>} ></Route>
         <Route path="/adminviewfeedback" element={<AdminViewFeedback/>} ></Route>
         <Route path="/fetchprofile" element={<FetchProfile/>} ></Route>
         <Route path="/about" element={<About/>} ></Route>

              
         <Route path="/personal-doctor-page" element={<PersonalDoc/>}/>       
         <Route path="/personal-caretaker-page" element={<PersonalCare/>}/>       
         <Route path="/personal-driver-page" element={<PersonalDriver/>}/>       
    </Routes> </BrowserRouter>


  );
}

export default App;
