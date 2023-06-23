import BookingForm from "./BookingForm";
import { useReducer, useState } from "react";
import Nav  from './Nav.js';
import Footer from './Footer.js'

function BookingPage(){
  return(
  <>
    <div className="bookingpage">
  <Nav/>

   
  <h1 className="reserveheading">Reserve A Table</h1>
   <BookingForm/>
   <Footer/>
   </div>
   </>
   
  )
}
export default BookingPage;