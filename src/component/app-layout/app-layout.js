import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AppHeader from './app-header/app-header';
import AppInformation from './app-information/app-infomation';
import ApplicationHub from './application-hub/applicationHub';


class AppLayout extends Component {
    render() {
        return (
            <div>
                <div id="page" className="site">
                   
                        <div>
                            <AppHeader />
                            <Switch>
                                <Route exact path='/layout' component={AppInformation} />
                                <Route path='/layout/information' component={AppInformation} />
                                <Route path='/layout/application-hub' component={ApplicationHub} />
                            </Switch>
                        </div>
                  
                </div>
            </div>
        );
    }
}

export default AppLayout;