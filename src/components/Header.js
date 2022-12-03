import "./header.css";
import { AiFillTwitterSquare } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
const Header = () => {
  return (
    <div className="positioning">
      <header className="head">
        <div className="logo">
          <a href="/">
            <img src="./images/image12.jpeg" alt="/" />
          </a>
        </div>

        <div className="Nav__links">
          <a href="/" id="who">
            <h3>Who We Are</h3>
          </a>
          <a href="/" id="what">
            <h3>What We Do</h3>
          </a>
          <a href="/" id="where">
            <h3>Where We Work</h3>
          </a>
          <a href="/" id="join">
            <h3>Join Us</h3>
          </a>
        </div>
        <nav className="social">
          <a
            href="https://api.whatsapp.com/send?phone=2347067136106"
            target="blank"
          >
            <FaWhatsappSquare />
          </a>
          <a href="/">
            <FaLinkedin />
          </a>
          <a href="/">
            <AiFillTwitterSquare />
          </a>
          <a href="https://www.facebookz.com/afolabi.darejuwon" target="blank">
            <FaFacebookSquare />
          </a>
        </nav>
      </header>
      <div className="donate">
        <h2>
          <a href="/">JOIN US</a> IN TRANSFORMING YOUNG PEOPLE.{" "}
          <a href="/">DONATE</a> TO ANCYPIF TODAY
        </h2>
      </div>
    </div>
  );
};

export default Header;
