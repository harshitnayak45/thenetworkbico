import React, {Component} from 'react';
class Extracurriculars extends Component{

    render(){
        return(
            <div>
                <div class="col-md-8 p-0 float-left application-registration-detail-main-left">
                    <div class="col-md-12 p-0 float-left application-registration-detail Education-submit ">
                        <h2>Extracurricular school activities</h2>
                        <div class="col-md-12 p-0 float-left">
                            <form action="" class="form-application-registration-detail">
                                <div class="col-md-12   p-0 float-left">
                                    <h6>Please describe all school activities in which you have participated during your high school years. Please include sports, clubs, committees and offices held (grades 9-12 only).</h6>
                                </div>
                                <div class="col-md-12 p-0 float-left not-have">
                                    <input type="checkbox" name="not_have" value="Not Have"/> I do not have any extracurricular school activities during my high school years<br/>
										</div>

                                        <div class="col-md-12 p-0 float-left extracurricular_clone">

                                            <div class="col-md-12 p-0 float-left extracurricular_clone_detail clone_remove">
                                                <h6 class="remove float-right">remove</h6>
                                                <div class="col-md-12 p-0 float-left">
                                                    <div class="col-md-12 p-0 float-left ">
                                                        <p>Extracurricular <span class="number_activity"></span> activity</p>
                                                        <textarea rows="4" cols="80" name="extracurricular_activity[]"></textarea>
                                                    </div>
                                                </div>
                                                <div class="col-md-12 p-0 float-left">
                                                    <div class="col-md-6 p-0 float-left p_r_10">
                                                        <p>Type of activity</p>
                                                        <select name="type_of_activity[]">
                                                            <option value="other">other</option>
                                                            <option value="sport">sport</option>
                                                            <option value="club/committee">club/committee</option>
                                                            <option value="school office">school office</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                        <div class="col-md-12   p-0 float-left clone_extracurricular_button">
                                            <h6><svg class="svg-inline--fa fa-plus-circle fa-w-16" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="plus-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"></path></svg><i class="fa fa-plus-circle" aria-hidden="true"></i>  Add another extracurricular school activity</h6>
                                        </div>
                                        <div class="col-md-6  p-0  float-left button-submit">
                                            <input id="submit_form_application_1" type="button" name="submit_form_extracurriculars" value="Save and continue"/>
										</div> 
									</form>
                                        <h5 class="thank-you"></h5>
									</div>
                                </div>
							</div>
               
            </div>
        );
    }

}

export default Extracurriculars; 