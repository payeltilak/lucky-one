import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart = product => {
        const newCart = [...cart, product];
        setCart(newCart);

    }
    return (
        <div className='row container'>
            <div className='col-9'>
                <div className='row'>
                    <h1>Router Shop</h1>
                    {
                        products.map(product => <Product key={product.id}
                            product={product}

                            handleAddToCart={handleAddToCart}>

                        </Product>)
                    }
                </div>
            </div>
            <div className='col-3 '>
                <div className='cart row container'>
                    <h2>Selected Router</h2>

                    <Cart cart={cart}></Cart>
                </div>
            </div>

        </div>


    );
};

export default Shop;