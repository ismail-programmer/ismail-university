//> dependicies
import React, { Component } from "react";
import { Link } from "react-router-dom";

//components
import HeadingBar from "../../utils/PageHeading";

//images
import blog1 from "../../../images/blog1.jpg";
import blog2 from "../../../images/blog2.jpg";
import blog3 from "../../../images/blog3.jpg";
import author1 from "../../../images/author1.jpg";
import author2 from "../../../images/author2.jpg";
import author3 from "../../../images/author3.jpg";
import author4 from "../../../images/author4.jpg";

class SingleEvent extends Component {
  // componentDidMount() {
  //   $.fn.countdown = function(options, callback) {
  //     //custom 'this' selector
  //     thisEl = $(this);

  //     //array of custom settings
  //     var settings = {
  //       date: null,
  //       format: null
  //     };

  //     //append the settings array to options
  //     if (options) {
  //       $.extend(settings, options);
  //     }

  //     //main countdown function
  //     function countdown_proc() {
  //       eventDate = Date.parse(settings["date"]) / 1000;
  //       currentDate = Math.floor($.now() / 1000);

  //       if (eventDate <= currentDate) {
  //         callback.call(this);
  //         clearInterval(interval);
  //       }

  //       seconds = eventDate - currentDate;

  //       days = Math.floor(seconds / (60 * 60 * 24)); //calculate the number of days
  //       seconds -= days * 60 * 60 * 24; //update the seconds variable with no. of days removed

  //       hours = Math.floor(seconds / (60 * 60));
  //       seconds -= hours * 60 * 60; //update the seconds variable with no. of hours removed

  //       minutes = Math.floor(seconds / 60);
  //       seconds -= minutes * 60; //update the seconds variable with no. of minutes removed

  //       //conditional Ss
  //       if (days == 1) {
  //         thisEl.find(".timeRefDays").text("day");
  //       } else {
  //         thisEl.find(".timeRefDays").text("days");
  //       }
  //       if (hours == 1) {
  //         thisEl.find(".timeRefHours").text("hour");
  //       } else {
  //         thisEl.find(".timeRefHours").text("hours");
  //       }
  //       if (minutes == 1) {
  //         thisEl.find(".timeRefMinutes").text("minute");
  //       } else {
  //         thisEl.find(".timeRefMinutes").text("minutes");
  //       }
  //       if (seconds == 1) {
  //         thisEl.find(".timeRefSeconds").text("second");
  //       } else {
  //         thisEl.find(".timeRefSeconds").text("seconds");
  //       }

  //       //logic for the two_digits ON setting
  //       if (settings["format"] == "on") {
  //         days = String(days).length >= 2 ? days : "0" + days;
  //         hours = String(hours).length >= 2 ? hours : "0" + hours;
  //         minutes = String(minutes).length >= 2 ? minutes : "0" + minutes;
  //         seconds = String(seconds).length >= 2 ? seconds : "0" + seconds;
  //       }

  //       //update the countdown's html values.
  //       if (!isNaN(eventDate)) {
  //         thisEl.find(".days").text(days);
  //         thisEl.find(".hours").text(hours);
  //         thisEl.find(".minutes").text(minutes);
  //         thisEl.find(".seconds").text(seconds);
  //       } else {
  //         alert("Invalid date. Here's an example: 25 Tuesday 2017 17:30:00");
  //         clearInterval(interval);
  //       }
  //     }

  //     //run the function
  //     countdown_proc();

  //     //loop the function
  //     interval = setInterval(countdown_proc, 1000);
  //   };
  // }

