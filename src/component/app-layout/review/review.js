import React ,{Component} from 'react';
import { Link, Route, Switch } from 'react-router-dom';
class Review extends Component{
    render(){
        return(
            <div>
                <div id="content" className="site-content col-md-12  float-left p-0">
		<div className="container">
			<div className="row">	
				<section id="primary" className="content-area col-sm-12 col-lg-12">
					<main id="main" className="site-main" role="main">
						<div className="col-md-12 p-0 float-left application-registration-detail Review-style ">
							<input type="hidden" name="id_p" value=""/>
							<input type="hidden" name="ajaxUrl" value="http://scholarship.thenetworkbicp.org/wp-admin/admin-ajax.php"/>
							<h2>Review</h2>
							<div className="col-md-12 p-0 float-left">
								<div className="form-application-registration-detail">
									<div className="col-md-12   p-0 float-left row-review-main">
										<div className="col-md-2   p-0 float-left text-center">
                                                        <Link to={'/app'}>
											<form action="" className="col-md-12 float-left   application-detail-form application-detail-form-img">
												<img src="../images/applicant-icon.png"/>
												<h3>Edit</h3>
												<input type="hidden" name="status" value="Application"/>
											</form>
                                            </Link>
										</div>
										<div className="col-md-10   p-0 float-left">
											<div className="col-md-12   p-0 float-left">
												<h6>About you</h6>
											</div>
											<div className="col-md-8   p-0 float-left">
												<div className="col-md-12   p-0 float-left">
													<div className="col-md-6   p-0 float-left">
														<div className="col-md-12  p-0 float-left row-review">
															<p className="title_review">Full name</p>
															<p>Tri TB Vo</p>
														</div>
													</div>
													<div className="col-md-6   p-0 float-left">
														<div className="col-md-12   p-0 float-left row-review">
															<p className="title_review">Phone (cell)</p>
															<p>0122474718</p>
														</div>
													</div>
												</div>
												<div className="col-md-12   p-0 float-left">
													<div className="col-md-6   p-0 float-left">
														<div className="col-md-12  p-0 float-left row-review">
															<p className="title_review">Gender</p>
															<p>Rather not say</p>
														</div>
													</div>
													<div className="col-md-6   p-0 float-left">
														<div className="col-md-12  p-0 float-left row-review">
															<p className="title_review">Phone (home)</p>
															<p>0543882265</p>
														</div>
													</div>
												</div>
												<div className="col-md-12   p-0 float-left">
													<div className="col-md-6   p-0 float-left">
														<div className="col-md-12   p-0 float-left row-review">
															<p className="title_review">Chapter Sponsor</p>
															<p>Michigan</p>
														</div>
													</div>
													<div className="col-md-6   p-0 float-left">
														<div className="col-md-12  p-0 float-left row-review">
															<p className="title_review">Referral ATTUID</p>
															<p>12</p>
														</div>
													</div>
												</div>
												<div className="col-md-12   p-0 float-left">
													<div className="col-md-6   p-0 float-left">
														<div className="col-md-12   p-0 float-left row-review">
															<p className="title_review">Address</p>
															<p>Le Loi 2122, Hue<br/>United Kingdom (UK), 2002</p>
														</div>
													</div>
													<div className="col-md-6   p-0 float-left">
														<div className="col-md-12  p-0 float-left row-review">
															<p className="title_review">Email</p>
															<p>vobatri901@gmail.com</p>
														</div>
													</div>
												</div>
											</div>
											<div className="col-md-4   p-0 float-left">
												<img src="../images/denny-k.jpg"/>									</div>
										</div>
									</div>
									<div className="col-md-12   p-0 float-left row-review-main">
										<div className="col-md-2   p-0 float-left text-center">
                                                        <Link to={'/app/guardian'}>
											<form className="col-md-12 float-left   application-detail-form  application-detail-form-img">
												<img src="../images/guardian-icon.png"/>
												<h3>Edit</h3>
												<input type="hidden" name="status" value="Guardian"/>
											</form>
                                            </Link>
										</div>
										<div className="col-md-10   p-0 float-left">
											<div className="col-md-12   p-0 float-left">
												<h6>Guardian information</h6>
											</div>
											<div className="col-md-12   p-0 float-left">
																								<div className="col-md-12   p-0 float-left clone_guardian">
																												<div className="col-md-12   p-0 float-left">
																<div className="col-md-4   p-0 float-left">
																	<div className="col-md-12   p-0 float-left row-review">
																		<p className="title_review">First name</p>
																		<p>Tri Vo1</p>
																	</div>
																</div>
																<div className="col-md-4   p-0 float-left">
																	<div className="col-md-12  p-0 float-left row-review">
																		<p className="title_review">Phone (cell)</p>
																		<p>423423234234</p>
																	</div>
																</div>
																<div className="col-md-4   p-0 float-left">
																	<div className="col-md-12  p-0 float-left row-review">
																		<p className="title_review">Phone (home)</p>
																		<p>23423432</p>
																	</div>
																</div>
															</div>
															<div className="col-md-12   p-0 float-left">
																<div className="col-md-4   p-0 float-left">
																	<div className="col-md-12   p-0 float-left row-review">
																		<p className="title_review">Email address</p>
																		<p>vobatri92@gmail.com</p>
																	</div>
																</div>
																<div className="col-md-4   p-0 float-left">
																	<div className="col-md-12  p-0 float-left row-review">
																		<p className="title_review">Relationship to applicant*</p>
																		<p>Relationship to applicant</p>
																	</div>
																</div>
															</div>
														</div>
																										<div className="col-md-12   p-0 float-left clone_guardian">
															<strong>Guardian 2</strong>													<div className="col-md-12   p-0 float-left">
																<div className="col-md-4   p-0 float-left">
																	<div className="col-md-12   p-0 float-left row-review">
																		<p className="title_review">First name</p>
																		<p>Tri Vo</p>
																	</div>
																</div>
																<div className="col-md-4   p-0 float-left">
																	<div className="col-md-12  p-0 float-left row-review">
																		<p className="title_review">Phone (cell)</p>
																		<p>423423234234</p>
																	</div>
																</div>
																<div className="col-md-4   p-0 float-left">
																	<div className="col-md-12  p-0 float-left row-review">
																		<p className="title_review">Phone (home)</p>
																		<p>23423432</p>
																	</div>
																</div>
															</div>
															<div className="col-md-12   p-0 float-left">
																<div className="col-md-4   p-0 float-left">
																	<div className="col-md-12   p-0 float-left row-review">
																		<p className="title_review">Email address</p>
																		<p>vobatri92@gmail.com</p>
																	</div>
																</div>
																<div className="col-md-4   p-0 float-left">
																	<div className="col-md-12  p-0 float-left row-review">
																		<p className="title_review">Relationship to applicant*</p>
																		<p></p>
																	</div>
																</div>
															</div>
														</div>
																								
											</div>
										</div>
									</div>
									<div className="col-md-12   p-0 float-left row-review-main">
										<div className="col-md-2   p-0 float-left text-center">
                                                        <Link to={'/app/education'}>
											<form className="col-md-12 float-left   application-detail-form Education application-detail-form-img">
												<img src="../images/education-icon.png"/>
												<h3>Edit</h3>
												<input type="hidden" name="status" value="Education"/>
											</form>
                                            </Link>
										</div>
										<div className="col-md-10   p-0 float-left">
											<div className="col-md-12   p-0 float-left row-review-detail">
												<div className="col-md-12   p-0 float-left">
													<h6>High school</h6>
												</div>
												<div className="col-md-12   p-0 float-left">
													<div className="col-md-12   p-0 float-left clone_guardian">
														<div className="col-md-12   p-0 float-left">
															<div className="col-md-4   p-0 float-left">
																<div className="col-md-12   p-0 float-left row-review">
																	<p className="title_review">High school</p>
																	<p>Tri luck Vo</p>
																</div>
															</div>
															<div className="col-md-4   p-0 float-left">
																<div className="col-md-12   p-0 float-left row-review">
																	<p className="title_review">Phone</p>
																	<p>234324324</p>
																</div>
															</div>
															<div className="col-md-4   p-0 float-left">
																<div className="col-md-12   p-0 float-left row-review">
																	<p className="title_review">Address</p>
																	<p>Bui Thi Xuan Hue<br/>GA, 530000</p>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="col-md-12   p-0 float-left row-review-detail">
												<div className="col-md-12   p-0 float-left">
													<h6>Counselor</h6>
												</div>
												<div className="col-md-12   p-0 float-left">
													<div className="col-md-12   p-0 float-left clone_guardian">
														<div className="col-md-12   p-0 float-left">
															<div className="col-md-4   p-0 float-left">
																<div className="col-md-12   p-0 float-left row-review">
																	<p className="title_review">Counselor</p>
																	<p>Tri Vo</p>
																</div>
															</div>
															<div className="col-md-4   p-0 float-left">
																<div className="col-md-12   p-0 float-left row-review">
																	<p className="title_review">Counselor Phone</p>
																	<p>123123</p>
																</div>
															</div>
															<div className="col-md-4   p-0 float-left">
																<div className="col-md-12   p-0 float-left row-review">
																	<p className="title_review">Counselor Email</p>
																	<p>vobatri92@gmail.com</p>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="col-md-12   p-0 float-left row-review-detail">
												<div className="col-md-12   p-0 float-left">
													<h6>Student details</h6>
												</div>
												<div className="col-md-12   p-0 float-left">
													<div className="col-md-12   p-0 float-left">
														<div className="col-md-4   p-0 float-left">
															<div className="col-md-12   p-0 float-left row-review">
																<p className="title_review">Student ID</p>
																<p>123</p>
															</div>
														</div>
														<div className="col-md-4   p-0 float-left">
															<div className="col-md-12   p-0 float-left row-review">
																<p className="title_review">Graduation date</p>
																<p>04/10/2018</p>
															</div>
														</div>
														<div className="col-md-4   p-0 float-left">
															<div className="col-md-12   p-0 float-left row-review">
																<p className="title_review">Cumulative GPA</p>
																<p>4.0+</p>
															</div>
														</div>
													</div>
													<div className="col-md-12   p-0 float-left">
														<div className="col-md-4   p-0 float-left">
															<div className="col-md-12   p-0 float-left row-review">
																<p className="title_review">Final ACT Score</p>
																<p>35 - 29</p>
															</div>
														</div>
														<div className="col-md-4   p-0 float-left">
															<div className="col-md-12   p-0 float-left row-review">
																<p className="title_review">Final SAT Score</p>
																<p>1599 - 1200</p>
															</div>
														</div>
													</div>
													<div className="col-md-12   p-0 float-left">
														<div className="col-md-4   p-0 float-left">
															<div className="col-md-12   p-0 float-left row-review">
																<p className="title_review">ACT verification submitted</p>
																<p><a target="_blank" href="http://scholarship.thenetworkbicp.org/wp-content/plugins/registration-application/uploads/logo.pdf">logo.pdf</a></p>
															</div>
														</div>
														<div className="col-md-4   p-0 float-left">
															<div className="col-md-12   p-0 float-left row-review">
																<p className="title_review">SAT verification submitted</p>
																<p><a target="_blank" href="http://scholarship.thenetworkbicp.org/wp-content/plugins/registration-application/uploads/logo.pdf">logo.pdf</a></p>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-md-12   p-0 float-left row-review-main">
										<div className="col-md-2   p-0 float-left text-center">
                                                        <Link to={'/app/aspirations'}>
											<form className="col-md-12 float-left   application-detail-form application-detail-form-img">
												<img src="../images/aspirations-icon.png"/>
												<h3>Edit</h3>
												<input type="hidden" name="status" value="Aspirations"/>
											</form>
                                            </Link>
										</div>
										<div className="col-md-10   p-0 float-left">
											<div className="col-md-12   p-0 float-left">
												<h6>College and career aspirations</h6>
											</div>
											<div className="col-md-12   p-0 float-left">
												<p className="title_review">Colleges you have been accepted to</p>
																								<div className="col-md-12   p-0 float-left row-review">
															<p>t1</p>
														</div>
																										<div className="col-md-12   p-0 float-left row-review">
															<p>t2</p>
														</div>
																										<div className="col-md-12   p-0 float-left row-review">
															<p>t3</p>
														</div>
																							</div>
											<div className="col-md-12   p-0 float-left row-review">
												<p className="title_review">Your educational and career aspirations</p>
												<p>What are your educational</p>
											</div>
										</div>
									</div>
									<div className="col-md-12   p-0 float-left row-review-main">
										<div className="col-md-2   p-0 float-left text-center">
                                                        <Link to={'/app/extracurriculars'}>
											<form className="col-md-12 float-left   application-detail-form application-detail-form-img">
												<img src="../images/extracurriculars-icon.png"/>
												<h3>Edit</h3>
												<input type="hidden" name="status" value="Extracurriculars"/>
											</form>
                                            </Link>
										</div>
										<div className="col-md-10   p-0 float-left">
											<div className="col-md-12   p-0 float-left">
												<h6>Extracurricular activities</h6>
											</div>
											 
												<div className="col-md-12   p-0 float-left">
																						
																					</div>
																			</div>
									</div>
									<div className="col-md-12   p-0 float-left row-review-main">
										<div className="col-md-2   p-0 float-left text-center">
                                                        <Link to={'/app/volunteering'}>
											<form className="col-md-12 float-left   application-detail-form Volunteering application-detail-form-img">
												<img src="../images/volunteer-icon.png"/>
												<h3>Edit</h3>
												<input type="hidden" name="status" value="Volunteering"/>
											</form>
                                            </Link>
										</div>
										<div className="col-md-10   p-0 float-left">
											<div className="col-md-12   p-0 float-left">
												<h6>Volunteering activities</h6>
											</div>
											 
												<div className="col-md-12   p-0 float-left">
																						
																					</div>
																			</div>
									</div>
									<div className="col-md-12   p-0 float-left row-review-main">
										<div className="col-md-2   p-0 float-left text-center">
                                                        <Link to={'/app/organizations'}>
											<form className="col-md-12 float-left   application-detail-form Organizations application-detail-form-img">
												<img src="../images/organizations-icon.png"/>
												<h3>Edit</h3>
												<input type="hidden" name="status" value="Organizations"/>
											</form>
                                            </Link>
										</div>
										<div className="col-md-10   p-0 float-left">
											<div className="col-md-12   p-0 float-left">
												<h6>Organizations activities</h6>
											</div>
											 
												<div className="col-md-12   p-0 float-left">
																						
																					</div>
																			</div>
									</div>
									<div className="col-md-12   p-0 float-left row-review-main">
										<div className="col-md-2   p-0 float-left text-center">
                                                        <Link to={'/app/work'}>
											<form className="col-md-12 float-left   application-detail-form Work application-detail-form-img">
												<img src="../images/work-experience-icon.png"/>
												<h3>Edit</h3>
												<input type="hidden" name="status" value="Work"/>
											</form>
                                            </Link>
										</div>
										<div className="col-md-10   p-0 float-left">
											<div className="col-md-12   p-0 float-left">
												<h6>Work Experiences</h6>
											</div>
											 
												<div className="col-md-12   p-0 float-left">
																						
																					</div>
																			</div>
									</div>
									<div className="col-md-12   p-0 float-left row-review-main">
										<div className="col-md-2   p-0 float-left text-center">
                                            <Link to={'/app/essay'}>
											<form className="col-md-12 float-left   application-detail-form Essay application-detail-form-img">
												<img src="../images/essay-icon.png"/>
												<h3>Edit</h3>
												<input type="hidden" name="status" value="Essay"/>
											</form>
                                            </Link>
										</div>
										<div className="col-md-10   p-0 float-left">
											<div className="col-md-12   p-0 float-left">
												<h6>Essay</h6>
											</div>
											<div className="col-md-12  p-0 float-left row-review">
												<p className="title_review">Community impact</p>
												<p></p>
											</div>
										</div>
									</div>
									<div className="col-md-12   p-0 float-left row-review-main">
										<div className="col-md-2   p-0 float-left text-center">
                                                        <Link to={'/app/certification'}>
											<form className="col-md-12 float-left   application-detail-form Certification application-detail-form-img">
												<img src="../images/certification-icon.png"/>
												<h3>Edit</h3>
												<input type="hidden" name="status" value="Certification"/>
											</form>
                                            </Link>
										</div>
										<div className="col-md-10   p-0 float-left">
											<div className="col-md-12   p-0 float-left">
												<h6>Certification</h6>
											</div>
											<div className="col-md-12   p-0 float-left row-review">
												<div className="col-md-12  p-0 float-left ">
													<p className="title_review"></p>
													<p></p>
												</div>
											</div>
										</div>
									</div>
									<div className="col-md-12   p-0 float-left row-review-main">
										<div className="col-md-2   p-0 float-left text-center">
                                                        <Link to={'/app/recommend'}>
											<form className="col-md-12 float-left   application-detail-form Recommend application-detail-form-img">
												<img src="../images/recommendation-icon.png"/>
												<h3>Edit</h3>
												<input type="hidden" name="status" value="Recommend"/>
											</form>
                                            </Link>
										</div>
										<div className="col-md-10   p-0 float-left">
											<div className="col-md-12   p-0 float-left">
												<h6>Recommendation</h6>
											</div>
											<div className="col-md-12   p-0 float-left row-review">
												<div className="col-md-12  p-0 float-left ">
													<p className="title_review"></p>
													<p></p>
												</div>
											</div>
										</div>
									</div>
									
									<div className="col-md-6  p-0  float-left review-submit">
										<a id="submit_form_application_1" className="submit_form_Review" href="javascript:void(0)">Submit To Counselor</a>
									</div> 
								</div>
							</div> 
						</div>
					</main>
				</section>
			</div>
		</div>
	</div></div>
            
        );
    }
}
export default Review;