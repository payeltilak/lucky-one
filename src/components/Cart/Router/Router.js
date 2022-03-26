import React from 'react';

const Router = (props) => {
    const { name, price, picture } = props.product;
    return (
        <div className='d-flex bg-info rounded w-100 p-2 mb-2 '>
            <img className='justify-content-center rounded-circle' src={picture} alt='' style={{ 'width': '60px', 'height': '60px', 'borderRadius': '50%' }}></img>
            <div>

                {name}
                <p>Price :{price}</p>
            </div>


        </div>




    );
};

export default Router;