import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Application from '../application/application';

class AppInformation extends Component {
    render() {
        return (
            <div>
                <div id="page" className="site">
                    <div id="content" className="site-content col-md-12  float-left p-0">
                        <div className="container">
                            <div className="row">
                                <section id="primary" className="content-area col-sm-12 col-lg-12">
                                    <main id="main" className="site-main" role="main">
                                        <article id="post-32" className="post-32 page type-page status-publish hentry">
                                            <div className="entry-content">
                                                <div className="vc_row wpb_row vc_row-fluid">
                                                    <div className="wpb_column vc_column_container vc_col-sm-12">
                                                        <div className="vc_column-inner "><div className="wpb_wrapper">
                                                            <div className="wpb_text_column wpb_content_element ">
                                                                <div className="wpb_wrapper">
                                                                    <input type="hidden" name="ajaxUrl" value="http://scholarship.thenetworkbicp.org/wp-admin/admin-ajax.php"/>
                                                                        <div className="application-registration-shortcode">
                                                                            <h4>Welcome  ...</h4>
                                                                            <div className="col-md-12 p-0 float-left next_steps">
                                                                                <h2>Next Steps</h2>
                                                                                <div className="col-md-12 p-0 float-left">
                                                                                    <div className="col-md-8 p-0 float-left next_steps_left">
                                                                                        <div className="col-md-12 p-0 float-left next_steps_left1">
                                                                                            <div className="col-md-2 p-0 float-left  next_steps_left1_1">
                                                                                                <div className="c100 p0 small">
                                                                                                    <span>0%</span>
                                                                                                    <div className="slice">
                                                                                                        <div className="bar"></div>
                                                                                                        <div className="fill"></div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-md-10  float-left next_steps_left1_2 ">
                                                                                                <h3 style={{"lineHeight": "75px"}}>Submit Application <span className="float-right">Application submitted 04-03-2018</span></h3>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="col-md-12 p-0 float-left next_steps_left1">
                                                                                            <div className="col-md-2 p-0  float-left next_steps_left1_1 ">
                                                                                                <div className="c100 p0 small">
                                                                                                    <div className="slice">
                                                                                                        <div className="bar"></div>
                                                                                                        <div className="fill"></div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-md-10  float-left next_steps_left1_2 ">
                                                                                                <h3>Counselor uploads transcripts</h3>
                                                                                                <p>An application is not counsidered complete untill transcripts are received from your counselor.</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-md-4  float-right next_steps_right">
                                                                                        <h6>2018 deadline</h6>
                                                                                        <h2>in 0 days</h2>
                                                                                        <p>Complete application due on or before May 23</p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-12 p-0 float-left application">
                                                                                <h2>Application</h2>
                                                                                <div className="col-md-12 p-0 application-row-main float-left">
                                                                                    <div className="application-row">
                                                                                        <div className="col-md-3 float-left  application-detail">
                                                                                        <Link to={'/app'}>
                                                                                            <form className="col-md-12 float-left   application-detail-form active_empty">
                                                                                                <svg className="svg-inline--fa fa-check-circle fa-w-16 active_input" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg><i className="active_input fa fa-check-circle" aria-hidden="true"></i>
                                                                                                <svg className="svg-inline--fa fa-circle fa-w-16 active_input" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path></svg> <i className="active_input fa fa-circle" aria-hidden="true"></i>
                                                                                                <img src="images/applicant-icon.png"/>
                                                                                                    <h3>Application</h3>
                                                                                                    <input type="hidden" name="status" value="Application"/>
																		</form>
                                                                                        </Link>
																		
																	</div>
                                                                                                <div className="col-md-3  float-left  application-detail">
                                                                                        <Link to={'/app/guardian'}>
                                                                                                    <form  className="col-md-12 float-left   application-detail-form active_">
                                                                                                        <svg className="svg-inline--fa fa-check-circle fa-w-16 active_input" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg><i className="active_input fa fa-check-circle" aria-hidden="true"></i> 
																			<svg className="svg-inline--fa fa-circle fa-w-16 active_input" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path></svg> <i className="active_input fa fa-circle" aria-hidden="true"></i>
																			<img src="images/guardian-icon.png"/>
                                                                                                            <h3>Guardian</h3>
                                                                                                            <input type="hidden" name="status" value="Guardian"/>
																		</form>
                                                                        </Link>
																	</div>
                                                                                                        <div className="col-md-3  float-left  application-detail">
                                                                                        <Link to={'/app/education'}>
                                                                                                            <form className="col-md-12 float-left   application-detail-form active_empty">
                                                                                                                <svg className="svg-inline--fa fa-check-circle fa-w-16 active_input" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg><i className="active_input fa fa-check-circle" aria-hidden="true"></i>
																			<svg className="svg-inline--fa fa-circle fa-w-16 active_input" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path></svg> <i className="active_input fa fa-circle" aria-hidden="true"></i> 
																			<img src="images/education-icon.png"/>
                                                                                                                    <h3>Education</h3>
                                                                                                                    <input type="hidden" name="status" value="Education"/>
																		</form>
                                                                                        </Link>
																	</div>
                                                                                                                <div className="col-md-3  float-left  application-detail">
                                                                                        <Link to={'/app/aspirations'}>
                                                                                                                    <form className="col-md-12 float-left   application-detail-form application-detail-form active_">
                                                                                                                        <svg className="svg-inline--fa fa-check-circle fa-w-16 active_input" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg><i className="active_input fa fa-check-circle" aria-hidden="true"></i>
																			<svg className="svg-inline--fa fa-circle fa-w-16 active_input" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path></svg><i className="active_input fa fa-circle" aria-hidden="true"></i>
																			<img src="images/aspirations-icon.png"/>
                                                                                                                            <h3>Aspirations</h3>
                                                                                                                            <input type="hidden" name="status" value="Aspirations"/>
																		</form>
                                                                        </Link>
																	</div>
																</div>
                                                                                                                </div>
                                                                                                                <div className="col-md-12 p-0 application-row-main float-left">
                                                                                                                    <div className="application-row">
                                                                                                                        <div className="col-md-3 float-left  application-detail">
                                                                                        <Link to={'/app/extracurriculars'}>
                                                                                                                            <form  className="col-md-12 float-left   application-detail-form active_">
                                                                                                                                <svg className="svg-inline--fa fa-check-circle fa-w-16 active_input" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg> <i className="active_input fa fa-check-circle" aria-hidden="true"></i> 
																			<svg className="svg-inline--fa fa-circle fa-w-16 active_input" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path></svg><i className="active_input fa fa-circle" aria-hidden="true"></i> 
																			<img src="images/extracurriculars-icon.png"/>
                                                                                                                                    <h3>Extracurriculars</h3>
                                                                                                                                    <input type="hidden" name="status" value="Extracurriculars"/>
																		</form>
                                                                                        </Link>
																		
																	</div>
                                                                                                                                <div className="col-md-3  float-left  application-detail">
                                                                                        <Link to={'/app/volunteering'}>
                                                                                                                                    <form className="col-md-12 float-left   application-detail-form active_">
                                                                                                                                        <svg className="svg-inline--fa fa-check-circle fa-w-16 active_input" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg><i className="active_input fa fa-check-circle" aria-hidden="true"></i>
																			<svg className="svg-inline--fa fa-circle fa-w-16 active_input" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path></svg><i className="active_input fa fa-circle" aria-hidden="true"></i>
																			<img src="images/volunteer-icon.png"/>
                                                                                                                                            <h3>Volunteering</h3>
                                                                                                                                            <input type="hidden" name="status" value="Volunteering"/>
																		</form>
                                                                                        </Link>
																	</div>
                                                                                                                                        <div className="col-md-3  float-left  application-detail">
                                                                                        <Link to={'/app/organizations'}>
                                                                                                                                            <form className="col-md-12 float-left   application-detail-form active_">
                                                                                                                                                <svg className="svg-inline--fa fa-check-circle fa-w-16 active_input" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg><i className="active_input fa fa-check-circle" aria-hidden="true"></i> 
																			<svg className="svg-inline--fa fa-circle fa-w-16 active_input" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path></svg><i className="active_input fa fa-circle" aria-hidden="true"></i> 
																			<img src="images/organizations-icon.png"/>
                                                                                                                                                    <h3>Organizations</h3>
                                                                                                                                                  <input type="hidden" name="status" value="Organizations"/>
																		</form>
                                                                                        </Link> 
																	</div>

                                                                                                                                                <div className="col-md-3  float-left  application-detail ">
                                                                                        <Link to={'/app/work'}>
                                                                                                                                                    <form className="col-md-12 float-left   application-detail-form active_">
                                                                                                                                                        <svg className="svg-inline--fa fa-check-circle fa-w-16 active_input" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg><i className="active_input fa fa-check-circle" aria-hidden="true"></i> 
																			<svg className="svg-inline--fa fa-circle fa-w-16 active_input" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path></svg> <i className="active_input fa fa-circle" aria-hidden="true"></i> 
																			<img src="images/work-experience-icon.png"/>
                                                                                                                                                             <h3>Work</h3>
                                                                                                                                                            <input type="hidden" name="status" value="Work"/>
																		</form>
                                                                                        </Link> 
																	</div>
																</div>
                                                                                                                                                </div>
                                                                                                                                                <div className="col-md-12 p-0 application-row-main float-left">
                                                                                                                                                    <div className="application-row">
                                                                                                                                                        <div className="col-md-3 float-left  application-detail">
                                                                                        <Link to={'/app/essay'}>
                                                                                                                                                            <form className="col-md-12 float-left   application-detail-form active_empty">
                                                                                                                                                                <svg className="svg-inline--fa fa-check-circle fa-w-16 active_input" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg> <i className="active_input fa fa-check-circle" aria-hidden="true"></i>
																			<svg className="svg-inline--fa fa-circle fa-w-16 active_input" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path></svg> <i className="active_input fa fa-circle" aria-hidden="true"></i>
																			<img src="images/essay-icon.png"/>
                                                                                                                                                                    <h3>Essay</h3>
                                                                                                                                                                    <input type="hidden" name="status" value="Essay"/>
																		</form>
                                                                                        </Link>
																	</div>
                                                                                                                                                                <div className="col-md-3  float-left  application-detail">
                                                                                        <Link to={'/app/certification'}>
                                                                                                                                                                    <form className="col-md-12 float-left   application-detail-form active_empty">
                                                                                                                                                                        <svg className="svg-inline--fa fa-check-circle fa-w-16 active_input" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg><i className="active_input fa fa-check-circle" aria-hidden="true"></i>
																			<svg className="svg-inline--fa fa-circle fa-w-16 active_input" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path></svg> <i className="active_input fa fa-circle" aria-hidden="true"></i> 
																			<img src="images/certification-icon.png"/>
                                                                                                                                                                            <h3>Certification</h3>
                                                                                                                                                                            <input type="hidden" name="status" value="Certification"/>
																		</form>
                                                                                        </Link>
																	</div>
                                                                                                                                                                        <div className="col-md-3  float-left  application-detail">
                                                                                        <Link to={'/app/recommend'}>
                                                                                                                                                                            <form className="col-md-12 float-left   application-detail-form active_empty">
                                                                                                                                                                                <svg className="svg-inline--fa fa-check-circle fa-w-16 active_input" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg><i className="active_input fa fa-check-circle" aria-hidden="true"></i> 
																			<svg className="svg-inline--fa fa-circle fa-w-16 active_input" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path></svg> <i className="active_input fa fa-circle" aria-hidden="true"></i> 
																			<img src="images/recommendation-icon.png"/>
                                                                                                                                                                                    <h3>Recommend</h3>
                                                                                                                                                                                    <input type="hidden" name="status" value="Recommend"/>
																		</form>
                                                                                        </Link>
																	</div>
                                                                                                                                                                                <div className="col-md-3  float-left  application-detail">
                                                                                        <Link to={'/review'}>
                                                                                                                                                                                    <form className="col-md-12 float-left   application-detail-form">
                                                                                                                                                                                        <img src="images/review-icon.png"/>
                                                                                                                                                                                            <h3>Review</h3>
                                                                                                                                                                                            <input type="hidden" name="status" value="Review"/>
																		</form>
                                                                                        </Link>
																	</div>
																</div>
                                                                                                                                                                                </div> 
															
														</div>
                                                                                                                                                                        </div>
												</div>
                                                                                                                                                                </div>
										</div>
                                                                                                                                                        </div>
                                                                                                                                                    </div>
                                                                                                                                                </div>
							</div>
						</article>
					</main>
				</section>
			</div>
		</div>
	</div>
</div>
                
            </div>
                                                                                                            );
                                                                                                        }
                                                                                                    }
                                                                                                    
export default AppInformation;