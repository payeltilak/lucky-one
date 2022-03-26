import React from 'react';
import Router from './Router/Router';


const Cart = ({ cart }) => {
    console.log(cart)
    return (
        <div className='col-bg-4 col-sm-12' >
            {
                cart.map(product => <Router product={product} key={product.id}></Router>)
            }
            <button className='button'><span>Choose one for me</span></button>
            <button className='button'><span>CHOICE AGAIN</span></button>





        </div>
    );
};

export default Cart;