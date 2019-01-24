import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
class Application extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imagePreviewUrl: '',
            file: '',
            show: false
        }
        this._handleImageChange = this._handleImageChange.bind(this);
        this.handleHide = this.handleHide.bind(this);
    }

    _handleImageChange(e) {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result,
            });

        }

        reader.readAsDataURL(file)
    }
    handleShow = (img) => {
        this.setState({
            show: true,
            imagePreviewUrlModel: this.state.imagePreviewUrl
        });
    }
    handleHide() {
        this.setState({ show: false });
    }
    removeImage = () => {
        this.setState({
            file: '',
            imagePreviewUrl: ''
        });
    }
    render() {
        return (
                <div className="col-md-8 p-0 float-left application-registration-detail-main-left">
                    <div className="col-md-12 p-0 float-left application-registration-detail Application-submit ">
                        <h2>About the applicant (you)</h2>
                        <div className="col-md-12 p-0 float-left">
                            <form action="" className="form-application-registration-detail">
                                <div className="col-md-12 p-0 float-left">
                                    <div className="col-md-6 p-0 float-left p_r_10">
                                        <p>First name</p>
                                        <input type="text" name="firstname" disabled="" />
                                    </div>
                                    <div className="col-md-6 p-0 float-left p_l_10">
                                        <p>Last name</p>
                                        <input type="text" name="lastname" disabled="" />
                                    </div>
                                </div>
                                <div className="col-md-12 p-0 float-left">
                                    <div className="col-md-6 p-0 float-left p_r_10">
                                        <p>Phone (cell)</p>
                                        <input type="text" name="phone_cell" />
                                    </div>
                                    <div className="col-md-6 p-0 float-left p_l_10">
                                        <p>Phone (home)</p>
                                        <input type="text" placeholder="optional" name="phone_home" />
                                    </div>
                                </div>
                                <div className="col-md-12   p-0 float-left">
                                    <div className="col-md-6 p-0  float-left p_r_10">
                                        <p>Email address</p>
                                        <input type="text" name="email_address" disabled="" />
                                    </div>
                                    <div className="col-md-6 p-0  float-left p_l_10">
                                        <p>Gender</p>
                                        <input type="radio" id="contactChoice1" name="gender" value="Female" />
                                        <label htmlFor="contactChoice1">Female</label>

                                        <input type="radio" id="contactChoice2" name="gender" value="Male" />
                                        <label htmlFor="contactChoice2">Male</label>

                                        <input type="radio" id="contactChoice3" name="gender" value="Rather not say" />
                                        <label htmlFor="contactChoice3">Rather not say</label>
                                    </div>
                                </div>
                                <div className="col-md-12   p-0 float-left">
                                    <h3>Sponsor</h3>
                                </div>
                                <div className="col-md-12 p-0 float-left">
                                    <div className="col-md-8 p-0 float-left p_r_10 ">
                                        <p>Your local The NETwork BICP chapter</p>
                                        <select name="your_local_sponsor">
                                            <option value="Washington D.C.">Washington D.C.</option>
                                            <option value="Illinois">Illinois</option>
                                            <option value="Indiana">Indiana</option>
                                            <option value="Michigan">Michigan</option>
                                            <option value="New York/New Jersey">New York/New Jersey</option>
                                            <option value="Columbus">Columbus</option>
                                            <option value="Pennsylvania">Pennsylvania</option>
                                            <option value="Wisconsin">Wisconsin</option>
                                            <option value="Jacksonville">Jacksonville</option>
                                            <option value="South Florida">South Florida</option>
                                            <option value="Atlanta">Atlanta</option>
                                            <option value="Kentucky">Kentucky</option>
                                            <option value="Nashville">Nashville</option>
                                            <option value="Arkansas">Arkansas</option>
                                            <option value="Louisiana">Louisiana</option>
                                            <option value="Joplin">Joplin</option>
                                            <option value="Kansas City">Kansas City</option>
                                            <option value="St. Louis">St. Louis</option>
                                            <option value="Oklahoma">Oklahoma</option>
                                            <option value="Austin">Austin</option>
                                            <option value="Dallas/Ft. Worth">Dallas/Ft. Worth</option>
                                            <option value="Houston">Houston</option>
                                            <option value="San Antonio">San Antonio</option>
                                            <option value="Las Vegas">Las Vegas</option>
                                            <option value="Los Angeles">Los Angeles</option>
                                            <option value="Sacramento">Sacramento</option>
                                            <option value="San Diego">San Diego</option>
                                            <option value="Seattle">Seattle</option>
                                            <option value="Orlando">Orlando</option>
                                            <option value="Bay Area">Bay Area</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    <div className="col-md-4 p-0 float-left p_l_10 ">
                                        <p>Sponsor ATTUID</p>
                                        <div className="col-md-6 p-0 float-left ">
                                            <input type="text" id="sponsor" name="sponsor" value="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12   p-0 float-left">
                                    <h3>Address</h3>
                                </div>
                                <div className="col-md-12 p-0 float-left">
                                    <div className="col-md-6 p-0 float-left p_r_10">
                                        <p>Street address</p>
                                        <input type="text" name="street_address" />
                                    </div>
                                    <div className="col-md-6 p-0 float-left p_l_10">
                                        <p>Apt, suite, or bldg</p>
                                        <input type="text" name="suite" placeholder="optional" />
                                    </div>
                                </div>
                                <div className="col-md-12 p-0 float-left">
                                    <div className="col-md-4 p-0 float-left p_r_10">
                                        <p>City</p>
                                        <input type="text" name="city" />
                                    </div>
                                    <div className="col-md-2 p-0 float-left p_l_10 p_r_10">
                                        <p>State</p>
                                        <input type="text" name="state" />
                                    </div>
                                    <div className="col-md-2 p-0 float-left p_l_10">
                                        <p>Zip code</p>
                                        <input type="text" name="zip_code" />
                                    </div>
                                </div>
                                <div className="col-md-12   p-0 float-left">
                                    <h3>Your headshot</h3>
                                </div>
                                <div className="col-md-12  p-0 float-left clone_aspirations_button">
                                <div className="file-input file-input-ajax-new">
                                    <div className="file-preview">
                                        <button onClick={this.removeImage} type="button" className="close fileinput-remove" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                        </button>    <div className=" file-drop-zone"><div className="file-drop-zone-title">
                                            {this.state.imagePreviewUrl ? (
                                                    <div className="img-block" onClick={this.handleShow.bind(this)}>
                                                    <img src={this.state.imagePreviewUrl} />
                                                    <h4>{this.state.file.name}</h4>
                                                    <h6>{this.state.file.size}</h6>
                                                </div>

                                            ) : (
                                                    <div>  Drag & amp; drop files here …</div>
                                       )} 


                                        </div>
                                            <div className="file-preview-thumbnails"></div>
                                            <div className="clearfix"></div>    <div className="file-preview-status text-center text-success"></div>
                                            <div className="kv-fileinput-error file-error-message" style={{ "display": "none" }}></div>
                                        </div>
                                    </div>
                                    <div className="kv-upload-progress kv-hidden" style={{ "display": "none" }}><div className="progress">
                                        <div className="progress-bar bg-success progress-bar-success progress-bar-striped active" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{ "width": "0%" }}>
                                            0%
     </div>
                                    </div></div><div className="clearfix"></div>
                                    <div className="input-group file-caption-main">
                                        <div className="file-caption form-control kv-fileinput-caption" tabIndex="500">
                                            <span className="file-caption-icon"><i className="glyphicon glyphicon-file"></i></span>
                                            <input className="file-caption-name" title="" value={this.state.file.name} />
                                        </div>
                                        <div className="input-group-btn input-group-append">



                                            <div tabIndex="500" className="btn btn-primary btn-file"><i className="glyphicon glyphicon-folder-open"></i>&nbsp;  <span className="hidden-xs">Select file</span>
                                                <input onChange={this._handleImageChange} id="input-b12" className="style_input_file_custom" name="input-b12" type="file" accept="image/*" />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div className="col-md-6  p-0  float-left button-submit">
                                    <input id="submit_form_application_1" type="button" name="submit_form_application" value="Save and continue" />
                                </div>
                            </form>
                            <h5 className="thank-you"></h5>
                        </div>
                    </div>
                
                <Modal
                    show={this.state.show}
                    onHide={this.handleHide}
                    container={this}
                    aria-labelledby="contained-modal-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">
                            {this.state.file.name}
            </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img src={this.state.imagePreviewUrlModel} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleHide}>Close</Button>
                    </Modal.Footer>
                </Modal>                                                                                                                                           
            </div>
        );
    }
}

export default Application; 