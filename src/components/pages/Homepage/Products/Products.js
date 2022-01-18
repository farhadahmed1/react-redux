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
        <div >
            {/* <h2> Total number of product {products.length} </h2> */}
            <div className='card'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}

                    />)
                }
            </div>

        </div>
    );
};

export default Products;