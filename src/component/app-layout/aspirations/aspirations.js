import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';


class Aspirations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: [],
            fieldArray: [],
            counter: 1,
            lists: [],
            lists2: [],
            file: '',
            imagePreviewUrl: '',
            imagePreviewUrl1: '',
            show: false
        }
        this.baseState = this.state;
        this._handleImageChange = this._handleImageChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
        this.handleHide = this.handleHide.bind(this);

    }
    componentDidMount() {

    }
    handleHide() {
        this.setState({ show: false });
    }

    removeRow = (index) => {

        let lists2 = this.state.lists;
        this.state.lists.splice(index, 1);
        this.setState({ lists: lists2 });

    }

    handleShow = (img) => {
        this.setState({
            show: true,
            imagePreviewUrlModel: img.imagePreviewUrl
        });
        console.log('xxx x  xxxxx', this.state.imagePreviewUrlModel)
    }



    resetForm = () => {

           this.myFormRef.reset();
        this.setState({
            file1:'',
            imagePreviewUrl1: ''
        })
    }


    addAspirations = () => {

        let list = {
            'college': this.refs.college.value,
            'file': this.state.file,
            'imagePreviewUrl': this.state.imagePreviewUrl
        }

        let lists = this.state.lists;
        lists.push(list)
        this.setState({
            lists: lists,
        })
        this.resetForm();



    }
    removeImage = () => {
        this.setState({
            file: '',
            imagePreviewUrl: ''
        });

    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
    }

    _handleSubmit(e) {
        e.preventDefault();
    }

    _handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                file1: file,
                imagePreviewUrl: reader.result,
                imagePreviewUrl1: reader.result
            });

        }

        reader.readAsDataURL(file)
    }


    render() {
        return (
            <div className="col-md-8 p-0 float-left application-registration-detail-main-left">
                <div className="col-md-12 p-0 float-left application-registration-detail Education-submit ">
                    <h2>Colleges and Career Aspirations</h2>
                    <div className="col-md-12 p-0 float-left">
                        <div className="form-application-registration-detail">
                            <div className="col-md-12   p-0 float-left">
                                <h3 style={{ "marginTop": "10px" }}>Colleges you have been accepted to</h3>
                            </div>
                            <div className="col-md-12 p-0 float-left main_clone_aspirations">

                                {this.state.lists.map((list, index) =>

                                    <div className="col-md-12 p-0 float-left main_clone_aspirations_detail clone_detail clone_remove">

                                        <div key={index}>

                                            <div className="col-md-12 p-0 float-left  ">
                                                <div className="col-md-6 p-0 float-left p_r_10 ">
                                                    <p>College {index + 1}</p>
                                                    <input type="text" name="college" onChange={this.handleChange.bind(this, "college")} name="college" ref="college1" value={list.college} />
                                                </div>
                                            </div>
                                            <div className="score_SAT col-md-12 p-0 float-left file_style_input ">
                                                <p style={{ "textAlign": "left" }}>College Upload</p>
                                                <div className="file-input file-input-ajax-new">
                                                    <div className="file-preview">

                                                        <button type="button" onClick={this.removeImage} className="close fileinput-remove" aria-label="Close">
                                                            <span aria-hidden="true">×</span>
                                                        </button>    <div className=" file-drop-zone"><div className="file-drop-zone-title">
                                                            {this.state.imagePreviewUrl ? (
                                                                <div className="img-block" onClick={this.handleShow.bind(this, list)} >
                                                                    <img src={list.imagePreviewUrl} />
                                                                    <h4>{list.file.name}</h4>
                                                                    <h6>{list.file.size}</h6>
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
                                                            <input className="file-caption-name" title="" value={list.file.name} />
                                                        </div>
                                                        <div className="input-group-btn input-group-append">



                                                            <div tabIndex="500" className="btn btn-primary btn-file"><i className="glyphicon glyphicon-folder-open"></i>&nbsp;  <span className="hidden-xs">Select file</span>
                                                                <input onChange={this._handleImageChange} id="input-b12" className="style_input_file_custom" name="input-b12" type="file" accept="image/*" />

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="remove float-right" onClick={this.removeRow.bind(this, index)}>remove </h6>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="col-md-12 p-0 float-left main_clone_aspirations_detail clone_detail clone_remove">
                                <form ref={(el) => this.myFormRef = el}>
                                    <div className="col-md-12 p-0 float-left  ">
                                        <div className="col-md-6 p-0 float-left p_r_10 ">
                                            <p>College</p>
                                            <input type="text" name="college" onChange={this.handleChange.bind(this, "college")} name="college" ref="college" id="college" />
                                        </div>
                                    </div>
                                    <div className="score_SAT col-md-12 p-0 float-left file_style_input ">
                                        <p style={{ "textAlign": "left" }}>College Upload</p>

                                    </div>


                                    <div className="col-md-12  p-0 float-left clone_aspirations_button">

                                        <div className="file-input file-input-ajax-new">
                                            <div className="file-preview">
                                                <button type="button" onClick={this.removeImage} className="close fileinput-remove" aria-label="Close">
                                                    <span aria-hidden="true">×</span>
                                                </button>    <div className=" file-drop-zone"><div className="file-drop-zone-title">
                                                    {this.state.imagePreviewUrl1 ? (
                                                        <div className="img-block">
                                                            <img src={this.state.imagePreviewUrl1} />
                                                            <h4>{this.state.file1.name}</h4>
                                                            <h6>{this.state.file1.size}</h6>
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
                                                    <input className="file-caption-name" title="" />
                                                </div>
                                                <div className="input-group-btn input-group-append">



                                                    <div tabIndex="500" className="btn btn-primary btn-file"><i className="glyphicon glyphicon-folder-open"></i>&nbsp;  <span className="hidden-xs">Select file</span>
                                                        <input onChange={this._handleImageChange} id="input-b12" className="style_input_file_custom" name="input-b12" type="file" accept="image/*" />

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>

                                <div className="col-md-12   p-0 float-left clone_aspirations_button" onClick={this.addAspirations}>
                                    <h6><svg className="svg-inline--fa fa-plus-circle fa-w-16" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="plus-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"></path></svg> <i className="fa fa-plus-circle" aria-hidden="true"></i> Add college</h6>
                                </div>
                            </div>
                            <div className="col-md-12   p-0 float-left">
                                <h3>Aspirations</h3>
                            </div>
                            <div className="col-md-12 p-0 float-left">
                                <div className="col-md-12 p-0 float-left ">
                                    <p>What are your educational and career aspirations?</p>
                                    <textarea rows="6" cols="80" id="career_aspirations"></textarea>
                                </div>
                            </div>

                            <div className="col-md-6  p-0  float-left button-submit">
                                <input id="submit_form_application_1" onClick={this._handleSubmit} type="button" name="submit_form_aspirations" value="Save and continue" />


                            </div>

                            <h5 className="thank-you"></h5>
                        </div>
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
                            Contained Modal
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
export default Aspirations;
