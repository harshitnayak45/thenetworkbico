import React,{Component } from 'react';
class Recommend extends Component{
    render(){
        return(
            <div>
                <div className="col-md-8 p-0 float-left application-registration-detail-main-left">
                    <div className="col-md-12 p-0 float-left application-registration-detail Recommend-submit ">
                        <h2>Letter of Recommendation</h2>
                        <div className="col-md-12 p-0 float-left">
                            <form action="" className="form-application-registration-detail">
                                <div className="col-md-12   p-0 float-left">
                                    <p>Recommendation must include:</p>
                                    <ul className="recommendation_ul">
                                        <li>Title of recommender</li>
                                        <li>Name</li>
                                        <li>Phone number</li>
                                        <li>Address of location they represent</li>
                                        <li>Email address</li>
                                        <li>Must be on letterhead (school, church, organization, company)</li>
                                    </ul>
                                </div>
                                <div className="col-md-12 p-0 float-left file_style_input ">
                                    <input id="input-b12" className="style_input_file_custom" name="input-b12" type="file" accept="image/*" />
										</div>
                                    <div className="col-md-6  p-0  float-left button-submit">
                                        <input id="submit_form_application_1" type="button" name="submit_form_Recommend" value="Save and continue"/>
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

export default Recommend;