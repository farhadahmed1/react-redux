import React from 'react';
import { Button } from 'react-bootstrap';
import './Product.css'

const Product = ({ product }) => {
    // console.log(product);

    const { title, price, image } = product;

    return (
        <div className='productCard'>
            <div>
                <img src={image} alt="" />
            </div>
            <div className='cardText'>

                <h5>{title} </h5>
                <h5>${price} </h5>
                <Button className="btn btn-success"> Add to Card</Button>
            </div>

        </div >
    );
};

export default Product;