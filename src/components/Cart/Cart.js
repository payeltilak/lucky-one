import React from 'react';
import Router from './Router/Router';


const Cart = ({ cart, randomProduct, randomSelect, handleRemoveCart }) => {

    return (
        <div className='col-bg-4 col-sm-12' >
            {
                cart.map(product => <Router product={product} key={product.id}></Router>)
            }
            <button className='button' onClick={() => randomSelect(cart)}><span>Choose one for me</span></button>
            <button className='button' onClick={handleRemoveCart}><span>CHOICE AGAIN</span></button>
            <div>
                {
                    randomProduct.picture && <img src={randomProduct.picture} style={{ 'width': '60px', 'height': '60px', 'borderRadius': '50%' }} alt="" />
                }
                <p>{randomProduct.name}</p>
                <p>{randomProduct.price}</p>
            </div>




        </div>
    );
};

export default Cart;