import React from "react";
import logo from '../assets/img/logo.svg';
import avatar from '../assets/img/image-avatar.png';
import Cart from "./Cart";

function Header() {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                {/* logo y enlaces a otras páginas */}
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="nav-links">
                    <a className="link" href="#">Collections</a>
                    <a className="link" href="#">Men</a>
                    <a className="link" href="#">Women</a>
                    <a className="link" href="#">About</a>
                    <a className="link" href="#">Contact</a>
                </div>
            </div>
            <div className="navbar-right">
                {/* Carrito de compra y Perfil de compra */}
                <div className="cart-icon">
                    <Cart/>
                </div>
                <div className="profile-picture">
                    <img src={avatar} alt="profile"/>
                </div>
            </div>
        </nav>
    )
}

export default Header;



