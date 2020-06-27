//dependices
import React, { Component } from 'react';
import { Link } from "react-router-dom";


//images
import cover from "../../images/cover.jpg";
import cover3 from "../../images/cover3.jpg";
import cover4 from "../../images/cover4.jpg";

class schoolServices extends Component {
    render() {
        return (
            <div className="edu_books_main_wrapper float_left">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="edu_heading_wrapper float_left">
                    <h3>OUR SCHOOL SERVICES</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aenean auctor, libero non
                      <br />
                      interdum maximus, ligula nulla pretium ligula, a egestas ex
                      nibh.
                    </p>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                  <figure className="book">
                    {/* <!-- Front --> */}
                    <ul className="hardcover_front">
                      <li>
                        <img src={cover4} alt="" />
                      </li>
                      <li></li>
                    </ul>
                    {/* <!-- Pages --> */}
                    <ul className="page">
                      <li></li>
                      <li>
                        {" "}
                        <Link className="btn" to="/#">
                          Download
                        </Link>
                      </li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                    {/* <!-- Back --> */}
                    <ul className="hardcover_back">
                      <li></li>
                      <li></li>
                    </ul>
                    <ul className="book_spine">
                      <li></li>
                      <li></li>
                    </ul>
                    <figcaption className="edu_books_text">
                      <h3>
                        <Link to="/#">HTML / CSS</Link>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consecteturadipiscing elit.
                        Aenean auctor, libero noninterdum maximus, ligula nulla
                        pretium ligula.
                      </p>
                      <h4>
                        <Link to="/#">Read More</Link>
                      </h4>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                  <figure className="book">
                    {/* <!-- Front --> */}
                    <ul className="hardcover_front">
                      <li>
                        <div className="coverDesign blue">
                          {" "}
                          <span className="ribbon">NEW</span>
                          <h1>Web</h1>
                          <p>Design</p>
                        </div>
                      </li>
                      <li></li>
                    </ul>
                    {/* <!-- Pages --> */}
                    <ul className="page">
                      <li></li>
                      <li>
                        {" "}
                        <Link className="btn" to="/#">
                          Download
                        </Link>
                      </li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                    {/* <!-- Back --> */}
                    <ul className="hardcover_back">
                      <li></li>
                      <li></li>
                    </ul>
                    <ul className="book_spine">
                      <li></li>
                      <li></li>
                    </ul>
                    <figcaption className="edu_books_text">
                      <h3>
                        <Link to="/#">Web Design</Link>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consecteturadipiscing elit.
                        Aenean auctor, libero noninterdum maximus, ligula nulla
                        pretium ligula.
                      </p>
                      <h4>
                        <Link to="/#">Read More</Link>
                      </h4>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                  <figure className="book">
                    {/* <!-- Front --> */}
                    <ul className="hardcover_front">
                      <li>
                        <img src={cover3} alt="" />
                      </li>
                      <li></li>
                    </ul>
                    {/* <!-- Pages --> */}
                    <ul className="page">
                      <li></li>
                      <li>
                        {" "}
                        <Link className="btn" to="/#">
                          Download
                        </Link>
                      </li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                    {/* <!-- Back --> */}
                    <ul className="hardcover_back">
                      <li></li>
                      <li></li>
                    </ul>
                    <ul className="book_spine">
                      <li></li>
                      <li></li>
                    </ul>
                    <figcaption className="edu_books_text">
                      <h3>
                        <Link to="/#">Certified Courses</Link>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consecteturadipiscing elit.
                        Aenean auctor, libero noninterdum maximus, ligula nulla
                        pretium ligula.
                      </p>
                      <h4>
                        <Link to="/#">Read More</Link>
                      </h4>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                  <figure className="book">
                    {/* <!-- Front --> */}
                    <ul className="hardcover_front">
                      <li>
                        <img src={cover} alt="" />
                      </li>
                      <li></li>
                    </ul>
                    {/* <!-- Pages --> */}
                    <ul className="page">
                      <li></li>
                      <li>
                        {" "}
                        <Link className="btn" to="/#">
                          Download
                        </Link>
                      </li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                    {/* <!-- Back --> */}
                    <ul className="hardcover_back">
                      <li></li>
                      <li></li>
                    </ul>
                    <ul className="book_spine">
                      <li></li>
                      <li></li>
                    </ul>
                    <figcaption className="edu_books_text">
                      <h3>
                        <Link to="/#">Creative Arts &amp; Media</Link>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consecteturadipiscing elit.
                        Aenean auctor, libero noninterdum maximus, ligula nulla
                        pretium ligula.
                      </p>
                      <h4>
                        <Link to="/#">Read More</Link>
                      </h4>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default schoolServices;