import React, { Component } from 'react';
class Register extends Component {
    render() {
        return (
            <div>
    <div id="page" className="site">
	<div className="title-home-template col-md-12">
		<div className="container">
			<h1>The Lewis H. Latimer Scholarship</h1>		
		</div>
	</div>
	<div id="content" className="site-content col-md-12 p-0">
		<div className="container">
			<div className="row">	
				<section id="primary" className="content-area col-sm-12 col-lg-12">
					<main id="main" className="site-main" role="main">
						<div className="registration-shortcode">
							{/* <div className="load_ajax" >
								
								<svg className="svg-inline--fa fa-spinner fa-w-16 fa-spin" style={{"fontSize": "50px",   " color":"#008000a3"}}  aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="spinner" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"></path></svg><i className="fa fa-spinner fa-spin" style={{"font-size":"50px", "color": "#008000a3"}}></i>
							
							</div> */}
							<h2>Start a new application</h2>
							<p>Have you already started an application?  <a href="login.html">Log in</a></p>
							<form action="" className="form-registration" >
								<div className="col-md-6 p-0 float-left">
									<div className="col-md-12 p-0 float-left">
										<div className="col-md-6 p-0 float-left p_r_10">
											<p>First name</p>
											<input type="text" name="firstname" />
										</div>
										<div className="col-md-6 p-0 float-left p_l_10">
											<p>Last name</p>
											<input type="text" name="lastname" />
										</div> 
									</div> 
									<div className="col-md-12   p-0 float-left">
										<div className="col-md-6 p-0  float-left p_r_10">
											<p>Email address</p>
											<input type="text" name="email_address" />
										</div>
									</div>
									<div className="col-md-12  p-0 float-left">
										<div className="col-md-6 p-0  float-left p_r_10">
											<p>Password</p>
											<input type="password" name="password" />
											<p className="small">Password must contain at least one number and symbol</p>
										</div> 
										<div className="col-md-6 p-0  float-left p_l_10">
											<p>Confirm Password</p>
											<input type="password" name="confirm_password" />
										</div> 
									</div> 
									<div className="col-md-6  p-0  float-left button-submit">
										<input type="button" name="submit_form" value="Get started" />
									</div> 
								</div> 
                                
							</form> 
							<h5 className="thank-you"></h5>
						</div>
												
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

export default Register;