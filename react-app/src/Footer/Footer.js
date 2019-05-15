import React, { Component } from "react"
import './Footer.css';

class Footer extends Component {
    render() {
        return (
           <footer>
               <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-2 mb-3">
                            <h6>SIXT SERVICES</h6>
                              <a href="Home">Car Rental Reservation</a>
                              <a href="Home">Rent a Truck</a>
                              <a href="Home">Rental Car Locations</a>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-2 mb-3">
                            <h6>OUR VEHICLES</h6>
                            <a href="Home">Fleet Overview</a>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-2 mb-3">
                            <h6>RENTAL SERVICES</h6>
                            <a href="Home">Rental Information</a>
                            <a href="Home">Sixt Card</a>
                            <a href="Home">Customer Center</a>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-2 mb-3">
                            <h6>ABOUT SIXT</h6>
                            <p></p>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-2 mb-3">
                            <h6>ONLINE CHECK-IN</h6>
                            <a href="Home">Sixt Online Check-In</a>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-2 mb-3">
                            <h6>MOBILE RESERVATION</h6>
                            <a href="Home">iPhone & iPad</a>
                            <a href="Home">Android</a>
                        </div>
                    </div>
               </div>
           </footer>
        );
    }
}


export default Footer;

export const Footerbar = () =>{
    return(
        <footer class="footerbar">
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <a href="Home">Contact</a>
                        <a href="Home"> Career with Sixt</a>
                        <a href="Home">Sixt Group</a>
                        <a href="Home">About Sixt</a>
                        <a href="Home">Data Policy</a>
                        <a href="Home">T&C</a>
                        <a href="Home">Privacy Policy</a>
                        <a href="Home"> PAI</a>
                        <a href="Home">CSR</a>
                        <a href="Home">Franchise</a>
                    </div>
                    <div className="col-md-3">
                        <i class="fab fa-facebook" style={{fontSize:"25px",paddingRight:'10px',cursor:"pointer"}}></i>
                        <i class="fab fa-instagram" style={{fontSize:"25px",paddingRight:'10px',cursor:"pointer"}}></i>
                    </div>
                </div>
            </div>
        </footer>
    )
}