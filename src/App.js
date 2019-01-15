import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import './App.css';
import AppLayout from './component/app-layout/app-layout';
import Home from './component/home/home';
import Login from './component/login/login';



class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Switch>
              <Route path="/layout" component={AppLayout} />
              <Route path="/" component={Home} />
             
             
            </Switch>

          </div>
        </Router>
      </div>
    );
  }
}

export default App;
