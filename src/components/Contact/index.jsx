//> dependicies
import React, { Component } from "react";
import { Link } from "react-router-dom";

//components
import HeadingBar from "../utils/PageHeading";

class index extends Component {
  render() {
    return (
      <div>
        <HeadingBar heading="Contact Us" title="Contact Us" />

        <div className="contact_icon_section float_left">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="contact_main">
                  <div className="contact_rotate">
                    {" "}
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <h4>
                    <Link to="/#">Address</Link>
                  </h4>
                  <p>
                    512 - omexcity, California
                    <br />
                    California, omexcity
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="contact_main contact_main2">
                  <div className="contact_rotate">
                    {" "}
                    <i className="fas fa-envelope"></i>
                  </div>
                  <h4>
                    <Link to="/#">Email</Link>
                  </h4>
                  <p>
                    <Link to="/#">hello@example.com</Link>
                    <br />
                    <Link to="/#">support@example.com</Link>
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="contact_main contact_main2">
                  <div className="contact_rotate">
                    {" "}
                    <i className="fas fa-phone"></i>
                  </div>
                  <h4>
                    <Link to="/#">Phone</Link>
                  </h4>
                  <p>
                    +1-804-548-5214
                    <br />
                    +1-804-548-5215
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <iframe
          aria-hidden="true"
		  frameborder="0"
		  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1695.1046439062495!2d-147.83175708369825!3d64.85834958392209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5e1e5f04d828ca4b!2sMoore-Bartlett-Skarland!5e0!3m2!1sen!2s!4v1582668938807!5m2!1sen!2s" 
          style={{zIndex: "-1", position: "absolute", width: "100%", height: "100%", top: "0px", left: "0px", border: "none"}}
        ></iframe> */}

<div className="contact_section float_left">
		<div className="container">
			<div className="row">
				<div className="col-lg-12 col-md-12 col-sm-12">
					<div className="edu_heading_wrapper edu_heading_wrapper_contactus float_left">
						<h3>Contact us</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor, libero non
							<br/>interdum maximus, ligula nulla pretium ligula, a egestas ex nibh.</p>
					</div>
				</div>
				<div className="col-lg-10 offset-lg-1 col-md-12 col-sm-12 col-12">
                    <form>
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="form-pos">
                                    <div className="form-group i-name">

                                        <input type="text" className="form-control require" name="first_name" required="" placeholder="First Name*"/>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="form-pos">
                                    <div className="form-group i-name">

                                        <input type="text" className="form-control require" name="last_name" required="" placeholder="last Name*"/>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="form-e">
                                    <div className="form-group i-email">
                                        <input type="email" className="form-control require" name="email" required="" placeholder=" Email *" data-valid="email" data-error="Email should be valid."/>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="form-s">
                                    <div className="form-group i-subject">

                                        <input type="text" className="form-control require" name="Subject" required="" placeholder="subject"/>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-m">
                                    <div className="form-group i-message">

                                        <textarea className="form-control require" name="message" required="" rows="5" id="messageTen" placeholder=" Message"></textarea>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="tb_es_btn_div">
                                    <div className="response"></div>
                                    <div className="tb_es_btn_wrapper conatct_btn2 cont_bnt">
                                        <button type="button" className="submitForm">send message !</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
			</div>
		</div>
	</div>


      </div>
	);
	 
  }
}

export default index;
