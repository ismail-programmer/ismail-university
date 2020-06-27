//> dependicies
import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Slider2 from "react-slick";

//images
import gallery1 from "../../images/galery1.jpg";
import gallery2 from "../../images/galery2.jpg";
import gallery3 from "../../images/galery3.jpg";
import gallery4 from "../../images/galery4.jpg";
import gallery5 from "../../images/galery5.jpg";

class School_gallery extends Component {
  showSlides = () => {
    const arr = [gallery1, gallery2, gallery3, gallery4, gallery5];
    return arr.map((el, i) => {
      return (
        <div class="swiper-slide">
        <img src={el} alt="screenshot" style={{width:`50vw`,height:`50vh`}}/>
        <div class="edu_gallery_slider_overlay">	<a href={el} class="venobox info"><i class="flaticon-plus-symbol"></i></a>
        </div>
      </div>
      );
    });
  };

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 3000
    };

    return (
      <div className="edu_gallery_main_wrapper float_left">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="edu_heading_wrapper float_left">
                <h3>OUR SCHOOL GALLERY</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean auctor, libero non
                  <br />
                  >interdum maximus, ligula nulla pretium ligula, a egestas ex
                  nibh.
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="swiper-container s1">
                <div className="swiper-wrapper">
                  <Slider2 {...settings}>{this.showSlides()}</Slider2>
                </div>
                {/* <div className="swiper-pagination one"></div> */}
              </div>
              {/* <div className="swiper-button-prev">
                {" "}
                <i className="flaticon-left-arrow"></i>
              </div>
              <div className="swiper-button-next">
                {" "}
                <i className="flaticon-right-arrow"></i>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default School_gallery;
