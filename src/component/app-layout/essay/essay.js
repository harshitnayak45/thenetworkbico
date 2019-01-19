import React , {Component} from 'react';
class Essay extends Component{
    render(){
        return(
            <div>
                <div className="col-md-8 p-0 float-left application-registration-detail-main-left">
                    <div className="col-md-12 p-0 float-left application-registration-detail Essay-submit ">
                        <h2>Essay</h2>
                        <div className="col-md-12 p-0 float-left">
                            <form action="" className="form-application-registration-detail">
                                <div className="col-md-12   p-0 float-left">
                                    <h6 style={{"marginTop":"0px","marginBottom": "30px"}}>In today's environment, science, technology, engineering, arts and math are key components to our society. Please describe (using 400-500 words), how your educational goals will either enhance or incorporate any of these components. In addition, please tell us how your educational will benefit the community and inspire your plans to give back.</h6>
                                </div>
                                <div className="col-md-12 p-0 float-left">
                                    <textarea className="essay_style" rows="8" cols="80" name="essay"></textarea>
                                    <p style={{"marginTop": "0px"}}>word count: <span className="word_count">###
											</span></p></div>
                                <div className="col-md-6  p-0  float-left button-submit">
                                    <input id="submit_form_application_1" type="button" name="submit_form_essay" value="Save and continue"/>
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

export default Essay;