import React from "react";
import product1 from "../assets/img/image-product-1.jpg"
import product1Thumbnail from "../assets/img/image-product-1-thumbnail.jpg"
import product2Thumbnail from "../assets/img/image-product-2-thumbnail.jpg"
import product3Thumbnail from "../assets/img/image-product-3-thumbnail.jpg"
import product4Thumbnail from "../assets/img/image-product-4-thumbnail.jpg"


function ProductImage() {
    const images = [product1Thumbnail, product2Thumbnail, product3Thumbnail, product4Thumbnail];

    return (
        <>
            <div>
                <div className={"main-img"}>
                    <img src={product1}/>
                </div>

                <div>
                    <ul className={"reel-images"}>
                        {images.map((image, index) => (
                            <li key={index}>
                                <img src={image} alt={"product Thumbnail"}/>
                            </li>
                        ))}
                    </ul>
                </div>


            </div>

        </>
    )
}


export default ProductImage;
