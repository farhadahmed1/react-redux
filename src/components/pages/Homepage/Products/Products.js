import React from 'react';
import { useGetAllProductsQuery } from '../../../../redux/slice/productApi';
// import { useDispatch, useSelector } from 'react-redux';
// import { productFetch } from '../../../../redux/slice/productSlice';
import Product from '../Product/Product';
import './Products.css'
const Products = () => {

    const { data, error, isLoading } = useGetAllProductsQuery();
    // console.log(data);
    // const dispatch = useDispatch();
    // const { product } = useSelector((state) => state.product);

    // useEffect(() => {
    //     dispatch(productFetch());
    // }, []);


    // console.log(product);
    return (
        <div >

            <div className='card'>
                {
                    data?.map(product => <Product
                        key={product.id}
                        product={product}

                    />)
                }
            </div>

        </div>
    );
};

export default Products;