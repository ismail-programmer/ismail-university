//> dependicies
import React, { Component } from "react";
import { Link } from "react-router-dom";

//firebase
// import firebase, { db, provider } from "../../../config/firebase";

//components
import HeadingBar from "../../utils/PageHeading";

//context
// import { AuthContext } from "../../../context/AuthContext";

class index extends Component {
  // componentDidMount() {
  //   firebase
  //     .auth()
  //     .signOut()
  //     .then(() => {})
  //     .catch(error => {
  //       // An error happened.
  //     });
  // }

  state = {
    email: "",
    password: ""
  };

  //getting values in state
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  //login with email and password
  // handleSubmit = e => {
  //   e.preventDefault();
  //   firebase
  //     .auth()
  //     .signInWithEmailAndPassword(this.state.email, this.state.password)
  //     .then(() => {
  //       this.props.history.push("/user_dashboard");
  //     })
  //     .catch(error => {
  //       console.log(error);
  //       alert(error.message);
  //     });
  // };

  //! google login
  // handleGoogleSignin = () => {
  //   firebase
  //     .auth()
  //     .signInWithPopup(provider)
  //     .then(result => {
  //       // This gives you a Google Access Token. You can use it to access the Google API.
  //       // var token = result.credential.accessToken;
  //       // The signed-in user info.
  //       var user = result.user;
  //       db.collection("users").add({
  //         email: user.email,
  //         username: user.displayName,
  //         phone: user.phoneNumber,
  //         role: 0
  //       });
  //     })
  //     .then(() => {
  //       this.props.history.push("/user_dashboard");
  //     })
  //     .catch(error => {
  //       // Handle Errors here.
  //       // var errorCode = error.code;
  //       var errorMessage = error.message;
  //       alert(errorMessage);
  //       // The email of the user's account used.
  //       // var email = error.email
  //       // The firebase.auth.AuthCredential type that was used.
  //       // var credential = error.credential;
  //       // ...
  //     });
  // };

  render() {
    return (
      // <AuthContext.Consumer>
      //   {authContext => {
      //     return (
            <div>
              <HeadingBar heading="Login" title="Login" />

              <div className="login_section">
                <div className="login_form_wrapper">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-8 offset-md-2">
                        <h1>LOGIN TO YOUR ACCOUNT</h1>
                        <div className="login_wrapper">
                          <div className="row">
                            <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                              {" "}
                              <button
                                className="btn btn-primary google-plus"
                                onClick={this.handleGoogleSignin}
                              >
                                {" "}
                                Signin with Google{" "}
                                <i className="fab fa-google-plus-g"></i>
                              </button>
                            </div>
                          </div>
                          <h2>or</h2>
                          <form 
                          // onSubmit={this.handleSubmit}
                          >
                            <div className="formsix-pos">
                              <div className="form-group i-email">
                                <input
                                  type="email"
                                  className="form-control"
                                  required
                                  name="email"
                                  placeholder="Email*"
                                  onChange={this.handleChange}
                                />
                              </div>
                            </div>
                            <div className="formsix-e">
                              <div className="form-group i-password">
                                <input
                                  required
                                  name="password"
                                  type="password"
                                  className="form-control"
                                  placeholder="Password *"
                                  onChange={this.handleChange}
                                />
                              </div>
                            </div>
                            <div className="login_remember_box">
                              <label className="control control--checkbox">
                                Remember me
                                <input type="checkbox" />{" "}
                                <span className="control__indicator"></span>
                              </label>{" "}
                              <Link to="/#" className="forget_password">
                                Forgot Password
                              </Link>
                            </div>
                            <Link to="/">
                            <div className="login_btn_wrapper">
                              {" "}
                              <button className="btn btn-primary login_btn">
                                {" "}
                                Login{" "}
                              </button>
                            </div>
                            </Link>
                          </form>
                          <div className="login_message">
                            <p>
                              Don’t have an account ?{" "}
                              <Link to="/register"> Register Now </Link>
                            </p>
                          </div>
                        </div>
                        <p>
                          In case you are using a public/shared computer we
                          recommend that you logout to prevent any un-authorized
                          access to your account
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      //     );
      //   }}
      // </AuthContext.Consumer>
    );
  }
}

export default index;
