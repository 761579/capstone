import '../App.css';
import { useState } from 'react';
import DateTimePicker from './dateTimePicker';
import {useNavigate} from 'react-router-dom'

function BookingForm(){
    
   
   
    const[guestNumber, setGuestnumber] =useState();
    const[occasion, setOccasion]=useState("");
    const[isFormvalid, setIsFormvalid]=useState(true);
    
    const getCurrentDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
      };
    const[date,setDate]=useState(getCurrentDate());
    const[passedDate, setPasseddate]= useState(getCurrentDate())
    const dateChangeHandler=(e)=>{
     setDate(e.target.value)
     console.log(date);
     validateForm();
  
   }
   const guestChangeHandler=(e)=>{
    setGuestnumber(e.target.value)
    console.log(e.target.value)
    validateForm();
 
  }
  const occassionChangeHandler=(e)=>{
    setOccasion(e.target.value)
    console.log(e.target.value)
    validateForm();
 
  }

 const history= useNavigate();
 const validateForm =()=>{
    if ( occasion !== "" && (guestNumber >1) && date>getCurrentDate()){
        setIsFormvalid(false);
        
    }
    else{
        setIsFormvalid(true);
    }
    console.log(isFormvalid);

 }

 const handleSubmit=(e)=>{
    e.preventDefault();
    
    history('/bookingconfirm')

 }
    
return(
    <>
  
    <div   className="form-container">
        
    <form  className="booking-form"   onSubmit ={handleSubmit}>
    <label  className="label" htmlFor="res-date">Choose date</label>
    <input  className="input-field" type="date" id="res-date" value={date} onChange={dateChangeHandler} required/>
    <label className="label" htmlFor="res-time" required>Choose time</label>
  
   {<DateTimePicker  selectedDate={date}/>}
 
   <label className="label" htmlFor="guests" >Number of guests</label>
   <input type="number" className="input-field" required placeholder="1" min="1" max="10" id="guests"  value={guestNumber} onChange={guestChangeHandler} />
   <label className="label"  htmlFor="occasion"  >Occassion</label>
   <select className="input-field" required onChange={occassionChangeHandler} onClick={occassionChangeHandler}>
   <option></option>
    <option>Birthday</option>
    <option>Anniversary</option>
   </select>
   <input type="submit" value="Make Your reservation"   className="resevationbutton" disabled={isFormvalid} />
    </form>
{/* <form style="display: grid; max-width: 200px; gap: 20px">
   <label for="res-date">Choose date</label>
   <input type="date" id="res-date">
   <label for="res-time">Choose time</label>
   <select id="res-time ">
      <option>17:00</option>
      <option>18:00</option>
      <option>19:00</option>
      <option>20:00</option>
      <option>21:00</option>
      <option>22:00</option>
   </select>
   <label for="guests">Number of guests</label>
   <input type="number" placeholder="1" min="1" max="10" id="guests">
   <label for="occasion">Occasion</label>
   <select id="occasion">
      <option>Birthday</option>
      <option>Anniversary</option>
   </select>
   <input type="submit" value="Make Your reservation">
</form> */}

</div>


    </>
)
}
export default BookingForm;