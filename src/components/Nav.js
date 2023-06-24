import Logo from "../Assets/Logo.svg"
import { Link } from "react-router-dom";
import '../App.css';
export default function Nav(){
    return(
        <div className="nav-container">
        <img src={Logo} className="app-logo" alt="logo" height="50%" width="50%" />
        <ul className="nav-list">
            <li><Link to="/" className="nav-links" >Home</Link></li>
            <li><Link to="/" className="nav-links">About</Link></li>
            <li><Link to="/" className="nav-links">Menu</Link></li>
            <li><Link  to="/booking" className="nav-links" >Reservation</Link></li>
            <li><Link to="/" className="nav-links" >OrderOnline</Link></li>
        </ul>
        </div>
        )
    }