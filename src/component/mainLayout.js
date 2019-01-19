import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './home/home';
import AppLayout from './appLayout';
import Register from './register/register';
import Login from './login/login';

class MainLayout extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Switch>
                            {/* <Route path="/layout" component={AppLayout} /> */}
                            <Route path="/home" component={Home} />
                            <Route path="/login" component={Login} />
                            <Route path="/register" component={Register} />
                            <Route path="/" component={AppLayout} />
                                                           
                        </Switch>

                    </div>
                </Router>
            </div>
        );
    }
}

export default MainLayout;
