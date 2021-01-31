import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import foodFakeData from '../../Resources/foodFakeData';
import { FaShoppingCart, FaRegCheckCircle } from 'react-icons/fa';



const FoodDetails = (props) => {
    // console.log('handleAddProduct',props);
    const handleAddProduct = props.handleAddProduct;

    const { foodId } = useParams();
    const [quantity, setQuantity] = useState(1)
    const [currentFood, setCurrentFood] = useState({})
    const [isSuccess, setIsSuccess] = useState(false);

    const foodDetails = foodFakeData.find(pd => pd.id === parseInt(foodId));
    const foodDemo = foodFakeData.filter(pd => pd.catagories === foodDetails.catagories)

    const totalCart = currentFood => {
        currentFood.quantity = quantity;
        handleAddProduct(currentFood);
        setIsSuccess(true);
    }

    setInterval(() => setIsSuccess(false), 1500);

    console.log('foodDetails', foodId, foodDetails, foodDemo);

    return (
        <div className='container-fluid'>
            <div className="row " >
                <div className="col-md-6">
                    <div style={{ width: '80%', height: 'auto', padding: '0 0 5px 25%' }}>
                        <h1 className="mb-3" style={{ fontSize: '2.2rem' }}>{foodDetails.title}</h1>
                        <div style={{ textAlign: 'left' }}>
                            <p >{foodDetails.description}</p>
                            <div className="row">
                                <div className="col-md-4"><h2>${foodDetails.price}</h2></div>
                                <div className="col-md-4 cart-controller ml-3" style={{ border: '1px solid #d3d3d3', borderRadius: '25px', textAlign: 'center' }}>
                                    <button className="px-2 btn" onClick={() => setQuantity(quantity <= 1 ? 1 : quantity - 1)}>-</button>
                                    <strong>{quantity}</strong>
                                    <button className="px-2 btn" onClick={() => setQuantity(quantity + 1)}>+</button>
                                </div>
                            </div>

                            <div className="action d-flex text-align-center">
                                <button className="btn btn-danger btn-rounded" onClick={() => totalCart(currentFood)}><FaShoppingCart /> Add</button>
                                {
                                    isSuccess &&
                                    <p className="ml-3 success-mgs text-success"> <FaRegCheckCircle /> Item added to Cart</p>
                                }
                            </div>

                            <div className="d-flex mt-5">
                                <Link to='/home'>
                                    <img src={foodDemo[0].img} alt="" style={{ width: '150px', height: 'auto' }} />
                                </Link>
                                <Link to='/home'>
                                    <img src={foodDemo[2].img} alt="" style={{ width: '150px', height: 'auto' }} />
                                </Link>
                                <Link to='/home'>
                                    <img src={foodDemo[4].img} alt="" style={{ width: '150px', height: 'auto' }} />
                                </Link>
                            </div>

                        </div>

                    </div>

                </div>







                <div className="col-md-6" >
                    <img src={foodDetails.img} alt="" style={{ width: '90%', height: 'auto', paddingRight: '20%' }} />
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;