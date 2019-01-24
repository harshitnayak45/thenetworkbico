import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
class Recommend extends Component {
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
        console.log('xxx x  xxxxx', this.state.imagePreviewUrlModel)
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
                                            <input className="file-caption-name" value={this.state.file.name} />
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
                                <input id="submit_form_application_1" type="button" name="submit_form_Recommend" value="Save and continue" />
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

export default Recommend;