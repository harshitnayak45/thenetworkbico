import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Application from '../application/application';
import AppSideBar from '../app-sidebar/app-sidebar';
class ApplicationHub extends Component {
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

                                                                  
                                                                    <Application />
                                                                   
                                                                    <AppSideBar />

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

export default ApplicationHub; 