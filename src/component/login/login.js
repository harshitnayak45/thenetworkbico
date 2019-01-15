import React, { Component } from 'react';
class Login extends Component {
    render() {
        return (
            <div>
                <div id="page" class="site">
                    <div class="title-home-template col-md-12">
                        <div class="container">
                            <h1>The Lewis H. Latimer Scholarship</h1>
                        </div>
                    </div>
                    <div id="content" class="site-content col-md-12 p-0">
                        <div class="container">
                            <div class="row">
                                <section id="primary" class="content-area col-sm-12 col-lg-12">
                                    <main id="main" class="site-main" role="main">
                                        <div class="registration-shortcode registration-shortcode-login">
                                            <div class="load_ajax" style={{"display":"none"}}>
                                                <svg class="svg-inline--fa fa-spinner fa-w-16 fa-spin" style={{"font-size": "50px",   " color":"#008000a3"}} aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="spinner" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"></path></svg><i class="fa fa-spinner fa-spin" style={{"font-size":"50px", "color": "#008000a3"}}></i> 
							</div>
                                            <h2>Log in to your application account</h2>

                                            <form action="" class="form-registration form-registration-login">
                                                <div class="col-md-6 p-0 float-left">
                                                    <div class="col-md-12   p-0 float-left">
                                                        <div class="col-md-6 p-0  float-left ">
                                                            <p>Email address</p>
                                                            <input type="text" name="email_address_l"/>
										</div>
                                                        </div>
                                                        <div class="col-md-12  p-0 float-left">
                                                            <div class="col-md-6 p-0  float-left ">
                                                                <p>Password <span class="float-right show_hide_class">Show</span></p>
                                                                <input type="password" name="password_l"/>
                                                                    <a href="/wp-login.php?action=lostpassword">Forgot password?</a>
										</div>
                                                            </div>
                                                            <div class="col-md-6  p-0  float-left button-submit">
                                                                <input type="button" name="submit_form_login" value="Go to account"/>
									</div>
                                                                <div class="col-md-12  p-0 float-left">
                                                                    <p>Don't have an application account? <a href="registration.html">Create an account</a></p>
                                                                </div>
                                                            </div> 
							</form>
                                                        <h5 class="thank-you"></h5>
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

export default Login;