import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar/Navbar';
import About from './Pages/About/About';
import Reviews from './Pages/Reviews/Reviews';
import Contact from './Pages/Home/Contact/Contact';
import Login from './Pages/Login/Login';
import Appointment from './Pages/AppointmentPage/Appointment/Appointment';
import Signup from './Pages/Login/Signup';
import RequireAuth from './Pages/Login/RequireAuth';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/appointment' element={<RequireAuth>
          <Appointment />
        </RequireAuth>}></Route>
        <Route path='/reviews' element={<Reviews />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>
    </div>
  );
}

export default App;
