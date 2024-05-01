import React, {useState} from "react";
import ProductImage from "./ProductImage";
import iconMinus from "../assets/icon/icon-minus.svg"
import iconPlus from "../assets/icon/icon-plus.svg"
import iconCart from "../assets/icon/icon-cart.svg"


function Description() {

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        setCount(Math.max(count - 1, 0));
    };

    return (
        <>
            <div className="main-description">
                <ProductImage/>
                <div className="container">
                    <div className="description">
                        <h3 className="category">SNEAKER COMPANY</h3>
                        <h1>Fall Limited Edition Sneakers</h1>
                        <p className="product-description">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber
                            outer sole, they’ll withstand everything the weather can offer.
                        </p>
                        <p className="price">$125.00 <span className="discount">50%</span></p>
                        <p className="discounted-price">$250</p>
                    </div>
                    <div className="btn-container">
                        <ul className="quantity-container">
                            <li>
                                <button className="btn-quantity" onClick={handleDecrement}><img
                                    src={iconMinus}/></button>
                            </li>
                            <li><p>{count}</p></li>
                            <li>
                                <button className="btn-quantity" onClick={handleIncrement}><img src={iconPlus}/>
                                </button>
                            </li>
                        </ul>
                        <div>
                            <button className="btn-checkOut">Add to Cart</button>
                        </div>
                    </div>
                </div>


            </div>


        </>
    )


}


export default Description;




