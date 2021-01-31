import React from 'react';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    const cart = props.cart;
    return (
        <div className='container-fluid'>
            <nav className="navbar navbar-expand-lg navbar-light  justify-content-md-between justify-content-center flex-wrap mt-2">
                <Link to='/home'>
                    <a href="/"><img src="https://i.ibb.co/NZcQbJM/logo2.png" alt="Red Onion Food" /></a>
                </Link>
                <div className='d-flex'>
                    <Link to='/checkOutDetails' style={{ textDecoration: 'none' }}>
                        <p className='nav-item pt-2 FontAwesomeIcon'><FontAwesomeIcon icon={faCartPlus} /> {cart.length}</p>
                    </Link>
                    <Link to='/login' className='d-flex' style={{ textDecoration: 'none' }}>
                        <p className='nav-item pt-2'>Login</p>
                        <button className="btn btn-danger btn-rounded nav-item">Sign Up</button>
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;