  render() {
    const now = new Date();
    const days = now.getDay();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    return (
      <div>
        <HeadingBar heading="Single Event" title="Single Event" />
        <div className="blog_wrapper float_left">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12">
                <div className="blog-post-wrapper iner_blog edu_event_bottom_padding float_left">
                  <div className="post-thumbnail edu_ev_sin_timer_img_wrapper float_left">
                    <div id="clockdiv">
                      <div>
                        <span className="days">{days}</span>
                        <div className="smalltext">
                          <b>Days</b>
                        </div>
                      </div>
                      <div>
                        <span className="hours">{hours}</span>
                        <div className="smalltext">
                          <b>Hours</b>
                        </div>
                      </div>
                      <div>
                        <span className="minutes">{minutes}</span>
                        <div className="smalltext">
                          <b>Minutes</b>
                        </div>
                      </div>
                      <div>
                        <span className="seconds">{seconds}</span>
                        <div className="smalltext">
                          <b>Seconds</b>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="edu_evnt_single_timer_cont_wrapper float_left">
                    <h3>EVENT DESCRIPTION</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry’s
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged.
                    </p>
                  </div>
                  <div className="edu_evnt_single_timer_bottom_cont_wrapper float_left">
                    <h3>EVENT CONTENT</h3>
                    <ul>
                      <li>
                        <i className="fas fa-circle"></i>Over 37 lectures and
                        55.5 hours of content!
                      </li>
                      <li>
                        <i className="fas fa-circle"></i>LIVE PROJECT End to End
                        Software Testing Training Included.
                      </li>
                      <li>
                        <i className="fas fa-circle"></i>Learn Software Testing
                        and Automation basics from a professional trainer from
                        your own desk.
                      </li>
                      <li>
                        <i className="fas fa-circle"></i>Information packed
                        practical training starting from basics to advanced
                        testing techniques.
                      </li>
                      <li>
                        <i className="fas fa-circle"></i>Best suitable for
                        beginners to advanced level users and who learn faster
                        when demonstrated.
                      </li>
                      <li>
                        <i className="fas fa-circle"></i>Course content designed
                        by considering current software testing technology and
                        the job market.
                      </li>
                      <li>
                        <i className="fas fa-circle"></i>Practical assignments
                        at the end of every session.
                      </li>
                      <li>
                        <i className="fas fa-circle"></i>Practical learning
                        experience with live project work and examples.
                      </li>
                    </ul>
                  </div>
                  <div className="blog_dark_wrapper blog_dark_wrapper_event_single float_left">
                    <Link to="/">
                      <i className="fas fa-link"></i>
                    </Link>
                    <h1>Click Latest Event on Wednesday 06 July, 2016</h1>
                    <div className="port-single-entry-meta">
                      <ul>
                        <li>
                          <Link to="/">
                            {" "}
                            <i className="fa fa-calendar"></i> 07 feb,2018
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="comments_wrapper comments_wrapper_edu float_left">
                    <div className="widget_heading">
                      <h2>comments (04)</h2>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-12 col-sm-12">
                        <div className="comments_Box">
                          <div className="img_wrapper">
                            <img src={author1} className="" alt="author_img" />
                          </div>
                          <div className="text_wrapper">
                            <div className="author_detail">
                              <span className="author_name">
                                Jhon Doe <i className="fa fa-circle"></i>
                              </span>
                              <span className="publish_date">
                                July 1, 2019 - <Link to="/">Reply</Link>
                              </span>
                            </div>
                            <div className="author_content">
                              <p>
                                Integer porttitor fringilla vestibulum.
                                Phasellus curs our tinnt nulla, ut mattis augue
                                finibus ac. Vivamus elementum enim ac enim
                                ultrices rhoncus.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-12 col-sm-12">
                        <div className="comments_Box">
                          <div className="row">
                            <div className="col-lg-11 col-md-12 col-12 col-sm-12">
                              <div className="img_wrapper">
                                <img
                                  src={author2}
                                  className=""
                                  alt="author_img"
                                />
                              </div>
                              <div className="text_wrapper">
                                <div className="author_detail">
                                  <span className="author_name">
                                    Steffa Ferello{" "}
                                    <i className="fa fa-circle"></i>
                                  </span>
                                  <span className="publish_date">
                                    July 4, 2019 - <Link to="/">Reply</Link>
                                  </span>
                                </div>
                                <div className="author_content">
                                  <p>
                                    Integer porttitor fringilla vestibulum.
                                    Phasellus curs our tinnt nulla, ut mattis
                                    augue finibus ac. Vivamus elementum enim ac
                                    enim ultrices rhoncus.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-12 col-sm-12">
                        <div className="comments_Box">
                          <div className="img_wrapper">
                            <img src={author3} className="" alt="author_img" />
                          </div>
                          <div className="text_wrapper">
                            <div className="author_detail">
                              <span className="author_name">
                                Matin Lauran <i className="fa fa-circle"></i>
                              </span>
                              <span className="publish_date">
                                March 1, 2019 - <Link to="/">Reply</Link>
                              </span>
                            </div>
                            <div className="author_content">
                              <p>
                                Integer porttitor fringilla vestibulum.
                                Phasellus curs our tinnt nulla, ut mattis augue
                                finibus ac. Vivamus elementum enim ac enim
                                ultrices rhoncus.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-12 col-sm-12">
                        <div className="comments_Box last_comment_box">
                          <div className="img_wrapper">
                            <img src={author4} className="" alt="author_img" />
                          </div>
                          <div className="text_wrapper">
                            <div className="author_detail">
                              <span className="author_name">
                                Eva Marilla <i className="fa fa-circle"></i>
                              </span>
                              <span className="publish_date">
                                July 10, 2019 - <Link to="/">Reply</Link>
                              </span>
                            </div>
                            <div className="author_content">
                              <p>
                                Integer porttitor fringilla vestibulum.
                                Phasellus curs our tinnt nulla, ut mattis augue
                                finibus ac. Vivamus elementum enim ac enim
                                ultrices rhoncus.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="comments_form comments_form_edu float_left">
                    <div className="widget_heading">
                      <h2>leave a comment</h2>
                    </div>
                    <div className="row">
                      <div className="col-md-6 col-sm-12">
                        <div className="formsix-pos">
                          <div className="form-group i-name">
                            <label className="sr-only">Name</label>
                            <input
                              type="text"
                              className="form-control"
                              required=""
                              id="namTen-first"
                              placeholder="Full Name *"
                            />
                            <i className="fas fa-user-alt"></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <div className="formsix-e">
                          <div className="form-group i-email">
                            <label className="sr-only">Email</label>
                            <input
                              type="email"
                              className="form-control"
                              required=""
                              id="emailTen"
                              placeholder="Email Address *"
                            />
                            <i className="fas fa-envelope"></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 col-sm-12">
                        <div className="formsix-m">
                          <div className="form-group i-message">
                            <label className="sr-only">Message</label>
                            <textarea
                              className="form-control"
                              required=""
                              rows="4"
                              id="messageTen"
                              placeholder="Message"
                            ></textarea>
                            <i className="fas fa-comment"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="edu_bottom_btn_wrapper edu_btn float_left">
                      <Link to="/">Send Now</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 right_sidebar blog_single_sidebar">
                <div className="sidebar_widget float_left">
                  <div className="widget_heading">
                    <h2>upcoming events</h2>
                  </div>
                  <div className="blog_wrapper22 float_left">
                    <div className="blog_image">
                      <img
                        src={blog1}
                        className="img-responsive"
                        alt="blog_img1"
                      />
                    </div>
                    <div className="blog_text blog_single_text2">
                      <h5>
                        <Link to="/"> Online MBA Course 2019 </Link>
                      </h5>
                      <div className="blog_date">
                        <i className="fa fa-map-marker-alt"></i> 950, Street
                        Avenue,Viana
                      </div>
                    </div>
                  </div>
                  <div className="blog_wrapper22 float_left">
                    <div className="blog_image">
                      <img
                        src={blog2}
                        className="img-responsive"
                        alt="blog_img2"
                      />
                    </div>
                    <div className="blog_text blog_single_text2">
                      <h5>
                        <Link to="/">Reading Skill Development</Link>
                      </h5>
                      <div className="blog_date">
                        <i className="fa fa-map-marker-alt"></i> 950, Street
                        Avenue,Viana
                      </div>
                    </div>
                  </div>
                  <div className="blog_wrapper22 float_left">
                    <div className="blog_image">
                      <img
                        src={blog3}
                        className="img-responsive"
                        alt="blog_img3"
                      />
                    </div>
                    <div className="blog_text blog_single_text2">
                      <h5>
                        <Link to="/"> Online Education for Women</Link>
                      </h5>
                      <div className="blog_date">
                        <i className="fa fa-map-marker-alt"></i> 950, Street
                        Avenue,Viana
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleEvent;
