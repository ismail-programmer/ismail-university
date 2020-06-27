//> dependicies
import React, { Component } from "react";

//!components
import Slider from "./Slider";
import SchoolServices from "./SchoolServices";
import StatusUni from "../utils/Status_uni";
import PopularCourses from "./Popular_courses";
// import School_gallery from "./School_gallery";
import Team from "../utils/Team";
import Testamonials from "./Testamonials";
import Partners from "./Partner/Partners";

class index extends Component {
  render() {
    return (
      <div>
        <Slider />
        <SchoolServices />
        <StatusUni />
        <PopularCourses />
        {/* todo */}
        {/* <School_gallery /> */}

        <Team />
        <Testamonials />
        <Partners />
      </div>
    );
  }
}

export default index;
