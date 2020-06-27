//> dependicies
import React, { Component } from "react";
import { Link } from "react-router-dom";

//images
import pc1 from "../../images/pc1.jpg";
import pc2 from "../../images/pc2.jpg";
import pc3 from "../../images/pc3.jpg";
import pc4 from "../../images/pc4.jpg";
import pc5 from "../../images/pc5.jpg";
import pc6 from "../../images/pc6.jpg";

class Popular_courses extends Component {
    render() {
        return (
            <div className="edu_course_main_wrapper float_left">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="edu_heading_wrapper float_left">
                  <h3>Popular Courses</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean auctor, libero non
                    <br />
                    interdum maximus, ligula nulla pretium ligula, a egestas ex
                    nibh.
                  </p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="edu_coll_slider_tabs">
                  <ul className="nav nav-tabs" role="tablist">
                    <li>
                      <div
                        className="slider"
                        style={{ left: "0px", width: "76.3281px" }}
                      ></div>
                    </li>
                    <li role="presentation" className="active">
                      <Link
                        to="/#All"
                        role="tab"
                        data-toggle="tab"
                        className="active show"
                        aria-selected="true"
                      >
                        All
                      </Link>
                    </li>
                    <li role="presentation">
                      <Link
                        to="/#html"
                        role="tab"
                        data-toggle="tab"
                        className=""
                        aria-selected="false"
                      >
                        html
                      </Link>
                    </li>
                    <li role="presentation" className="">
                      <Link
                        to="/#psd"
                        role="tab"
                        data-toggle="tab"
                        className=""
                        aria-selected="false"
                      >
                        psd{" "}
                      </Link>
                    </li>
                    <li role="presentation">
                      <Link
                        to="/#WorPress"
                        role="tab"
                        data-toggle="tab"
                        className=""
                        aria-selected="false"
                      >
                        WorPress
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-12">
                <div className="tab-content">
                  <div
                    id="All"
                    className="tab-pane active show"
                    role="tabpanel"
                  >
                    <div className="row">
                      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="edu_slide_tab_box float_left">
                          <div className="edu_slide_tabs_img_box float_left">
                            <img src={pc1} alt="img" />
                            <div className="edu_tabs_label">
                              <p>
                                <del>$90</del>
                              </p>
                              <div className="edu_tabs_label_inner">
                                <p>$65</p>
                              </div>
                            </div>
                          </div>
                          <div className="edu_slide_tabs_img_cont_box float_left">
                            <h4>
                              Start Date : <span>Aug 28, 2019</span>
                            </h4>
                            <h3>
                              <Link to="/#">Lorem ipsum dolor sit amet</Link>
                            </h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Donec vehicula velit lectus, non ornare nibh
                              consectetur accumsan.
                            </p>
                            <h5>
                              <Link to="/#">Join Now</Link>
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="edu_slide_tab_box float_left">
                          <div className="edu_slide_tabs_img_box float_left">
                            <img src={pc2} alt="img" />
                            <div className="edu_tabs_label">
                              <p>
                                <del>$90</del>
                              </p>
                              <div className="edu_tabs_label_inner">
                                <p>$65</p>
                              </div>
                            </div>
                          </div>
                          <div className="edu_slide_tabs_img_cont_box float_left">
                            <h4>
                              Start Date : <span>Aug 28, 2019</span>
                            </h4>
                            <h3>
                              <Link to="/#">Lorem ipsum dolor sit amet</Link>
                            </h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Donec vehicula velit lectus, non ornare nibh
                              consectetur accumsan.
                            </p>
                            <h5>
                              <Link to="/#">Join Now</Link>
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="edu_slide_tab_box float_left">
                          <div className="edu_slide_tabs_img_box float_left">
                            <img src={pc3} alt="img" />
                            <div className="edu_tabs_label">
                              <p>
                                <del>$90</del>
                              </p>
                              <div className="edu_tabs_label_inner">
                                <p>$65</p>
                              </div>
                            </div>
                          </div>
                          <div className="edu_slide_tabs_img_cont_box float_left">
                            <h4>
                              Start Date : <span>Aug 28, 2019</span>
                            </h4>
                            <h3>
                              <Link to="/#">Lorem ipsum dolor sit amet</Link>
                            </h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Donec vehicula velit lectus, non ornare nibh
                              consectetur accumsan.
                            </p>
                            <h5>
                              <Link to="/#">Join Now</Link>
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="edu_slide_tab_box edu_slide_tab_box2 float_left">
                          <div className="edu_slide_tabs_img_box float_left">
                            <img src={pc4} alt="img" />
                            <div className="edu_tabs_label">
                              <p>
                                <del>$90</del>
                              </p>
                              <div className="edu_tabs_label_inner">
                                <p>$65</p>
                              </div>
                            </div>
                          </div>
                          <div className="edu_slide_tabs_img_cont_box float_left">
                            <h4>
                              Start Date : <span>Aug 28, 2019</span>
                            </h4>
                            <h3>
                              <Link to="/#">Lorem ipsum dolor sit amet</Link>
                            </h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Donec vehicula velit lectus, non ornare nibh
                              consectetur accumsan.
                            </p>
                            <h5>
                              <Link to="/#">Join Now</Link>
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="edu_slide_tab_box edu_slide_tab_box2 float_left">
                          <div className="edu_slide_tabs_img_box float_left">
                            <img src={pc5} alt="img" />
                            <div className="edu_tabs_label">
                              <p>
                                <del>$90</del>
                              </p>
                              <div className="edu_tabs_label_inner">
                                <p>$65</p>
                              </div>
                            </div>
                          </div>
                          <div className="edu_slide_tabs_img_cont_box float_left">
                            <h4>
                              Start Date : <span>Aug 28, 2019</span>
                            </h4>
                            <h3>
                              <Link to="/#">Lorem ipsum dolor sit amet</Link>
                            </h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Donec vehicula velit lectus, non ornare nibh
                              consectetur accumsan.
                            </p>
                            <h5>
                              <Link to="/#">Join Now</Link>
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="edu_slide_tab_box edu_slide_tab_box2 float_left">
                          <div className="edu_slide_tabs_img_box float_left">
                            <img src={pc6} alt="img" />
                            <div className="edu_tabs_label">
                              <p>
                                <del>$90</del>
                              </p>
                              <div className="edu_tabs_label_inner">
                                <p>$65</p>
                              </div>
                            </div>
                          </div>
                          <div className="edu_slide_tabs_img_cont_box float_left">
                            <h4>
                              Start Date : <span>Aug 28, 2019</span>
                            </h4>
                            <h3>
                              <Link to="/#">Lorem ipsum dolor sit amet</Link>
                            </h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Donec vehicula velit lectus, non ornare nibh
                              consectetur accumsan.
                            </p>
                            <h5>
                              <Link to="/#">Join Now</Link>
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="html" className="tab-pane fade" role="tabpanel">
                    <div className="row">
                      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="edu_slide_tab_box float_left">
                          <div className="edu_slide_tabs_img_box float_left">
                            <img src={pc1} alt="img" />
                            <div className="edu_tabs_label">
                              <p>
                                <del>$90</del>
                              </p>
                              <div className="edu_tabs_label_inner">
                                <p>$65</p>
                              </div>
                            </div>
                          </div>
                          <div className="edu_slide_tabs_img_cont_box float_left">
                            <h4>
                              Start Date : <span>Aug 28, 2019</span>
                            </h4>
                            <h3>
                              <Link to="/#">Lorem ipsum dolor sit amet</Link>
                            </h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Donec vehicula velit lectus, non ornare nibh
                              consectetur accumsan.
                            </p>
                            <h5>
                              <Link to="/#">Join Now</Link>
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="edu_slide_tab_box float_left">
                          <div className="edu_slide_tabs_img_box float_left">
                            <img src={pc2} alt="img" />
                            <div className="edu_tabs_label">
                              <p>
                                <del>$90</del>
                              </p>
                              <div className="edu_tabs_label_inner">
                                <p>$65</p>
                              </div>
                            </div>
                          </div>
                          <div className="edu_slide_tabs_img_cont_box float_left">
                            <h4>
                              Start Date : <span>Aug 28, 2019</span>
                            </h4>
                            <h3>
                              <Link to="/#">Lorem ipsum dolor sit amet</Link>
                            </h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Donec vehicula velit lectus, non ornare nibh
                              consectetur accumsan.
                            </p>
                            <h5>
                              <Link to="/#">Join Now</Link>
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="edu_slide_tab_box float_left">
                          <div className="edu_slide_tabs_img_box float_left">
                            <img src={pc3} alt="img" />
                            <div className="edu_tabs_label">
                              <p>
                                <del>$90</del>
                              </p>
                              <div className="edu_tabs_label_inner">
                                <p>$65</p>
                              </div>
                            </div>
                          </div>
                          <div className="edu_slide_tabs_img_cont_box float_left">
                            <h4>
                              Start Date : <span>Aug 28, 2019</span>
                            </h4>
                            <h3>
                              <Link to="/#">Lorem ipsum dolor sit amet</Link>
                            </h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Donec vehicula velit lectus, non ornare nibh
                              consectetur accumsan.
                            </p>
                            <h5>
                              <Link to="/#">Join Now</Link>
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="edu_slide_tab_box edu_slide_tab_box2 float_left">
                          <div className="edu_slide_tabs_img_box float_left">
                            <img src={pc4} alt="img" />
                            <div className="edu_tabs_label">
                              <p>
                                <del>$90</del>
                              </p>
                              <div className="edu_tabs_label_inner">
                                <p>$65</p>
                              </div>
                            </div>
                          </div>
                          <div className="edu_slide_tabs_img_cont_box float_left">
                            <h4>
                              Start Date : <span>Aug 28, 2019</span>
                            </h4>
                            <h3>
                              <Link to="/#">Lorem ipsum dolor sit amet</Link>
                            </h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Donec vehicula velit lectus, non ornare nibh
                              consectetur accumsan.
                            </p>
                            <h5>
                              <Link to="/#">Join Now</Link>
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="edu_slide_tab_box edu_slide_tab_box2 float_left">
                          <div className="edu_slide_tabs_img_box float_left">
                            <img src={pc5} alt="img" />
                            <div className="edu_tabs_label">
                              <p>
                                <del>$90</del>
                              </p>
                              <div className="edu_tabs_label_inner">
                                <p>$65</p>
                              </div>
                            </div>
                          </div>
                          <div className="edu_slide_tabs_img_cont_box float_left">
                            <h4>
                              Start Date : <span>Aug 28, 2019</span>
                            </h4>
                            <h3>
                              <Link to="/#">Lorem ipsum dolor sit amet</Link>
                            </h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Donec vehicula velit lectus, non ornare nibh
                              consectetur accumsan.
                            </p>
                            <h5>
                              <Link to="/#">Join Now</Link>
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="psd" className="tab-pane fade" role="tabpanel">
                    <div className="row">
                      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="edu_slide_tab_box float_left">
                          <div className="edu_slide_tabs_img_box float_left">
                            <img src={{ pc6 }} alt="img" />
                            <div className="edu_tabs_label">
                              <p>
                                <del>$90</del>
                              </p>
                              <div className="edu_tabs_label_inner">
                                <p>$65</p>
                              </div>
                            </div>
                          </div>
                          <div className="edu_slide_tabs_img_cont_box float_left">
                            <h4>
                              Start Date : <span>Aug 28, 2019</span>
                            </h4>
                            <h3>
                              <Link to="/#">Lorem ipsum dolor sit amet</Link>
                            </h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Donec vehicula velit lectus, non ornare nibh
                              consectetur accumsan.
                            </p>
                            <h5>
                              <Link to="/#">Join Now</Link>
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="edu_slide_tab_box float_left">
                          <div className="edu_slide_tabs_img_box float_left">
                            <img src={pc1} alt="img" />
                            <div className="edu_tabs_label">
                              <p>
                                <del>$90</del>
                              </p>
                              <div className="edu_tabs_label_inner">
                                <p>$65</p>
                              </div>
                            </div>
                          </div>
                          <div className="edu_slide_tabs_img_cont_box float_left">
                            <h4>
                              Start Date : <span>Aug 28, 2019</span>
                            </h4>
                            <h3>
                              <Link to="/#">Lorem ipsum dolor sit amet</Link>
                            </h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Donec vehicula velit lectus, non ornare nibh
                              consectetur accumsan.
                            </p>
                            <h5>
                              <Link to="/#">Join Now</Link>
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="edu_slide_tab_box float_left">
                          <div className="edu_slide_tabs_img_box float_left">
                            <img src={pc2} alt="img" />
                            <div className="edu_tabs_label">
                              <p>
                                <del>$90</del>
                              </p>
                              <div className="edu_tabs_label_inner">
                                <p>$65</p>
                              </div>
                            </div>
                          </div>
                          <div className="edu_slide_tabs_img_cont_box float_left">
                            <h4>
                              Start Date : <span>Aug 28, 2019</span>
                            </h4>
                            <h3>
                              <Link to="/#">Lorem ipsum dolor sit amet</Link>
                            </h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Donec vehicula velit lectus, non ornare nibh
                              consectetur accumsan.
                            </p>
                            <h5>
                              <Link to="/#">Join Now</Link>
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="WorPress" className="tab-pane fade" role="tabpanel">
                    <div className="row">
                      <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="edu_slide_tab_box float_left">
                            <div className="edu_slide_tabs_img_box float_left">
                              <img src={pc3} alt="img" />
                              <div className="edu_tabs_label">
                                <p>
                                  <del>$90</del>
                                </p>
                                <div className="edu_tabs_label_inner">
                                  <p>$65</p>
                                </div>
                              </div>
                            </div>
                            <div className="edu_slide_tabs_img_cont_box float_left">
                              <h4>
                                Start Date : <span>Aug 28, 2019</span>
                              </h4>
                              <h3>
                                <Link to="/#">Lorem ipsum dolor sit amet</Link>
                              </h3>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Donec vehicula velit lectus,
                                non ornare nibh consectetur accumsan.
                              </p>
                              <h5>
                                <Link to="/#">Join Now</Link>
                              </h5>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="edu_slide_tab_box float_left">
                            <div className="edu_slide_tabs_img_box float_left">
                              <img src={pc4} alt="img" />
                              <div className="edu_tabs_label">
                                <p>
                                  <del>$90</del>
                                </p>
                                <div className="edu_tabs_label_inner">
                                  <p>$65</p>
                                </div>
                              </div>
                            </div>
                            <div className="edu_slide_tabs_img_cont_box float_left">
                              <h4>
                                Start Date : <span>Aug 28, 2019</span>
                              </h4>
                              <h3>
                                <Link to="/#">Lorem ipsum dolor sit amet</Link>
                              </h3>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Donec vehicula velit lectus,
                                non ornare nibh consectetur accumsan.
                              </p>
                              <h5>
                                <Link to="/#">Join Now</Link>
                              </h5>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="edu_slide_tab_box float_left">
                            <div className="edu_slide_tabs_img_box float_left">
                              <img src={pc5} alt="img" />
                              <div className="edu_tabs_label">
                                <p>
                                  <del>$90</del>
                                </p>
                                <div className="edu_tabs_label_inner">
                                  <p>$65</p>
                                </div>
                              </div>
                            </div>
                            <div className="edu_slide_tabs_img_cont_box float_left">
                              <h4>
                                Start Date : <span>Aug 28, 2019</span>
                              </h4>
                              <h3>
                                <Link to="/#">Lorem ipsum dolor sit amet</Link>
                              </h3>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Donec vehicula velit lectus,
                                non ornare nibh consectetur accumsan.
                              </p>
                              <h5>
                                <Link to="/#">Join Now</Link>
                              </h5>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="edu_slide_tab_box edu_slide_tab_box2 float_left">
                            <div className="edu_slide_tabs_img_box float_left">
                              <img src={pc6} alt="img" />
                              <div className="edu_tabs_label">
                                <p>
                                  <del>$90</del>
                                </p>
                                <div className="edu_tabs_label_inner">
                                  <p>$65</p>
                                </div>
                              </div>
                            </div>
                            <div className="edu_slide_tabs_img_cont_box float_left">
                              <h4>
                                Start Date : <span>Aug 28, 2019</span>
                              </h4>
                              <h3>
                                <Link to="/#">Lorem ipsum dolor sit amet</Link>
                              </h3>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Donec vehicula velit lectus,
                                non ornare nibh consectetur accumsan.
                              </p>
                              <h5>
                                <Link to="/#">Join Now</Link>
                              </h5>
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

        );
    }
}

export default Popular_courses;