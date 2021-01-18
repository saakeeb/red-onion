import React from 'react';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const NavBar = (props) => {
    return (
        <div className='container-fluid'>
            <nav className="navbar navbar-expand-lg navbar-light  justify-content-md-between justify-content-center flex-wrap">
                <a href="/"><img src="https://i.ibb.co/NZcQbJM/logo2.png" alt="Red Onion Food"/></a>
              
                <div>
                    <a href="/" className='nav-item' > <FontAwesomeIcon icon={faCartPlus} /></a>
                    <a href="/" className='nav-item login'>Login</a>
                    <a href="/" className='nav-item'><button className="btn btn-danger btn-rounded">Sign Up</button></a>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;