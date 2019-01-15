import React, { Component } from 'react';
class Application extends Component {
    render() {
        return (
            <div>

                <div className="col-md-8 p-0 float-left application-registration-detail-main-left">
                    <div className="col-md-12 p-0 float-left application-registration-detail Application-submit ">
                        <h2>About the applicant (you)</h2>
                        <div className="col-md-12 p-0 float-left">
                            <form action="" className="form-application-registration-detail">
                                <div className="col-md-12 p-0 float-left">
                                    <div className="col-md-6 p-0 float-left p_r_10">
                                        <p>First name</p>
                                        <input type="text" name="firstname" disabled="" />
                                    </div>
                                    <div className="col-md-6 p-0 float-left p_l_10">
                                        <p>Last name</p>
                                        <input type="text" name="lastname" disabled="" />
                                    </div>
                                </div>
                                <div className="col-md-12 p-0 float-left">
                                    <div className="col-md-6 p-0 float-left p_r_10">
                                        <p>Phone (cell)</p>
                                        <input type="text" name="phone_cell" />
                                    </div>
                                    <div className="col-md-6 p-0 float-left p_l_10">
                                        <p>Phone (home)</p>
                                        <input type="text" placeholder="optional" name="phone_home" />
                                    </div>
                                </div>
                                <div className="col-md-12   p-0 float-left">
                                    <div className="col-md-6 p-0  float-left p_r_10">
                                        <p>Email address</p>
                                        <input type="text" name="email_address" disabled="" />
                                    </div>
                                    <div className="col-md-6 p-0  float-left p_l_10">
                                        <p>Gender</p>
                                        <input type="radio" id="contactChoice1" name="gender" value="Female" />
                                        <label htmlFor="contactChoice1">Female</label>

                                        <input type="radio" id="contactChoice2" name="gender" value="Male" />
                                        <label htmlFor="contactChoice2">Male</label>

                                        <input type="radio" id="contactChoice3" name="gender" value="Rather not say" />
                                        <label htmlFor="contactChoice3">Rather not say</label>
                                    </div>
                                </div>
                                <div className="col-md-12   p-0 float-left">
                                    <h3>Sponsor</h3>
                                </div>
                                <div className="col-md-12 p-0 float-left">
                                    <div className="col-md-8 p-0 float-left p_r_10 ">
                                        <p>Your local The NETwork BICP chapter</p>
                                        <select name="your_local_sponsor">
                                            <option value="Washington D.C.">Washington D.C.</option>
                                            <option value="Illinois">Illinois</option>
                                            <option value="Indiana">Indiana</option>
                                            <option value="Michigan">Michigan</option>
                                            <option value="New York/New Jersey">New York/New Jersey</option>
                                            <option value="Columbus">Columbus</option>
                                            <option value="Pennsylvania">Pennsylvania</option>
                                            <option value="Wisconsin">Wisconsin</option>
                                            <option value="Jacksonville">Jacksonville</option>
                                            <option value="South Florida">South Florida</option>
                                            <option value="Atlanta">Atlanta</option>
                                            <option value="Kentucky">Kentucky</option>
                                            <option value="Nashville">Nashville</option>
                                            <option value="Arkansas">Arkansas</option>
                                            <option value="Louisiana">Louisiana</option>
                                            <option value="Joplin">Joplin</option>
                                            <option value="Kansas City">Kansas City</option>
                                            <option value="St. Louis">St. Louis</option>
                                            <option value="Oklahoma">Oklahoma</option>
                                            <option value="Austin">Austin</option>
                                            <option value="Dallas/Ft. Worth">Dallas/Ft. Worth</option>
                                            <option value="Houston">Houston</option>
                                            <option value="San Antonio">San Antonio</option>
                                            <option value="Las Vegas">Las Vegas</option>
                                            <option value="Los Angeles">Los Angeles</option>
                                            <option value="Sacramento">Sacramento</option>
                                            <option value="San Diego">San Diego</option>
                                            <option value="Seattle">Seattle</option>
                                            <option value="Orlando">Orlando</option>
                                            <option value="Bay Area">Bay Area</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    <div className="col-md-4 p-0 float-left p_l_10 ">
                                        <p>Sponsor ATTUID</p>
                                        <div className="col-md-6 p-0 float-left ">
                                            <input type="text" id="sponsor" name="sponsor" value="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12   p-0 float-left">
                                    <h3>Address</h3>
                                </div>
                                <div className="col-md-12 p-0 float-left">
                                    <div className="col-md-6 p-0 float-left p_r_10">
                                        <p>Street address</p>
                                        <input type="text" name="street_address" />
                                    </div>
                                    <div className="col-md-6 p-0 float-left p_l_10">
                                        <p>Apt, suite, or bldg</p>
                                        <input type="text" name="suite" placeholder="optional" />
                                    </div>
                                </div>
                                <div className="col-md-12 p-0 float-left">
                                    <div className="col-md-4 p-0 float-left p_r_10">
                                        <p>City</p>
                                        <input type="text" name="city" />
                                    </div>
                                    <div className="col-md-2 p-0 float-left p_l_10 p_r_10">
                                        <p>State</p>
                                        <input type="text" name="state" />
                                    </div>
                                    <div className="col-md-2 p-0 float-left p_l_10">
                                        <p>Zip code</p>
                                        <input type="text" name="zip_code" />
                                    </div>
                                </div>
                                <div className="col-md-12   p-0 float-left">
                                    <h3>Your headshot</h3>
                                </div>
                                <div className="col-md-12 p-0 float-left file_style_input">
                                    <input id="input-b12" className="style_input_file_custom" name="input-b12" type="file" accept="image/*" />
                                </div>
                                <div className="col-md-6  p-0  float-left button-submit">
                                    <input id="submit_form_application_1" type="button" name="submit_form_application" value="Save and continue" />
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

export default Application; 