import React, { Component } from "react"
import Image1 from "../images/11.jpg"
import  Image2 from  "../images/2.jpg"
import  Image3 from "../images/3.jpg"
import './Benefits.css';

class Benefits extends Component {
    render() {
        return (
            <section id="benefits">
               <div className="container">
                    <h2 className="benefitTitle" style={{color:"black !important"}}> Our benefits</h2>
                    <p className="benefitsSubTitle">Luxury AutoStar Rental Services</p>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="iconbox">
                            <img src={Image1} alt=""/>
                                <h2>Our Customers Always 100% Satisfied</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi accusamus repudiandae corporis.</p>
                            </div>                        
                        </div>
                        <div className="col-md-4">
                            <div className="iconbox">
                                <img src={Image2} alt=""/>
                                <h2>We Provide Easier & Faster Bookings</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi accusamus repudiandae corporis.</p>
                            </div>                        
                        </div>
                        <div className="col-md-4">
                            <div className="iconbox">
                                <img src={Image3} alt=""/>
                                <h2>Your Choice of Any Pickup Location</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi accusamus repudiandae corporis.</p>
                            </div>                        
                        </div>
                    </div>
               </div>

            </section>
           
        );
    }
}

export default Benefits;