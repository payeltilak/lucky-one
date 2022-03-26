import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Product = (props) => {
    const { name, id, price, picture } = props.product
    return (

        <div className='col-4 g-3'>
            <Card className='h-100 p-2 '>
                <div >
                    <Card.Img className='w-75' variant="top" src={picture} />
                </div>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {price}
                    </Card.Text>
                    <p>{id}</p>
                    <Button variant="primary">Add to cart</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;