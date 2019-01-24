import React, {Component} from 'react';
class Extracurriculars extends Component{

    constructor(props) {
        super(props);
        this.state = {
            fields: [],
            lists: [],
            lists2: [],
        }

    }
    componentDidMount() {
        
    }
    removeRow = (index) => {
        console.log('xxxxxxxxxxx index', index);

        this.state.lists.splice(index, 1);
        this.setState({ lists: this.state.lists });

    }
    addExtracurricular = () => {

        let list = {
            'extracurricular_activity': this.refs.extracurricular_activity.value,
            'type_of_activity': this.refs.type_of_activity.value,
          
        }

            let lists = this.state.lists;
            lists.push(list)
            this.setState({
                lists: lists,
            })

           // this.resetForm();

       
        console.log('xxxxxxxxxxxxxxxx array list', this.state.lists);
    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
    }


    render(){
        return(
            <div>
                <div className="col-md-8 p-0 float-left application-registration-detail-main-left">
                    <div className="col-md-12 p-0 float-left application-registration-detail Education-submit ">
                        <h2>Extracurricular school activities</h2>
                        <div className="col-md-12 p-0 float-left">
                            <form action="" className="form-application-registration-detail">
                                <div className="col-md-12   p-0 float-left">
                                    <h6>Please describe all school activities in which you have participated during your high school years. Please include sports, clubs, committees and offices held (grades 9-12 only).</h6>
                                </div>
                                <div className="col-md-12 p-0 float-left not-have">
                                    <input type="checkbox" name="not_have" value="Not Have"/> I do not have any extracurricular school activities during my high school years<br/>
										</div>

                                        <div className="col-md-12 p-0 float-left extracurricular_clone">

                                    {this.state.lists.map((list, index) =>
                                        <div key={index}>


                                    <div className="col-md-12 p-0 float-left extracurricular_clone_detail clone_remove">
                                       
                                        <div className="col-md-12 p-0 float-left">
                                            <div className="col-md-12 p-0 float-left ">
                                                <p>Extracurricular <span className="number_activity"></span> activity</p>
                                                        <textarea rows="4" cols="80" name="extracurricular_activity" onChange={this.handleChange.bind(this, "extracurricular_activity")} name="extracurricular_activity" ref="extracurricular_activity1" value={list.extracurricular_activity} id="extracurricular_activity"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12 p-0 float-left">
                                            <div className="col-md-6 p-0 float-left p_r_10">
                                                <p>Type of activity</p>
                                                        <select name="type_of_activity" value={list.type_of_activity}  onChange={this.handleChange.bind(this, "type_of_activity")} ref="type_of_activity1" id="type_of_activity">
                                                    <option value="other">other</option>
                                                    <option value="sport">sport</option>
                                                    <option value="club/committee">club/committee</option>
                                                    <option value="school office">school office</option>
                                                </select>
                                            </div>
                                        </div>
                                                <h6 className="remove float-right" onClick={this.removeRow.bind(this, index)}>remove </h6>
                                    </div>

                                        </div>
                                    )}




                                            <div className="col-md-12 p-0 float-left extracurricular_clone_detail clone_remove">
                                                <div className="col-md-12 p-0 float-left">
                                                    <div className="col-md-12 p-0 float-left ">
                                                        <p>Extracurricular <span className="number_activity"></span> activity</p>
                                                <textarea rows="4" cols="80" name="extracurricular_activity" onChange={this.handleChange.bind(this, "extracurricular_activity")} name="extracurricular_activity" ref="extracurricular_activity" id="extracurricular_activity"></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 p-0 float-left">
                                                    <div className="col-md-6 p-0 float-left p_r_10">
                                                        <p>Type of activity</p>
                                                <select name="type_of_activity" onChange={this.handleChange.bind(this, "type_of_activity")} ref="type_of_activity" id="type_of_activity">
                                                            <option value="other">other</option>
                                                            <option value="sport">sport</option>
                                                            <option value="club/committee">club/committee</option>
                                                            <option value="school office">school office</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                        <div className="col-md-12   p-0 float-left clone_extracurricular_button">
                                    <div onClick={this.addExtracurricular}>
                                            <h6><svg className="svg-inline--fa fa-plus-circle fa-w-16" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="plus-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"></path></svg><i className="fa fa-plus-circle" aria-hidden="true"></i>  Add another extracurricular school activity</h6>
                                            </div>
                                        </div>
                                        <div className="col-md-6  p-0  float-left button-submit">
                                            <input id="submit_form_application_1" type="button" name="submit_form_extracurriculars" value="Save and continue"/>
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

export default Extracurriculars; 