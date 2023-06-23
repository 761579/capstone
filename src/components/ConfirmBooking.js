import Nav from "./Nav";
import back from "../Assets/back.png"
import { Link } from "react-router-dom";
function ConfirmBooking(){

    return(
        
        
        <div className="confirmbooking">
        <Link to='/'><img src={back} className="backicon" alt="back icon"  height="20px" width="20px"/></Link>
        <p className="confirmtext">Thank You!
        <br/>
        Your Booking is Confirmed!</p>
        
        </div>
        
    )

}
export default ConfirmBooking;