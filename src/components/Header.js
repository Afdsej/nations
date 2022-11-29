import './header.css'
import { AiFillTwitterSquare } from 'react-icons/ai';
import { FaFacebookSquare } from 'react-icons/fa';
import {FaLinkedin } from 'react-icons/fa';
import {FaWhatsappSquare } from 'react-icons/fa';
const Header = () => {
    return ( 
        <header className='head'>
            <div className='image'>
                <a href="/"><img src="./images/ANCY - Copy.jpeg"  alt=""/></a>
            </div>
            
            <div className='direction'>
                    <a href="" id='who'><h3>Who We Are</h3></a>
                    <a href="" id='what'><h3>What We Do</h3></a>
                    <a href="" id='where'><h3>Where We Work</h3></a>
                    <a href="" id='join'><h3>Join Us</h3></a>
            </div>
             <nav class="social">
                    <a href="https://api.whatsapp.com/send?phone=2347067136106" target='blank'><FaWhatsappSquare/></a>
                    <a href="/"><FaLinkedin/></a>
                    <a href="/"><AiFillTwitterSquare/></a>
                    <a href="https://www.facebookz.com/afolabi.darejuwon" target="blank"><FaFacebookSquare/></a>
                    
             </nav>
             
        </header>
     );
}
 
export default Header;