import React, { Component } from "react"
import LoginModel from '../LoginRegistrationModel/Loginmodel'
import RegisterModel from '../LoginRegistrationModel/Registrationmodel'
import './Topbar.css';

class Topbar extends Component {
    render() {
        return (
            <nav>
                <div className="container">
                    <ul>
                        <ul>
                            <li>PL</li>
                            <li>|</li>
                            <li>EN</li>
                            <li><i className="material-icons" style={{fontSize:".8rem",paddingRight:".5rem"}}>call</i>0310000000</li>
                        </ul>
                        <ul className="float-right">
                            <li><i className="material-icons" style={{fontSize:".8rem",paddingRight:".5rem"}}>lock</i><LoginModel/></li>
                            <li>/</li>
                            <li><i className="material-icons" style={{fontSize:".8rem",paddingRight:".5rem"}}>person</i><RegisterModel/></li>
                        </ul>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Topbar;