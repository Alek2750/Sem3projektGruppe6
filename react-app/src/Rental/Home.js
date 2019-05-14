import React, { Component } from "react"
import { Redirect, Link, NavLink, Switch, Route } from "react-router-dom";
import Topbar from '../Header/Topbar'
import Navbar from '../Header/Navbar'
//import Rental from "../Freelance/Rental"
import Login, { fakeAuth } from "../Freelance/Login"
//import Rentalview from '../Rental/Rentalview';
//import DatePickers from "../Datepicker/Datepicker"
//import TimePickers from "../Datepicker/Timepicker"
import NativeSelects from "../Datepicker/Select"
import DateAndTimePickers from "../Datepicker/Datetime"
import './Home.css';
import { Button } from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";


// ================================

// ================================

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



class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      endDate: new Date()
    };

  }

  startDatehandleChange = (date) => {
    this.setState({
      startDate: date
    });
  }
  endDatehandleChange = (date) => {
    this.setState({
      endDate: date
    });
  }

  render() {
    console.log(this.state.startDate)
    return (
      <section id="welcome-section">
        <div>
          <Topbar />
          <Navbar />


          <div className="container1">
            <div className="alpha">
              <h2 class="secTitle">search for a car</h2>
              <div className="row no-gutters">
                <div className="col-lg-4">
                  {/* <NativeSelects />
                 */}</div>
                <div className="col-lg-3 ">
                  <DatePicker
                    selected={this.state.startDate}
                    onChange={this.startDatehandleChange}
                  />
                </div>
                <div className="col-lg-3 ">
                  <DatePicker
                    selected={this.state.endDate}
                    onChange={this.endDatehandleChange}
                  />
                </div>
                <div className="col-lg-2">
                  <Button className="homeBtn" onClick={() => { this.props.history.push(`/rental/${this.state.startDate}/${this.state.endDate}/rental`) }}>Search</Button>
                  {/* <button className="homeBtn" onClick={() => {this.props.history.push(`/rental/${this.state.startDate}/${this.state.endDate}/rental`)}}>Search</button>
                             */}</div>
              </div>
            </div>
          </div>

          {/* ========= */}
        </div>

      </section>

    );
  }
}

export default Home;