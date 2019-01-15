import React, { Component } from 'react';
class AppHeader extends Component {
    render() {
        return (
            <div>
                <div className="title-home-template col-md-12 p-0 float-left">
                    <div className="container">
                        <div className="col-md-12  float-left p-0">
                            <div className=" col-md-6 float-left p-0">
                                <h1>The Lewis H. Latimer Scholarship</h1>
                            </div>
                            <div className=" col-md-6 float-right p-0 log_out_style">
                                <h1 className="exit">Log Out / Exit</h1>
                                <div className="thank-you"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AppHeader; 