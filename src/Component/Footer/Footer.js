import React from 'react';
import './Footer.css';
import logo from '../../Resources/logo.png';

const Footer = () => {
    return (
        <div className="container-fluid footer-style">
            <div className="row pt-5 pr-5 pl-5">
                <div className="col-md-6 pb-sm-5">
                    <img src={logo} alt="" />
                </div>
                <div className="col-md-3 pb-sm-5">
                    <p><small>About online food</small></p>
                    <p><small>Read our blog</small></p>
                    <p><small>Sign up to deliver</small></p>
                    <p><small>Add your restaurant</small></p>
                </div>
                <div className="col-md-3">
                    <p><small>Get help</small></p>
                    <p><small>Read FAQs</small></p>
                    <p><small>View all cities</small></p>
                    <p><small>Restaurants near me</small></p>
                </div>
            </div>
            <div className="row pb-sm-3">
                <div className="col-md-6 pl-5">
                    <p><small>Copyright @ 2021 online food</small></p>
                </div>
                <div className="col-md-2 px-5">
                    <p><small>Privacy policy</small></p>
                </div>
                <div className="col-md-2 px-5">
                    <p><small>Terms of use</small></p>
                </div>
                <div className="col-md-2 px-5">
                    <p><small>Pricing</small></p>
                </div>
            </div>

        </div>
    );
};

export default Footer;