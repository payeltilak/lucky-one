import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='row container'>
            <div className='col-9'>
                <div className='row'>
                    <h1>Router Shop</h1>
                    {
                        products.map(product => <Product key={product.id}
                            product={product}>

                        </Product>)
                    }
                </div>
            </div>
            <div className='col-3'>

            </div>
        </div>

    );
};

export default Shop;