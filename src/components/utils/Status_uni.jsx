//dependices
import React, { Component } from 'react';



//images
import c1 from "../../images/c1.png";
import c2 from "../../images/c2.png";
import c3 from "../../images/c3.png";
import c4 from "../../images/c4.png";


class status_uni extends Component {
    render() {
        return (
            <div className="edu_counter_main_section_wrapper float_left">
            <div className="edu_counter_img_overlay"></div>
            <section className="counter-section section-padding">
              <div className="container">
                <div className="row">
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 icon3">
                    <div className="icon">
                      <img src={c1} alt="img" />
                    </div>
                    <div className="count-description">
                      {" "}
                      <span className="timer">2540</span>
                      <h5 className="con1">Enrolled Students</h5>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 icon3">
                    <div className="icon">
                      <img src={c2} alt="img" />
                    </div>
                    <div className="count-description">
                      {" "}
                      <span className="timer">7324</span>
                      <h5 className="con1">Passed Graduates</h5>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 icon2">
                    <div className="icon">
                      <img src={c3} alt="img" />
                    </div>
                    <div className="count-description">
                      {" "}
                      <span className="timer">1924</span>
                      <h5 className="con1">Courses Published</h5>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 icon2">
                    <div className="icon">
                      <img src={c4} alt="img" />
                    </div>
                    <div className="count-description">
                      {" "}
                      <span className="timer">4275</span>
                      <h5 className="con1">Award Winning</h5>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
    }
}

export default status_uni;