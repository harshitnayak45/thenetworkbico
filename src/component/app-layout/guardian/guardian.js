import React, { Component } from 'react';
class Guardian extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: [],
            fieldArray: [],
            counter: 1,
            lists:[],
            lists2: [],
            formShow:true
        }
        this.baseState = this.state

    }
    componentDidMount() {
        //  this.addGuardian();
    }



    removeRow = (index) => {
        console.log('xxxxxxxxxxx index', index);
        if (index !== -1) {
            this.state.lists.splice(index, 1);
            this.setState({ lists: this.state.lists });
        }
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

        if (this.refs.email_address_guardian.value){

            let lists = this.state.lists;
            lists.push(list)
            this.setState({
                lists: lists,
            })

            this.resetForm();

       }else{
           alert('please fill email address');
       }
       

        console.log('xxxxxxxxxxxxxxxx array list', this.state.lists);


    }
    saveMe =()=>{
        this.addGuardian();
        this.setState({
            formShow: false
        })

        





    }

    handleChange1 = (index)=> {

        let lists2 = this.state.lists;

        let list2 = {
            'firstname_guardian': this.refs.firstname_guardian1.value,
            'lastname_guardian': this.refs.lastname_guardian1.value,
            'phone_cell_guardian': this.refs.phone_cell_guardian1.value,
            'phone_home_guardian': this.refs.phone_home_guardian1.value,
            'email_address_guardian': this.refs.email_address_guardian1.value,
            'relationship': this.refs.relationship1.value
        }

        console.log('xxxxxxxxxxx index', index);
      
            this.state.lists2.splice(index, 1, list2);
            this.setState({ lists: this.state.lists2 });

        console.log('xxxxxxxxxxxxxxxx array list', this.state.lists);
      

     

      



    }

   
    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
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
                                                <input type="text" name="firstname_guardian" ref="firstname_guardian1" id="firstname_guardian" onChange={this.handleChange1.bind(this, index)} defaultValue={array.firstname_guardian} />
                                            </div>
                                            <div className="col-md-6 p-0 float-left p_l_10">
                                                <p>Last name</p>
                                                <input type="text" onChange={this.handleChange1.bind(this, index)} name="lastname_guardian" ref="lastname_guardian1" id="lastname_guardian" defaultValue={array.lastname_guardian} />
                                            </div>
                                        </div>
                                        <div className="col-md-12 p-0 float-left">
                                            <div className="col-md-6 p-0 float-left p_r_10">
                                                <p>Phone (cell)</p>
                                                <input type="text" onChange={this.handleChange1.bind(this, index)} name="phone_cell_guardian" ref="phone_cell_guardian1" id="phone_cell_guardian" defaultValue={array.phone_cell_guardian} />
                                            </div>
                                            <div className="col-md-6 p-0 float-left p_l_10">
                                                <p>Phone (home)</p>
                                                <input type="text" onChange={this.handleChange1.bind(this, index)} placeholder="optional" name="phone_home_guardian" ref="phone_home_guardian1" id="phone_home_guardian" defaultValue={array.phone_home_guardian} />
                                            </div>
                                        </div>
                                        <div className="col-md-12   p-0 float-left">
                                            <div className="col-md-6 p-0  float-left p_r_10">
                                                <p>Email address</p>
                                                <input type="text" onChange={this.handleChange1.bind(this, index)} name="email_address_guardian" name="email_address_guardian" ref="email_address_guardian1" id="email_address_guardian" defaultValue={array.email_address_guardian} />
                                            </div>
                                            <div className="col-md-6 p-0  float-left p_l_10">
                                                <p>Relationship to applicant</p>
                                                <input type="text" onChange={this.handleChange1.bind(this, index)} name="relationship" name="relationship" ref="relationship1" id="relationship" defaultValue={array.relationship} />
                                            </div>
                                        </div>
                                        <h6 className="remove float-right" onClick={this.removeRow.bind(this, index)}>remove </h6>
                                    </div>
                                </div>
                            )}

                            <form ref={(el) => this.myFormRef = el} className="form-application-registration-detail">
                                <div hidden={!this.state.formShow} className="col-md-12 p-0 float-left clone_guardian_main">
                                    <div  className= 'col-md-12 p-0 float-left clone_guardian clone_remove'>
                                        {/* {this.state.counter <= 1 ? (
                                            null
                                        ) : (
                                                <h6 className="remove float-right" onClick={this.removeRow.bind(this, this.state.counter)}>remove </h6>
                                            )} */}

                                        <div className="col-md-12 p-0 float-left">
                                            <div className="col-md-6 p-0 float-left p_r_10">
                                                <p>First name</p>
                                                <input type="text" onChange={this.handleChange.bind(this, "firstname_guardian")} name="firstname_guardian" ref="firstname_guardian" id="firstname_guardian"  />
                                            </div>
                                            <div className="col-md-6 p-0 float-left p_l_10">
                                                <p>Last name</p>
                                                <input type="text" onChange={this.handleChange.bind(this, "lastname_guardian")} name="lastname_guardian" ref="lastname_guardian" id="lastname_guardian" />
                                            </div>
                                        </div>
                                        <div className="col-md-12 p-0 float-left">
                                            <div className="col-md-6 p-0 float-left p_r_10">
                                                <p>Phone (cell)</p>
                                                <input type="text" onChange={this.handleChange.bind(this, "phone_cell_guardian")} name="phone_cell_guardian" ref="phone_cell_guardian" id="phone_cell_guardian"  />
                                            </div>
                                            <div className="col-md-6 p-0 float-left p_l_10">
                                                <p>Phone (home)</p>
                                                <input type="text" onChange={this.handleChange.bind(this, "phone_home_guardian")} placeholder="optional" name="phone_home_guardian" ref="phone_home_guardian" id="phone_home_guardian"  />
                                            </div>
                                        </div>
                                        <div className="col-md-12   p-0 float-left">
                                            <div className="col-md-6 p-0  float-left p_r_10">
                                                <p>Email address</p>
                                                <input type="text" onChange={this.handleChange.bind(this, "email_address_guardian")} name="email_address_guardian" name="email_address_guardian" ref="email_address_guardian" id="email_address_guardian"  />
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