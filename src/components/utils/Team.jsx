//> dependicies
import React, { Component } from "react";
import { Link } from "react-router-dom";

//images
import it1 from "../../images/it1.jpg";
import it2 from "../../images/it2.jpg";
import it3 from "../../images/it3.jpg";
import it4 from "../../images/it4.jpg";


class Team extends Component {
    render() {
        return (
            <div className="edu_team_main_wrapper float_left">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="edu_heading_wrapper float_left">
                        <h3>OUR SPECIAL TEAM</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor, libero non
                            <br/>interdum maximus, ligula nulla pretium ligula, a egestas ex nibh.</p>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 self_align_center">
                    <div className="edu_team_main_box">
                        <h3><Link to="/#">Jacklen Fandores</Link></h3>
                        <p>Web Designer</p>
                        <ul>
                            <li><Link to="/#"><i className="fab fa-facebook-f"></i></Link>
                            </li>
                            <li><Link to="/#"><i className="fab fa-twitter"></i></Link>
                            </li>
                            <li><Link to="/#"><i className="fab fa-youtube"></i></Link>
                            </li>
                            <li><Link to="/#"><i className="fab fa-linkedin-in"></i></Link>
                            </li>
                        </ul>
                        <div className="edu_team_inner_box">
                            <img src={it1} alt="img"/>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 self_align_center">
                    <div className="edu_team_main_box">
                        <h3><Link to="/#">Jacklen Fandores</Link></h3>
                        <p>Web Designer</p>
                        <ul>
                            <li><Link to="/#"><i className="fab fa-facebook-f"></i></Link>
                            </li>
                            <li><Link to="/#"><i className="fab fa-twitter"></i></Link>
                            </li>
                            <li><Link to="/#"><i className="fab fa-youtube"></i></Link>
                            </li>
                            <li><Link to="/#"><i className="fab fa-linkedin-in"></i></Link>
                            </li>
                        </ul>
                        <div className="edu_team_inner_box">
                            <img src={it2} alt="img"/>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 self_align_center">
                    <div className="edu_team_main_box">
                        <h3><Link to="/#">Jacklen Fandores</Link></h3>
                        <p>Web Designer</p>
                        <ul>
                            <li><Link to="/#"><i className="fab fa-facebook-f"></i></Link>
                            </li>
                            <li><Link to="/#"><i className="fab fa-twitter"></i></Link>
                            </li>
                            <li><Link to="/#"><i className="fab fa-youtube"></i></Link>
                            </li>
                            <li><Link to="/#"><i className="fab fa-linkedin-in"></i></Link>
                            </li>
                        </ul>
                        <div className="edu_team_inner_box">
                            <img src={it3} alt="img"/>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 self_align_center">
                    <div className="edu_team_main_box">
                        <h3><Link to="/#">Jacklen Fandores</Link></h3>
                        <p>Web Designer</p>
                        <ul>
                            <li><Link to="/#"><i className="fab fa-facebook-f"></i></Link>
                            </li>
                            <li><Link to="/#"><i className="fab fa-twitter"></i></Link>
                            </li>
                            <li><Link to="/#"><i className="fab fa-youtube"></i></Link>
                            </li>
                            <li><Link to="/#"><i className="fab fa-linkedin-in"></i></Link>
                            </li>
                        </ul>
                        <div className="edu_team_inner_box">
                            <img src={it4} alt="img"/>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="edu_bottom_btn_wrapper float_left"> <Link to="/#">View All</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
        );
    }
}

export default Team;