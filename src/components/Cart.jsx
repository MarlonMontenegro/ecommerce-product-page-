import React, {useState} from "react";
import iconCart from "../assets/icon/icon-cart.svg";


function Cart() {

    const [isCartOpen, setIsCartOpen] = useState(false);

    const openCart = () => {
        setIsCartOpen(true)
    }

    const closeCart = () => {
        setIsCartOpen(false);
    }

    return (
        <div className="cart-container">
            {/* Icono del carrito que al hacer clic abre la ventana emergente */}
            <div className="cart-icon" onClick={openCart}>
                <img src={iconCart} alt="Carrito"/>
            </div>

            {/* Ventana emergente del carrito */}
            {isCartOpen && (
                <div className="cart-modal">
                    <div className="cart-modal-content">
                        <span className="close" onClick={closeCart}>&times;</span>
                        <div className="title">
                            <h2>Cart</h2>
                        </div>
                        <div className="content">
                            <p>Your car is empty.</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}


export default Cart;