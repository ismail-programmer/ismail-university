import React, { Component } from "react";


//components
import HeadingBar from "../../utils/PageHeading";
import CourseTemlate from "./CourseTemlate";

//images
import pc1 from "../../../images/pc1.jpg";
import pc2 from "../../../images/pc2.jpg";
import pc3 from "../../../images/pc3.jpg";
import pc4 from "../../../images/pc4.jpg";
import pc5 from "../../../images/pc5.jpg";
import pc6 from "../../../images/pc6.jpg";

class index extends Component {
  render() {
    return (
      <div>
        <HeadingBar heading="Course" title="Course" />
        <div className="edu_inner_course_main_wrapper float_left">
          <div className="container">
            <div className="row">
              <CourseTemlate
                img={pc1}
                price_max="90"
                price_min="60"
                date="Aug 28,2020"
                title="Lorem"
                descreption="lorem ipsum"
              />
              <CourseTemlate
                img={pc2}
                price_max="90"
                price_min="60"
                date="Aug 28,2020"
                title="Lorem"
                descreption="lorem ipsum"
              />
              <CourseTemlate
                img={pc3}
                price_max="90"
                price_min="60"
                date="Aug 28,2020"
                title="Lorem"
                descreption="lorem ipsum"
              />
              <CourseTemlate
                img={pc6}
                price_max="90"
                price_min="60"
                date="Aug 28,2020"
                title="Lorem"
                descreption="lorem ipsum"
              />
              <CourseTemlate
                img={pc4}
                price_max="90"
                price_min="60"
                date="Aug 28,2020"
                title="Lorem"
                descreption="lorem ipsum"
              />
              <CourseTemlate
                img={pc5}
                price_max="90"
                price_min="60"
                date="Aug 28,2020"
                title="Lorem"
                descreption="lorem ipsum"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default index;
