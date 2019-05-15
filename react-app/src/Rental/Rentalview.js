import React, { Component } from 'react'
import {Switch, Route } from 'react-router-dom';
import Booking from './Booking';
import Rental from './Rental';
//import Home from './Home';

export default class Rentalview extends Component {
  render() {
      
    return (
      <React.Fragment>
          <Switch>
            <Route exact path='/rental' render={(props)=> <Booking {...props} /> } />
            <Route path='/rental/:startdate/:enddate' render={(props)=>  <Rental {...props} /> } /> 
          </Switch>
      </React.Fragment>
    )
  }
}
