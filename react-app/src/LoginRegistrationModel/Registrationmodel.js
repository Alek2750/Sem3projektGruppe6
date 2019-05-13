import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
// import "./Loginmodel.css"

export default class RegisterModel extends React.Component {
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
            Register
          </span>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Register</DialogTitle>
            <DialogContent className="boxmodel">
              <form action="">
                  <TextField
                    id="outlined-with-placeholder"
                    label="First Name"
                    type="text"
                    name="name"
                    placeholder="Placeholder"
                    margin="normal"
                    variant="outlined"
                  />  
                  <TextField
                    id="outlined-with-placeholder"
                    label="Last Name"
                    type="text"
                    name="name"
                    placeholder="Placeholder"
                    margin="normal"
                    variant="outlined"
                  />  
                  <TextField
                      id="outlined-email-input"
                      label="Email"
                      type="email"
                      name="email"
                      autoComplete="email"
                      margin="normal"
                      variant="outlined"
                      />
                  <TextField
                      id="outlined-password-input"
                      label="Password"
                      type="password"
                      autoComplete="current-password"
                      margin="normal"
                      variant="outlined"
                      />
                  <TextField
                      id="outlined-password-input"
                      label="Confirm Password"
                      type="password"
                      autoComplete="current-password"
                      margin="normal"
                      variant="outlined"
                      />
              <button className="btn bg-orange btn-block btn-lg text-white">Register</button>
              </form>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="black">
                Cancel
              </Button>
              {/* <Button onClick={this.handleClose} color="orange">
                Subscribe
              </Button> */}
            </DialogActions>
          </Dialog>
        </span>
      );
    }
  }