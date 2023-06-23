
import './App.css';

import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage.js';
import BookingPage from './components/BookingPage.js';
import ConfirmBooking from './components/ConfirmBooking';
function App() {
 
  return (
    <div >
    <Routes>
    <Route path="/"  element={<HomePage/>}/>
    <Route path="/booking"  element={<BookingPage/>}/>
    <Route path="/bookingconfirm"  element={<ConfirmBooking/>}/>
  </Routes>
    

    
      
    </div>
  );
}

export default App;
