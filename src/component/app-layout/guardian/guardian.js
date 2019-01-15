import React, { Component } from 'react';
class Guardian extends Component {
    render() {
        return (
            <div>
                <div className="col-md-8 p-0 float-left application-registration-detail-main-left">
                    <div className="col-md-12 p-0 float-left application-registration-detail Guardian-submit ">
                        <h2>Your guardian</h2>
                        <div className="col-md-12 p-0 float-left">
                            <form action="" className="form-application-registration-detail">
                                <div className="col-md-12 p-0 float-left clone_guardian_main">

                                    <div id="clonedInput1" className="col-md-12 p-0 float-left clone_guardian clone_remove">
                                        <h6 className="remove float-right">remove</h6>
                                        <div className="col-md-12 p-0 float-left">
                                            <div className="col-md-6 p-0 float-left p_r_10">
                                                <p>First name</p>
                                                <input type="text" name="firstname_guardian[]" />
														</div>
                                                <div className="col-md-6 p-0 float-left p_l_10">
                                                    <p>Last name</p>
                                                    <input type="text" name="lastname_guardian[]" />
														</div>
                                                </div>
                                                <div className="col-md-12 p-0 float-left">
                                                    <div className="col-md-6 p-0 float-left p_r_10">
                                                        <p>Phone (cell)</p>
                                                        <input type="text" name="phone_cell_guardian[]" />
														</div>
                                                        <div className="col-md-6 p-0 float-left p_l_10">
                                                            <p>Phone (home)</p>
                                                            <input type="text" placeholder="optional" name="phone_home_guardian[]" />
														</div>
                                                        </div>
                                                        <div className="col-md-12   p-0 float-left">
                                                            <div className="col-md-6 p-0  float-left p_r_10">
                                                                <p>Email address</p>
                                                                <input type="text" name="email_address_guardian[]" />
														</div>
                                                                <div className="col-md-6 p-0  float-left p_l_10">
                                                                    <p>Relationship to applicant</p>
                                                                    <input type="text" name="relationship[]" />
														</div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        <div className="col-md-12   p-0 float-left clone_guardian_button">
                                                            <h3><svg className="svg-inline--fa fa-plus-circle fa-w-16" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="plus-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"></path></svg><i className="fa fa-plus-circle" aria-hidden="true"></i> Add guardian</h3>
                                                        </div>

                                                        <div className="col-md-6  p-0  float-left button-submit">
                                                            <input id="submit_form_application_1" type="button" name="submit_form_guardian" value="Save and continue" />
											</div> 
										</form>
                                                        <h5 className="thank-you"></h5>
                                                    </div>
                                                </div>
                                            </div>

            </div>
        );
    }
}

export default Guardian; 