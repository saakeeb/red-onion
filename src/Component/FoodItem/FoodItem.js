import React from 'react';
import { Card } from 'react-bootstrap';
import './FoodItem.css';

const FoodItem = (props) => {
    // console.log(props);
    const { img, title, subtitle, price } = props.product;

    return (
        <div className="col-md-4 my-4">
            <Card style={{ width: '18rem', borderRadius: '20px' }} onClick={() => props.handleAddProduct(props.product)} >
                <Card.Img variant="top" src={img} className="cardImage" />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{subtitle}</Card.Text>
                    <Card.Title>${price}</Card.Title>
                </Card.Body>
            </Card>
        </div>

    );
};

export default FoodItem;