import React, { Component } from 'react';
class Education extends Component {
    render() {
        return (
            <div>
                <div className="col-md-8 p-0 float-left application-registration-detail-main-left">
                    <div className="col-md-12 p-0 float-left application-registration-detail Education-submit ">
                        <h2>Education</h2>
                        <div className="col-md-12 p-0 float-left">
                            <form action="" className="form-application-registration-detail">
                                <div className="col-md-12   p-0 float-left">
                                    <h3 style={{"marginTop": "10px"}}>High school</h3>
                                </div>
                                <div className="col-md-12 p-0 float-left">
                                    <div className="col-md-6 p-0 float-left p_r_10">
                                        <p>Name of high school</p>
                                        <input type="text" name="name_high_school"/>
											</div>
                                        <div className="col-md-6 p-0 float-left p_l_10">
                                            <p>High school phone</p>
                                            <input type="text" name="high_school_phone"/>
											</div>
                                        </div>
                                        <div className="col-md-12 p-0 float-left">
                                            <div className="col-md-6 p-0 float-left p_r_10">
                                                <p>High school street address</p>
                                                <input type="text" name="high_school_address"/>
											</div>
                                                <div className="col-md-6 p-0 float-left p_l_10">
                                                    <p>School Involvement</p>
                                                    <select name="school_involvement">
                                                        <option value="7 - 8 Activities" rel="4">7 - 8 Activities</option>
                                                        <option value="6 - 4 Activities" rel="3">6 - 4 Activities</option>
                                                        <option value="3 -2 Activities" rel="2">3 -2 Activities</option>
                                                        <option value="1 Activity" rel="1">1 Activity</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-12 p-0 float-left">
                                                <div className="col-md-4 p-0 float-left p_r_10">
                                                    <p>City</p>
                                                    <input type="text" name="high_school_city"/>
											</div>
                                                    <div className="col-md-2 p-0 float-left p_l_10 p_r_10">
                                                        <p>State</p>
                                                        <select name="high_school_state">
                                                            <option value="AL">AL</option>
                                                            <option value="AK">AK</option>
                                                            <option value="AR">AR</option>
                                                            <option value="AZ">AZ</option>
                                                            <option value="CA">CA</option>
                                                            <option value="CO">CO</option>
                                                            <option value="CT">CT</option>
                                                            <option value="DC">DC</option>
                                                            <option value="DE">DE</option>
                                                            <option value="FL">FL</option>
                                                            <option value="GA">GA</option>
                                                            <option value="HI">HI</option>
                                                            <option value="IA">IA</option>
                                                            <option value="ID">ID</option>
                                                            <option value="IL">IL</option>
                                                            <option value="IN">IN</option>
                                                            <option value="KS">KS</option>
                                                            <option value="KY">KY</option>
                                                            <option value="LA">LA</option>
                                                            <option value="MA">MA</option>
                                                            <option value="MD">MD</option>
                                                            <option value="ME">ME</option>
                                                            <option value="MI">MI</option>
                                                            <option value="MN">MN</option>
                                                            <option value="MO">MO</option>
                                                            <option value="MS">MS</option>
                                                            <option value="MT">MT</option>
                                                            <option value="NC">NC</option>
                                                            <option value="NE">NE</option>
                                                            <option value="NH">NH</option>
                                                            <option value="NJ">NJ</option>
                                                            <option value="NM">NM</option>
                                                            <option value="NV">NV</option>
                                                            <option value="NY">NY</option>
                                                            <option value="ND">ND</option>
                                                            <option value="OH">OH</option>
                                                            <option value="OK">OK</option>
                                                            <option value="OR">OR</option>
                                                            <option value="PA">PA</option>
                                                            <option value="RI">RI</option>
                                                            <option value="SC">SC</option>
                                                            <option value="SD">SD</option>
                                                            <option value="TN">TN</option>
                                                            <option value="TX">TX</option>
                                                            <option value="UT">UT</option>
                                                            <option value="VT">VT</option>
                                                            <option value="VA">VA</option>
                                                            <option value="WA">WA</option>
                                                            <option value="WI">WI</option>
                                                            <option value="WV">WV</option>
                                                            <option value="WY">WY</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-2 p-0 float-left p_l_10">
                                                        <p>Zip code</p>
                                                        <input type="text" name="high_school_zip_code"/>
											</div>
                                                    </div>
                                                    <div className="col-md-12   p-0 float-left">
                                                        <h3>Counselor</h3>
                                                    </div>
                                                    <div className="col-md-12 p-0 float-left">
                                                        <div className="col-md-6 p-0 float-left p_r_10">
                                                            <p>High school counselor</p>
                                                            <input type="text" name="high_school_counselor"/>
											</div>
                                                            <div className="col-md-6 p-0 float-left p_l_10">
                                                                <p>Phone</p>
                                                                <input type="text" name="phone_counselor"/>
											</div>
                                                            </div>
                                                            <div className="col-md-12 p-0 float-left">
                                                                <div className="col-md-6 p-0 float-left p_r_10">
                                                                    <p>Email</p>
                                                                    <input type="text" name="email_counselor"/>
											</div>
                                                                </div>
                                                                <div className="col-md-12 p-0 float-left">
                                                                    <p className="small">IMPORTANT: We will send a link to the school counselor's email after your application is submitted.<br/>It is your repossibility to ensure the school counselor received the email with the upload link and that the upload your transcripts before May 12.</p>
										</div>
                                                                    <div className="col-md-12   p-0 float-left">
                                                                        <h3>Student</h3>
                                                                    </div>
                                                                    <div className="col-md-12 p-0 float-left">
                                                                        <div className="col-md-6 p-0 float-left p_r_10">
                                                                            <p>Student ID</p>
                                                                            <input type="text" name="student_id"/>
											</div>
                                                                            <div className="col-md-6 p-0 float-left p_l_10">
                                                                                <p>Graduation date</p>
                                                                                <input className="datepicker hasDatepicker" type="text" name="graduation_date" id="dp1539132128974"/>
											</div>
                                                                            </div>
                                                                            <div className="col-md-12 p-0 float-left">
                                                                                <div className="col-md-6 p-0 float-left p_r_10">
                                                                                    <p>Cumulative GPA</p>
                                                                                    <select name="cumulative_gpa">
                                                                                        <option value="4.0+" rel="5">4.0+</option>
                                                                                        <option value="3.9 - 3.7" rel="4">3.9 - 3.7</option>
                                                                                        <option value="3.6 - 3.4" rel="3">3.6 - 3.4</option>
                                                                                        <option value="3.3 - 3.1" rel="2">3.3 - 3.1</option>
                                                                                        <option value="3" rel="1">3</option>
                                                                                    </select>
                                                                                </div>

                                                                                <div className="col-md-6 p-0 float-left p_l_10">
                                                                                    <p>Class Rank</p>
                                                                                    <select name="class_rank">
                                                                                        <option value="Top 5%" rel="3">Top 5%</option>
                                                                                        <option value="Top 10%" rel="2">Top 10%</option>
                                                                                        <option value="Top 25%" rel="1">Top 25%</option>
                                                                                    </select>
                                                                                </div>
                                                                                <div className="col-md-6 p-0 float-left p_r_10 ">
                                                                                    <p>Final ACT Score</p>
                                                                                    <select name="final_act_score">
                                                                                        <option value="" rel="">N/A</option>
                                                                                        <option value="36" rel="5">36</option>
                                                                                        <option value="35 - 29" rel="4">35 - 29</option>
                                                                                        <option value="28 - 24" rel="3">28 - 24</option>
                                                                                        <option value="23 - 20" rel="2">23 - 20</option>
                                                                                        <option value="19 - 18" rel="1">19 - 18</option>
                                                                                    </select>
                                                                                </div>
                                                                                <div className="col-md-6 p-0 float-left p_l_10">
                                                                                    <p>Final SAT Score</p>
                                                                                    <select name="final_sat_score">
                                                                                        <option value="" rel="">N/A</option>
                                                                                        <option value="1600" rel="5">1600</option>
                                                                                        <option value="1599 - 1200" rel="4">1599 - 1200</option>
                                                                                        <option value="1199 - 800" rel="3">1199 - 800</option>
                                                                                        <option value="799 - 500" rel="2">799 - 500</option>
                                                                                        <option value="499 - 400" rel="1">499 - 400</option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-12 p-0 float-left">
                                                                                <div className="col-md-8 p-0 float-left ">
                                                                                    <li className="small_li"><p className="small">An ACT score, an SAT score or BOTH must be entered</p></li>
                                                                                    <li className="small_li"><p className="small">Student's name should appear on the score reports</p></li>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-6  p-0  float-left button-submit">
                                                                                <input id="submit_form_application_1" type="button" name="submit_form_education" value="Save and continue"/>
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

export default Education; 