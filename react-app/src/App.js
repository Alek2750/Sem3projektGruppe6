import React, { Component } from 'react';
import { Redirect, Link, NavLink, Route, Switch } from "react-router-dom";
import Login, {fakeAuth} from "./Freelance/Login";
import Home from "./Freelance/Home";
import Rental from "./Freelance/Rental"
import './App.css';
import Booking from './Rental/Booking';
import Rentalview from './Rental/Rentalview';
import Topbar from './Header/Topbar';
import Navbar from './Header/Navbar'
import Benefits from './Freelance/Benefits';
import Footer from './Footer/Footer';
import {Footerbar} from './Footer/Footer'; 

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
class App extends Component {
  render() {
    return (
      <div>
        <Home/>
        {/* <Switch>
          <Route exact path="/rental" component={Rentalview} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/admin" component={Admin} />
          {/* <Route path="/" component={Home} /> 
        </Switch> */}
        <Benefits/>
        <Footer/>
        <Footerbar/>
        
      </div>
    );
  }
}

//Home component
/*const Home = props => (
  <div>
    <h2>Home {console.log(props)}</h2>
  </div>
);*/


export default App;
