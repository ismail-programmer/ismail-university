import React, { Component } from "react";
import { Link } from "react-router-dom";

class courseTemlate extends Component {
  render(props) {
    return (
      <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
        <div class="edu_slide_tab_box float_left">
          <div class="edu_slide_tabs_img_box float_left">
            <img src={this.props.img} alt="img" />
            <div class="edu_tabs_label">
              <p>
                <del>${this.props.price_max}</del>
              </p>
              <div class="edu_tabs_label_inner">
                <p>${this.props.price_min}</p>
              </div>
            </div>
          </div>
          <div class="edu_slide_tabs_img_cont_box float_left">
            <h4>
              Start Date : <span>{this.props.date}</span>
            </h4>
            <h3>
              <Link to="/">{this.props.title}</Link>
            </h3>
            <p>{this.props.descreption}</p>
            <h5>
              <Link to="/">Join Now</Link>
            </h5>
          </div>
        </div>
      </div>
    );
  }
}

export default courseTemlate;
