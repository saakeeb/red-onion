import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="container-fluid banner">
           <h1>Best Food Waiting for Your Belly</h1>
           <div className="input">
                <input type="text"  placeholder="Search Food Item"  />
                <button type="button" className="btn btn-danger">Search</button>
            </div>
        </div>
    );
};

export default Banner;