import React from 'react';
import { BsFillCartFill } from 'react-icons/bs'
import { Button, Card } from 'react-bootstrap';

const Product = (props) => {
    const { name, id, price, picture } = props.product;

    return (

        <div className='col-lg-4 col-sm-12 g-3'>
            <Card className='h-100 p-2 '>
                <div >
                    <Card.Img className='w-75' variant="top" src={picture} />
                </div>
                <Card.Body>
                    <Card.Title>Name: {name}</Card.Title>
                    <Card.Text>
                        Price: $ {price}
                    </Card.Text>
                    <Button onClick={() => props.handleAddToCart(props.product)} variant="primary">Add to cart <BsFillCartFill></BsFillCartFill> </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;