import React, { Component } from 'react';
class Guardian extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: [],
            fields2: [],
            fieldArray: [],
            counter: 1,
            lists: [],
            lists2: [],
            formShow: true,
            email_address_guardian:'',
            firstname_guardian:''
        }
        this.baseState = this.state

    }
    componentDidMount() {

    }

    removeRow = (index) => {
        let val = this.state.lists;
        val.splice(index, 1);
        this.setState({ lists: val });
    }

    resetForm = () => {
        this.myFormRef.reset();
    }
    addGuardian = () => {
        let list = {
            'firstname_guardian': this.refs.firstname_guardian.value,
            'lastname_guardian': this.refs.lastname_guardian.value,
            'phone_cell_guardian': this.refs.phone_cell_guardian.value,
            'phone_home_guardian': this.refs.phone_home_guardian.value,
            'email_address_guardian': this.refs.email_address_guardian.value,
            'relationship': this.refs.relationship.value
        }
        this.setState({
            formShow: true
        })
        if (this.refs.email_address_guardian.value) {
            let lists = this.state.lists;
            lists.push(list)
            this.setState({
                lists: lists,
            })
            this.resetForm();

        } else {
            alert('please fill email address');
        }
       
    }
    saveMe = () => {
        this.addGuardian();
        this.setState({
            formShow: false
        })

    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
    }

    handleChangeEdit(field, idx, e) {
            let k = [];
            this.state.lists.map((val, index) => {
                if (idx == index) {
                    k.push({
                        ...val,
                        [field]: e.target.value
                    })
                } else {
                   k.push(val)
                }
            })
       
        this.setState({ lists: k });
    }

    render() {
        return (
            <div>
                <div className="col-md-8 p-0 float-left application-registration-detail-main-left">
                    <div className="col-md-12 p-0 float-left application-registration-detail Guardian-submit ">
                        <h2>Your guardian</h2>
                        <div className="col-md-12 p-0 float-left form-application-registration-detail">
                            {this.state.lists.map((array, index) =>
                                <div key={index}>

                                    <div className={index == 0 ? ('col-md-12 p-0 float-left  clone_remove') : ('col-md-12 p-0 float-left clone_guardian clone_remove')} >

                                        <div className="col-md-12 p-0 float-left">
                                            <div className="col-md-6 p-0 float-left p_r_10">
                                                <p>First name</p>
                                                <input type="text" onChange={this.handleChangeEdit.bind(this, "firstname_guardian",index)} name='firstname_guardian' ref='firstname_guardian1' value={array.firstname_guardian} />
                                            </div>
                                            <div className="col-md-6 p-0 float-left p_l_10">
                                                <p>Last name</p>
                                                <input type="text" onChange={this.handleChangeEdit.bind(this, "lastname_guardian", index)} name='lastname_guardian' 
                                                    value={array.lastname_guardian} />
                                            </div>
                                        </div>
                                        <div className="col-md-12 p-0 float-left">
                                            <div className="col-md-6 p-0 float-left p_r_10">
                                                <p>Phone (cell)</p>
                                                <input type="text" onChange={this.handleChangeEdit.bind(this, "phone_cell_guardian", index)} name='phone_cell_guardian' value={array.phone_cell_guardian} />
                                            </div>
                                            <div className="col-md-6 p-0 float-left p_l_10">
                                                <p>Phone (home)</p>
                                                <input type="text" onChange={this.handleChangeEdit.bind(this, "phone_home_guardian",index)} placeholder="optional" name='phone_home_guardian'  value={array.phone_home_guardian} />
                                            </div>
                                        </div>
                                        <div className="col-md-12   p-0 float-left">
                                            <div className="col-md-6 p-0  float-left p_r_10">
                                                <p>Email address</p>
                                                <input type="text" name='email_address_guardian' onChange={this.handleChangeEdit.bind(this, "email_address_guardian",index)} value={array.email_address_guardian} />
                                            </div>
                                            <div className="col-md-6 p-0  float-left p_l_10">
                                                <p>Relationship to applicant</p>
                                                <input type="text" onChange={this.handleChangeEdit.bind(this, "relationship",index)} name='relationship'  value={array.relationship} />
                                            </div>
                                        </div>
                                        <h6 className="remove float-right" onClick={this.removeRow.bind(this, index)}>remove </h6>
                                    </div>
                                </div>
                            )}

                            <form ref={(el) => this.myFormRef = el} className="form-application-registration-detail">
                                <div hidden={!this.state.formShow} className="col-md-12 p-0 float-left clone_guardian_main">
                                    <div className='col-md-12 p-0 float-left clone_guardian clone_remove'>

                                        <div className="col-md-12 p-0 float-left">
                                            <div className="col-md-6 p-0 float-left p_r_10">
                                                <p>First name</p>
                                                <input type="text" onChange={this.handleChange.bind(this, "firstname_guardian")} name="firstname_guardian" ref="firstname_guardian" id="firstname_guardian" />
                                            </div>
                                            <div className="col-md-6 p-0 float-left p_l_10">
                                                <p>Last name</p>
                                                <input type="text" onChange={this.handleChange.bind(this, "lastname_guardian")} name="lastname_guardian" ref="lastname_guardian" id="lastname_guardian" />
                                            </div>
                                        </div>
                                        <div className="col-md-12 p-0 float-left">
                                            <div className="col-md-6 p-0 float-left p_r_10">
                                                <p>Phone (cell)</p>
                                                <input type="text" onChange={this.handleChange.bind(this, "phone_cell_guardian")} name="phone_cell_guardian" ref="phone_cell_guardian" id="phone_cell_guardian" />
                                            </div>
                                            <div className="col-md-6 p-0 float-left p_l_10">
                                                <p>Phone (home)</p>
                                                <input type="text" onChange={this.handleChange.bind(this, "phone_home_guardian")} placeholder="optional" name="phone_home_guardian" ref="phone_home_guardian" id="phone_home_guardian" />
                                            </div>
                                        </div>
                                        <div className="col-md-12   p-0 float-left">
                                            <div className="col-md-6 p-0  float-left p_r_10">
                                                <p>Email address</p>
                                                <input type="text" onChange={this.handleChange.bind(this, "email_address_guardian")} name="email_address_guardian" name="email_address_guardian" ref="email_address_guardian" id="email_address_guardian" />
                                            </div>
                                            <div className="col-md-6 p-0  float-left p_l_10">
                                                <p>Relationship to applicant</p>
                                                <input type="text" onChange={this.handleChange.bind(this, "relationship")} name="relationship" name="relationship" ref="relationship" id="relationship" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-12   p-0 float-left clone_guardian_button">
                                    <div onClick={this.addGuardian}>
                                        <h3><svg className="svg-inline--fa fa-plus-circle fa-w-16" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="plus-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"></path></svg><i className="fa fa-plus-circle" aria-hidden="true"></i> Add guardian</h3>
                                    </div>
                                </div>

                                <div className="col-md-6  p-0  float-left button-submit">
                                    <input id="submit_form_application_1" onClick={this.saveMe} type="button" name="submit_form_guardian" value="Save and continue" />
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