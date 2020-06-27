//? Dependicies
import React, { Component } from "react";
import { Link } from "react-router-dom";

//contexts
// import { AuthContext } from "../../../context/AuthContext";

//firebase
// import firebase from "../../../config/firebase";

//! images
import Logo from "../../../assets/logo.svg";
import Env from "../../../images/env.png";
import Phone from "../../../images/phone.png";

class index extends Component {
  // static contextType = AuthContext;

  // handleClick = () => {
  //   firebase
  //     .auth()
  //     .signOut()
  //     .then(function() {})
  //     .catch(function(error) {
  //       // An error happened.
  //     });
  // };

  render() {
    return (
      // <AuthContext.Consumer>
      //   {authContext => {
      //     return (
            <div>
              <div className="edu_top_header_wrapper float_left">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                      <div className="edu_top_header_left_wrapper">
                        <p>Hello !! Welcome to Ismail University</p>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                      <div className="edu_top_header_right_wrapper">
                        <ul>
                          <li>
                            <Link to="/#">
                              <i className="fab fa-facebook-f"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/#">
                              <i className="fab fa-twitter"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/#">
                              <i className="fab fa-youtube"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/#">
                              <i className="fab fa-linkedin-in"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="edu_logo_header_wrapper float_left">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="edu_logo_main_wrapper">
                        <Link to="/">
                          <img src={Logo} alt="logo" height="50%" width="70%" />
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-6 d-none d-sm-none d-md-block">
                      <div className="row">
                        <div className="edu_border_line">
                          <div className="lv_share_info_wrapper">
                            <ul>
                              <li>
                                <div className="lv_header_icon">
                                  <img
                                    src={Phone}
                                    alt="Call Icon"
                                    title="Call Icon"
                                  />
                                </div>
                                <p>
                                  +92 123 456 7890
                                  <br />
                                  +92 0987 654 3210
                                </p>
                              </li>
                              <li>
                                <div className="lv_header_icon">
                                  <img
                                    src={Env}
                                    alt="Mail Icon"
                                    title="Mail Icon"
                                  />
                                </div>
                                <p>
                                  {" "}
                                  <Link to="/#">ismuniversity@gmail.com</Link>
                                  <br /> <Link to="/#">support@gmail.com</Link>
                                </p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                id="back2Top"
                title="Back to top"
                to="/#"
                style={{ display: "none" }}
              >
                ➤
              </Link>
              <div className="edu_navihation_header_wrapper float_left">
                <div className="container">
                  <header className="mobail_menu d-block d-sm-block d-md-block d-lg-none d-xl-none">
                    <div className="cd-dropdown-wrapper">
                      <Link className="house_toggle" to="/#0">
                        {" "}
                        <i className="flaticon-menu"></i>
                      </Link>
                      <nav className="cd-dropdown">
                        <h2>
                          <Link to="/#">Ismail University</Link>
                        </h2>
                        <Link to="/#0" className="cd-close">
                          Close
                        </Link>
                        <ul className="cd-dropdown-content">
                          <li className="has-children">
                            {" "}
                            <Link to="/">Home</Link>
                          </li>
                          <li>
                            <Link to="/pages/about">About</Link>
                          </li>
                          <li className="has-children">
                            {" "}
                            <Link to="/#">Careers</Link>
                            <ul className="cd-secondary-dropdown is-hidden">
                              <li className="go-back">
                                <Link to="/#0">Menu</Link>
                              </li>
                              <li className="has-children">
                                {" "}
                                <Link to="/#">fire + bulding safety</Link>
                                <ul className="cd-secondary-dropdown is-hidden">
                                  <li className="go-back">
                                    <Link to="/#0">Menu</Link>
                                  </li>
                                  <li>
                                    <Link to="/#">
                                      Environmental Consulting
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/#">Government and Military</Link>
                                  </li>
                                  <li>
                                    <Link to="/#">Healthcare</Link>
                                  </li>
                                  <li>
                                    <Link to="/#">
                                      Historic Buildings &amp; Museums
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/#">
                                      Hospitality and Entertainment
                                    </Link>
                                  </li>
                                </ul>
                                {/* <!-- .cd-secondary-dropdown --> */}
                              </li>
                              {/* <!-- .has-children --> */}
                              <li className="has-children">
                                {" "}
                                <Link to="/#">risk + hazards</Link>
                                <ul className="cd-secondary-dropdown is-hidden">
                                  <li className="go-back">
                                    <Link to="/#0">Menu</Link>
                                  </li>
                                  <li>
                                    <Link to="/#">
                                      Environmental Consulting
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/#">Government and Military</Link>
                                  </li>
                                  <li>
                                    <Link to="/#">Healthcare</Link>
                                  </li>
                                  <li>
                                    <Link to="/#">
                                      Historic Buildings &amp; Museums
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/#">
                                      Hospitality and Entertainment
                                    </Link>
                                  </li>
                                </ul>
                                {/* <!-- .cd-secondary-dropdown --> */}
                              </li>
                              {/* <!-- .has-children --> */}
                              <li className="has-children">
                                {" "}
                                <Link to="/#">
                                  emergency management &amp; planning
                                </Link>
                                <ul className="cd-secondary-dropdown is-hidden">
                                  <li className="go-back">
                                    <Link to="/#0">Menu</Link>
                                  </li>
                                  <li>
                                    <Link to="/#">
                                      Environmental Consulting
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/#">Government and Military</Link>
                                  </li>
                                  <li>
                                    <Link to="/#">Healthcare</Link>
                                  </li>
                                  <li>
                                    <Link to="/#">
                                      Historic Buildings &amp; Museums
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/#">
                                      Hospitality and Entertainment
                                    </Link>
                                  </li>
                                </ul>
                                {/* <!-- .cd-secondary-dropdown --> */}
                              </li>
                              {/* <!-- .has-children --> */}
                              <li className="has-children">
                                {" "}
                                <Link to="/#">security</Link>
                                <ul className="cd-secondary-dropdown is-hidden">
                                  <li className="go-back">
                                    <Link to="/#0">Menu</Link>
                                  </li>
                                  <li>
                                    <Link to="/#">
                                      Environmental Consulting
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/#">Government and Military</Link>
                                  </li>
                                  <li>
                                    <Link to="/#">Healthcare</Link>
                                  </li>
                                  <li>
                                    <Link to="/#">
                                      Historic Buildings &amp; Museums
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/#">
                                      Hospitality and Entertainment
                                    </Link>
                                  </li>
                                </ul>
                                {/* <!-- .cd-secondary-dropdown --> */}
                              </li>
                              {/* <!-- .has-children --> */}
                              <li className="has-children">
                                {" "}
                                <Link to="/#">forensics</Link>
                                <ul className="cd-secondary-dropdown is-hidden">
                                  <li className="go-back">
                                    <Link to="/#0">Menu</Link>
                                  </li>
                                  <li>
                                    <Link to="/#">
                                      Environmental Consulting
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/#">Government and Military</Link>
                                  </li>
                                  <li>
                                    <Link to="/#">Healthcare</Link>
                                  </li>
                                  <li>
                                    <Link to="/#">
                                      Historic Buildings &amp; Museums
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/#">
                                      Hospitality and Entertainment
                                    </Link>
                                  </li>
                                </ul>
                                {/* <!-- .cd-secondary-dropdown --> */}
                              </li>
                              {/* <!-- .has-children --> */}
                              <li className="has-children">
                                {" "}
                                <Link to="/#">training + software</Link>
                                <ul className="cd-secondary-dropdown is-hidden">
                                  <li className="go-back">
                                    <Link to="/#0">Menu</Link>
                                  </li>
                                  <li>
                                    <Link to="/#">
                                      Environmental Consulting
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/#">Government and Military</Link>
                                  </li>
                                  <li>
                                    <Link to="/#">Healthcare</Link>
                                  </li>
                                  <li>
                                    <Link to="/#">
                                      Historic Buildings &amp; Museums
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/#">
                                      Hospitality and Entertainment
                                    </Link>
                                  </li>
                                </ul>
                                {/* <!-- .cd-secondary-dropdown --> */}
                              </li>
                              {/* <!-- .has-children --> */}
                            </ul>
                            {/* <!-- .cd-secondary-dropdown --> */}
                          </li>
                          {/* <!-- .has-children --> */}
                          <li className="has-children">
                            {" "}
                            <Link to="/#">Blog</Link>
                            <ul className="cd-secondary-dropdown icon_menu is-hidden">
                              <li className="go-back">
                                <Link to="/#0">Menu</Link>
                              </li>
                              <li>
                                <Link to="/blog_category.html">
                                  Blog-Category
                                </Link>
                              </li>
                              <li>
                                <Link to="/blog_single.html">Blog-Single</Link>
                              </li>
                            </ul>
                          </li>
                          <li className="has-children">
                            {" "}
                            <Link to="/#">Gallery</Link>
                            <ul className="cd-secondary-dropdown icon_menu is-hidden">
                              <li className="go-back">
                                <Link to="/#0">Menu</Link>
                              </li>
                              <li>
                                <Link to="/gallery_III.html">Gallery-III</Link>
                              </li>
                              <li>
                                <Link to="/gallery_IV.html">Gallery-IV</Link>
                              </li>
                            </ul>
                          </li>
                          <li className="has-children">
                            {" "}
                            <Link to="/#">Pages</Link>
                            <ul className="cd-secondary-dropdown icon_menu is-hidden">
                              <li className="go-back">
                                <Link to="/#0">Menu</Link>
                              </li>
                              <li>
                                <Link to="/error.html">Error</Link>
                              </li>
                              <li>
                                <Link to="/pages/course">Course</Link>
                              </li>
                              <li>
                                <Link to="/service.html">Services</Link>
                              </li>
                              <li>
                                <Link to="/teacher.html">Teacher</Link>
                              </li>
                              <li>
                                <Link to="/teacher_single.html">
                                  Teacher-Single
                                </Link>
                              </li>
                              <li>
                                <Link to="/event.html">Event</Link>
                              </li>
                              <li>
                                <Link to="/event_single.html">
                                  Event-Single
                                </Link>
                              </li>
                              <li>
                                <Link to="/login">Login</Link>
                              </li>
                              <li>
                                <Link to="/register">Register</Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link to="/contact">Contact Us</Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </header>
                  <div className="kv_navigation_wrapper">
                    <div className="mainmenu d-xl-block d-lg-block d-md-none d-sm-none d-none">
                      <ul className="main_nav_ul">
                        <li className="has-mega gc_main_navigation">
                          <Link
                            to="/home"
                            className="gc_main_navigation hover_color"
                          >
                            {" "}
                            Home&nbsp;
                          </Link>
                        </li>
                        <li className="has-mega gc_main_navigation">
                          <Link
                            to="/pages/about"
                            className="gc_main_navigation hover_color"
                          >
                            About Us
                          </Link>
                        </li>
                        <li className="has-mega gc_main_navigation kv_sub_menu">
                          {" "}
                          <Link
                            to="/pages/course"
                            className="gc_main_navigation hover_color"
                          >
                            {" "}
                            Courses&nbsp;
                          </Link>
                        </li>

                        <li className="has-mega gc_main_navigation">
                          <Link
                            to="#"
                            className="gc_main_navigation hover_color"
                          >
                            {" "}
                            Pages&nbsp; <i className="fas fa-angle-down"></i>
                          </Link>
                          <ul>
                            <li className="parent">
                              <Link to="/pages/teacher">Teacher-Single</Link>
                            </li>
                            <li className="parent">
                              <Link to="/pages/event">Event-Single</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="has-mega gc_main_navigation">
                          <Link
                            to="/pages/events"
                            className="gc_main_navigation hover_color"
                          >
                            Events
                          </Link>
                        </li>
                        <li className="has-mega gc_main_navigation">
                          <Link
                            to="/pages/teachers"
                            className="gc_main_navigation hover_color"
                          >
                            Our Teachers
                          </Link>
                        </li>
                        <li className="has-mega gc_main_navigation">
                          <Link
                            to="/contact"
                            className="gc_main_navigation hover_color"
                          >
                            Contact Us
                          </Link>
                        </li>
                        <li className="has-mega gc_main_navigation">
                          {!this.context.isAuthenticated ? (
                            <Link
                              to="/login"
                              className="gc_main_navigation hover_color"
                            >
                              Login / Register
                            </Link>
                          ) : (
                            <Link
                              to="/login"
                              className="gc_main_navigation hover_color"
                              // onClick={this.handleClick}
                            >
                              Logout
                            </Link>
                          )}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      //     );
      //   }}
      // </AuthContext.Consumer>
    );
  }
}

export default index;
