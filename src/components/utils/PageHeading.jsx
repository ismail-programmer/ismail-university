//> dependicies
import React, { Component } from "react";
import { Link } from "react-router-dom";
class PageHeading extends Component {
  render(props) {
    return (
      <div
        className="page_title_section float_left"
        style={{
          backgroundImage: "url(../../images/inner_page.jpg) 50% 0 repeat-y"
        }}
      >
        <div className="page_header">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-12 col-sm-12">
                <h1>{this.props.heading} </h1>
              </div>
              <div className="col-lg-12 col-md-12 col-12 col-sm-12">
                <div className="sub_title_section">
                  <ul className="sub_title">
                    <li>
                      {" "}
                      <Link to="/"> Home </Link> &nbsp;&nbsp;&nbsp; &gt;
                      &nbsp;&nbsp;
                    </li>
                    <li>{this.props.title}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PageHeading;
