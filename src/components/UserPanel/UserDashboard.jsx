import React, { Component } from "react";

//firebase
// import firebase, { db, provider } from "../../config/firebase";

//components
import HeadingBar from "../utils/PageHeading";
// import SideBar from "../utils/SideBar";

//context
// import { AuthContext } from "../../context/AuthContext";

//for sideBar
// const linksDetails = [{ title: "Profile", link: "/user/profile" }];

class UserDashboard extends Component {
  // static contextType = AuthContext;

  render() {
    // return (
    //   <AuthContext.Consumer>
    //     {authContext => {
    //       console.log(authContext.user.displayName);
          return (
            <div>
              {/* <SideBar linksDetails={linksDetails} /> */}
              <HeadingBar
                heading='Ismail'
                title="User Dashboard"
              />
            </div>
          );
    //     }}
    //   </AuthContext.Consumer>
    // );
  }
}

export default UserDashboard;
