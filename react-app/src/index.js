import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createBrowserHistory} from 'history';
//import Jwt from './Jwt';
//import NB from './NaviBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import { Router } from "react-router-dom";

const hist = createBrowserHistory();

ReactDOM.render(
    <Router history={hist}>
      <App />
    </Router>,
    document.getElementById("root")
  );


serviceWorker.unregister();
