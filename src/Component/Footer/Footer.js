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
                    <a href="#">About online food</a><br/>
                    <a href="#">Read our blog</a><br/>
                    <a href="#">Sign up to deliver</a><br/>
                    <a href="#">Add your restaurant</a>
                </div>
                <div className="col-md-3">
                    <a href="#">Get help</a>
                    <br/>
                    <a href="#">Read FAQs</a>
                    <br/>
                    <a href="#">View all cities</a>
                    <br/>
                    <a href="#">small Restaurants near me</a>
                </div>
            </div>
            <div className="row pb-sm-5 pl-sm-3">
                <div className="col-md-6 pl-5">
                    <p><small>Copyright @ 2021 online food</small></p>
                </div>
                <div className="col-md-2 px-5">
                    <a href="#"><small>Privacy policy</small></a>
                </div>
                <div className="col-md-2 px-5">
                <a href="#"><small>Terms of use</small></a>
                </div>
                <div className="col-md-2 px-5">
                <a href="#"><small>Pricing</small></a>
                </div>
            </div>

        </div>
    );
};

export default Footer;