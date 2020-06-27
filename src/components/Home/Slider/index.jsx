//> dependicies
import React, { Component } from "react";
import Slider from "react-slick";

//css
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//images
import Slide from "../../../images/slider.jpg";

class index extends Component {
  showSlides = () => {
    const arr = [1, 2, 3];
    return arr.map((el, i) => {
      return (
        <div key={i} className={`slider-slick slide${el}`}>
          <div className="rev_slider ">
            <div
              id="rev_slider_467_1_wrapper"
              className="rev_slider_wrapper fullwidthbanner-container"
              data-alias="classNameic-carousel26"
              data-source="gallery"
              style={{
                margin: "0px auto",
                backgroundColor: "#ffffff",
                padding: "0px",
                marginTop: "0px",
                marginBottom: "0px"
              }}
            >
              <div
                id="rev_slider_467_1"
                className="rev_slider fullwidthabanner"
                style={{ display: "none" }}
                data-version="5.4.1"
              >
                <li>
                  <img src={Slide} alt="" />

                  <div
                    className="tp-caption tp-shape tp-shapewrapper  "
                    id="slide-1599-layer-10"
                    style={{
                      zIndex: "18",
                      textTransform: "left",
                      backgroundColor: "rgba(0, 0, 0, 0.25)",
                      borderColor: "rgba(0, 0, 0, 0)",
                      borderWidth: "0px"
                    }}
                  >
                    {" "}
                  </div>
                  <div
                    className="tp-caption NotGeneric-Title  tp-resizeme"
                    id="slide-1599-layer-1"
                    style={{
                      zIndex: "19",
                      whiteSpace: "nowrap",
                      textTransform: "left"
                    }}
                  >
                    QUALITY EDUCATION
                  </div>

                  <div
                    className="tp-caption NotGeneric-SubTitle  tp-resizeme"
                    id="slide-1599-layer-4"
                    style={{
                      zIndex: "20",
                      whiteSpace: "nowrap",
                      textTransform: "left"
                    }}
                  >
                    FUTURE OF EDUCATION TECHNOLOGY
                  </div>
                </li>
              </div>
            </div>
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
    return <Slider {...settings}>{this.showSlides()}</Slider>;
  }
}

export default index;
