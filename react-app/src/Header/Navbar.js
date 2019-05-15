import React, { Component } from "react"
// import './Topbar.css';
import { Redirect, NavLink, Route} from "react-router-dom";
//import Home from "../Rental/Home";
//import Rental from "../Rental/Rental"
import Login, {fakeAuth} from "../Freelance/Login"
import './Navbar.css';
//import Booking from '../Rental/Booking';
//import Rentalview from '../Rental/Rentalview';
import LoginModel from '../LoginRegistrationModel/Loginmodel';


//Admin component
const Admin = ({ match }) => {
  return (
    <div>
      {" "}
      <h2>Welcome admin </h2>
    </div>
  );
};

//Private router function
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )}
    />
  );
};

class Navbar extends Component {
    render() {
        return (
          <div>
              <nav className="navbar navbar-expand-lg ">
                <div className="container">
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    <span className="navbar-toggler-icon"></span>
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                      <li className="nav-item active">
                        <NavLink class="nav-link text-white" exact to="" href="#">Home <span class="sr-only">(current)</span></NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink class="nav-link text-white" to="/rental" href="rental">Car Rental</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink class="nav-link text-white" to="/" href="#"><LoginModel/></NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink class="nav-link text-white" to="/" href="#">Admin Area</NavLink>
                      </li>
                    </ul>
                  </div> 
                               
                </div>
              </nav>
          </div>
           
        );
    }
}

export default Navbar;


