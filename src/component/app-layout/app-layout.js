import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import AppHeader from './app-header/app-header';
import AppInformation from './app-information/app-infomation';
import Application from './application/application';


class AppLayout extends Component {
    render() {
        return (
            <div>
                <div id="page" className="site">
                    <Router>
                        <div>

                            <AppHeader />

                            <Switch>

                                <Route exact path='/layout' component={AppInformation} />
                                <Route path='/layout/information' component={AppInformation} />
                                <Route path='/layout/application' component={Application} />

                            </Switch>


                        </div>


                    </Router>


                </div>

            </div>
        );
    }
}

export default AppLayout;