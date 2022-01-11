import React from 'react';
import './Product.css'

const Product = ({ product }) => {

    const { title, price, image, rating } = product;
    return (
        <div className='productCard'>
            <div>
                <img src={image} alt="" />
            </div>
            <div className='cardText'>
                <h5>{rating.rate}</h5>
                <h5>{title} </h5>
                <h5>${price} </h5>
            </div>

        </div>
    );
};

export default Product;