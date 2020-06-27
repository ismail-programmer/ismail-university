//? Dependicies
import React, { Component } from "react";
import { Link } from "react-router-dom";

//! images

import Logo from "../../../assets/logo.svg";
import ft1 from "../../../images/ft1.png";
import ft2 from "../../../images/ft2.png";
import ft3 from "../../../images/ft3.png";
import ft4 from "../../../images/ft4.png";
import ft5 from "../../../images/ft5.png";
import ft6 from "../../../images/ft6.png";

class index extends Component {
  render() {
    return (
      <div>
        <div className="footer jb_cover float_left">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="footerNav jb_cover">
                  <Link to="/">
                    <img src={Logo} alt="img" height="100vh" width="100%" />
                  </Link>
                  <ul className="footer_first_contact">
                    <li>
                      <i className="flaticon-map-marker"></i>
                      <p>
                        123 Faisalabad Avenue, Floor 10,
                        <br />
                        Punjab, Pakistan.
                      </p>
                    </li>
                    <li>
                      <i className="flaticon-telephone"></i>
                      <p>
                        +92 -234 -456 -7890
                        <br />
                        +92 -234 -456 -7890
                      </p>
                    </li>
                    <li>
                      <i className="flaticon-close-envelope"></i>
                      <Link to="/#">ismuniversity@gmail.com</Link>
                      <br /> <Link to="/#">support@gmail.com</Link>
                    </li>
                  </ul>
                  <ul className="icon_list_news jb_cover">
                    <li>
                      <Link to="/#">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="/#">
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/#">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/#">
                        <i className="fab fa-google-plus-g"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="footerNav jb_cover footer_border_displ footer_border_disp2">
                  <h5>features</h5>
                  <ul className="nav-widget">
                    <li>
                      <Link to="/#">
                        <i className="fa fa-square"></i>Job Management &amp;
                        Dues
                      </Link>
                    </li>
                    <li>
                      <Link to="/#">
                        <i className="fa fa-square"></i>Timing &amp; Materials
                        Lectures
                      </Link>
                    </li>
                    <li>
                      <Link to="/#">
                        <i className="fa fa-square"></i>Standards
                      </Link>
                    </li>
                    <li>
                      <Link to="/#">
                        <i className="fa fa-square"></i>Real Time Study
                      </Link>
                    </li>
                    <li>
                      <Link to="/#">
                        <i className="fa fa-square"></i>Student Portal
                      </Link>
                    </li>
                    <li>
                      <Link to="/#">
                        <i className="fa fa-square"></i> Powerful Workflow
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="footerNav jb_cover footer_border_displ footer_border_disp3">
                  <h5>browse</h5>
                  <ul className="nav-widget">
                    <li>
                      <Link to="/#">
                        <i className="fa fa-square"></i>Freelancers by Category
                      </Link>
                    </li>
                    <li>
                      <Link to="/#">
                        <i className="fa fa-square"></i> Freelancers in USA{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/#">
                        <i className="fa fa-square"></i> Freelancers in UK
                      </Link>
                    </li>
                    <li>
                      <Link to="/#">
                        <i className="fa fa-square"></i> Freelancers in Canada
                      </Link>
                    </li>
                    <li>
                      <Link to="/#">
                        <i className="fa fa-square"></i> Freelancers in Pakistan
                      </Link>
                    </li>
                    <li>
                      <Link to="/#">
                        <i className="fa fa-square"></i> find jobs
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="footerNav jb_cover footer_border_displ footer_border_disp3">
                  <h5>app &amp; integration</h5>
                  <ul className="nav-widget">
                    <li>
                      <Link to="/#">
                        <img src={ft1} alt="img" />
                        Xero
                      </Link>
                    </li>
                    <li>
                      <Link to="/#">
                        <img src={ft2} alt="img" />
                        Reckon
                      </Link>
                    </li>
                    <li>
                      <Link to="/#">
                        <img src={ft3} alt="img" />
                        Flexidocs
                      </Link>
                    </li>
                    <li>
                      <Link to="/#">
                        <img src={ft4} alt="img" />
                        Microsoft Exchange
                      </Link>
                    </li>
                    <li>
                      <Link to="/#">
                        <img src={ft5} alt="img" />
                        Mailchimp
                      </Link>
                    </li>
                    <li>
                      <Link to="/#">
                        <img src={ft6} alt="img" />
                        MYOB
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <!--/.row--> */}
          </div>
        </div>
        <div className="edu_footer_bottom float_left">
          <div className="container">
            <div className="bottom_footer float_left">
              <p>©2020-21 Education. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default index;
