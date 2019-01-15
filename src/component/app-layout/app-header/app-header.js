import React, { Component } from 'react';
import { Link} from 'react-router-dom';
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
                                <h1 className="dashboard"> <Link to={'/'}>Dashboard</Link></h1>
                                <h1 className="save_exit_Application">Save and exit</h1>
                                <input type="hidden" name="ajaxUrl" value="http://scholarship.thenetworkbicp.org/wp-admin/admin-ajax.php" />
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