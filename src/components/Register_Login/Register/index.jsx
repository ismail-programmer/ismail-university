//> dependicies
import React, { Component } from "react";
import { Link } from "react-router-dom";

//firebase
// import firebase, { db, provider } from "../../../config/firebase";

//components
import HeadingBar from "../../utils/PageHeading";

class index extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    terms: ""
  };

  // componentDidMount() {
  //   firebase
  //     .auth()
  //     .signOut()
  //     .then(() => {})
  //     .catch(error => {
  //       // An error happened.
  //     });
  // }

  //getting values in state
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // handleSubmit = e => {
  //   e.preventDefault();

  //   //! password contain some parameters
  //   if (this.state.password.length < 8) {
  //     alert("password must have 8 characters");
  //     return false;
  //   }

  //   //!  confirm password not matches
  //   if (this.state.password !== this.state.confirmPassword) {
  //     alert("password not match");
  //     return false;
  //   }

  //   //!  phone num not valid
  //   if (this.state.phone.length !== 11) {
  //     alert("phone num is not valid");
  //     return false;
  //   }

  //   //! for terms checkbox
  //   if (this.refs.terms.checked !== true) {
  //     alert("check the terms please");
  //     return false;
  //   }

  //   firebase
  //     .auth()
  //     .createUserWithEmailAndPassword(this.state.email, this.state.password)
  //     .then(() => {
  //       db.collection("users")
  //         .add({
  //           email: this.state.email,
  //           username: this.state.username,
  //           phone: this.state.phone,
  //           role: 0
  //         })
  //         .then(docRef => {
  //           console.log("Document written with ID: ", docRef.id);

  //           this.props.history.push("/user_dashboard");
  //         })
  //         .catch(error => {
  //           console.error("Error adding document: ", error);
  //         });
  //     })
  //     .catch(error => {
  //       console.error(error);
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
  //       // var email = error.email;
  //       // The firebase.auth.AuthCredential type that was used.
  //       // var credential = error.credential;
  //       // ...
  //     });
  // };

  render() {
    return (
      <div>
        <HeadingBar heading="Register" title="Register" />

        <div className="login_section">
          <div className="login_form_wrapper">
            <div className="container">
              <div className="row">
                <div className="col-md-8 offset-md-2">
                  <h1>Register TO YOUR ACCOUNT</h1>
                  <div className="login_wrapper">
                    <form method="POST"
                    //  onSubmit={this.handleSubmit}
                     >
                      <div className="row">
                        <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                          {" "}
                          <button
                            className="btn btn-primary google-plus"
                            // onClick={this.handleGoogleSignin}
                          >
                            {" "}
                            Signin with Google{" "}
                            <i className="fab fa-google-plus-g"></i>
                          </button>
                        </div>
                      </div>
                      <h2>or</h2>

                      <div className="formsix-pos">
                        <div className="form-group">
                          <input
                            name="username"
                            type="text"
                            className="form-control"
                            required
                            id="username"
                            placeholder="Username*"
                            onChange={this.handleChange}
                          />
                        </div>
                      </div>
                      <div className="formsix-e">
                        <div className="form-group">
                          <input
                            name="email"
                            type="email"
                            className="form-control"
                            required
                            id="email"
                            placeholder="Email"
                            onChange={this.handleChange}
                          />
                        </div>
                      </div>
                      <div className="formsix-e">
                        <div className="form-group">
                          <input
                            name="password"
                            type="password"
                            className="form-control"
                            required
                            id="password"
                            placeholder="Password *"
                            onChange={this.handleChange}
                          />
                        </div>
                      </div>
                      <div className="formsix-e">
                        <div className="form-group">
                          <input
                            name="confirmPassword"
                            type="password"
                            className="form-control"
                            required
                            id="confirmPassword"
                            placeholder="Re-enter Password *"
                            onChange={this.handleChange}
                          />
                        </div>
                      </div>
                      <div className="formsix-pos">
                        <div className="form-group">
                          <input
                            type="number"
                            name="phone"
                            className="form-control"
                            required
                            placeholder="Phone*"
                            onChange={this.handleChange}
                          />
                        </div>
                      </div>
                      <div className="login_remember_box">
                        <label className="control control--checkbox">
                          I agreed to the Terms and Conditions.
                          <input
                            type="checkbox"
                            ref="terms"
                            onChange={this.handleChange}
                          />{" "}
                          <span className="control__indicator"></span>
                        </label>
                      </div>
                      <Link to="/">
                      <div className="login_btn_wrapper">
                        {" "}
                        <button className="btn btn-primary login_btn">
                          {" "}
                          Register Now{" "}
                        </button>
                      </div>
                      </Link>
                    </form>
                    <div className="login_message">
                      <p>
                        Don’t have an account ? <Link to="/login"> LogIn </Link>
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

export default index;
