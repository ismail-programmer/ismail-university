//> dependicies
import React, { Component } from "react";
import Slider1 from "react-slick";

//images
import slider from "../../../images/partner_1.png";
import slider2 from "../../../images/partner_2.png";
import slider3 from "../../../images/partner_3.png";
import slider4 from "../../../images/partner_4.png";
import slider5 from "../../../images/partner_5.png";

class Partners extends Component {
  showSlides = () => {
    const arr = [slider, slider2, slider3, slider4, slider5];
    return arr.map((el, i) => {
      return (
        <div key={i} className="item">
          <div className="lr_prt_img_wrapper">
            <img src={el} alt="partner_img" />
          </div>
        </div>
      );
    });
  };

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 3000
    };

    return (
      <div className="edu_partner_main_wrapper float_left">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="edu_heading_wrapper float_left">
                <h3>OUR partners</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean auctor, libero non
                  <br />
                  interdum maximus, ligula nulla pretium ligula, a egestas ex
                  nibh.
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="partners_slider_wrapper">
                <Slider1 className="owl-carousel owl-theme" {...settings}>
                  {this.showSlides()}
                </Slider1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Partners;
/**
 * <div className="owl-prev">
                      <i className="flaticon-left-arrow"></i>
                    </div>
                    <div className="owl-next">
                      <i className="flaticon-right-arrow"></i>
                    </div>
 */
