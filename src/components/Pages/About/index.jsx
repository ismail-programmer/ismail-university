//> dependicies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

//components
import HeadingBar from "../../utils/PageHeading";
import StatusUni from "../../utils/Status_uni";
import Team from "../../utils/Team";

//images
import mockup from "../../../images/mockup.png";
import sign from "../../../images/sign.png";
import about1 from "../../../images/about1.jpg";
import about2 from "../../../images/about2.jpg";
import about3 from "../../../images/about3.jpg";

//css
import "./about.css";

class index extends Component {
  state = {
    images: [about1, about2, about3]
  };

  showSlides = () => {
    return this.state.images.map((el, i) => {
      return (
        <div key={i} className="item">
          <div className="about_image">
            <img src={el} className="img-responsive" alt="" />
          </div>
        </div>
      );
    });
  };

  render() {
    const settings = {
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <HeadingBar heading="About Us" title="About Us" />

        <div className="iner_abt_wrapper float_left">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-12 col-sm-12">
                <div className="about_slider_wrapper float_left ">
                  <Slider {...settings}>{this.showSlides()}</Slider>
                </div>
              </div>
              <div className="col-lg-8 col-md-12 col-12 col-sm-12 offset-lg-2">
                <div className="about_text_wrapper">
                  <p>
                    “Proin gravida nibh vel velit auctor aliquet. Aenean
                    sollicitudin, lorem quis ndum auctor, nisi elit consequat
                    ipsum, nec sagittis sem nibh id elit. Duis sed odio sit et
                    nibh vulputate cursus a sit amet mauris. This is Photoshop's
                    version of Lorem um. Proin gravida nibh vel velit auctor
                    aliquet.”
                  </p>
                  <h5>
                    {" "}
                    - by <span> Jeniffer Doe </span> (Director){" "}
                  </h5>
                  <img src={sign} alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Awards part 1 */}
        <div className="awards_wrapper float_left">
          <div className="award_left_Wrapper">
            <h3>premium awards</h3>
            <p>
              Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
              <br />
              lorem quis bibendum auctor, nisi elit consequat ipsum
            </p>
            <div className="edu_bottom_btn_wrapper award_btn float_left">
              {" "}
              <Link to="/">our badges</Link>
            </div>
          </div>
          <div className="award_right_Wrapper">
            <div className="container">
              <div className="award_list float_left">
                <ul>
                  <li>
                    {" "}
                    <i className="fas fa-award"></i>
                    <br /> <Link to="/#">best css</Link>
                  </li>
                  <li>
                    {" "}
                    <i className="fas fa-medal"></i>
                    <br /> <Link to="/#">quality items</Link>
                  </li>
                  <li>
                    {" "}
                    <i className="fas fa-trophy"></i>
                    <br /> <Link to="/#">good author</Link>
                  </li>
                  <li>
                    {" "}
                    <i className="fas fa-star"></i>
                    <br /> <Link to="/#">reliability</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* awards part 2 */}
        <div className="inner_Story_wrapper float_left">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-12 col-sm-12">
                <div className="cp_heading_wraper">
                  <div className="edu_heading_wrapper left_heading float_left">
                    <h3>key of success</h3>
                  </div>
                  <p>
                    ynamically envisioneer inexpensive niche markets whereas
                    maintainable ratives. Objectively facilitate diverse
                    solutions before top-line experiences. Uniquelyilize
                    end-to-end mindshare without cutting-edge total linkage.
                    Synergistically ndicate backend opportunities without
                    prospective interfaces. Competently leve other's focused
                    users for long-term value.
                    <br />
                    <br />
                    Continually supply timely infomediaries vis-a-vis
                    value-added functionalitieually leverage existing
                    market-driven paradigms through one-to-one paradigms. letely
                    productivate e-business via market positioning action items.
                    Infomediaries and vis-a-vis value-added functionalitieually.
                  </p>
                  <div className="edu_bottom_btn_wrapper edu_btn float_left">
                    {" "}
                    <Link to="/">View More</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12 col-sm-12">
                <div className="inner_story_left_Wrapper float_left">
                  <img src={mockup} alt="shape" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <StatusUni />
        <Team />
      </div>
    );
  }
}

export default index;
