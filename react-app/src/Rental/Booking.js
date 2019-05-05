import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import {Button} from 'react-bootstrap'
export default class Booking extends Component {
    constructor(props) {
        super(props);
        this.state = {
          startDate: new Date(),
          endDate: new Date()
        };
      
      }
     
      startDatehandleChange =(date)=> {
        this.setState({
          startDate: date
        });
      }
      endDatehandleChange =(date)=> {
        this.setState({
          endDate: date
        });
      }
      render() {
        return (
          <div style={{marginTop: 50}}> 
          <h3>Vælg dato</h3>
         
          <DatePicker
            selected={this.state.startDate}
            onChange={this.startDatehandleChange}
          />

           <DatePicker
            selected={this.state.endDate}
            onChange={this.endDatehandleChange}
          />

          <Button onClick={() => {this.props.history.push(`/rental/${this.state.startDate}/${this.state.endDate}/rental`)}}>Hent ledige biler</Button>
           </div>  
        );
      }
}
