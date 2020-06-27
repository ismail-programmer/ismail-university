//> dependicies
import React, { Component } from "react";
import { Link } from "react-router-dom";

//components
import HeadingBar from "../../utils/PageHeading";
import EventTemplate from "./EventTemplate";

//images
import pc1 from "../../../images/pc1.jpg";
import pc2 from "../../../images/pc2.jpg";
import pc3 from "../../../images/pc3.jpg";
import pc4 from "../../../images/pc4.jpg";
import pc5 from "../../../images/pc5.jpg";
import pc6 from "../../../images/pc6.jpg";

class index extends Component {
  render() {
    return (
      <div>
        <HeadingBar heading="Events" title="Events" />

        <div class="edu_course_main_wrapper float_left">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12">
                <div class="edu_heading_wrapper float_left">
                  <h3>Events</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean auctor, libero non
                    <br />
                    >interdum maximus, ligula nulla pretium ligula, a egestas ex
                    nibh.
                  </p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="edu_coll_slider_tabs">
                  <ul className="nav nav-tabs" role="tablist">
                    <li>
                      <div className="slider"></div>
                    </li>
                    <li role="presentation" className="active">
                      <Link to="#All" role="tab" data-toggle="tab">
                        Happening
                      </Link>
                    </li>
                    <li role="presentation">
                      <Link to="#html" role="tab" data-toggle="tab">
                        Upcoming
                      </Link>
                    </li>
                    <li role="presentation" className="">
                      <Link to="#psd" role="tab" data-toggle="tab">
                        Expired{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-12">
                <div class="tab-content">
                  <div id="All" class="tab-pane active" role="tabpanel">
                    <div class="row">
                      <EventTemplate
                        img={pc1}
                        month="Dec"
                        date="20"
                        startDate="Dec 20,2020"
                        title="Lorem"
                        description="lorfem ipsum"
                      />
                      <EventTemplate
                        img={pc2}
                        month="Dec"
                        date="20"
                        startDate="Dec 20,2020"
                        title="Lorem"
                        description="lorfem ipsum"
                      />
                      <EventTemplate
                        img={pc3}
                        month="Dec"
                        date="20"
                        startDate="Dec 20,2020"
                        title="Lorem"
                        description="lorfem ipsum"
                      />
                    </div>
                  </div>
                  <div id="html" class="tab-pane " role="tabpanel">
                    <div class="row">
                      <EventTemplate
                        img={pc6}
                        month="Dec"
                        date="20"
                        startDate="Dec 20,2020"
                        title="Lorem"
                        description="lorfem ipsum"
                      />
                      <EventTemplate
                        img={pc5}
                        month="Dec"
                        date="20"
                        startDate="Dec 20,2020"
                        title="Lorem"
                        description="lorfem ipsum"
                      />
                      <EventTemplate
                        img={pc4}
                        month="Dec"
                        date="20"
                        startDate="Dec 20,2020"
                        title="Lorem"
                        description="lorfem ipsum"
                      />
                    </div>
                  </div>
                  <div id="psd" class="tab-pane " role="tabpanel">
                    <div class="row">
                      <EventTemplate
                        img={pc3}
                        month="Dec"
                        date="20"
                        startDate="Dec 20,2020"
                        title="Lorem"
                        description="lorfem ipsum"
                      />
                      <EventTemplate
                        img={pc2}
                        month="Dec"
                        date="20"
                        startDate="Dec 20,2020"
                        title="Lorem"
                        description="lorfem ipsum"
                      />
                      <EventTemplate
                        img={pc1}
                        month="Dec"
                        date="20"
                        startDate="Dec 20,2020"
                        title="Lorem"
                        description="
                      
                        lorfem ipsum
                        "
                      />
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

export default index;
