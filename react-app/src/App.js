import React, { Component } from 'react';
import { Redirect, Link, NavLink, Route, Switch } from "react-router-dom";
import Login, {fakeAuth} from "./Login";
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        
          <ul className="header">
            <li>
              <NavLink exact to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/admin">Admin area</NavLink>
            </li>
          </ul>
       

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/admin" component={Admin} />
        </Switch>
      </div>
    );
  }
}

//Home component
const Home = props => (
  <div>
    <h2>Home {console.log(props)}</h2>
  </div>
);

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

export default App;
