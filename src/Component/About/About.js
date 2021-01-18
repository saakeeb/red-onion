import React from 'react';
import './About.css';
import about_1 from '../../Resources/Image/about-1.png';
import about_2 from '../../Resources/Image/about-2.png';
import about_3 from '../../Resources/Image/about-3.png';
import { Card } from 'react-bootstrap';
import { FaBus, FaArrowAltCircleRight, FaRegBell, FaShippingFast} from "react-icons/fa";


const About = () => {
    return (
        <div className='container'>
            <div className="about-text">
                <h3>Why you choose us</h3>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae.</p>
                <p>Torem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <img src={about_1} className="card-img-top about-1 about-card" alt="..." />
                    <div className="row p-3 about-card">
                        <div className="col-sm-2"><FaBus size='20px' color='#C82333'/></div>
                        <div className="col-sm-10 about-card-style">
                            <Card.Title>Fast Delivery</Card.Title>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Card.Link href="#">See more <FaArrowAltCircleRight color='green'/></Card.Link>
                        </div>
                    </div>

                </div>
                <div className="col-md-4">
                    <img src={about_2} className="card-img-top about-2 about-card" alt="..." />
                    <div className="row p-3 about-card">
                        <div className="col-sm-2"><FaRegBell size='20px' color='#C82333'/></div>
                        <div className="col-sm-10 about-card-style">
                            <Card.Title>A good auto responder</Card.Title>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Card.Link href="#">See more <FaArrowAltCircleRight color='green'/></Card.Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <img src={about_3} className="card-img-top about-1 about-card" alt="..." />
                    <div className="row p-3 about-card">
                        <div className="col-sm-2"><FaShippingFast size='20px' color='#C82333'/></div>
                        <div className="col-sm-10 about-card-style">
                            <Card.Title>Home Delivery</Card.Title>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Card.Link href="#">See more <FaArrowAltCircleRight color='green'/></Card.Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;