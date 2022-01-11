import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'
const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])
    console.log(products);
    return (
        <div className='card'>
            {/* <h2> Total number of product {products.length} </h2> */}
            {
                products.map(product => <Product
                    key={product.id}
                    product={product}

                />)
            }
        </div>
    );
};

export default Products;