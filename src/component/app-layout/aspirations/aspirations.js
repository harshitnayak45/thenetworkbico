import React ,{Component} from 'react';
class Aspirations extends Component{
    render(){
        return(
            <div>
                <div className="col-md-8 p-0 float-left application-registration-detail-main-left">
                    <div className="col-md-12 p-0 float-left application-registration-detail Education-submit ">
                        <h2>Colleges and Career Aspirations</h2>
                        <div className="col-md-12 p-0 float-left">
                            <form action="" className="form-application-registration-detail">
                                <div className="col-md-12   p-0 float-left">
                                    <h3 style={{"marginTop": "10px"}}>Colleges you have been accepted to</h3>
                                </div>
                                <div className="col-md-12 p-0 float-left main_clone_aspirations">

                                    <div className="col-md-12 p-0 float-left main_clone_aspirations_detail clone_detail clone_remove">
                                        <h6 className="remove float-right">remove</h6>
                                        <div className="col-md-12 p-0 float-left  ">
                                            <div className="col-md-6 p-0 float-left p_r_10 ">
                                                <p>College 1</p>
                                                <input type="text" name="college[]" />
														</div>
                                            </div>
                                            <div className="score_SAT col-md-12 p-0 float-left file_style_input ">
                                                <p style={{"textAlign":"left"}}>College Upload</p>
                                                <input id="input-b12" className="style_input_file_custom" name="input-b12" type="file" accept="image/*" />
													</div>
                                            </div>
                                        </div>
                                        <div className="col-md-12   p-0 float-left clone_aspirations_button">
                                            <h6><svg className="svg-inline--fa fa-plus-circle fa-w-16" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="plus-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"></path></svg> <i className="fa fa-plus-circle" aria-hidden="true"></i> Add college</h6>
                                        </div>
                                        <div className="col-md-12   p-0 float-left">
                                            <h3>Aspirations</h3>
                                        </div>
                                        <div className="col-md-12 p-0 float-left">
                                            <div className="col-md-12 p-0 float-left ">
                                                <p>What are your educational and career aspirations?</p>
                                                <textarea rows="6" cols="80" id="career_aspirations"></textarea>
                                            </div>
                                        </div>

                                        <div className="col-md-6  p-0  float-left button-submit">
                                            <input id="submit_form_application_1" type="button" name="submit_form_aspirations" value="Save and continue"/>
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
export default Aspirations;
