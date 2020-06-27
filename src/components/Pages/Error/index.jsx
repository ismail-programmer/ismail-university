//> dependicies
import React, { Component } from "react";
import { Link } from "react-router-dom";

//components
import HeadingBar from "../../utils/PageHeading";
class Error extends Component {
  render() {
    return (
      <div>
        <HeadingBar heading="404 Error" title="404 Error" />
        <div className="error_page">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="error_page_cntnt">
                  <h2>
                    <span>4</span>
                    <span>0</span>
                    <span>4</span>
                  </h2>
                  <h3>Sorry, This Page Isn't available :(</h3>
                  <p>
                    This is Photoshop's version of Lorem Ipsum. Proin gravida
                    nibh vel velit auctor aliquet. A Aenean sollicitudin, lorem
                    quis bibend Aenean sollicitudin, lorem .{" "}
                    <Link to="/">Home Page</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Error;
