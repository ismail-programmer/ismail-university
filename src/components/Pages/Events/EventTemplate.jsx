//> dependicies
import React, { Component } from "react";
import { Link } from "react-router-dom";

class EventTemplate extends Component {
  render(props) {
    return (
      <div className="col-xl-12 col-lg-12 col-md-6 col-sm-6 col-12">
        <div className="edu_slide_tab_box float_left">
          <div className="edu_slide_tabs_img_box edu_slide_tabs_img_box_event float_left">
            <img src={this.props.img} alt="img" />
            <div className="edu_tabs_label edu_tabs_label_event_wrapper">
              <p className="edu_tabs_label_event">{this.props.month}</p>
              <div className="edu_tabs_label_inner">
                <p>{this.props.date}</p>
              </div>
            </div>
          </div>
          <div className="edu_slide_tabs_img_cont_box edu_slide_tabs_img_cont_box_event float_left">
            <h4>
              Start Date : <span>{this.props.startDate}</span>
            </h4>
            <h3>
              <Link to="/">{this.props.title}</Link>
            </h3>
            <p>{this.props.description}</p>
            <h5>
              <Link to="/">Join Now</Link>
            </h5>
          </div>
        </div>
      </div>
    );
  }
}

export default EventTemplate;
