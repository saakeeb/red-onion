import React, { useEffect, useState } from 'react';
import foodFakeData from '../../Resources/foodFakeData';
import './Menu.css';
import FoodItem from '../FoodItem/FoodItem';
import Cart from '../Cart/Cart';

const Menu = () => {
    const [cart, setCart] = useState([]);

    const [foods, setFoods] = useState(foodFakeData);
    const [selectedFoodType, setSelectedFoodType] = useState("lunch");

    const selectedCategory = foods.filter(food => food.catagories === selectedFoodType)
    console.log('filter', selectedCategory);

    const handleAddProduct = product => {
        console.log('food item added', product);
        const newCart = [...cart, product];
        setCart(newCart);
    }


    return (
        <div className='container-fluid'>
            <div className="row">
                <div className=' m-auto py-1 food-area'>
                    <ul className='item d-flex align-items-center'>
                        <li onClick={() => setSelectedFoodType('breakfast')} className="nav-item">
                            <span className={selectedFoodType === "breakfast" ? "active nav-link" : "nav-link"}>Breakfast</span>
                        </li>
                        <li onClick={() => setSelectedFoodType('lunch')} className="nav-item">
                            <span className={selectedFoodType === "lunch" ? "active nav-link" : "nav-link"}>Lunch</span>
                        </li>
                        <li onClick={() => setSelectedFoodType('dinner')} className="nav-item">
                            <span className={selectedFoodType === "dinner" ? "active nav-link" : "nav-link"}>Dinner</span>
                        </li>
                        <h3>{cart.length}</h3>
                    </ul>
                </div>

                <div className="f-right d-flex align-items-center text-danger">
                    <p className="see-all" ><a href="/">See All</a></p>
                </div>

            </div>

            <div className="container">
                <div className='row foodStyle'>

                    {
                        selectedCategory.map(item =>
                            <FoodItem
                                handleAddProduct={handleAddProduct}
                                product={item}>
                            </FoodItem>)
                    }

                </div>
            </div>




            <div className="check-out">
                <button type="button" className="btn btn-danger" disabled={cart.length < 1}>CheckOut Your Food</button>
            </div>
        </div>
    );
};

export default Menu;