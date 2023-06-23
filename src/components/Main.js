import restrauntfood from '../Assets/restauranfood.jpg'
import bruchetta from '../Assets/bruchetta.jpg'
import greekSalad from '../Assets/greek salad.jpg'
import lemonDesert from '../Assets/lemon dessert.jpg'
import deliveryIcon from '../Assets/devileryIcon.png'
import { Route, Routes } from 'react-router'
import { useNavigate } from 'react-router'

import Reservation from './BookingPage.js'
import HomePage from './HomePage'




export default function Main(){

    const history=useNavigate()
 const handleClick=()=>{
  history('/booking')
 }
    return(
        <div >
        <section  className="section-one">
        <div>
        <h1  className="title">Little lemon</h1>
        <h3 className="discription">Chicago</h3>
        <p className="discription">we are a family owned Mediterian restaurant,
            focused on traditional reciepies served with a modern twist.
        </p>
       
    
        <button type="submit " className="reservebutton" onClick={handleClick}>Reserve a Table</button> </div>

        <aside class="image-container">
            <img src={restrauntfood} alt="restraunt image" />
        </aside></section>

        <section className="section-two">
            <h1>This weeks specials</h1>
            <button type="submit" className="online-menu"> Online Menu</button>
        </section>
        <section className="section-three">
            <article>
                
                <img  className="food" src={greekSalad} alt="greek salad" />
                <header><h3>Greek Salad </h3><span className="price">$15.99</span></header>
                <p> The famous greek salad of cripsy
                    lettuce,peppers,olives and our Chicago style feta crunchy garlic and rosemary croutons.

                </p>
                <footer>
                   <a href="">  order a delivery </a>
                    <img src={deliveryIcon}  className="deliveryIcon" alt="delivery icon" height="20px" width="20px"/>
                </footer>
            </article>
            <article>
            
                <img src={bruchetta} className="food" alt="Bruchetta" height="200px" width="200px"/>
                <header><h3>Bruchetta </h3><span className="price"> $20.99</span></header>
                <p> Our Bruchetta is made from grilled breadthat has been smea red with garlic and seaconed with salt and olive oil.
                </p>
                <footer>
                   <a href=""> order a delivery </a>
                    <img src={deliveryIcon}  className="deliveryIcon" alt="delivery icon" height="20px" width="20px" />
                </footer>
            </article>
            <article>
           
                <img src={lemonDesert} className="food" alt="gLemon Desert" height="200px" width="200px"/>
                <header><h3>Lemon Dereset</h3>   <span className="price">$12.99</span></header>
                <p> This comes straight from granda's recipe book,
                    every last ingredient has been sourced and is as authentic as can be imagined.
                </p>
                <footer>
                    <a href=""> order a delivery </a>
                    <img src={deliveryIcon} className="deliveryIcon" alt="delivery icon" height="20px" width="20px"/>
                </footer>
            </article>
        </section>
        </div>

        
        )
    }