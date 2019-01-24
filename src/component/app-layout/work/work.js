import React ,{Component} from 'react';
class Work extends Component{
    constructor(props) {
        super(props);
        this.state = {
            fields: [],
            lists: [],
        }
    }

    addWork = () => {

        let list = {
            'position': this.refs.position.value,
            'repossibilities': this.refs.repossibilities.value,
        }

        let lists = this.state.lists;
        lists.push(list)
        this.setState({
            lists: lists,
        })

        console.log('xxxxxxxxx', this.state.lists );

        this.resetForm();

    }
    resetForm = () => {

        this.myFormRef.reset();

    }

    removeRow = (index) => {
        this.state.lists.splice(index, 1);
        this.setState({ lists: this.state.lists });

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
                    <div className="col-md-12 p-0 float-left application-registration-detail Work-submit ">
                        <h2>Work Experiences</h2>
                        <div className="col-md-12   p-0 float-left">
                            <h6>Please describe all work experiences during your high school years (grades 9-12 only).</h6>
                        </div>
                        <div className="col-md-12 p-0 float-left not-have">
                            <input type="checkbox" name="not_have" value="Not Have" /> I do not have any work experiences during my high school years<br />
                        </div>
                        <div className="col-md-12 p-0 float-left form-application-registration-detail">
                            {this.state.lists.map((array, index) =>
                                <div key={index}>
                                    <div id="clonedInput1" className="col-md-12 p-0 float-left work_clone_detail clone_detail clone_remove">
                                        <div className="col-md-12 p-0 float-left ">
                                            <div className="col-md-6 p-0 float-left p_r_10 ">
                                                <p>Work position / title <span className="number_activity"></span></p>
                                                <input type="text" value={array.position} name="position" onChange={this.handleChange.bind(this, "position")} ref="position1" />
                                            </div>
                                            <div className="col-md-12 p-0 float-left">
                                                <div className="col-md-12 p-0 float-left ">
                                                    <p>Work reponsibilities <span className="number_activity"></span></p>
                                                    <textarea rows="4" value={array.repossibilities} cols="80" name="repossibilities" onChange={this.handleChange.bind(this, "repossibilities")} ref="repossibilities1"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 className="remove float-right" onClick={this.removeRow.bind(this, index)}>remove </h6>

                                </div>

                            )}
                            <form ref={(el) => this.myFormRef = el}>
                                        <div className="col-md-12 p-0 float-left work_clone">

                                            <div id="clonedInput1" className="col-md-12 p-0 float-left work_clone_detail clone_detail clone_remove">
                                               
                                                <div className="col-md-12 p-0 float-left ">
                                                    <div className="col-md-6 p-0 float-left p_r_10 ">
                                                        <p>Work position / title <span className="number_activity"></span></p>
                                                <input type="text" name="position" onChange={this.handleChange.bind(this, "position")} ref="position"/>
															</div>
                                                        <div className="col-md-12 p-0 float-left">
                                                            <div className="col-md-12 p-0 float-left ">
                                                                <p>Work reponsibilities <span className="number_activity"></span></p>
                                                    <textarea rows="4" cols="80" name="repossibilities" onChange={this.handleChange.bind(this, "repossibilities")} ref="repossibilities"></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>
                                <div onClick={this.addWork} className="col-md-12 p-0 float-left clone_work_button">
                                                <h6><svg className="svg-inline--fa fa-plus-circle fa-w-16" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="plus-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"></path></svg> <i className="fa fa-plus-circle" aria-hidden="true"></i> Add another work position</h6>
                                            </div>
                                            <div className="col-md-6  p-0  float-left button-submit">
                                                <input id="submit_form_application_1" type="button" name="submit_form_work" value="Save and continue"/>
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

export default Work;