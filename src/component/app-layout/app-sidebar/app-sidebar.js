import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Application from '../application/application';
class AppSidebar extends Component {
    render() {
        return (
            <div>

                
                
                <div className="col-md-4 p-0 float-left application-registration-detail-main-right application-detail-list-img">
                    <div className="col-md-12 p-0 application-row-main float-left">
                        <div className="application-row ">
                            <div className="col-md-4 float-left  application-detail">
                                <Link to={'/app'}>
                                <form  className="col-md-12 float-left   application-detail-form active_empty">
                                    <svg className="svg-inline--fa fa-check-circle fa-w-16 active_input" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg> <i className="active_input fa fa-check-circle" aria-hidden="true"></i>
                                    <svg className="svg-inline--fa fa-circle fa-w-16 active_input" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path></svg><i className="active_input fa fa-circle" aria-hidden="true"></i>
                                    <img src="../images/applicant-icon.png" />
                                    <h3>Application</h3>
                                    <input type="hidden" name="status" value="Application" />
                                </form>
                                    </Link >
                            </div>
                            <div className="col-md-4  float-left  application-detail ">
                                <Link to={'/app/guardian'}>
                                <form id="Guardian" className="col-md-12 float-left   application-detail-form active_">
                                    <svg className="svg-inline--fa fa-check-circle fa-w-16 active_input" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg><i className="active_input fa fa-check-circle" aria-hidden="true"></i>
                                    <svg className="svg-inline--fa fa-circle fa-w-16 active_input" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path></svg><i className="active_input fa fa-circle" aria-hidden="true"></i>
                                    <img src="../images/guardian-icon.png" />
                                    <h3>Guardian</h3>
                                    <input type="hidden" name="status" value="Guardian" />
                                </form>
                                </Link >
                            </div>
                            <div className="col-md-4  float-left  application-detail">
                                <Link to={'/app/education'}>
                                <form id="Education" className="col-md-12 float-left   application-detail-form active_empty">
                                    <svg className="svg-inline--fa fa-check-circle fa-w-16 active_input" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg><i className="active_input fa fa-check-circle" aria-hidden="true"></i>
                                    <svg className="svg-inline--fa fa-circle fa-w-16 active_input" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path></svg><i className="active_input fa fa-circle" aria-hidden="true"></i>
                                    <img src="../images/education-icon.png" />
                                    <h3>Education</h3>
                                    <input type="hidden" name="status" value="Education" />
                                </form>
                                </Link >
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 p-0 application-row-main float-left">
                        <div className="application-row">
                            <div className="col-md-4  float-left  application-detail">
                                <Link to={'/app/aspirations'}>
                                <form id="Aspirations" className="col-md-12 float-left   application-detail-form active_">
                                    <svg className="svg-inline--fa fa-check-circle fa-w-16 active_input" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg> <i className="active_input fa fa-check-circle" aria-hidden="true"></i>
                                    <svg className="svg-inline--fa fa-circle fa-w-16 active_input" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path></svg><i className="active_input fa fa-circle" aria-hidden="true"></i>
                                    <img src="../images/aspirations-icon.png" />
                                    <h3>Aspirations</h3>
                                    <input type="hidden" name="status" value="Aspirations" />
                                </form>
                                </Link > 
                            </div>
                            <div className="col-md-4 float-left  application-detail">
                                <Link to={'/app/extracurriculars'}>
                                <form id="Extracurriculars" className="col-md-12 float-left   application-detail-form active_">
                                    <svg className="svg-inline--fa fa-check-circle fa-w-16 active_input" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg> <i className="active_input fa fa-check-circle" aria-hidden="true"></i>
                                    <svg className="svg-inline--fa fa-circle fa-w-16 active_input" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path></svg><i className="active_input fa fa-circle" aria-hidden="true"></i>
                                    <img src="../images/extracurriculars-icon.png" />
                                    <h3>Extracurriculars</h3>
                                    <input type="hidden" name="status" value="Extracurriculars" />
                                </form>
                                </Link >
                            </div>
                            <div className="col-md-4  float-left  application-detail">
                                <Link to={'/app/volunteering'}>
                                <form id="Volunteering" className="col-md-12 float-left   application-detail-form active_">
                                    <svg className="svg-inline--fa fa-check-circle fa-w-16 active_input" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg><i className="active_input fa fa-check-circle" aria-hidden="true"></i>
                                    <svg className="svg-inline--fa fa-circle fa-w-16 active_input" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path></svg><i className="active_input fa fa-circle" aria-hidden="true"></i>
                                    <img src="../images/volunteer-icon.png" />
                                    <h3>Volunteering</h3>
                                    <input type="hidden" name="status" value="Volunteering" />
                                </form>
                                </Link >
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 p-0 application-row-main float-left">
                        <div className="application-row">
                            <div className="col-md-4  float-left  application-detail">
                                <Link to={'/app/organizations'}>
                                <form id="Organizations" className="col-md-12 float-left   application-detail-form active_">
                                    <svg className="svg-inline--fa fa-check-circle fa-w-16 active_input" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg> <i className="active_input fa fa-check-circle" aria-hidden="true"></i>
                                    <svg className="svg-inline--fa fa-circle fa-w-16 active_input" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path></svg><i className="active_input fa fa-circle" aria-hidden="true"></i>
                                    <img src="../images/organizations-icon.png" />
                                    <h3>Organizations</h3>
                                    <input type="hidden" name="status" value="Organizations" />
                                </form>
                                </Link>
                            </div>
                            <div className="col-md-4  float-left  application-detail">
                                <Link to={'/app/work'}>
                                <form action="../application-infomation/work.html" method="post" id="Work" className="col-md-12 float-left   application-detail-form active_">
                                    <svg className="svg-inline--fa fa-check-circle fa-w-16 active_input" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg><i className="active_input fa fa-check-circle" aria-hidden="true"></i>
                                    <svg className="svg-inline--fa fa-circle fa-w-16 active_input" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path></svg><i className="active_input fa fa-circle" aria-hidden="true"></i>
                                    <img src="../images/work-experience-icon.png" />
                                    <h3>Work</h3>
                                    <input type="hidden" name="status" value="Work" />
                                </form>
                                </Link>
                            </div>
                            <div className="col-md-4 float-left  application-detail">
                                <Link to={'/app/essay'}>
                                <form id="Essay" className="col-md-12 float-left   application-detail-form active_empty">
                                    <svg className="svg-inline--fa fa-check-circle fa-w-16 active_input" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg><i className="active_input fa fa-check-circle" aria-hidden="true"></i>
                                    <svg className="svg-inline--fa fa-circle fa-w-16 active_input" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path></svg> <i className="active_input fa fa-circle" aria-hidden="true"></i>
                                    <img src="../images/essay-icon.png" />
                                    <h3>Essay</h3>
                                    <input type="hidden" name="status" value="Essay" />
                                </form>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 p-0 application-row-main float-left">
                        <div className="application-row">
                            <div className="col-md-4  float-left  application-detail">
                                <Link to={'/app/certification'}>
                                <form id="Certification" className="col-md-12 float-left   application-detail-form active_empty">
                                    <svg className="svg-inline--fa fa-check-circle fa-w-16 active_input" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg><i className="active_input fa fa-check-circle" aria-hidden="true"></i>
                                    <svg className="svg-inline--fa fa-circle fa-w-16 active_input" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path></svg> <i className="active_input fa fa-circle" aria-hidden="true"></i>
                                    <img src="../images/certification-icon.png" />
                                    <h3>Certification</h3>
                                    <input type="hidden" name="status" value="Certification" />
                                </form>
                                </Link>
                            </div>
                            <div className="col-md-4  float-left  application-detail">
                                <Link to={'/app/recommend'}>
                                <form id="Recommend" className="col-md-12 float-left   application-detail-form active_empty">
                                    <svg className="svg-inline--fa fa-check-circle fa-w-16 active_input" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg><i className="active_input fa fa-check-circle" aria-hidden="true"></i>
                                    <svg className="svg-inline--fa fa-circle fa-w-16 active_input" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path></svg><i className="active_input fa fa-circle" aria-hidden="true"></i>
                                    <img src="../images/recommendation-icon.png" />
                                    <h3>Recommend</h3>
                                    <input type="hidden" name="status" value="Recommend" />
                                </form>
                                </Link>
                            </div>
                            <div className="col-md-4  float-left  application-detail">
                                <Link to={'/app/review'}>
                                <form id="Review" className="col-md-12 float-left   application-detail-form">
                                    <img src="../images/review-icon.png" />
                                    <h3>Review</h3>
                                    <input type="hidden" name="status" value="Review" />
                                </form>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default AppSidebar; 