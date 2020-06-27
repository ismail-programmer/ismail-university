//> dependicies
import React, { Component } from "react";
import { Link } from "react-router-dom";

//components
import HeadingBar from "../../utils/PageHeading";

//firebase
// import firebase from "../../../config/firebase";
// var auth = firebase.auth();

class Forgot extends Component {
  state = {
    email: ""
  };

  //! getting value in state
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  //! for sending email for reset password
  // handleSubmit = () => {
  //   auth
  //     .sendPasswordResetEmail(this.state.email)
  //     .then(() => {
  //       alert("email sent");
  //       this.props.history.push("/");
  //     })
  //     .catch(error => {
  //       alert(error); // An error happened.
  //     });
  // };

  render() {
    return (
      <div>
        <HeadingBar heading="Forgot Password" title="Forgot Password" />

        <div className="login_section">
          <div className="login_form_wrapper">
            <div className="container">
              <div className="row">
                <div className="col-md-8 offset-md-2">
                  <h1>Forgot Password Dont Worry!</h1>
                  <div className="login_wrapper">
                    <div className="formsix-pos">
                      <div className="form-group i-email">
                        <input
                          name="email"
                          type="email"
                          className="form-control"
                          required
                          placeholder="Email*"
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="login_btn_wrapper">
                      {" "}
                      <button
                        // onClick={this.handleSubmit}
                        className="btn btn-primary login_btn"
                      >
                        {" "}
                        Reset Password{" "}
                      </button>
                    </div>
                    <div className="login_message">
                      <p>
                        Don’t have an account ?{" "}
                        <Link to="/register"> Register Now </Link>
                      </p>
                    </div>
                  </div>
                  <p>
                    In case you are using a public/shared computer we recommend
                    that you logout to prevent any un-authorized access to your
                    account
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

export default Forgot;
