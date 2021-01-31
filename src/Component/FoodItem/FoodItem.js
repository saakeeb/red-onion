import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './FoodItem.css';

const FoodItem = (props) => {
    // console.log('id', props);
    let { title, subtitle, price, id, img} = props.product;

    return (
        <div className="col-md-4 my-4">
            <Link to={"/food/"+id}>
                <Card style={{ width: '18rem', borderRadius: '20px' }}>
                    <Card.Img variant="top" src={img} className="cardImage" />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{subtitle}</Card.Text>
                        <Card.Title>${price}</Card.Title>
                    </Card.Body>
                </Card>
            </Link>

        </div>

    );
};

export default FoodItem;