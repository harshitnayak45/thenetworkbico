import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainLayout from './component/mainLayout';
 import './App.css';



class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Switch>
              {/* <Route path="/layout" component={AppLayout} /> */}
              <Route path="/" component={MainLayout} />
            </Switch>

          </div>
        </Router>
      </div>
    );
  }
}

export default App;
