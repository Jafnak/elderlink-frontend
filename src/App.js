import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (



    
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login />} />
         <Route path="/signup" element={<Signup />} />
    </Routes> </BrowserRouter>


  );
}

export default App;
