import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import "./Loginmodel.css"

export default class LoginModel extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <span>
        <span className="login" onClick={this.handleClickOpen}>
          Login
        </span>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
        <div className="row no-gutters">
          <div className="col-md-6 bg-orange p-3">
              <DialogTitle id="form-dialog-title" className="text-white">Registration</DialogTitle>
              <p className="text-white" style={{paddingLeft: "25px"}}>As a registered Sixt customer, you can benefit from advantages such as</p>
              <ul>
                <li><i className="fas fa-check pr-3" ></i>up to 20% discount on your rentals</li>
                <li><i className="fas fa-check pr-3" ></i>free vehicle upgrades</li>
                <li><i className="fas fa-check pr-3" ></i>Express Check-In</li>
                <li><i className="fas fa-check pr-3" ></i>bonus points/ miles vouchers</li>
                <li><i className="fas fa-check pr-3" ></i>  <a href="" className="text-white">and many other benefits</a></li>
              </ul>
              <button className="btn btn-outline-light btn-lg btn-block">Register</button>

          </div>
          <div className="col-md-6">
              <DialogTitle id="form-dialog-title" className="text-dark">Login</DialogTitle>
                <DialogContent>
                  <form action="">
                      <TextField
                          id="outlined-email-input"
                          label="Email"
                          className=""
                          type="email"
                          name="email"
                          autoComplete="email"
                          margin="normal"
                          variant="outlined"
                          />
                      <TextField
                          id="outlined-password-input"
                          label="Password"
                          className=""
                          type="password"
                          autoComplete="current-password"
                          margin="normal"
                          variant="outlined"
                          />
                  <button className="btn bg-orange btn-block btn-lg text-white">Login</button>
                  </form>
                </DialogContent>
                <DialogActions>
                <Button onClick={this.handleClose} color="black">
                  Cancel
                </Button>
              </DialogActions>
          </div>
        </div>
        </Dialog>
      </span>
    );
  }
}
