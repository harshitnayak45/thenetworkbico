import React, { Component } from 'react';
import AppSidebar from './app-layout/app-sidebar/app-sidebar';
import Application from './app-layout/application/application';
import { Route, Switch } from "react-router-dom";
import Guardian from './app-layout/guardian/guardian';
import Education from './app-layout/education/education';
import Aspirations from './app-layout/aspirations/aspirations';

class MyApp extends Component {
    render() {
        return (
            <div>
                <div id="content" className="site-content col-md-12  float-left p-0">
                    <div className="container">
                        <div className="row">
                            <section id="primary" className="content-area col-sm-12 col-lg-12">
                                <main id="main" className="site-main" role="main">
                                    <article id="post-32" className="post-32 page type-page status-publish hentry">
                                        <div className="entry-content">
                                            <div className="vc_row wpb_row vc_row-fluid">
                                                <div className="wpb_column vc_column_container vc_col-sm-12">
                                                    <div className="vc_column-inner "><div className="wpb_wrapper">
                                                        <div className="wpb_text_column wpb_content_element ">
                                                            <div className="wpb_wrapper">
                                                                <div className="application-registration-shortcode2">
                                                                    <div>
                                                                        <Switch>
                                                                            <Route exact path='/app' component={Application} />
                                                                            <Route path='/app/guardian' component={Guardian} />
                                                                            <Route path='/app/education' component={Education} />
                                                                            <Route path='/app/aspirations' component={Aspirations} />

                                                                        </Switch>
                                                                        <AppSidebar />
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </main>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MyApp;
