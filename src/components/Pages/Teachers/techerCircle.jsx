//> dependicies
import React, { Component } from "react";
import { Link } from "react-router-dom";

class techerCircle extends Component {
  render(props) {
    return (
      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 self_align_center">
        <div className="edu_team_main_box">
          <h3>
            <Link to="/">{this.props.name}</Link>
          </h3>
          <p>{this.props.feild}</p>
          <ul>
            <li>
              <Link to="/">
                <i className="fab fa-facebook-f"></i>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fab fa-twitter"></i>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fab fa-youtube"></i>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </li>
          </ul>
          <div className="edu_team_inner_box">
            <img src={this.props.img} alt="img" />
          </div>
        </div>
      </div>
    );
  }
}

export default techerCircle;
