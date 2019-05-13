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
                              <a href="">Car Rental Reservation</a>
                              <a href="">Rent a Truck</a>
                              <a href="">Rental Car Locations</a>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-2 mb-3">
                            <h6>OUR VEHICLES</h6>
                            <a href="">Fleet Overview</a>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-2 mb-3">
                            <h6>RENTAL SERVICES</h6>
                            <a href="">Rental Information</a>
                            <a href="">Sixt Card</a>
                            <a href="">Customer Center</a>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-2 mb-3">
                            <h6>ABOUT SIXT</h6>
                            <p></p>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-2 mb-3">
                            <h6>ONLINE CHECK-IN</h6>
                            <a href="">Sixt Online Check-In</a>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-2 mb-3">
                            <h6>MOBILE RESERVATION</h6>
                            <a href="">iPhone & iPad</a>
                            <a href="">Android</a>
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
                        <a href="">Contact</a>
                        <a href=""> Career with Sixt</a>
                        <a href="">Sixt Group</a>
                        <a href="">About Sixt</a>
                        <a href="">Data Policy</a>
                        <a href="">T&C</a>
                        <a href="">Privacy Policy</a>
                        <a href=""> PAI</a>
                        <a href="">CSR</a>
                        <a href="">Franchise</a>
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