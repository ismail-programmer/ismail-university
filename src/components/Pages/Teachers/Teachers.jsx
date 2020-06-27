//> dependicies
import React, { Component } from "react";

//components
import HeadingBar from "../../utils/PageHeading";
import TeacherCircle from "./techerCircle";

//images
import team1 from "../../../images/team1.jpg";
import team2 from "../../../images/team2.jpg";
import team3 from "../../../images/team3.jpg";
import team4 from "../../../images/team4.jpg";
import team5 from "../../../images/team5.jpg";
import team6 from "../../../images/team6.jpg";
import team7 from "../../../images/team7.jpg";
import team8 from "../../../images/team8.jpg";
import team9 from "../../../images/team9.jpg";
import team10 from "../../../images/team10.jpg";
import team11 from "../../../images/team11.jpg";
import team12 from "../../../images/team12.jpg";

class Teachers extends Component {
  render() {
    return (
      <div>
        <HeadingBar heading="Our Teacher" title="Our Teacher" />
        <div className="edu_team_main_wrapper edu_team_main_wrapper_inner float_left">
          <div className="container">
            <div className="row">
              <TeacherCircle
                name="John Ismail"
                feild="Web Devolper"
                img={team1}
              />
              <TeacherCircle
                name="John Ismail"
                feild="Web Devolper"
                img={team2}
              />
              <TeacherCircle
                name="John Ismail"
                feild="Web Devolper"
                img={team3}
              />
              <TeacherCircle
                name="John Ismail"
                feild="Web Devolper"
                img={team4}
              />
              <TeacherCircle
                name="John Ismail"
                feild="Web Devolper"
                img={team5}
              />
              <TeacherCircle
                name="John Ismail"
                feild="Web Devolper"
                img={team6}
              />
              <TeacherCircle
                name="John Ismail"
                feild="Web Devolper"
                img={team7}
              />
              <TeacherCircle
                name="John Ismail"
                feild="Web Devolper"
                img={team8}
              />
              <TeacherCircle
                name="John Ismail"
                feild="Web Devolper"
                img={team9}
              />
              <TeacherCircle
                name="John Ismail"
                feild="Web Devolper"
                img={team10}
              />
              <TeacherCircle
                name="John Ismail"
                feild="Web Devolper"
                img={team11}
              />
              <TeacherCircle
                name="John Ismail"
                feild="Web Devolper"
                img={team12}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Teachers;
