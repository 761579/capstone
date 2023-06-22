import Logo from  '../Assets/Logo.svg'
import '../App.css'
function Footer(){
    return(
        <>
        <img src={Logo} className="App-logo" alt="logo" height="100px" width="100px" />
        <ul>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
        </ul>
        </>
    )
}
export default Footer;