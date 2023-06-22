import Logo from "../Assets/Logo.svg"
import '../App.css';
export default function Nav(){
    return(
        <div className="nav-container">
        <img src={Logo} className="App-logo" alt="logo" height="50%" width="50%" />
        <ul className="nav-list">
            <li><a className="nav-links" href="">Home</a></li>
            <li><a className="nav-links" href="">About</a></li>
            <li><a className="nav-links" href="">Menu</a></li>
            <li><a className="nav-links" href="">Reservation</a></li>
            <li><a className="nav-links" href="">OrderOnline</a></li>
        </ul>
        </div>
        )
    }