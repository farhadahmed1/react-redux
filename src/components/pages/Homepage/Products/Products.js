import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productFetch } from '../../../../redux/slice/productSlice';
import Product from '../Product/Product';
import './Products.css'
const Products = () => {

    const dispatch = useDispatch();
    const { product } = useSelector((state) => state.product);

    useEffect(() => {
        dispatch(productFetch());
    }, []);


    // console.log(product);
    return (
        <div >
            {/* <h2> Total number of product {product.length} </h2> */}
            <div className='card'>
                {
                    product.map(product => <Product
                        key={product.id}
                        product={product}

                    />)
                }
            </div>

        </div>
    );
};

export default Products;