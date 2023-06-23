import Logo from  '../Assets/Logo.svg'
import facebook from  '../Assets/facebook.png'
import instagram from  '../Assets/instagram.jpeg'
import twitter from  '../Assets/twiter.png'
import '../App.css'
function Footer(){
    return(
        
        <div className="footer-container">
        <img src={Logo} className="footer-logo" alt="logo" height="200px" width="200px" />
        <ul  className="nav-list">
            <li ><a href="https://www.facebook.com/"> <img className="footer-icons" src={facebook}/></a></li>
            <li ><a href="https://www.instagram.com">  <img className="footer-icons" src={instagram}/></a></li>
            <li ><a href="https://twitter.com">  <img  className="footer-icons" src={twitter}/></a></li>
            
        </ul>
        </div>
        
    )
}
export default Footer;