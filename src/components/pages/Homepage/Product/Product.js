import React from 'react';
import { Button } from 'react-bootstrap';
import './Product.css'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../../redux/slice/cardSlice';

const Product = ({ product }) => {
    const dispatch = useDispatch()
    const { title, price, image } = product;
    const handleAddToCart = (product) => {
        dispatch(addToCart());
    };
    return (
        <div className='productCard'>
            <div>
                <img src={image} alt="" />
            </div>
            <div className='cardText'>
                {/* <h5>{rating.rate}</h5> */}
                <h5>{title} </h5>
                <h5>${price} </h5>
                <Button onClick={() => handleAddToCart(product)} className="btn btn-success"> Add to Card</Button>
            </div>

        </div >
    );
};

export default Product;