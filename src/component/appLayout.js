import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import AppHeader from './app-layout/app-header/app-header';
import AppInformation from './app-layout/app-information/app-infomation';
import MyApp from './myApp';
import Review from './app-layout/review/review';

class AppLayout extends Component {
    render() {
        return (
            <div>
                <div>
                    <AppHeader />

                    <Switch>
                        <Route exact path='/' component={AppInformation} />
                        <Route path='/app' component={MyApp} />
                        <Route path="/review" component={Review} />

                    </Switch>
                </div>
            </div>
        );
    }
}

export default AppLayout;
