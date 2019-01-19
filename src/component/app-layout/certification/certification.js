import React , {Component} from 'react';

class Certification extends Component{
    render(){
        return(
            <div>
                <div className="col-md-8 p-0 float-left application-registration-detail-main-left">
                    <div className="col-md-12 p-0 float-left application-registration-detail Certification-submit ">
                        <h2>Certification</h2>
                        <div className="col-md-12 p-0 float-left">
                            <form action="" className="form-application-registration-detail">
                                <div className="col-md-12   p-0 float-left">
                                    <p>Please read each certification item carefully and make sure you understand the terms before you submit you application.</p>
                                    <ul className="certification_ul">
                                        <li>I certify that the information in this application is true and that the essays were written by the applicant.</li>
                                        <li>I understand that falsification of any information will result in disqualification of this application.</li>
                                        <li>I agree that this application becomes the property of the The NETwork Scholarship Committee</li>
                                        <li>I understand that application will be accessed based on the information provided</li>
                                        <li>I understand that submission of this application does not guarantee receipt of a scholarship</li>
                                        <li>I agree that in the event that i am a scholarship recipient, this application will also serve as a release to biographical information in press release, newsletters, etc. to announce and promote The NETwork Scholarship Program</li>
                                    </ul>
                                </div>
                                <div className="col-md-12 p-0 float-left certify_label">
                                    <div className="col-md-6 p-0 float-left p_r_10 ">
                                        <input type="radio" name="certify" value="I certify"/>  <label htmlFor="f-option">I certify</label>
                                            <input type="radio" name="certify" value="I do not certify" />  <label htmlFor="f-option">I do not certify</label>
												</div>  
											</div>
                                        <div className="col-md-12 p-0 float-left">
                                            <div className="col-md-6 p-0 float-left p_r_10 ">
                                                <p>Type your full name</p>
                                                <input type="text" name="type_name"/>
												</div>
                                            </div>


                                            <div className="col-md-6  p-0  float-left button-submit">
                                                <input id="submit_form_application_1" type="button" name="submit_form_certification" value="Save and continue"/>
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
export default Certification;